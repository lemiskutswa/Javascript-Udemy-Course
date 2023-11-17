const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;

const RESULT_WIN = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';
const RESULT_DRAW = 'DRAW';

let gameIsRunning = false;

const getPlayerChoice = () => {
    const selection = prompt(`${ROCK}, ${PAPER}, or ${SCISSORS}?`, '').toUpperCase();

    if (
        selection !== ROCK &&
        selection !== PAPER &&
        selection !== SCISSORS 
    ) {
        alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
        return;
    }

    return selection; 
}

const getComputerChoice = () => {
    const randomValue = Math.random();

    //console.log(randomValue);

    if (randomValue < 0.34) {
        return ROCK;
    } else if (randomValue >0.34 && randomValue < 0.67) {
        return PAPER;
    } else {
        return SCISSORS;
    }
}

const result = (cChoice, pChoice = DEFAULT_USER_CHOICE) => {
    if (cChoice === pChoice) {
        return RESULT_DRAW;
    } else if (
        pChoice === ROCK && cChoice === PAPER ||
        pChoice === SCISSORS && cChoice == SCISSORS ||
        pChoice === PAPER && cChoice === SCISSORS
        ) {
        return RESULT_COMPUTER_WINS;
    } else if (
        pChoice === PAPER && cChoice === ROCK ||
        pChoice === PAPER && cChoice === SCISSORS ||
        pChoice === ROCK && cChoice === SCISSORS
        ) {
        return RESULT_WIN; 
    }
}


startGameBtn.addEventListener('click', function () {
     if (gameIsRunning) {
         return;
    }
    
    gameIsRunning = true;
    console.log('Game is starting...');
    const playerSelection = getPlayerChoice();
    const computerChoice = getComputerChoice();

    let winner;

    if (playerSelection) {
        winner = result(computerChoice, playerSelection);
    } else {
        winner = result(computerChoice, playerSelection);
    }

    let message = `You picked ${playerSelection || DEFAULT_USER_CHOICE}, and computer picked ${computerChoice}, therefore, you `;

    if (winner === RESULT_DRAW) {
        message += 'had a draw';
    } else if (winner === RESULT_WIN) {
        message += 'won';
    } else if (winner === RESULT_COMPUTER_WINS) {
        message += 'lost';
    }

    alert(message);
    gameIsRunning = false; 
});

const sumUp = (resultHandler,...numbers) => { //Creates an array from the parameters
    const validateNumber = (number) =>{ 
        return isNaN(number) ? 0 : number;
    };
    let sum = 0;
    for (const num of numbers) {
        sum += validateNumber;
    }

    resultHandler(sum);
}

const sabtractUp = function () {
    let sum = 0; 
    for (const num of arguments) {
        sum -= num;
    }

    return sum;
}

const showResult = (result) => {
    alert('The result after adding all numbers is: ' + result);
}

sumUp(showResult, 0, 5, 10, 11, 12);
sumUp(showResult, 4, 5, 6, 7, 8);


