
var inquirer = require('inquirer');
var Word = require('./Word');

var wordArray = ['baseball', 'football', 'basketball', 'bocce', 'tennis', 'hockey', 'skiing', 'swimming'];
var activeWord;
var guesses = 10;

function chooseWord() {
    var selection = wordArray[Math.floor(Math.random() * wordArray.length)];
    activeWord = new Word(selection);
    activeWord.wordArray();
}

function askQuestion(){
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Pick a letter!',
                name: 'letter'
            }

        ]).then(function (answer) {
            // console.log(answer.letter);
            activeWord.checkLetter(answer.letter);
            // console.log(activeWord);
            console.log(activeWord.createString());

            guesses--;
            console.log("You have " + guesses + " guesses remaining!");
            if (guesses > 0){
                askQuestion();
            }
        });
}


chooseWord();

askQuestion();

    