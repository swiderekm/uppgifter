// Task 1
let number = 2;

let numberPlusOne = function () {
    console.log(number + 1)
};

console.log(numberPlusOne());

document.getElementById("plusOneBTN").addEventListener("click", function () {
    let number = document.getElementById("plusOne").value;
    
    document.getElementById("plusOneOutput").innerHTML = Number(number) + 1;
});


// Task 2

function hoursToSeconds (hours) {
    return hours * 60 * 60;
};

console.log(hoursToSeconds(1));


document.getElementById("hoursToSecBTN").addEventListener("click", function () {
    let hour = document.getElementById("hoursToSec").value;

    document.getElementById("hoursToSecOutput").innerHTML = hour * 60 * 60;
})

// Task 3
let age = 20;

function ageToDays () {
    console.log(age * 365.25);
};

ageToDays();

document.getElementById("ageToDaysBTN").addEventListener("click", function () {
    let age = document.getElementById("ageToDays").value;

    document.getElementById("ageToDaysOutput").innerHTML  = age * 365.25;
})

// Task 4 
let height = 15;
let base = 8;

function triangleArea () {
    console.log(base *  height / 2);
};

triangleArea();

// Task 5
function daysToMinutes (days) {
    return days * 24 * 60;
}

console.log(daysToMinutes(3.5));

// Task 6
let onlyNumbers = [11, 64, 74, 12, 54, 9, 2, 11];

console.log(onlyNumbers[0]);

// Task 7
let twoPointers = 5;
let threePointers = 3;

function pointAdder () {
    console.log(twoPointers * 2 + threePointers * 3);
}

pointAdder();

// Task 8 
function legAdder (chicken, cows, pigs) {
    return chicken * 2 +  cows * 4 + pigs * 4;
}

console.log(legAdder(15, 4, 2));

// Task 9
function dividableByTwo (number) {
    return number % 2 === 0;
};

console.log(dividableByTwo(5));

// Task 10
function greaterThanOrLess (number)  {
    if (number >= 0) {
        return true;
    }
    else  {
        return false;
    }
}

console.log(greaterThanOrLess(2));

document.getElementById("ChickLegsBTN").addEventListener("click", function () {
    
})

// Task 11
function greaterThanHundred (number1, number2) {
    if (number1 + number2 < 100) {
        return true;
    }
    else {
        return false;
    }
};

console.log(greaterThanHundred(49, 50));

