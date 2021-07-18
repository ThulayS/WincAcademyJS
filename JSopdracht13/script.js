const person = prompt("Welkom! Wat is je naam");

if (person != null) {
    feedback.textContent = "Hallo! " + person + " Hoe gaat het vandaag?";
}

const randomNumber = Math.floor(Math.random() * 25) + 1
console.log('Random Number', randomNumber)

function checkGuess() {
    let myGuess = guess.value
    if (myGuess === randomNumber) {
        feedback.textContent = "Gefeliciteerd je hebt gewonnen!"
    } else if (myGuess > randomNumber) {
        feedback.textContent = "Jij dacht" + myGuess + ". Dat is te hoog. Probeer het nog een keer!"
    } else if (myGuess < randomNumber) {
        feedback.textContent = "Jij dacht " + myGuess + ". Dat is te laag. Probeer het nog een keer!"
    }
}
submitGuess.addEventListener('click', checkGuess)