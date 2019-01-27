// * **Word.js**: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current 
// word the user is attempting to guess. That means the constructor should define:

//   * An array of `new` Letter objects representing the letters of the underlying word

//   * A function that returns a string representing the word. This should call the function on each letter object (the first function defined 
//     in `Letter.js`) that displays the character or an underscore and concatenate those together.

//   * A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)

var Letter = require('./Letter');

console.log(); 

function Word(word){
    this.word=word
    this.nLet=[]
    this.underScores=[];
    this.count=0

    this.genUnderScored=function(){
        for(let i=0; i<this.word.length; i++){
            var letter = new Letter(word[i])
            this.nLet.push(letter)
            this.underScores.push(letter.shower())
        }
        console.log(this.nLet)
        this.updateConsole()
    }

    this.userLetter = function (Letter){
        for (var i=0; i<this.nLet.length; i++){
            console.log("something");
            if (this.nLet[i].userGuess(letter)){
                this.underScores[i]=this.nLet[i].shower()
            }
        }
        this.updateConsole()
    }

    this.updateConsole=function(){
        console.log(this.underScores.join(" "))
    }
};
module.exports=Word; 