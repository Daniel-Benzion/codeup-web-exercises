/*
Use .length to find the number of characters in the string.
Try to make the sample string all upper or all lower case.
Update the variable sample via concatenation so that it contains "Hello Codeup Students".
Replace "Students" with "Class".
Find the index of "c" using .indexOf(). What do you observe?
Find the index of "C" using .indexOf().
Retrieve a substring that contains only the word "Codeup" by using indexOf() and substring().
 */
var sample = "Hello Codeup";

sample.length;

sample.toLowerCase();
sample.toUpperCase();

sample = sample + " Students";

sample.replace("Students", "Class");

sample.indexOf("c");

sample.indexOf("C");

var sampleSubstring = sample.substring(sample.indexOf("Codeup"))


/*
You have rented some movies for your kids:
The little mermaid (for 3 days),
Brother Bear (for 5 days, they love it),
and Hercules (1 day, you don't know yet if they're going to like it).
If price for a movie per day is $3, how much will you have to pay?
 */


function totalPrice(arr) {
    var sum = 0;
    arr.forEach(price)

    function price(n) {
        sum += n * 3;
    }

    return sum;
}

console.log(totalPrice([3, 5, 1])); // prints 27;

/*
Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook.
They pay you a different rate per hour.
Google pays $400, Amazon $380, and Facebook $350.
How much will you receive in payment for this week?
You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
 */

// function will take an array of arrays consisting of company name, hours worked.
// e.g. [ ["Facebook", 10] ,  ["Google", 6] , ["Amazon", 4] ]

function totalPay(arr) {
    var facebook = 350;
    var google = 400;
    var amazon = 380;

    var total = 0;

    for (var i = 0; i < arr.length; i++) {
        if(arr[i][0] === "Facebook") {
            total += facebook * arr[i][1];
        } else if (arr[i][0] === "Google") {
            total += google * arr[i][1];
        } else {
            total += amazon * arr[i][1];
        }
    }
    return total;
}
console.log(totalPay([["Facebook", 10], ["Google", 6], ["Amazon", 4]])) //Prints 7420





/*
Use the following code to follow the instructions below:


var username = 'codeup';
var password = 'notastrongpassword';

Create a variable that holds a boolean value for each of the following conditions:

the password must be at least 5 characters
the password must not include the username
the username must be no more than 20 characters
neither the username or password can start or end with whitespace
 */

var username = "codeup";
var password = "notastrongpassword";


var passLongEnough = (password.length >= 5); //Is the password at least 5 characters?

var passContainsUsername = password.includes(username);  //Does the password include the username?

var userNameShortEnough = (username.length <= 20); //Is the username 20 characters or less?



var whitespaceRegex = /^(\s.*|.*\s)$/;
var ws = function(x) {
    return whitespaceRegex.test(x);
}
var usernameWhitespace = ws(username); //Does the username start || end with whitespace?
var passwordWhitespace = ws(password); //Does the password start || end with whitespace?


function countVowels(n) {
    var vowels = /[aeiou]/i;
    var counter = 0;
    var arr = n.split("");
    for (var i = 0; i < arr.length; i++) {
        if (vowels.test(arr[i])) {
            counter++;
        }
    }
    return counter;
}

function countVowels(n) {
    var counter = 0;
    var arr = n.split("");
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === "a" || arr[i] === "A" || arr[i] === "e" || arr[i] === "E" || arr[i] === "i" || arr[i] === "I" || arr[i] === "O" || arr[i] === "o" || arr[i] === "u" || arr[i] === "U") {
            counter++;
        }
    }
    return counter;
}