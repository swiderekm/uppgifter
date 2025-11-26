const addBtn = document.querySelector('#validate');
const nameInput = document.querySelector('#name-input');
const dropdownInput = document.querySelector('select#city-select');
const output = document.querySelector('.output');
const filterBtn = document.querySelector('#filterBtn');

let players = [];

const listRender = (arr) => {
  output.innerHTML = '';

  arr.forEach((student, i) => {
    const li = document.createElement('p');
    li.classList.add('li');
    li.innerText = `${student.name} - ${student.clas} år ${student.year} | ${student.city}`;
    output.appendChild(li);

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('deleteBtn');
    deleteBtn.innerText = 'remove';
    li.prepend(deleteBtn);

    deleteBtn.addEventListener('click', () => {
      players.splice(i, 1);
      listRender(players);
    });
  });
};

addBtn.addEventListener('click', () =>{

    let radioInput = document.querySelector('[name=class]:checked').value
    let yearInput = document.querySelector('[name=year]:checked').value

    if (nameInput.value == '') {
        alert('Please fill in all fields!');
        return;
    }
    
    let newStudent = {
        name: nameInput.value,
        city: dropdownInput.value,
        clas: radioInput,
        year: yearInput,
    };

    players.push(newStudent);
    listRender(players);

});

function getCheckedValues(groupId) {
  return Array.from(document.querySelectorAll(`#${groupId} input:checked`))
  .map(checkBox => checkBox.parentElement.innerText.trim());
}

filterBtn.addEventListener('click', () => {

  const selectedCities = getCheckedValues('cityGroup');
  const selectedPrograms = getCheckedValues('programGroup');
  const selectedYears = getCheckedValues('yearGroup');

  const cityFilter = selectedCities.includes("Alla städer") ? [] : selectedCities;
  const programFilter = selectedPrograms.includes("Alla program") ? [] : selectedPrograms;
  const yearFilter = selectedYears.includes("Alla årskurser")
      ? []
      : selectedYears.map(y => y.replace("Årskurs ", ""));

  let filtered = players.filter(p =>
    (cityFilter.length === 0 || cityFilter.includes(p.city)) &&
    (programFilter.length === 0 || programFilter.includes(p.clas)) &&
    (yearFilter.length === 0 || yearFilter.includes(String(p.year)))
  );

  listRender(filtered);
});
