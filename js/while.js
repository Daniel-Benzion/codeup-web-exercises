

function timesTwo(number) {
    while (number <= 65536) {
        console.log(number);
        number *= 2;
    }
}

timesTwo(2);


var allCones = Math.floor(Math.random() * 50) + 50

function iceCream1(totalCones) {
    console.log("I need to sell " + totalCones + " cones.");
    do {
        var numSold = Math.floor(Math.random() * 5) + 1;
        if (numSold > totalCones) {
            console.log("I can't sell " + numSold + " cones because I only have " + totalCones + " cones left.")
        } else {
            console.log("Selling " + numSold + " cones.");
            totalCones -= numSold;
            console.log(totalCones + " cones remaining to be sold.");
        }
    } while (totalCones > 0);
    console.log("Yay! I sold them all!");
}

//iceCream1(allCones);

function iceCream(totalCones) {
    console.log("I need to sell " + totalCones + " cones.");
    do {
        var numSold = Math.floor(Math.random() * 5) + 1;
        var cond1 = (numSold > totalCones && totalCones > 1);
        var cond2 = (numSold > totalCones && totalCones === 1);
        var cond3 = (numSold <= totalCones && numSold > 1);
        var cond4 = (numSold <= totalCones && numSold === 1);
        if (cond1) {
            console.log("I can't sell " + numSold + " cones because I only have " + totalCones + " cones left.");
        } else if (cond2) {
            console.log("I can't sell " + numSold + " cones because I only have " + totalCones + " cone left.");
        } else if (cond3) {
            console.log("Selling " + numSold + " cones.");
            totalCones -= numSold;
            if (totalCones === 1) {
                console.log(totalCones + " cone remains to be sold.");
            } else {
                console.log(totalCones + " cones remaining to be sold.");
            }
        } else if (cond4) {
            console.log("Selling " + numSold + " cone.");
            totalCones -= numSold;
            if (totalCones === 1) {
                console.log(totalCones + " cone remains to be sold.");
            } else {
                console.log(totalCones + " cones remaining to be sold.");
            }
        }
    } while (totalCones > 0);
    console.log("Yay! I sold them all!");
}

iceCream(allCones);