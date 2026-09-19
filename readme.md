# Guess The Number Game

A simple **Guess The Number** game built using HTML, CSS, Bootstrap, and JavaScript.

## Overview

The game generates a random number between **1 and 100**.

The user enters a number and clicks the **Check** button. The game provides feedback based on the input:

* **Too High** – The guessed number is greater than the random number.
* **Too Low** – The guessed number is less than the random number.
* **Correct** – The guessed number matches the random number.
* **Invalid Input** – If the input is empty.
* **Out of Range** – If the entered number is not between 1 and 100.

How It Works

The basic game logic follows this flow:

User enters number
        ↓
   parseInt()
        ↓
Is it 1–100?
   ↓       ↓
  No       Yes
  ↓          ↓
Invalid    Compare
             ↓
       ┌─────┼─────┐
       ↓     ↓     ↓
     High   Low   Equal
       ↓     ↓     ↓
  Too High Too Low Correct

## Technologies Used

* HTML
* CSS
* Bootstrap
* JavaScript

## How It Works

1. A random number between 1 and 100 is generated using JavaScript.
2. The user enters a number in the input field.
3. When the **Check** button is clicked, JavaScript gets the user's input.
4. The input is converted into a number and validated.
5. If the input is empty or invalid, a message asking the user to provide a valid input is displayed.
6. If the number is outside the range of 1 to 100, the user is asked to enter a number within the valid range.
7. If the input is valid, it is compared with the randomly generated number.
8. A suitable result message is displayed.

## Features

* Random number generation between 1 and 100
* Empty and invalid input validation
* Range validation
* High/low number hints
* Correct guess message
* Responsive layout using Bootstrap

## Project Structure

```text
Guess-The-Number/
│
├── index.html
├── styles.css
├── script.js
└── README.md
```

## Note

This project was created as a **learning project** to practice HTML, CSS, Bootstrap, and JavaScript.

Thanks for checking out the project!
