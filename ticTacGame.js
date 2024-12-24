let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#message");


let turnO = true; //playerO,playerX

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame = () => {
    turnO = true;
    cnt = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
}


boxes.forEach((box) => {
    box.addEventListener("click",() => {
        if(turnO) {
            box.innerHTML = '<p id="one">O</p>';
            turnO = false;
        }
        else {
            box.innerHTML = '<p id="two">X</p>';
            turnO = true;
        }
        box.disabled = true; // for only once click
        checkWinner();
    });
});

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const draw = () => {
    msg.innerText = `It's a draw`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

let cnt = 0;

const checkWinner = () => {
    
    for(let pattern of winPatterns) {     
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if(pos1 != "" && pos2 !="" && pos3 !="") {
            if(pos1=== pos2 && pos2 === pos3){
                console.log("winner",pos1);
                showWinner(pos1);
                cnt = 0;
                return;
            }
        }
        
    }
    cnt++;
    console.log(cnt);
    if(cnt===9){
        console.log("draw");
        draw();
        cnt = 0;s
        return;
    }

};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);