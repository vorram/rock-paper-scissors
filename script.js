const rockBtn = document.querySelector("div.buttons button[name='rock']");
const paperBtn = document.querySelector("div.buttons button[name='paper']");
const scissorsBtn = document.querySelector("div.buttons button[name='scissors']");
const divResult = document.querySelector("div#result");
const divScore = document.querySelector("div#score");
const divSeriesResult = document.querySelector("div#series-result");
const printResult = document.createElement("p");
const printScore = document.createElement("p");
const printSeriesResult = document.createElement("p");
const newGameBtn = document.createElement("button");
const divNewGame = document.querySelector("div#new-game");
let playerScore = 0;
let computerScore = 0;
let playerMove;
let computerMove;

function generateCompMove() {
    let num = Math.floor(Math.random() * 100);
    if (num >= 0 && num < 33) {
        computerMove = 'rock';
    } else if (num >= 33 && num < 67) {
        computerMove = 'paper';
    } else {
        computerMove = 'scissors';
    }
}

function printScores() {
    if (playerMove === 'rock' && computerMove === 'rock') {
        printResult.textContent = 'Computer chooses rock. It\'s a draw.';
    } else if (playerMove === 'rock' && computerMove === 'paper') {
        printResult.textContent = 'Computer chooses paper. You lose.';
        computerScore++;
    } else if (playerMove === 'rock' && computerMove === 'scissors') {
        printResult.textContent = 'Computer chooses scissors. You win.';
        playerScore++;
    } else if (playerMove === 'paper' && computerMove === 'rock') {
        printResult.textContent = 'Computer chooses rock. You win.';
        playerScore++;
    } else if (playerMove === 'paper' && computerMove === 'paper') {
        printResult.textContent = 'Computer chooses paper. It\'s a draw.';
    } else if (playerMove === 'paper' && computerMove === 'scissors') {
        printResult.textContent = 'Computer chooses scissors. You lose.';
        computerScore++;
    } else if (playerMove === 'scissors' && computerMove === 'rock') {
        printResult.textContent = 'Computer chooses rock. You lose.';
        computerScore++;
    } else if (playerMove === 'scissors' && computerMove === 'paper') {
        printResult.textContent = 'Computer chooses paper. You win.';
        playerScore++;
    } else if (playerMove === 'scissors' && computerMove === 'scissors') {
        printResult.textContent = 'Computer chooses scissors. It\'s a draw.';
    }
    divResult.appendChild(printResult);
    printScore.textContent = `Player score: ${playerScore}. Computer score: ${computerScore}.`;
    divScore.appendChild(printScore);
    if (playerScore === 5) {
        printSeriesResult.textContent = 'You win the series!';
        newGame();
    } else if (computerScore === 5) {
        printSeriesResult.textContent = 'You lose the series.';
        newGame();
    }
}

function clearBtnBg() {
    rockBtn.style.backgroundColor = 'white';
    paperBtn.style.backgroundColor = 'white';
    scissorsBtn.style.backgroundColor = 'white';
}

function enableBtns() {
    rockBtn.onclick = function () {
        playerMove = 'rock';
        let oldPlayerScore = playerScore;
        let oldComputerScore = computerScore;
        generateCompMove();
        printScores();
        clearBtnBg();
        if (playerScore > oldPlayerScore) {
            rockBtn.style.backgroundColor = 'lightgreen';
        } else if (computerScore > oldComputerScore) {
            rockBtn.style.backgroundColor = 'lightcoral';
        } else {
            rockBtn.style.backgroundColor = 'yellow';
        }
    }

    paperBtn.onclick = function () {
        playerMove = 'paper';
        let oldPlayerScore = playerScore;
        let oldComputerScore = computerScore;
        generateCompMove();
        printScores();
        clearBtnBg();
        if (playerScore > oldPlayerScore) {
            paperBtn.style.backgroundColor = 'lightgreen';
        } else if (computerScore > oldComputerScore) {
            paperBtn.style.backgroundColor = 'lightcoral';
        } else {
            paperBtn.style.backgroundColor = 'yellow';
        }
    }

    scissorsBtn.onclick = function () {
        playerMove = 'scissors';
        let oldPlayerScore = playerScore;
        let oldComputerScore = computerScore;
        generateCompMove();
        printScores();
        clearBtnBg();
        if (playerScore > oldPlayerScore) {
            scissorsBtn.style.backgroundColor = 'lightgreen';
        } else if (computerScore > oldComputerScore) {
            scissorsBtn.style.backgroundColor = 'lightcoral';
        } else {
            scissorsBtn.style.backgroundColor = 'yellow';
        }
    }
}

enableBtns();

function disableBtns() {
    rockBtn.onclick = null;
    paperBtn.onclick = null;
    scissorsBtn.onclick = null;
}

function newGame() {
    divSeriesResult.appendChild(printSeriesResult);
    disableBtns();
    newGameBtn.innerText = 'NEW GAME';
    newGameBtn.setAttribute('id', 'new-game-btn');
    divNewGame.appendChild(newGameBtn);
    const newGameBtnSelect = document.getElementById('new-game-btn');
    newGameBtnSelect.onclick = function () {
        playerScore = 0;
        computerScore = 0;
        divResult.removeChild(printResult);
        divScore.removeChild(printScore);
        divSeriesResult.removeChild(printSeriesResult);
        divNewGame.removeChild(newGameBtn);
        enableBtns();
        clearBtnBg();
    }
}