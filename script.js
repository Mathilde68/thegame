
document.addEventListener("DOMContentLoaded", start);
function start() {
    console.log("game started");

    const buttons = document.querySelectorAll("#buttons button");
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

    console.log("players choice: " + player_choice);


    makeComputerChoice();

}

function makeComputerChoice() {
    //declare an array of the choices
    const comp_choice_Array = ["rock", "paper", "scissors"];
    //a random number between 0 and 2
    const random = Math.floor(Math.random() * 3);
    // sets computer choice equal to one of choices from the array, using the random number
    computer_choice = comp_choice_Array[random];

    console.log("computers choice: " + computer_choice);


    showAnimations();
}

function showAnimations() {
    document.querySelector("#player1").classList.add("shake");
    document.querySelector("#player2").classList.add("shake");
    console.log("animationsShowing");
    document.querySelector("#player1").addEventListener("animationend",determineWinner);
    
}

function determineWinner() {
    console.log("determining the winner...");

    
    document.querySelector("#player1").classList.remove("shake");
    document.querySelector("#player2").classList.remove("shake");

    document.querySelector("#player1").classList.add(player_choice);
    document.querySelector("#player2").classList.add(computer_choice);

    //draw
    if (player_choice == computer_choice) {
        console.log("its a DRAW with " + player_choice + " against " + computer_choice);
        showTie();
    } 
    //win
    else if(player_choice == "rock" & computer_choice =="scissors" || player_choice =="paper" & computer_choice == "rock" || player_choice=="scissors" & computer_choice=="paper"){
       console.log("you WIN with " + player_choice + " against " + computer_choice);
        showWin();
    }
    //lose
    else{
       console.log("you LOSE with " + player_choice + " against " + computer_choice);
        
        showLose();
    }
    

}


function showWin() {
    console.log("WINNER");
    document.querySelector("#win").classList.remove("hidden");
    const buttons = document.querySelectorAll("#buttons button");
    buttons.forEach(button => button.addEventListener("click", newGame));

}
function showLose() {
    console.log("LOSER");

    document.querySelector("#lose").classList.remove("hidden");
    const buttons = document.querySelectorAll("#buttons button");
    buttons.forEach(button => button.addEventListener("click", newGame));

}
function showTie() {
    console.log("no winner");
    document.querySelector("#draw").classList.remove("hidden");
    const buttons = document.querySelectorAll("#buttons button");
    buttons.forEach(button => button.addEventListener("click", newGame));

}

function newGame() { 
    console.log("new game started");
    document.querySelector("#lose").classList.add("hidden");
    document.querySelector("#win").classList.add("hidden");
    document.querySelector("#draw").classList.add("hidden");

    document.querySelector("#player1").classList.remove("rock");
    document.querySelector("#player1").classList.remove("paper");
    document.querySelector("#player1").classList.remove("scissors");

    document.querySelector("#player2").classList.remove("rock");
    document.querySelector("#player2").classList.remove("paper");
    document.querySelector("#player2").classList.remove("scissors");


}



