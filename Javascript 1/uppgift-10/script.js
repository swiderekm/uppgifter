const addBtn = document.querySelector('#validate');
const nameInput = document.querySelector('#name-input');
const dropdownInput = document.querySelector('select#city-select');
let output = document.querySelector('.output');

let players = [];

const listRender = (arr) => {
  output.innerHTML = '';

  arr.forEach((student, i) => {
    const li = document.createElement('p');
    li.classList.add('li');
    li.innerText = `${student.name} | ${student.city} | ${student.clas} | årskurs ${student.year}`;
    output.appendChild(li);

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('deleteBtn');
    deleteBtn.innerText = 'remove';
    li.prepend(deleteBtn);

    const editBtn = document.createElement('button');
    editBtn.innerHTML = 'edit';
    li.prepend(editBtn);

    deleteBtn.addEventListener('click', () => {
      players.splice(i, 1);
      listRender(players);
    });
  });
};

addBtn.addEventListener('click', () =>{

    let radioInput = document.querySelector('[name=class]:checked').value;
    let yearInput = document.querySelector('[name=year]:checked').value

    if (nameInput.value === '' || dropdownInput.value === '' || !radioInput) {
        alert('Please fill in all fields!');
        return;
    }

    output.style.borderTop = '0.5px solid black';


    let newStudent = {
        name: nameInput.value,
        city: dropdownInput.value,
        clas: radioInput,
        year: yearInput,
    };

    players.push(newStudent);
    listRender(players);

});