let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
    randInt = Math.floor(Math.random() * 10);
    return randInt;
}

function compareGuesses(userGuess, computerGuess, targetNum) {
    const humanDifference = Math.abs(targetNum - userGuess);
    const computerDifference = Math.abs(targetNum - computerGuess);
    if (humanDifference <= computerDifference) {
        return true;
    } else {
        return false;
    }

}

function updateScore(winner) {
    if (winner === "human") {
        humanScore += 1;
    } else if (winner === "computer") {
        computerScore += 1;
    }
}

function advanceRound() {
    currentRoundNumber += 1;
}




