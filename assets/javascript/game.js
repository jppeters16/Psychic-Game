//Available letters
var choices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wins = 0;
var losses = 0;
var guesses = 9;
var guessesRemain = 9;
var letterToGuess = null;
var lettersGuessed = [];


//Selects a random letter from choices array
var computerGuess = choices[Math.floor(Math.random() * choices.length)];

//shows number of guesses remaining
function updateGuessesRemaining() {
    document.querySelector('#guessRemain').innerHTML = "Guesses Remaining: " + guessesRemain;
};

//attaches a choices index to the letterToGuess variable
function updateLetterToGuess() {
    this.letterToGuess = this.choices[Math.floor(Math.random() * this.choices.length)];
};

// display letters guessed by user 
function updateGuessesSoFar() {
    document.querySelector('#letters').innerHTML = "Letters Guessed so far: " + lettersGuessed.join(', ');
};
// Reset everything but Wins and Losses
var reset = function() {
    totalGuesses = 9;
    guessesRemain = 9;
    lettersGuessed = [];

    updateLetterToGuess();
    updateGuessesRemaining();
    updateGuessesSoFar();
}

updateLetterToGuess();
updateGuessesRemaining();

//on key press compare letter pressed to choices array
document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    var compareLetter = choices.includes(userGuess);

    //if the key pressed is not in the array then alert user of invalid guess
    if (compareLetter === false) {
        alert("Invalid guess, try again?");
        return false;
    //if the key pressed is in the array update GuessesSoFar and GuessesRemaining
    } else if (compareLetter === true) {
        guessesRemain--;
        lettersGuessed.push(userGuess);
        updateGuessesRemaining();
        updateGuessesSoFar();

        //if the user still has a guess remaining 
        if (guessesRemain > 0) {
            //and the guess is the letter the computer selected, then update wins variable and alert user of a win and reset guesses
            if (userGuess == letterToGuess) {
                wins++;
                document.querySelector('#win').innerHTML = "Wins: " + wins;
                userGuess = userGuess.toUpperCase();
                alert("Wow! You're Psychic! " + userGuess + " was the correct Letter.");
                reset();
            }
        //if the user doesn't have any remaining guesses update the losses variable, alert user of a loss, and reset guesses
        } else if (guessesRemain == 0) { 
            losses++;
            document.querySelector('#lose').innerHTML = "Losses: " + losses;
            alert("Sorry, but you're no psychic");
            reset();
        }
        return false;
    } else {
        alert("Oops, something's wrong");
    }

};