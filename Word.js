var Letter = require('./Letter');

function Word(word){
    this.letters = [];
    this.wordString = function(){
        for(i = 0; i < word.length; i++){
            this.letters.push((new Letter(word.charAt(i))));
        }
        };
    }


var hello = new Word("hello");

hello.wordString();

console.log(hello.letters);



