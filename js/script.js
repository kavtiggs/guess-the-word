const guessedLettersElement = document.querySelector(".guessed-letters");
const guessLetterButton = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuessesElement = document.querySelector(".remaining");
const remainingGuessesSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");

const word = "magnolia";
const guessedLetters = [];

//Display symbols for placeholder

const placeholder = function (word) {
    const placeholderLetters = [];
    for (const letter of word) {
      console.log(letter);
      placeholderLetters.push("●");
    }
    wordInProgress.innerText = placeholderLetters.join("");
  };
  
  placeholder(word);

  guessLetterButton.addEventListener("click", function (e) {
    e.preventDefault();
    message.innerText = "";
    const guess = letterInput.value;
    // Single letter guess
    const goodGuess = validateInput(guess);
  
    if (goodGuess) {
      // Letter entered. Make a guess!
      makeGuess(guess);
    }
    letterInput.value = "";
  });

  
  //Validate player input

  const validateInput = function (input) {
    const acceptedLetter = /[a-zA-Z]/;
    if (input.length === 0) {
        // Is the input empty?
        message.innerText = "Please enter a letter.";
      } else if (input.length > 1) {
        message.innerText = "Please enter a single letter.";
      } else if (!input.match(acceptedLetter)) {
        message.innerText = "Please enter a letter from A to Z.";
      } else {
        return input;
      }
  };

  const makeGuess = function (guess) {
      guess = guess.toUpperCase();
      if (guessedLetters.includes(guess)) {
        message.innerText = "You already guessed that letter. Please try again.";
      } else {
        guessedLetters.push(guess);
        console.log(guessedLetters);
      }
  };