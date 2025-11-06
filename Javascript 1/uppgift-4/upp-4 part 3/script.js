// Task 1
let numbers = [5, 15, 90, 10, 6, 2, 12, 3];

let moreThanTen = numbers.filter((num) => {return num >= 10});

console.log(moreThanTen);

// Task 2
let MoreNumbers = [5, 10, 2];
let total = 0;

MoreNumbers.forEach(function(num) {
    total += num;
});

console.log(total);

// Task 3
let fruits = ['banan', 'jordgubb', 'blåbär', 'mango', 'kiwi'];

console.log(fruits.includes('banan'));

// Task 4
let PosNegNumbers = [-1, -1, -1, 1, 1, 1];

let posNumbers = PosNegNumbers.filter(num => num > 0).length;
let negNumbers = PosNegNumbers.filter(num => num < 0).length;

let lessThanZero;
if(posNumbers > negNumbers) {
    lessThanZero = 'Mostly Positive';
} else if(negNumbers > posNumbers) {
    lessThanZero = 'Mostly Negative';
} else {
    lessThanZero = 'Balanced';
}

console.log(lessThanZero);

// Task 5.1
let names = ['Johansson', 'Gustavsson', 'Fiutek'];

let lastNames = names.map((name => name.charAt(0)));

console.log(lastNames);
// pusta linijka
// Task 5.2
let names2 = ['Johansson', 'Gustavsson', 'Fiutek', 'Anon'];

let lastNames2 = names2.filter(name => name.charAt(0) === 'A');

console.log(lastNames2);

// Task 6
let smallestNumberArr = [2, 3, 4, 5, 6, 7, 8, 9, 10];

let smallestNumber = Math.min(...smallestNumberArr);

console.log(smallestNumber);

// Task 7
let words = ['waste', 'main', 'confusion', 'flourish'];

let eDetector = words.filter(letterE => letterE.includes('e'));

console.log(eDetector);

// Task 8
let evenNumbers = [2, 5, 4, 6, 5, 91, 84, 12];

let printEvens = evenNumbers.filter(evens => evens % 2 === 0);

console.log(printEvens);