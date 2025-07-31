console.log("Welcome the game!!");
let computersChoice;
let usersChoice;
let usersPoints = 0;
let computersPoints = 0;
let controller = 0;
let rand;
let draw =0;

while(controller == 0){
    rand = Math.random();
    
    if(rand<=0.33)
        computersChoice = "Rock";
    else if(rand<=0.66)
        computersChoice = "Paper";
    else
        computersChoice = "Scissors";

    usersChoice = prompt("Please enter a letter (Rock(r)-Paper(p)-Scissors(s)) : ");

    if(usersChoice == 'R' || usersChoice == 'r'){
        if(computersChoice == 'Rock'){
            
            draw++;
        }
        else if(computersChoice == 'Paper'){
            
            computersPoints++;
        }
        else if(computersChoice == 'Scissors'){
            
            usersPoints++;
        }
    }
    else if(usersChoice == 'S' || usersChoice == 's'){
        if(computersChoice == "Rock"){
            
            computersPoints++;
        }
        else if(computersChoice == 'Paper'){
            
            usersPoints++;
        }
        else if(computersChoice == 'Scissors'){
            
            draw++;
        }
    }
    else if(usersChoice == 'P' || usersChoice == 'p'){
        if(computersChoice == 'Rock'){
            
            usersPoints++;
        }
        else if(computersChoice == 'Paper'){
            
            draw++;
        }
        else if(computersChoice == 'Scissors'){
            
            computersPoints++;
        }
        
    }

    console.log(`Your choice is: ${usersChoice}\n`);
    console.log(`Computers choice is: ${computersChoice}\n`);
    

    console.log(`\nYou: ${usersPoints}\n`);
    console.log(`Computer: ${computersPoints}\n`);
    console.log(`Draws: ${draw}\n\n`);

    let anotherRound = prompt("Another round?(y/n) ");
    if( anotherRound == "n")
        controller++;



}
if(usersPoints>computersPoints)
        console.log("You won!");
    else if(usersPoints<computersPoints)
        console.log("You lost.");
    else
        console.log("It's a draw.");
