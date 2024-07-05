let boxes= document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let newbtn=document.querySelector("#newbtn");
let msgContainer=document.querySelector(".msgcontainer");
let msg=document.querySelector("#msg");
let turnO= true;


const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const gameReset=()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
};


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO) {
            box.innerText="O";
            box.style.color="#3e92cc"
            turnO= false;
        } else{
            box.innerText="X";
            box.style.color=" #b0413e"
            turnO=true;
        }
        box.disabled=true
        checkwinner()
    });
    
});

const disabledBoxes=()=>{
    for (let box of boxes){
        box.disabled=true;
    }
}

const enableBoxes=()=>{
    for (let box of boxes){
        box.disabled=false;
        box.innerText="";

    }
}

const showWinner=(winner)=>{
    msg.innerText= `Congratulations, winner is ${winner}`;
    msgContainer.classList.remove("hide")
    disabledBoxes();
}

const nowin=()=>{
    msg.innerText= `Its a tie, play again!`;
    msgContainer.classList.remove("hide")
}
 
const checkwinner = () => {
    for (let pattern of winPattern) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
            if (pos1 === pos2 && pos2 === pos3) {
                showWinner(pos1);
                return; 
            }
        }
    }
    
    if (Array.from(boxes).every(box => box.disabled === true)) {
        nowin();
    }
};

newbtn.addEventListener("click", gameReset)
resetbtn.addEventListener("click", gameReset)

