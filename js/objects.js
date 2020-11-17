(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    var person = {firstName: "Dan", lastName: "Benzion"};

    console.log(person.firstName);
    console.log(person.lastName);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    /* person.sayHello = function() {
        return "Hello, " + person.firstName + " " + person.lastName + "!";
    }

    console.log(person.sayHello());
*/

    var person1 = {firstName: "Dan", lastName: "Benzion"};
    var person2 = {firstName: "Haywood", lastName: "Jablowmie"};

    function sayHello(person) {
        return "Hello, " + person.firstName + " " + person.lastName;
    }

    console.log(sayHello(person1));
    console.log(sayHello(person2));

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

     var shoppers = [
         {name: 'Cameron', amount: 180},
         {name: 'Ryan', amount: 250},
         {name: 'George', amount: 320}
     ];

     var discount = function(shoppers) {
         if (shoppers.amount < 200) {
             console.log("Shopper: " + shoppers.name + "; Amount before discount: " + shoppers.amount + "; Discount: $0" + "; Amount after discount: " + shoppers.amount + ".");
         } else {
             console.log("Shopper: " + shoppers.name + "; Amount before discount: " + shoppers.amount + "; Discount: " + ((shoppers.amount * 0.12).toFixed(2)) + "; Amount after discount: " + ((shoppers.amount - (shoppers.amount * 0.12)).toFixed(2)) + ".");
         }
     }

     shoppers.forEach(discount);


    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    var books = [
        {title: "Harry Potter", author: {firstName: "J.K.", lastName: "Rowling"}},
        {title: "Foundation", author: {firstName: "Isaac", lastName: "Asimov"}},
        {title: "Casino Royale", author: {firstName: "Ian", lastName: "Fleming"}},
        {title: "Starship Troopers", author: {firstName: "Robert", lastName: "Heinlein"}},
        {title: "Mort", author: {firstName: "Terry", lastName: "Pratchett"}}
    ]

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    function bookLoop(books) {
        for (var i = 0; i < books.length; i++) {
            console.log("Book # " + (i + 1));
            console.log("Title: " + books[i].title);
            console.log("Author: " + books[i].author.firstName + " " + books[i].author.lastName);
            console.log("---")
        }
    }

    bookLoop(books);



    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */


var createBook = function(title, author) {
    var obj = {};
    var authArr = author.split(" ");
    obj.title = title;
    obj.author = {};
    obj.author.firstName = authArr[0];
    obj.author.lastName = authArr[1];
    return obj;
    }

    var books2 = [];

    function bookArr(title, author) {
        books2.push(createBook(title, author));
    }

    bookArr("Harry Potter", "J.K. Rowling");
    bookArr("Foundation", "Isaac Asimov");
    bookArr("Casino Royale", "Ian Fleming");
    bookArr("Starship Troopers", "Robert Heinlein");
    bookArr("Mort", "Terry Pratchett");

    console.log(books2);


})();
