var Letter = require('./Letter');

function Word(word){
    this.letters = [];
    this.wordString = function(){
        for(i = 0; i < word.length; i++){
            this.letters.push((new Letter(word.charAt(i))));
        }
        };
    this.createString = function(){
        var string = "";
        for (var i in this.letters){
        string = string.concat(this.letters[i].guessedLetter());
        }
        return string;
    }
    }


var hello = new Word("hello");

hello.wordString();
console.log(hello.createString());

