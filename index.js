
var inquirer = require('inquirer');
var Word = require('./Word');

var wordArray = ['baseball', 'football', 'basketball', 'bocce', 'tennis', 'hockey', 'skiing', 'swimming'];
var activeWord;
var guesses = 10;
var lettersGuessed = [];


function chooseWord() {
    var selection = wordArray[Math.floor(Math.random() * wordArray.length)];
    activeWord = new Word(selection);
    activeWord.wordArray();
};

function askQuestion() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Pick a letter!',
                name: 'letter'
            }

        ]).then(function (answer) {

            if (lettersGuessed.indexOf(answer.letter) === -1) {

                lettersGuessed.push(answer.letter);
                activeWord.checkLetter(answer.letter);
                var string = activeWord.createString();
                console.log(string);

                if (string.indexOf("_") === -1) {
                    console.log("That's Right! Guess a new letter to play again!");
                    guesses = 10;
                    lettersGuessed = [];
                    chooseWord();
                    askQuestion();
                } else {
                    guesses--;
                    console.log("You have " + guesses + " guesses remaining!");
                    if (guesses > 0) {
                        askQuestion();
                    } else {
                        console.log("You ran out of guesses, you loose!");
                    }
                }
            } else {
                console.log("");
                askQuestion();
            }

        });
};


chooseWord();
console.log("Welcome to terminal hang man! Choose a letter to begin!");
askQuestion();

