var wins = 0;
var losses = 0;
var guesses = 10;

var guessedArray = [];

var computerLetter = computerLetter;
var alphabet = "abcdefghijklmnopqrstuvwxyz";

computerLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(computerLetter);

function compGuess() {
    computerLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log(computerLetter);
}

document.onkeyup = function (event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    if (userGuess === computerLetter) {
        wins++;
        guesses = 10;
        guessedArray = [];
        compGuess();
    }

    if (userGuess !== computerLetter) {
        guesses--;
    }

    if (guesses === 0) {
        losses++;
        guesses = 10;
        guessedArray = [];
        compGuess();
    }

    if (guessedArray.indexOf(userGuess) >= 0) {

    } else {
        guessedArray.push(userGuess);
        document.getElementById('lettersGuessed').innerHTML = guessedArray;
        console.log(guessedArray);
    }


    document.getElementById('wins').innerHTML = wins;
    document.getElementById('losses').innerHTML = losses;
    document.getElementById('guesses').innerHTML = guesses;
    document.getElementById('user-choice').innerHTML = userGuess;

}
