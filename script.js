const buttons = document.querySelectorAll('button');
const result = document.querySelector('.result');
let userScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id);
        updateScore();
        checkGameEnd();
    });
});

function playRound(userChoice) {
    const computerChoice = getComputerChoice();

    if (userChoice === computerChoice) {
        result.textContent = "It's a tie!";
    } else if (isWin(userChoice, computerChoice)) {
        result.textContent = "You won this round!";
        userScore++;
    } else {
        result.textContent = "Computer won this round!";
        computerScore++;
    }
}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function isWin(player, opponent) {
    // return true if player wins
    // rock > scissors, scissors > paper, paper > rock
    return (player === 'rock' && opponent === 'scissors') || 
           (player === 'scissors' && opponent === 'paper') || 
           (player === 'paper' && opponent === 'rock');
}

function updateScore() {
    const userScoreElement = document.querySelector('#user-score');
    const computerScoreElement = document.querySelector('#computer-score');
    userScoreElement.textContent = userScore;
    computerScoreElement.textContent = computerScore;
}

function checkGameEnd() {
    if (userScore === 5) {
        endGame('Congratulations, you won the game!');
    } else if (computerScore === 5) {
        endGame('Sorry, you lost the game!');
    }
}

function endGame(message) {
    alert(message);
    userScore = 0;
    computerScore = 0;
    updateScore();
    result.textContent = "Choose your weapon to play!";
}
