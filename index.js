// * **index.js**: The file containing the logic for the course of the game, which depends on `Word.js` and:

//   * Randomly selects a word and uses the `Word` constructor to store it

//   * Prompts the user for each guess and keeps track of the user's remaining guesses

// 3. `Letter.js` *should not* `require` any other files.

// 4. `Word.js` *should only* require `Letter.js`

var inquirer = require("inquirer");
var wordList = require("./listofword");
var Word = require("./word"); 
console.log(wordList);

var word; 
var randomly; 

function getWord(){
    randomly=wordList[Math.floor(Math.random()*wordList.length)]
    console.log(randomly)
    word=new Word(randomly)
    word.genUnderScored()
}
getWord()

function askForLetter(){
    var inquirer = require("inquirer");
    inquirer.prompt([{
        name: "letter",
        type: "input",
        message: "Please type in a letter to guess."
    }]).then(answer=>{
        console.log(answers.letter)
        var userGuess = answers.letter
        word.userLetter(userGuess)
        console.log(word.underScores.join(""))
        console.log(randomly)
        if(word.underScores.join("")!= randomly){
            askForLetter()
        } else if (word.underScores.join("")==randomly){
            console.log("You Win!")
        }
    });
}
askForLetter()