// Available Letter Choices
// var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var computerChoices = "abcdefghijklmnopqrstuvwxyz".split("")

// Default Numbers
var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];
var letterToGuess = null;
// Randomly picks a letter for Random Letter
var cpuInput = computerChoices[Math.floor(Math.random() * computerChoices.length)];
// Limits User Input to 9
function updateGuessesLeft() {
    document.querySelector("#Guesses").innerHTML = "Guesses left: " + guessesLeft;
};
// Changes letter to guess
function updateLetterToGuess() {
    this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
};
// Updates list of Guessed Letters
function updateGuessed() {
    document.querySelector("#LettersGuessed").innerHTML = "Your Guesses so far: " + guessedLetters.join(", ");
};
// Reset Game after end
var reset = function() {
    totalGuesses = 9;
    guessesLeft = 9;
    guessedLetters = [];
    updateLetterToGuess();
    updateGuessesLeft();
    updateGuessed();
}
updateLetterToGuess();
updateGuessesLeft();

// Makes changes when a key is lifted
document.onkeyup = function(event)
    {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    var check = computerChoices.includes(userGuess);

    //checks if input pushed is valid
    if (check === false) {
        alert("That is not an option, please pick a letter");
        return false;
    }
    //Makes sure there are available guesses to use while lowering allowed guesses
    //This part is the inception of JS
    else if (check === true) {
        guessesLeft--;
        guessedLetters.push(userGuess);
        updateGuessesLeft();
        updateGuessed();
        //We need to go deeper
        if(guessesLeft > 0) {
            //We have to go deeper
            if(userGuess == letterToGuess) {
            wins++;
            document.querySelector("#wins").innerHTML = "Wins: " + wins;
            userGuess = userGuess.toUpperCase();
            // Function to restart game
            reset();
            //jk, this is as deep as I'm going for now ;)
            }
        }
        else if(guessesLeft == 0){
            losses++;
            document.querySelector("#losses").innerHTML = "Losses: " + losses;
            reset();
        }
        return false;
    }
    // in case something happens that breaks the code
    else {
        alert("Error! Something in the code must've broke... SOrry ~.^")
    }
};