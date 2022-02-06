
document.addEventListener("DOMContentLoaded", start);
function start() {
    console.log("game started");

    const buttons = document.querySelectorAll("#buttons button")
    buttons.forEach(button => button.addEventListener("click", getPlayersChoice));
}


let player_choice;
let computer_choice;

function getPlayersChoice() {


    if (this.classList.contains("rock")) {
        player_choice = "rock";
    } else if (this.classList.contains("paper")) {
        player_choice = "paper";

    } else {
        player_choice = "scissors";
    }

    console.log("set playerchoice = " + player_choice);


    makeComputerChoice();

}

function makeComputerChoice() {
    //declare an array of the choices
    const comp_choice_Array = ["rock", "paper", "scissors"];
    //a random number between 0 and 2
    const random = Math.floor(Math.random() * 3);
    console.log(random);
    // sets computer choice equal to one of choices from the array, using the random number
    computer_choice = comp_choice_Array[random];

    console.log("computerchoice= " + computer_choice);


    showAnimations();
}

function showAnimations() {
    console.log("animationsShowing");
    determineWinner();
}

function determineWinner() {
    console.log("determining the winner");

    //draw
    if (player_choice == computer_choice) {
        console.log("its a draw");
        showTie();
    } else if(player_choice == "rock" & computer_choice =="scissors" || player_choice =="paper" & computer_choice == "rock" || player_choice=="scissors" & computer_choice=="paper"){
       console.log("the player wins") 
        showWin();
    }else{
        console.log("you lose, comp wins");
        showLose();
    }
    
    
    
    
    /*else if (player_choice == "rock") {
        if (computer_choice == "paper") {
            showLose();
            console.log("its a lose");
        } else if (computer_choice == "scissors") {
            showWin();
            console.log("its a win");

        }
    }*/
}

function showWin() {
    document.querySelector("#win").classList.remove("hidden");

}
function showLose() {
    document.querySelector("#lose").classList.remove("hidden");
}
function showTie() {
    console.log("there is no winner");
    document.querySelector("#draw").classList.remove("hidden");
}

function newGame() { }



