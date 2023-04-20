function getComputerChoice(){
    const choice = ["rock", "paper" , "scissors" ];
    const intRandomIndex = Math.floor(Math.random() * 3);
    
    return choice[intRandomIndex];
}

function playRound(playerSelection, gameSelection){
    if(playerSelection.toLowerCase() == "rock" && gameSelection == "paper" || 
       gameSelection == "scissors" && playerSelection.toLowerCase() == "paper" ||
       playerSelection.toLowerCase() == "scissors" && gameSelection == "rock"){
        return `You lose! ${gameSelection} beats ${playerSelection.toLowerCase()}`
    } else if(playerSelection.toLowerCase() == gameSelection){
        return `Game drawn!`
    } else {
        return `You win! ${playerSelection.toLowerCase()} beats ${gameSelection}`
    }
}

function game(){
    let res = "";
    let count = 0;
    let player_score = 0;
    let cpu_score = 0;
    computerSelection = getComputerChoice();

    while(count < 5) {
        playerSelection = prompt("rock | paper | scissors?");
        console.log("rounds " + (count + 1) + "|" + "5" );
        res = playRound(playerSelection, computerSelection);
        console.log(res);

        if(res.substring(4, 7) == "win"){
            player_score++;         
        } else  if(res.substring(4, 8) == "lose"){
            cpu_score++;
        }
        console.log("S C O R E: " + "\n" + "PLAYER_1: " + player_score + "\n" + "CPU: " + cpu_score);
        count++;
    }

    if(player_score > cpu_score) {
        console.log(`You won! by ${player_score} rounds`);
    } else if(player_score < cpu_score){
        console.log(`You lost! by ${cpu_score} rounds`);
    } else {
        console.log("The Game is Draw!");
    }
}

game();