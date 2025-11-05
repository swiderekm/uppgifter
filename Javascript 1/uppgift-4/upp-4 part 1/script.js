// Task 1
let evens = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function countEvens (arr) {
    let evensTot = 0;

    for(i = 0; i < arr.length; i++) {
        if ( arr[i] % 2 == 0) {
            evensTot++
        }
    }
    console.log(`Even numbers: ${evensTot}`);
}

countEvens(evens);

// Task 2
let num = [2, 4, 5];

function multipleNum(arr) {

    let total = 1;

    for ( i = 0; i < arr.length; i++) {
        total = total * arr[i];
    }

    console.log(`total = ${total}`)
}

multipleNum(num);

// Task 3
let fruits = ["strawberry", "blueberry", "mango"];

function fruitsDetector(arr) {

    for (i = 0; i < arr.length; i++) {
        if( arr.includes('strawberry')) {
            console.log('true')
            break
        } else {
            console.log('false')
            break
        }
    }

}

fruitsDetector(fruits);

// Task 4
let newEvens = [2, 4, 6, 8, 1, 3, 5, 7];

function evensDetector(arr) {
    let even = 0;
    let uneven = 0;

    for (i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            even++
        } else {
            uneven++
        }
    }

    if (even > uneven) {
        console.log('Even array');
    } else if (uneven > even) {
        console.log('Odd array');
    } else {
        console.log('balanced array');
    }
}

evensDetector(newEvens);

// Task 5
let Efternamn = ['aaaaaa', 'aaaaaaa', 'aaaaa', 'aaaaaaa'];

function letterCounter(arr) {

    let arrayEfternamn = [];

    for (i = 0; i < arr.length; i++) {
        if (arr[i].length > 6) {
            arrayEfternamn.push(arr[i]);
        }
    }

    return arrayEfternamn;

}

console.log(letterCounter(Efternamn));