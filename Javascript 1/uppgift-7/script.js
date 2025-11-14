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
document.querySelector('#colorChangeP').addEventListener('click', function () {
    allP.forEach((allP) => {
        allP.style.color = 'red';
    })
})

//Uppgift 2
let numArr = [2, 5, 10, 15, 20, 25, 30, 50, 60, 92];

let ul = document.createElement('ul');

bodyTag.append(ul);

numArr.forEach((num, i) => {
    let li = document.createElement('li');
    li.className = 'numbers';
    li.textContent = num;
    ul.append(li);

    if ((i + 1) % 5 === 0) {
        li.style.color = 'purple';
    } else if (num % 2 === 0) {
        li.style.color = 'red';
    } else {
        li.style.color = 'blue';
    }
})

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

document.querySelector('#get-profiles').addEventListener('click', () => {
    let container = document.querySelector('.profile-cards');
    container.innerHTML = '';
    objectArr.forEach(item => {
        let profileCard = document.createElement('div');
        profileCard.className = 'card';
        profileCard.innerHTML = 
        `<h3>${item.name}</h3> 
        <p><strong>age:</strong> ${item.age}</p>
        <p><strong>pets:</strong> ${item.amountOfPets}</p>
        <p><strong>email:</strong> ${item.email}</p>
        <p><strong>fav author:</strong> ${item.favoriteAuthor}</p>`

        if (item.lovesWinter) {
            profileCard.style.background = 'lightblue';
        } else {
            profileCard.style.background = '#F65E0A';
        }

        container.append(profileCard);

    })
})

