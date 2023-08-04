let rock = {
    name: 'rock',
    defeats: 'scissors'
}
let paper = {
    name: 'paper',
    defeats: 'rock'
}
let scissors = {
    name: 'scissors',
    defeats: 'paper'
}

const choices = [rock, paper, scissors]

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)]
}

function getWinner(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()

    if (playerSelection.valueOf() === computerSelection.name) {
        return 0
    }

    if (computerSelection.defeats === playerSelection.valueOf()) {
        return -1
    } else {
        return 1
    }
}

let scoreUser = 0;
let scoreComp = 0;

let div = document.querySelector('.result-msg')
let score = document.querySelector('.score');

function updateScore() {
    score.textContent = 'User: ' + scoreUser + " - Computer: " + scoreComp;
}

function processResult(result) {
    if (result === 0) {
        div.textContent = "Tie.";
    } else if (result === -1) {
        div.textContent = "Computer wins the round.";
        scoreComp++;
        updateScore();
    } else {
        div.textContent = "You win the round.";
        scoreUser++;
        updateScore();
    }

    if (scoreComp === 5 || scoreUser === 5) {
        if (scoreUser > scoreComp) {
            div.textContent = 'You win the game!';
        } else {
            div.textContent = 'Computer wins the game.';
        }
        scoreUser = 0;
        scoreComp = 0;
        updateScore();
    }
}

const rockButton = document.querySelector('.rock');
rockButton.addEventListener('click', function(e) {
    let result = getWinner('rock', getComputerChoice());
    processResult(result);
});

const paperButton = document.querySelector('.paper');
paperButton.addEventListener('click', function(e) {
    let result = getWinner('paper', getComputerChoice());
    processResult(result);
});

const scissorsButton = document.querySelector('.scissors');
scissorsButton.addEventListener('click', function(e) {
    let result = getWinner('scissors', getComputerChoice());
    processResult(result);
});
