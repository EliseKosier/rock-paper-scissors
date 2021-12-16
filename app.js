// intialize basic variables
const moves = ['fire', 'earth', 'water'];
let playerScore = 0;
let computerScore = 0;
let gameOn = true;
// This function plays a move for the computer
function computerPlay(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// This 'helper' function executes a switch statement and gives the result of the two moves
function getResult(playerSelection, computerSelection) {
    // This switch basically checks and compares the moves
    switch (true) {
        case (playerSelection == "fire") && (computerSelection == "water") :
            computerScore += 1;
            return ["You lose! Water extinguishes fire!", 'red'];
            break;
        case (playerSelection == "fire") && (computerSelection == "earth") :
            playerScore += 1;
            return ["You win! Fire burns earth!", 'green'];
            break;
        case (playerSelection == "water") && (computerSelection == "earth") :
            computerScore += 1;
            return ["You lose! Earth consumes water!", 'red'];
            break;
        case (playerSelection == "water") && (computerSelection == "fire") :
            playerScore += 1;
            return ["You win! Water extinguishes fire!", 'green'];
            break;
        case (playerSelection == "earth") && (computerSelection == "fire") :
            computerScore += 1;
            return ["You lose! Fire burns earth!", 'red'];
            break;
        case (playerSelection == "earth") && (computerSelection == "water") :
            playerScore += 1;
            return ["You win! Earth consumes water!", 'green'];
            break;
        default:
            playerScore += 1;
            computerScore += 1;
            return [`Draw! Both summon ${playerSelection}`, 'grey'];
            break;            
    }
}

// This function plays on round
function playRound(playerMove, computerMove=computerPlay(moves)) {
    const statusBar = document.querySelector('.status');
    let result = getResult(playerMove, computerMove);
    if (computerScore == 5) {
        document.querySelector('.status').textContent = `The computer has won by a score of ${computerScore} - ${playerScore}!`;
        document.querySelector('.player-score').textContent = 0;
        document.querySelector('.comp-score').textContent = 0;
        playerScore = 0;
        computerScore = 0;
    } else if (playerScore == 5) {
        document.querySelector('.status').textContent = `'You have won by a score of ${playerScore} - ${computerScore}!`;
        document.querySelector('.player-score').textContent = 0;
        document.querySelector('.comp-score').textContent = 0;
        playerScore = 0;
        computerScore = 0;
    } else {
        if (result[1] == 'green') {
            statusBar.textContent = result[0];
            statusBar.style.color = result[1];
        } else {
            statusBar.textContent = result[0];
            statusBar.style.color = result[1];
        }
        document.querySelector('.player-score').textContent = playerScore;
        document.querySelector('.comp-score').textContent = computerScore;
    }
}

function game() {
    moves.forEach(move => {
        document.querySelector(`.${move}`).addEventListener('click', function(){
            playRound(move);
        });
    });
}

game();