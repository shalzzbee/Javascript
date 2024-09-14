 # markdown file
 # Projects related to DOM

 ## project link
 [click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)


# Solution Code

## project 1---CHANGE BG COLOR


``` javascript

const buttons = document.querySelectorAll('.button');
//console.log(buttons);//NODE LIST

const body = document.querySelector("body");

//events---any activity
//node list pe forEach lag skta h
buttons.forEach(function (btn) {
    //console.log(btn);
    btn.addEventListener('click', function (e) {
        console.log(e);
        console.log(e.target);
        if (e.target.id === 'grey') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'pink') {
            body.style.backgroundColor = e.target.id;
        }

        if (e.target.id === 'blue') {
            body.style.backgroundColor = 'rgb(57, 160, 163)';
        }
        if (e.target.id === 'yellow') {
            body.style.backgroundColor = 'rgb(240, 228, 123)';
        }
        if (e.target.id === 'purple') {
            body.style.backgroundColor = 'rgb(239, 72, 214)';
        }
    })
})





```


## project 2---BMI CALCULATOR
```javascript


const form = document.querySelector("form");

//this use case will give you empty value in string
//const ht = parseInt(document.querySelector('#height').value);


form.addEventListener('submit', function (e) {
    e.preventDefault()
    //string value to int
    const ht = parseInt(document.querySelector('#height').value);
    const wt = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    if (ht === "" || ht < 0 || isNaN(ht)) {
        results.innerHTML = "Please give a valid height"
    }

    else if (wt === "" || wt < 0 || isNaN(wt)) {
        results.innerHTML = "Please give a valid weight"
    }

    else {
        const bmi = (wt / ((ht * ht) / 10000)).toFixed(2);//till 2 decimal places
        //result
        results.innerHTML = `<span>${bmi}</span>`
    }
});




```


## project 3 --display time solution code

```javascript
//any way you can take that element

const clock = document.getElementById('clock')
//or
//const clock= document.querySelector('#clock')




//2parameters
setInterval(() => {
    let date = new Date();
    //console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();

}, 1000);



```


## project 4-- Random guess
```javascript
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


```