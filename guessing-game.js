const userInput = require('prompt-sync')(); //this is to call the user input function
const name = userInput('what is your name? '); // this gets the user input
console.log('hello', name, 'welcome to our game! ');

const shouldWePlay = userInput('Do you want to play? ');
if (shouldWePlay.toLowerCase() === 'yes') {
    const colorOfSky = userInput('Is the sky blue? ').toLowerCase();
    if (colorOfSky === "yes"){
        const colorOfGrass = userInput('What is the color of the grass? (green or blue) ').toLowerCase();
        if (colorOfGrass === "green") {
           const shapeOfEarth = userInput('What is the shape of the Earth? (Round or Rquare) ').toLowerCase();
            if (shapeOfEarth === "circle") {
                console.log("Good, you were listening in school! ");
                const typeOfAnimal = userInput('Is a dog a reptile? (yes/no) ').toLowerCase();
                if (typeOfAnimal === "no") { // Changed to "no" because dogs are not reptiles
                    console.log("You are a genius! ");
                } else {
                    console.log("Jezz! Who was your teacher! ");
                    // add more guesses here
                }
            } else {
                console.log("Go back to your textbooks! ");
                // add more guesses here
                const sun = userInput('Is the sun shining? (yes/no) ').toLowerCase();
                if (sun === "yes") {
                    console.log("Yeah, good eyes!, did you look up? ");
                    const lookUp = userInput('Did you look up? (yes/no) ').toLowerCase();
                    if (lookUp === "yes") {
                        console.log("I hope your eye didnt hurt?! ");
                    } else {
                        console.log("Good, don't look up! ");
                        // add more guesses here
                    }
                } else {
                    console.log("Go back to your textbooks! ");
                    // add more guesses here
                }
            }
        } else {
            console.log("You might be colour blind, GO TO THE HOSPITAL! ");
        }
    } else {
        console.log("Wrong answer! The sky is blue! ");
        // add more guesses here
    }
} else if (shouldWePlay.toLowerCase() === 'no'){
    console.log('Too bad!, the game would have been fun!');
} else {
    console.log('Invalid input!');
}