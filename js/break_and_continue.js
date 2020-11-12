

var oddNumber = prompt("Please enter an odd number between 1 and 50");

function skipOddNumber(oddNumber) {
    while (oddNumber % 2 === 0 || oddNumber > 49 || oddNumber < 1) {
        oddNumber = prompt("The number must be an odd number between 1 and 50. Please enter a valid number.")
    }
    console.log("Number to skip is: " + oddNumber)
    for (var i = 1; i <= 49; i += 2) {
        if (i == oddNumber) {
            console.log("Yikes! Skipping number: " + oddNumber);
        } else {
            console.log("Here is an odd number: " + i);
        }
    }
}

skipOddNumber(oddNumber);


