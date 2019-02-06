
var inquirer = require('inquirer');
var Word = require('./Word');

var wordArray = ['baseball', 'football', 'basketball', 'bocce', 'tennis', 'hockey', 'skiing', 'swimming'];

function chooseWord() {
    var selection = wordArray[Math.floor(Math.random() * wordArray.length)];
    var activeWord = new Word(selection);
    activeWord.wordArray();
    // console.log(activeWord);
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
            console.log(answer.letter);
            return answer.letter;
        });
}


chooseWord();
askQuestion();

    