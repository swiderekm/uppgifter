// Task 1
let names = ['Alan', 'Pawel', 'Mikolaj', 'Nadia'];

names.forEach(item => console.log(item));

// Task 2
let numbers = [1, 2, 3, 4 ,5];

let doubleTrouble = numbers.map(item => {return item * 2});

console.log(doubleTrouble);

// Task 3
let  tenNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenNum = tenNumbers.filter(item => item % 2 === 0);

console.log(evenNum)

// Task 4
let num  = [5, 7, 2];

let sumNum = num.reduce((total, currentValue) => {return total + currentValue});

console.log(sumNum);

// Task 5
let num2 = [5, 10, 15, 21, 25, 30];

let moreThanTwenty = num2.find(item => item >= 20);

console.log(moreThanTwenty);

// Task 6
let values = ['Alan', 'Pawel', 'Mikolaj', 'Nadia'];

let pawelFinder = values.findIndex(item => item === 'Pawel');

console.log(pawelFinder);

// Task 7
let numArr = [-1, 0, 1, 2, 3, 5];

let negDetector = numArr.some(item => item < 0);

console.log(negDetector);

// Task 8
let numArr2 = [1, 0, 1, 2, 3, 5];

let negDetector2 = numArr2.every(item => item >= 0);

console.log(negDetector2);

// Task 9
let emptyArr = [];

emptyArr.push(1, 2, 3);
emptyArr.pop();

console.log(emptyArr);

// Task 10
let crazyNumbers = [5, 21, 55, 2];

let numSorter = crazyNumbers.sort((a, b) => a > b ? 1 : -1);

console.log(numSorter);
