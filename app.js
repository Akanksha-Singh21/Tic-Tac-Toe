let boxes= document.querySelectorAll(".box");
let resetBtn= document.querySelectorAll("#reset-btn");
let newGamebtn=document.querySelectorAll("#new-btn");
let msgContainer=document.querySelectorAll("msg.container");
let msg=document.querySelectorAll("msg");


let turno= true;

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
];

const resetGame=()=>{
    turno=true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((box) =>{
    box.addEventListener("click",()=> {
        
        if(turno){
            box.innerText="O";
            turno=false;

        } else{
            box.innerText="X";
            turno=true ;
        }
        box.disabled=true;

        checkWinner();
    });

});

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled= true;
    }
};

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled= false;
        box.innerText="";
    }
};
const showWinner=(winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
    

};


const checkWinner=()=>{
    for( let pattern of winPatterns){
         console.log(pattern[0], pattern[1], pattern[2]);
        console.log(boxes[pattern[0]].innerText,[ pattern[1]].innerText, [pattern[2]].innerText);

        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;

        if(pos1Val!=""&& pos2Val!=""&&pos3Val!=""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                
                
                showWinner(pos1Val);
            }
        }
    }
};

newGamebtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click", resetGame);


 
 