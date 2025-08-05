
const choices = document.querySelector(".choices");
const control = document.querySelector(".control");
const image = document.querySelector("img");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const images = document.querySelector(".images");
const usersScore = document.querySelector(".usersScore");
let computersScore = document.querySelector(".computersScore");
let secondImg = document.createElement("img");

let userChoice;
let computerChoice;
let rand;
let final;
let cs = Number(computersScore.textContent) ;
let us = Number(usersScore.textContent) ;


 //start-stop button 
control.addEventListener("click",function (){
    if(control.textContent == "Stop the Game"){
        control.textContent = "Start the Game";
        image.src ="img/default.png";
        computersScore.textContent = "0";
        usersScore.textContent = "0";
        us = 0;
        cs = 0;
        
    
    }else{
        control.textContent = "Stop the Game";
        image.src ="img/choice.png";
    }
})


    rock.addEventListener("click",()=>{
        if(control.textContent === "Stop the Game"){
            image.src = "img/rock.png";

            userChoice = "r";
            updateComputerChoice();
            setTimeout(function (){images.appendChild(secondImg);},1000);
            setTimeout(function (){images.removeChild(secondImg);},3000);

            setTimeout(scoreScreen,3000);


            setTimeout(function (){image.src = final;},3000);
            setTimeout(function (){image.src = "img/choice.png";},4000);
        }
    })

    paper.addEventListener("click",()=>{
        if(control.textContent === "Stop the Game"){
            userChoice = "p";
            image.src = "img/paper.png";
            updateComputerChoice();
            setTimeout(function (){images.appendChild(secondImg);},1000);
            setTimeout(function (){images.removeChild(secondImg);},3000);

            setTimeout(scoreScreen,3000);

            setTimeout(function (){image.src = final;},3000);
            setTimeout(function (){image.src = "img/choice.png";},4000);
            
            
            
        }
    })

    scissors.addEventListener("click",()=>{
        if(control.textContent === "Stop the Game"){
            userChoice = "s";
            image.src = "img/scissors.png";
            updateComputerChoice();
            setTimeout(function (){images.appendChild(secondImg);},1000);
            setTimeout(function (){images.removeChild(secondImg);},3000);

            setTimeout(scoreScreen,3000);


            setTimeout(function (){image.src = final;},3000);
            setTimeout(function (){image.src = "img/choice.png";},4000);
        }
    })


    
    
    

     



function updateComputerChoice(){
rand = Math.floor(Math.random()*3);


if(rand == 0){
    computerChoice = "r";
    secondImg.src = "img/rock.png";
}else if(rand == 1){
    computerChoice = "p";
    secondImg.src = "img/paper.png";
}else if(rand == 2){
    computerChoice = "s";
    secondImg.src = "img/scissors.png";
}

}

function scoreScreen(){
    if(userChoice == "r"){
        if(computerChoice == "p"){
            cs++;
            computersScore.textContent = cs;
            final = "img/lost.png";
        }
        else if(computerChoice == "s"){
            us++;
            usersScore.textContent = us;
            final = "img/won.png";
         }
        else 
            final = "img/draw.png";
    }
    else if(userChoice == "s"){
        if(computerChoice == "p"){
            us++;
            usersScore.textContent = us;
            final = "img/won.png";
        }
        else if(computerChoice == "r"){
            cs++;
            computersScore.textContent = cs;
            final = "img/lost.png";
        }
        else 
            final = "img/draw.png";
    }    
    else if(userChoice == "p"){
        if(computerChoice == "s"){
            cs++;
            computersScore.textContent = cs;
            final = "img/lost.png";
        }
        else if(computerChoice == "r"){
            us++;
            usersScore.textContent = us;
            final = "img/won.png";
        }
        else 
            final = "img/draw.png";
    }
}



