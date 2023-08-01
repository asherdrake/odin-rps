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

function rpsRound(playerSelection, computerSelection) {
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

function game() {
    let scoreYou = 0
    let scoreComp = 0
    for (let i = 0; i < 5; i++) {
        let result = rpsRound(prompt("Please enter your choice:"), getComputerChoice())
        if (result === 0) {
            console.log("Tie.")
            i--
        } else if (result === -1) {
            console.log("Computer wins the round.")
            scoreComp++
        } else {
            console.log("You win the round.")
            scoreYou++
        }
    }
    
    if (scoreYou > scoreComp) {
        console.log('You win the game!')
    } else {
        console.log('Computer wins the game.')
    }
}

game()
