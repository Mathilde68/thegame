
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
    if (player_choice == computer_choice) {
        showTie();
    }
}

function showWin() { }
function showLose() { }
function showTie() {
    console.log("its a tie");
    document.querySelector("#draw").classList.remove("hidden");
}

function playAgain() { }



