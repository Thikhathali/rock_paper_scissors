const btnEls = document.querySelectorAll('button');
const cpuScoreEl = document.querySelector('.cpu-score');
const playerScoreEl = document.querySelector('.player-score');
const cpuSelectionEl = document.querySelector('.cpu-selection');
const boardEl = document.querySelector('.board');
let wResultEl = document.querySelector('.win');
let lResultEl = document.querySelector('.loose');
const btnNewGame = document.querySelector('button.new-game');

function playSound() {
    const audio = document.querySelector('.correct');

    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
}

function getComputerChoice(){
    const choice = ["💎", "🧻" , "✂" ];
    const intRandomIndex = Math.floor(Math.random() * 3);
    
    return choice[intRandomIndex];
}

function playRound(playerSelection, gameSelection){    
    if(playerSelection.toLowerCase() === "💎" && gameSelection === "🧻" || 
       gameSelection === "✂" && playerSelection.toLowerCase() === "🧻" ||
       playerSelection.toLowerCase() === "✂" && gameSelection === "💎"){
        return `You lose! ${gameSelection} beats ${playerSelection.toLowerCase()}`
    } else if(playerSelection.toLowerCase() === gameSelection){
        return `Game drawn!`
    } else {
        return `You win! ${playerSelection.toLowerCase()} beats ${gameSelection}`
    }
}

let player_score = 0;
let cpu_score = 0;

function showResults(num){
    const newGame = document.createElement('div');
    if(num === 1) {
        document.querySelector('.success').play();
        cpuSelectionEl.textContent = '🥇';
        boardEl.style.boxShadow = '1em 0 5em 8px rgb(0, 255, 98)';
        btnEls.forEach(button => button.innerHTML = '');
        newGame.innerHTML = `<button class="new-game" onClick="reset(this);"> New Game? </button>`; 
        cpuSelectionEl.appendChild(newGame);
    } 
    else if(num === 0) {
        document.querySelector('.fail').play();
        cpuSelectionEl.textContent = '😞';
        btnEls.forEach(button => button.innerHTML = '');
        boardEl.style.boxShadow = '1em 0 5em 8px rgb(255, 0, 0)';
        newGame.innerHTML = `<button class="new-game" onClick="reset(this);"> Try Again! </button>`; 
        cpuSelectionEl.appendChild(newGame);
    }
}

function game(){
    let res = "";
    computerSelection = getComputerChoice();

    cpuSelectionEl.textContent = computerSelection;
    playerSelection = this.classList.value; 

    res = playRound(playerSelection, computerSelection);
    console.log(res);

    if(res.substring(4, 7) == "win"){
        playSound();
        wResultEl.className = 'visible';
        playerScoreEl.innerHTML = `PLAYER: <br>${++player_score}`
    } else  if(res.substring(4, 8) == "lose"){
        lResultEl.className = 'visible';
        cpuScoreEl.innerHTML = `CPU: <br> ${++cpu_score}` 
    }
    console.log("S C O R E: " + "\n" + "PLAYER_1: " + player_score + "\n" + "CPU: " + cpu_score);

    if(player_score === 5) showResults(1);
     else if(cpu_score === 5) showResults(0);  
}

function reset(){
    location.reload();
}

function resetResultElClass(){        
    setInterval(() => {
         wResultEl.classList.replace('visible', 'win');
        }, 2000);
    setInterval(() => { 
        lResultEl.classList.replace('visible', 'loose');
     }, 2000);
}

btnEls.forEach(button => button.addEventListener('click', game));

resetResultElClass();
clearInterval(resetResultElClass());