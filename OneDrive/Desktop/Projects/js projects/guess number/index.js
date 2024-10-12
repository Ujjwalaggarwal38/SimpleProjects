let randomnum = parseInt(Math.random() *100 +1)

const submit= document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guesSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver= document.querySelector('.resultParas')
const p =document.createElement('p')

let prevGuess = []
let numGuess = 1
let playGame = true

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()

        const guess = parseInt(userInput.value)
        console.log(guess)
        validateGuess(guess)
    })
}
function validateGuess (guess){
    if(isNaN(guess)){
        alert('Please enter a valid number')
    }
    else if(guess<1){
        alert('Please enter a number greater than 1')
    }
    else if(guess>100){
        alert('Please enter a less than 100')
    }
    else{
        prevGuess.push(guess)
        if(numGuess === 11){
           displayGuess(guess)
           displayMessage(`Game Over. Random Number was ${randomnum}`)
           endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess ===randomnum){
        displayMessage('You guessed it right')
        endGame()
    }
    else if(guess < randomnum){
        displayMessage("Number is too low")
    }
    else if(guess > randomnum){
        displayMessage("Number is too high")
    }
}

function displayGuess(guess) {
    userInput.value=''
    guesSlot.innerHTML += `${guess} `
    numGuess++
    remaining.innerHTML = `${11-numGuess}`
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function newGame(){
 const newGameBuutton = document.querySelector('#newGame')
newGameBuutton.addEventListener('click' , function(e){
    randomnum =parseInt(Math.random() *100 +1)
    prevGuess = []
    numGuess = 1
    guesSlot.innerHTML='';
    remaining.innerHTML = ${11-numGuess};
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)

    playGame=true
    
})
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame> Start new game</h2>`
    startOver.appendChild(p)
    playGame(false)
    newGame()
}
