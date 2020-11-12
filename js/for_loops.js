function showMultiplicationTable(number) {
    for (var i = 1; i <= 10; i++) {
        console.log(number * i);
    }
}

showMultiplicationTable(7);

function randNumLoop(){
    for (var i = 0; i < 10; i++) {
        var randomNumber = Math.floor(Math.random() * (200 - 20 + 1) ) + 20;
        if (randomNumber % 2 === 0) {
            console.log(randomNumber + " is even");
        } else {
            console.log(randomNumber + " is odd");
        }
    }
}

randNumLoop();

function incrementingStairs() {
    for (var i = 1; i < 10; i++){
        console.log(i.toString().repeat(i));
    }
}

incrementingStairs();

function minusFiveLoop() {
    for (var i = 100; i >= 5; i -= 5) {
        console.log(i);
    }
}

minusFiveLoop();