var namesList = ["BOOTH", "ATYEO", "WARNER", "SWAN", "MORGAN", "COOMBS", "MESCALL", "POWELL", "SCHRUM", "WEST", "SCOTT"];

var computerChosenName = "";

var letterInComputerChosenName = [];

var numBlanks = 0;
var blanksAndCorrectLetters = [];
var wrongGuesses = [];

var wins = 0;
var losses = 0; 
var numGuesses = 9;

function startGame() {
    numGuesses = 9;
    computerChosenName = namesList[Math.floor(Math.random() * namesList.length)];
    letterInComputerChosenName = computerChosenName.split("");
    numBlanks = letterInComputerChosenName.length;
    blanksAndCorrectLetters = [];
    wrongGuesses = [];
    
for (var i = 0; i < numBlanks; i++) {
    blanksAndCorrectLetters.push("_");
}

document.getElementById("guesses-left").innerHTML = numGuesses;
document.getElementById("word-blanks").innerHTML = blanksAndCorrectLetters.join(" ");
document.getElementById("wrong-guesses").innerHTML= wrongGuesses.join(" ");
}

function checkLetters(letter) {
    var letterInComputerChosenName = false;

for (var i = 0; i < numBlanks; i++) {
    if(computerChosenName[i] === letter) {
        letterInComputerChosenName = true;
    }
}

if (letterInComputerChosenName) {
    for (var j = 0; j < numBlanks; j++) {
        if (computerChosenName[j] === letter) {
            blanksAndCorrectLetters[j] = letter;
        }
    }
}

    else {
        wrongGuesses.push(letter);
        numGuesses--;
    }
}

function roundComplete() {
    document.getElementById("guesses-left").innerHTML = numGuesses;
    document.getElementById("word-blanks").innerHTML = blanksAndCorrectLetters.join(" ");
    document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");


if(letterInComputerChosenName.toString() === blanksAndCorrectLetters.toString()) {
    wins++;
    document.getElementById("outcome-message").innerHTML = "Well done! The name is " + computerChosenName + "! Press another letter to play again.";

    document.getElementById("win-counter").innerHTML = wins;
    startGame();
}

else if (numGuesses === 0) {
    losses++;
    document.getElementById("outcome-message").innerHTML = "You almost got it! The name is " + computerChosenName + "! Press another letter to play again.";

    document.getElementById("loss-counter").innerHTML = losses;
    startGame();
}
}

startGame();

document.onkeyup = function(event) {
    if(event.keyCode >= 65 && event.keyCode <=90) {
var letterGuessed = event.key.toUpperCase();
checkLetters(letterGuessed);
roundComplete();
    
}
};


