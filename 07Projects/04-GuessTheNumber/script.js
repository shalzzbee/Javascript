//console.log(parseInt(Math.random() * 100 + 1));

let randomNum = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userIp = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const loworhi = document.querySelector('.lowOrHigh');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

//strategy
let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();//value ko kahi eke mat jao server pr .. yahi rehne do
        const guess = parseInt(userIp.value);
        //console.log(guess);
        validateGuess(guess);
    })
}

//very imp function
function validateGuess(guess) {
    //valid no or not 
    if (isNaN(guess)) {
        alert('Please enter a valid number ')
    } else if (guess < 1) {
        alert('Please enter a number more than 1 ')
    }
    else if (guess > 100) {
        alert('Please enter a valid number less than 100')
    }
    else {
        prevGuess.push(guess);
        if (numGuess === 11) {
            displayGuess(guess);
            displayMsg(`Game Over! Random Number was ${randomNum}`)
            endGame();
        }
        else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }

}


function checkGuess(guess) {
    //msg print
    if (guess === randomNum) {
        displayMsg(`You guessed it right`)
        endGame();
    }
    else if (guess < randomNum) {
        displayMsg(`Number is TOO low`)
    }
    else if (guess > randomNum) {
        displayMsg(`Number is TOO high`)
    }
}


function displayGuess(guess) {
    //clean value , update guesses
    userIp.value = '';//empty string
    guessSlot.innerHTML += `${guess}  `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}


function displayMsg(msg) {
    //interact with DOM
    loworhi.innerHTML = `<h2>${msg}</h2>`
}


function endGame() {
    userIp.value = '';
    userIp.setAttribute('disabled', '');//key value pair
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame"> Start new Game </h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}


function newGame() {
    const newgameBTN = document.querySelector('#newGame');
    newgameBTN.addEventListener('click', function (e) {
        randomNum = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess}`;
        userIp.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    })
}

