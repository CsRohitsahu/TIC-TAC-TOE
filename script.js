const winnerDiv=document.querySelector(".winnerDiv")
let boxes=document.querySelectorAll(".box")
let winningPattern=[
    [0,1,2],[0,4,8],[0,3,6],[3,4,5],[6,7,8],[6,4,2],[1,4,7],[2,5,6]
];
let restart=document.querySelector('.buttonDiv');
let turnO=true;
let count =0;
boxes.forEach(box=>{
    box.addEventListener('click',()=>{
        if(turnO){
            box.innerText='O';
            turnO=false;
            
            
        }
        else {
            box.innerText='X';
            turnO=true;
            
          
        }
        box.disabled=true;
        count++;
        let winner=checkWinner()
        if(!winner&&count===9){
            drawGame();
        } 
        
    

        
    })
})
// function to check winner
function checkWinner(){
    for(pattern of winningPattern ){
        let pass1=boxes[pattern[0]].innerText;
        let pass2=boxes[pattern[1]].innerText;
        let pass3=boxes[pattern[2]].innerText;

        if(pass1!=""&&pass2!=""&&pass3!=""){
            if(pass1===pass2&&pass2===pass3){
                console.log(" we won the game");
                showWinner(pass1);
                return true;
                


                
            }
        }

    }
}

// function to show winner
function showWinner(pass1){
    winnerDiv.classList.add('show')
    winnerDiv.classList.remove('hide')
winnerDiv.innerText=`Congratulation,winner is ${pass1}`
disable()


}

// funtion to restart
restart.addEventListener('click',enable);
function enable(){
    boxes.forEach(box=>{
        turnO=true;
        box.disabled=false;
        box.innerText="";
        winnerDiv.classList.remove('show')
        winnerDiv.classList.add('hide')
        winnerDiv.innerText="";
        
    })
}

// disable box
function disable(){
boxes.forEach(box=>{
    box.disabled=true;
})
}
// draw game function
function drawGame(){
    
    winnerDiv.classList.add('show')
    winnerDiv.classList.remove('hide')
    winnerDiv.innerText="Game is draw!!"
}