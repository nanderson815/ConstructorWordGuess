var Letter = require('./Letter');

function Word(word) {
    this.letters = [];
    this.wordString = function () {
        for (i = 0; i < word.length; i++) {
            this.letters.push((new Letter(word.charAt(i))));
        }
    };
    this.createString = function () {
        var string = "";
        for (var i in this.letters) {
            string = string.concat(this.letters[i].guessedLetter());
        }
        return string;
    };
    this.checkLetter = function (char) {
        for (var i in this.letters) {
            (this.letters[i].letterGuessed(char));
        }
    };
}


var hello = new Word("hello");

hello.wordString();
// console.log(hello.letters);
// console.log(hello.createString());

hello.checkLetter("h");



