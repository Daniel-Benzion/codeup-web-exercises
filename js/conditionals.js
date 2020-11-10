"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

function analyzeColor1(color) {
    if (color === "red") {
        return "Red is the color of the revolution";
    } else if (color === "orange") {
        return "Orange is the color of the fruit of the same name";
    } else if (color === "yellow") {
        return "Yellow is the color of the sun";
    } else if (color === "green") {
        return "Green is the color of grass";
    } else if (color === "blue") {
        return "Blue is the color of the sky";
    } else if (color === "indigo") {
        return "Indigo is an underappreciated color, very beautiful and prized for its use as a dye"
    } else if (color === "violet") {
        return "Violet is the color of royalty";
    } else {
        return "I don't know anything about " + color;
    }
}

console.log(analyzeColor1("red"));
console.log(analyzeColor1("indigo"));
console.log(analyzeColor1("chartreuse"));



// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];



/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */
console.log(analyzeColor1(randomColor));



/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */


function analyzeColor(color) {
    switch(color) {
        case "red":
            return "Red is the color of the revolution.";
            break;
        case "orange":
            return "Orange is the color of the fruit of the same name.";
            break;
        case "yellow":
            return "Yellow is the color of the sun.";
            break;
        case "green":
            return "Green is the color of grass.";
            break;
        case "blue":
            return "Blue is the color of the sky.";
            break;
        case "indigo":
            return "Indigo is an underappreciated color, very beautiful and prized for its use as a dye.";
            break;
        case "violet":
            return "Violet is the color of royalty.";
            break;
        default:
            return "I don't know anything about " + color + ".";
            break;
    }
}

console.log(analyzeColor("blue"));
console.log(analyzeColor("green"));
console.log(analyzeColor("periwinkle"));
console.log(analyzeColor(randomColor));




/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

var colorPrompt = prompt("What is your favorite color? Only use lowercase letters, please.");
alert(analyzeColor(colorPrompt));




/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal(m, n) {
    switch (m) {
        case 0:
            return n;
            break;
        case 1:
            return n - (n * 0.10);
            break;
        case 2:
            return n - (n * 0.25);
            break;
        case 3:
            return n - (n * 0.35);
            break;
        case 4:
            return n - (n * 0.50);
            break;
        case 5:
            return 0;
            break;
        default:
            return n;
            break;
    }
}

console.log(calculateTotal(0, 100));
console.log(calculateTotal(3, 100));
console.log(calculateTotal(5, 100));
console.log(calculateTotal(7, 100));




/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */

// Generate a random number between 0 and 6

var luckyNumber = Math.floor(Math.random() * 6);

var billPrompt = prompt("What is your total bill amount?");

alert("Your lucky number was: " + luckyNumber + "\n" + "Your price before discount was: $" + parseFloat(billPrompt).toFixed(2) + "\n" + "Your price after discount is: $" + parseFloat(calculateTotal(luckyNumber, billPrompt)).toFixed(2));





/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

var numConfirm = confirm("Would you like to enter a number?");

if (numConfirm) {

    var numPrompt = prompt("Please enter your number");

    if (!isNaN(numPrompt)) {

        var isEven = function (x) {
            if (x % 2 === 0) {
                return "even.";
            } else {
                return "odd.";
            }
        }

        var isPositive = function (x) {
            if (x > 0) {
                return "positive.";
            } else if (x < 0) {
                return "negative.";
            } else {
                return "zero, and therefore neither positive nor negative."
            }
        }

        alert("Your number is " + isEven(numPrompt));

        alert("Your number plus 100 is " + (parseFloat(numPrompt) + 100) + ".");

        alert("Your number is " + isPositive(numPrompt));
    } else {
        alert("Sorry, that is not a number.");
    }
}