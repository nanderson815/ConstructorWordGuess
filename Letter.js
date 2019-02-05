
function Letter(char){
    this.char = char;
    this.guessed = false;
    this.guessedLetter = function(){
        if (this.guessed){
            return this.char;
        } else {
            return "_";
        }
    };
    this.letterGuessed = function(C){
        if (C === this.char){
            this.guessed = true;
        }
    };
}

module.exports = Letter;
