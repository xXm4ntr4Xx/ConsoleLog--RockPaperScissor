/*example of initialized variable*/
let playerMove = "rock";
let computerMove = "paper";
/*
/////List all the possibilities//////
player(paper) vs computer(rock) == player win//
player(rock) vs computer(scissors) == player win//
player(scissors) vs computer(papers) == player win//
*/


/*
We wrote a prompt function to select the name of the player
We initialize the player and the computer variable
*/
let player;
let computer;
let myName=prompt("Plis enter your name");
myName = myName[0].toUpperCase() + myName.slice(1);
/* 
while loop to check if the username we choose with prompt is not grater than 10 
if the username is grater than 10 the while loop will keep ask the name forever
if the name is less then 11 will start the game
*/
while(myName.length > 10){
    alert("Please enter shorter name!");
    myName=prompt("Plis enter your name");
}
alert(`Hello ${myName} !!!!, Welcome to the game!!!`);



/// SCORE TABLE////
let playerWins=0;
let computerWins=0;
let numbersOfDraws=0;


/// we create the function and we put inside all the game possibilities using the if statement////
function getWinner(player, computer) {
    
    if(player === "rock" && computer === "scissors"){
        alert(`${myName}  Win!!`);
        playerWins++
        return 1;
    }else if(player === "scissors" && computer === "paper"){
        alert(`${myName}  Win!!`);
        playerWins++
        return 1;
    }else if (player === "paper" && computer === "rock"){
        alert(`${myName}  Win!!`);
        playerWins++
        return 1;
    }else if(player === "rock" && computer === "rock"){
        alert("It's a draw");
        numbersOfDraws++
        return 0;
    }else if(player === "paper" && computer === "paper"){
        alert("It's a draw");
        numbersOfDraws++
        return 0;
    }else if(player === "scissors" && computer === "scissors"){
        alert("It's a draw");
        numbersOfDraws++
        return 0;
    }else{
        alert("Computer  Win!!");
        computerWins++
        return -1;
    }
}


    /* use gameRound to check the number of rounds */
    let gameRound = 0;

    /* The game will carry on until we reach the number of rounds */
    while(gameRound < 6){
    console.warn(`GAME ${gameRound} !!!`);
    /*
    prompt asking the user which one of the moves they choose inside the moves array
    we use the confirm to check if this is our last choice 
    we use the Math.floor and Math.random function to randomize the computer choice
    */
    let playerChoice = prompt("What move you choose?")
    confirm("Are you sure you choose " + playerChoice + " ?");
    const moves=["rock","paper","scissors"]
    const randomMoves = Math.floor(Math.random() * moves.length);
    /*
    we use the getwinner function to check the if the player and the computer win/lose/draw
    console.log Player and Computer choice
    */
    getWinner(playerChoice,moves[randomMoves] );
    console.log(`${myName} choose: ${playerChoice}`);
    console.log(`Computer choose: ${moves[randomMoves]}`);
    /*
    we increase the gamerounds variable every round by one 
    we displayed the amount of win of Player/Computer
    we displayed the amount of drow
    we displayed the amount of rounds
    */
    gameRound++
    console.log(`${myName} won : ${playerWins} games`);
    console.log(`Computer won : ${computerWins} games`);
    console.log(`${numbersOfDraws} games draw`);
    console.log(`Total of round : ${gameRound}`);
    /* 
    logic for choose when to stop the game
    we asked the player if want to continue with the game inside the gameContinue variable(if the answer is "yes" the game will continue, else will break out of the if statement and while loop) 
    */
        
    let gameContinue = prompt(`Would  you like to continue?`)

    if(gameContinue === "yes"){
        alert("OK keep playing");
    }else{
        break;
    }
}


