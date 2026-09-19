# Guess The Number Game

A simple **Guess The Number** game built using HTML, CSS, Bootstrap, and JavaScript.

## Overview

The game generates a random number between **1 and 100**.

The user enters a number and clicks the **Check** button. The game provides feedback based on the input:

* **Too High** – The guessed number is greater than the random number.
* **Too Low** – The guessed number is less than the random number.
* **Correct** – The guessed number matches the random number.
* **Invalid Input** – If the input is empty or invalid.
* **Out of Range** – If the entered number is not between 1 and 100.

## Technologies Used

* HTML
* CSS
* Bootstrap
* JavaScript

## How It Works

The basic game logic follows this flow:

```text
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
```

### Input Validation

If the user leaves the input empty or provides an invalid input:

```text
User enters invalid/empty input
             ↓
       Provide a Valid
        user input.
```

If the entered number is outside the range of 1 to 100:

```text
User enters number
        ↓
   Is it 1–100?
        ↓
       No
        ↓
Please enter number
only from 1 to 100
```

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
