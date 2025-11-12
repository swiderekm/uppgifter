//Uppgift 1
// 1
let pContainer = document.querySelector('.p-holder');
let someP = document.createElement('p');
someP.innerText = 'Hej från Javascript!';

pContainer.append(someP);

// 2
document.querySelector('h1').innerText = 'Rubrik från Javascript!';

// 3
let bodyTag = document.querySelector('body');
document.getElementById('colorChange').addEventListener('click', function() {
    bodyTag.style.background = 'yellow';
})

// 4
let allP = document.querySelectorAll('p');
document.getElementById('colorChangeP').addEventListener('click', function () {
    allP.forEach((allP) => {
        allP.style.color = 'green';
    })
})

//Uppgift 2
// 1
let numArr = [2, 5, 10, 15, 20, 25, 30, 50, 60, 92];

let ul = document.createElement('ul');

numArr.forEach(num => {
    let li = document.createElement('li');
    li.className = 'numbers';
    li.textContent = num;
    ul.appendChild(li);
})

bodyTag.appendChild(ul);

// 2
let liItems = document.querySelectorAll('li');
numArr.forEach((num, i) => {
    if (num % 2 === 0) {
        liItems[i].style.color = 'red';
    }
});

//Uppgift 3
// 1
let objectArr = [
    {
        name: 'Marcus',
        age: 21,
        amountOfPets: 2,
        email: 'marcus.siurkus@mail.se',
        favoriteAuthor: 'J.R.R. Tolkien',
        lovesWinter: true,
    },
    {
        name: 'Jarek',
        age: 67,
        amountOfPets: 12,
        email: 'jarek.kutas@mail.se',
        favoriteAuthor: 'Adam Mickiewicz',
        lovesWinter: false,
    },
        {
        name: 'Darek',
        age: 42,
        amountOfPets: 0,
        email: 'darek.fujarek@mail.se',
        favoriteAuthor: 'Rowling',
        lovesWinter: false,
    }
];

let button = document.getElementById('get-profiles');
document.getElementById('get-profiles').addEventListener('click', () => {
    let container = document.querySelector('.profile-cards');
    objectArr.forEach(item => {
        let profileCard = document.createElement('div');
        profileCard.className = 'card';
        profileCard.innerHTML = 
        `<h3>${item.name}</h3> 
        <p>age: ${item.age}</p>
        <p>pets: ${item.amountOfPets}</p>
        <p>email: ${item.email}</p>
        <p>fav author: ${item.favoriteAuthor}</p>`

        if (item.lovesWinter === true) {
            profileCard.style.background = 'lightblue';
        } else {
            profileCard.style.background = '#F65E0A';
        }

        container.appendChild(profileCard);

        button.style.display = 'none';
    })
})

