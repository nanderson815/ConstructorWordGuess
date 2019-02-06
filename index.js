
var inquirer = require('inquirer');
var Word = require('./Word');

var wordArray = ['baseball', 'football', 'basketball', 'bocce', 'tennis', 'hockey', 'skiing', 'swimming'];

function chooseWord(){
   var selection = wordArray[Math.floor(Math.random()*wordArray.length)];  
   var activeWord = new Word(selection);
   activeWord.wordArray();
   console.log(activeWord);
}

chooseWord();