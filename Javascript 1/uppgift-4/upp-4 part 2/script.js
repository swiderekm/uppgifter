// Task 1
let myArr = [ 1, 2, 'One', true];

function conLogArr(arr) {

    for (i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

conLogArr(myArr);

// Task 2
let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];

function commonCourse(arr1, arr2) {

    let commonCourseArr = [];

    for (i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i])) {
            commonCourseArr.push(arr1[i]);
        }
    }

    return commonCourseArr;
}

console.log(commonCourse(student1Courses, student2Courses));

// Task 3
let food = ['Noodle', 'Pasta', 'Ice-cream', 'Pizza'];
let food2 = ['Fries', 'Ice-cream', 'Pizza', 'Pasta'];

function comapreFood(arr1, arr2) {

    let commonFood = [];

    for (i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i])) {
            commonFood.push(arr1[i]);
        }
    }
    
    return commonFood;
}

console.log(comapreFood(food, food2));

// Task 4
let values1 = ['Apple', 1, 9, false];
let values2 = ['Fries', 2, 1, true];
let values3 = ['Mars', 9, 2, 'Apple'];

function comapreArr(arr1, arr2, arr3) {
    let commonItems = [];

    for (let i = 0; i < arr1.length; i++) {
        if (
            arr2.includes(arr1[i]) || 
            arr3.includes(arr1[i])
        ) {
            commonItems.push(arr1[i]);
        }
    }

    for (let i = 0; i < arr2.length; i++) {
        if (arr3.includes(arr2[i]) && !commonItems.includes(arr2[i])) {
            commonItems.push(arr2[i]);
        }
    }

    return commonItems;
}

console.log(comapreArr(values1, values2, values3));

// Task 5
let furniture = ['Table', 'Chairs','Couch'];

function arrayLetters(arr) {
    
    for (i = 0; i < arr.length; i++) {
        console.log(arr[i].length);
    }
}

arrayLetters(furniture);

