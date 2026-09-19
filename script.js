let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNumber = Math.ceil(Math.random()*100);
function checkGuess() {
    let guessedNumber =  parseInt(userInput.value);
    
    if(guessedNumber > 100 || guessedNumber < 1){
        gameResult.textContent = "Please enter number only from 1 to 100";
        gameResult.style.backgroundColor = "#1e217c";
    }
    else if(guessedNumber > randomNumber){
        gameResult.textContent = "Too High! Try Again.";
        gameResult.style.backgroundColor = "#1e217c";
    }
    else if(guessedNumber < randomNumber){
        gameResult.textContent = "Guessed number is less than Random Number.";
        gameResult.style.backgroundColor = "#1e217c";
    }
    else if(guessedNumber === randomNumber){
        gameResult.textContent = "Congratulations! You got it right.";
        gameResult.style.backgroundColor = "#1e217c";
    }
    else{
        gameResult.textContent = "Provide a Valid user input."
        gameResult.style.backgroundColor = "#1e217c";
    }
}