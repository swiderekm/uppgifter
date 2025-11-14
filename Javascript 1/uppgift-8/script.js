// Uppgift 1
let inputToDo = document.querySelector('#toDo');
let toDoBTN = document.querySelector('#toDoBTN');
let container = document.querySelector('#div');
let ulToDo = document.createElement('ul');
let warning = document.createElement('div');
container.append(ulToDo);

toDoBTN.addEventListener('click', () => {
    let liToDo = document.createElement('li');
    liToDo.innerHTML = inputToDo.value;
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'X'
    liToDo.append(deleteBtn); 

    deleteBtn.addEventListener('click', () => {
        liToDo.remove();
    })

    if (inputToDo.value == '') {
        alert('insert any number!');
        ulToDo.lastChild.remove();
    }

    ulToDo.append(liToDo);
    if (ulToDo.children.length > 5) { 
        alert('MAX ITEMS (5)');
        ulToDo.lastChild.remove();
    }
});


inputToDo.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    toDoBTN.click();
  }
});

// Uppgift 2
let inputNum1 = document.querySelector('#num1');
let inputNum2 = document.querySelector('#num2');
let addBTN = document.querySelector('#addBTN');
let mBTN = document.querySelector('#multipliBTN');
let minusBTN = document.querySelector('#minusBTN');
let calcOutput = document.querySelector('#outputCalc');

addBTN.addEventListener('click', () => {
    calcOutput.innerHTML = parseInt(inputNum1.value) + parseInt(inputNum2.value);
})
mBTN.addEventListener('click', () => {
    calcOutput.innerHTML = parseInt(inputNum1.value) * parseInt(inputNum2.value);
})
minusBTN.addEventListener('click', () => {
    calcOutput.innerHTML = parseInt(inputNum1.value) - parseInt(inputNum2.value);
    if (calcOutput.innerHTML < 0) {
        calcOutput.innerHTML = "don't subtract numbers to get zero, it is illegal";
        setTimeout(() => {
            calcOutput.innerHTML = '';
        }, 2200);
    }
});

// Uppgift 3
let colorInput = document.querySelector('#numTum');
let no = document.querySelector('.nuhUh');


colorInput.addEventListener('change', () => {
    if (colorInput.value < 4 && colorInput.value > 0) {
        colorInput.style.background = 'red';
    } else if (colorInput.value < 8 && colorInput.value >= 4) {
        colorInput.style.background = 'yellow';
    } else if (colorInput.value > 7 && colorInput.value < 11) {
        colorInput.style.background = 'green';
    } else if (colorInput.value <= 0) {
        no.innerHTML = 'numbers below zero are not allowed';
        colorInput.style.background = 'none';
        setTimeout(() => {
            no.innerHTML = '';
        }, 1500);
    } else {
        no.innerHTML = 'numbers over ten are not allowed';
        colorInput.style.background = 'none';
        setTimeout(() => {
            no.innerHTML = '';
        }, 1500);
    }
})