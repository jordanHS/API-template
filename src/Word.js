// import  Letter from "../Letters.js";

export default class Word {
    constructor(word){
        this.word = word;
        this.letter = [];
        this.guessCorrect = 0;
        this.totalLetters = this.word.length;
        this.letterMiss = this.letterMiss();
        this.printWord = this.printWord();
    } 
  
 letterMiss(input)
 {
     letter.every(function(input){
    letter[0] === input;
    })
 }
    // letterMiss(){
    //     // forEach(elem, param){
    //     if (letter.every(function(input){
    //             letter[0] === input;
    //         })) else if {
    //             //if not will display underscore
    //             return "_";
    //         } else {
    //             return validLetter/Word.push(currentLetter/word);
    //         }
    //         forEach(elem,param)/.every();
    //     //then set the letter araay as a letter.push(word);
    // });
// });
    printWord(){
        var that = this;
        //split method will split a string obj to array of strings
        var word = this.word.split("");
        var output = "";
        //execute a provided function once for each an array element
        word.forEach(function(letter, index) {
            //show the letters in the index and display space
            (output += that.letters[index]), display();
        });
        console.log(output + "\n");
    };

};

//};
// Correct word ['t','e','s','t']
// track which letter they're guessing for
// compare the input (single char) to word Array(corresponding index)
// if correct letter - output that letter on the screen
//     else - output __ on the screen