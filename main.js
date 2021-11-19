
let playerMove = "rock";
let computerMove = "paper";



/*
/////List all the possibilities//////
player(paper) vs computer(rock) == player win//
player(rock) vs computer(scissors) == player win//
player(scissors) vs computer(papers) == player win//

*/

/*
////if statement for check all the win possibility in the game////
if(player === "rock" && computer === "paper"){
    console.log("Computer Win!!");
}else if(player === "rock" && computer === "rock"){
    console.log("It's a draw");
}else if(player === "paper" && computer === "paper"){
    console.log("It's a draw");
}else if(player === "scissors" && computer === "scissors"){
    console.log("It's a draw");
}else if(player === "paper" && computer === "rock"){
    console.log("Player win");
}else if(player === "scissors" && computer === "rock"){
    console.log("Computer win");
}else if(player === "rock" && computer === "scissors"){
    console.log("Player win");
}

*/

///// here we write the function and we initialize the player/////

let player;
let computer;

/// Score Information////
let playerWins=0;
let computerWins=0;
let numbersOfDraws=0;

/// we create the function and we put inside all the game possibilities using the if statement////
function getWinner(player, computer) {
    
    if(player === "rock" && computer === "scissors"){
        alert("Player  Win!!");
        playerWins++
    }else if(player === "scissors" && computer === "paper"){
        alert("Player  Win!!");
        playerWins++
    }else if (player === "paper" && computer === "rock"){
        alert("Player  Win!!");
        playerWins++
    }else if(player === "rock" && computer === "rock"){
        alert("It's a draw");
        numbersOfDraws++
    }else if(player === "paper" && computer === "paper"){
        alert("It's a draw");
        numbersOfDraws++
    }else if(player === "scissors" && computer === "scissors"){
        alert("It's a draw");
        numbersOfDraws++
    }else{
        alert("Computer  Win!!");
        computerWins++
    }
}

  //let result = getWinner("rock", "paper");
//  we save the player input inside the  playerchoice variable
// we alert the player choice variable
  //let playerChoice = prompt("What move you choose?")
  //alert(playerChoice);


  // create an array with the 3 differetn moves
  //const moves=["rock","paper","scissors"]
  // we write the math random function and we use for our array
  //const randomMoves = Math.floor(Math.random() * moves.length);
  // we console log the result
  //console.log(randomMoves, moves[randomMoves]);
  

  
  


  let gameRound = 0;

  while(gameRound < 6){

    let playerChoice = prompt("What move you choose?")
    confirm("Are you sure you choose " + playerChoice + " ?");
    const moves=["rock","paper","scissors"]
    const randomMoves = Math.floor(Math.random() * moves.length);


    let result = getWinner(playerChoice,moves[randomMoves] );
    console.log(`player choose: ${playerChoice}`)
    console.log(`computer choose: ${moves[randomMoves]}`)

    // we need to implement the stop

    gameRound++
  }

console.log(`Player won : ${playerWins} games`);
console.log(`Computer won : ${computerWins} games`);
console.log(`${numbersOfDraws} games draw`);
console.log(`${gameRound} round`);

  //score table(set game=0 and set game++(every time we choose our moves the game will increase by one))
//let numbersOfGame=0;
//let playerWins=0;
//let computerWins=0;
//let numbersOfDraws=0;
