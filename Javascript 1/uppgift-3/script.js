// Task 1
console.log('Task 1');
function passedCalculator(name, points, maxpoints) {
    if (points >= maxpoints * 0.5) {
        console.log(`${name} has passed the test with ${points} points out of ${maxpoints} points`)
    }
    else {
        console.log(`${name} sadly didn't pass the test with ${points} points out of ${maxpoints} points`)
    }
}

passedCalculator('Artur', 49, 50);

// Task 1a
console.log('Task 1a');
function passedCalculatorAccurate (name, points, maxpoints) {
    if (points >= maxpoints * 0.95) {
        console.log(`${name} has passed the test with the grade A`)
    } else if (points >= maxpoints * 0.75) {
        console.log(`${name} has passed the test with the grade C`)
    }
    else if (points >= maxpoints * 0.5) {
        console.log(`${name} has passed the test with grade E`)
    }
    else if (points <= maxpoints * 0.5) {
        console.log(`${name} has failed the test`)
    }
}

passedCalculatorAccurate('Erik', 95, 100);

// Task 1b
let maxPointsLast = 100;
let pointsArr = [75, 12, 50, 95, 80, 100, 99, 120];

function pointsPrinter () {

    let A = 0;
    let C = 0;
    let E = 0;
    let F = 0;

    for (let i = 0; i < pointsArr.length; i++) {
        let points = pointsArr[i];

        if (points >= maxPointsLast * 0.95) {
            A++;
        } else if (points >= maxPointsLast * 0.75) {
            C++;
        } else if (points >= maxPointsLast * 0.5) {
            E++
        } else if (points < maxPointsLast * 0.5) {
            F++
        }
    }

    return `A:${A} C:${C} E:${E} F:${F}`;
}

console.log('Task 1b');
console.log(pointsPrinter());


// Task 2
function CreditDebit(debet, kredit) {
    if (debet === kredit) {
        console.log('Dessa är lika stora');
    } else if (debet > kredit) {
        console.log('debet är större än kredit');
    } else if (debet < kredit) {
        console.log('kredit är större än debet');
    }
}

CreditDebit(51, 52);

// Task 2a

let debetArr = [10, 5, 5, 3, 1, 1];
let kreditArr = [5, 5, 5, 10];

let debetArrSum = 0;
let kreditArrSum = 0;

for ( let i = 0; i < debetArr.length; i++) {
    debetArrSum += debetArr[i];
}

for (let i = 0; i < kreditArr.length; i++) {
    kreditArrSum += kreditArr[i];
}

function calca() {
    if ( debetArrSum === kreditArrSum ) {
        console.log('Balansrapport godkänd');
    } else {
        console.log('Debet och kredit har inte samma värden');
    }
}

console.log('Task 2b');
calca();


// Task 3a

let schoolData = {
    name: 'Ankademin',
    antalElever: 38,
    antatLärare: 10,
    skolansMotto: 'Anyone can code!',
    FavTeacher: 'Aquaman',
    isBestSchool: true,
    dogAllowed: true,
    wormsAllowed: false,
    locations: ['Solna', 'Ankeborg', 'Duckville'],
    maskot: {
        name: 'Miles',
        age: 1,
        isCute: true,
    }
}

function sendSchoolInfo() {
    console.log(`${schoolData.name} antal elever: ${schoolData.antalElever} antal lärare ${schoolData.antatLärare}`);

    if ( schoolData.wormsAllowed == false) {
        console.log('No worms here dawg');
    };

    if ( schoolData.isBestSchool == true) {
        console.log('this is the best school in town dawg');
    };
}

console.log('Task 3a');
sendSchoolInfo();

// Task 3b

function sendMascotInfo() {
    console.log(`his name: ${schoolData.maskot.name} and his age: ${schoolData.maskot.age}`);

    if ( schoolData.maskot.isCute == true) {
        return `${schoolData.maskot.name} is cute`
    } else {
        return "the mascot ain't cute dawg";
    }
}

console.log('Task 3b');
console.log(sendMascotInfo());

