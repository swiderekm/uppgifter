// Uppgift 1
let produktInput = document.querySelector('#produktInput');
let quantityInput = document.querySelector('#quantityInput');
let addBtn = document.querySelector('#addBtn');
let container = document.querySelector('#list');

addBtn.addEventListener('click', () => {
    let pTag = document.createElement('p');
    pTag.classList.add('background');
    container.append(pTag);
    
    if (produktInput.value != '' &&  quantityInput.value != '') {
        pTag.innerText = `${quantityInput.value} x ${produktInput.value}`;
    }else{
        alert('nie ma chuja');
        container.lastChild.remove();
    } 
    
    let deleteBtn = document.createElement('button');
    deleteBtn.classList.add('deleteBtn')
    deleteBtn.innerText = 'X';
    pTag.prepend(deleteBtn);
    
    deleteBtn.addEventListener('click', () => {
        pTag.remove();
    })
    
    let changeBackground = () => {
        let backgroundElements = document.querySelectorAll('.background');

        backgroundElements.forEach(element => {
            element.addEventListener('click', () => {
                if (element.style.background === 'lightgreen') {
                    element.style.background = '';
                } else {
                    element.style.background = 'lightgreen';
                }
            });
        });
    }

    pTag.addEventListener('click', (changeBackground));
});

// Uppgift 2
let movieInput = document.querySelector('#movieInput');
let ratingInput = document.querySelector('#ratingInput');
let movieAdd = document.querySelector('#movieAdd');
let containerMovie = document.querySelector('#movieList');
let movieSorter = document.querySelector('#movieSort')

movieAdd.addEventListener('click', () => {
    const pTagMovie = document.createElement('p');
    containerMovie.append(pTagMovie);

    if (containerMovie.childElementCount > 5) {
        alert('Max 5 movies');
        containerMovie.lastChild.remove();
    }

    if (ratingInput.value <= 10 && movieInput.value != '') {
        pTagMovie.innerHTML = `<strong>${movieInput.value}</strong>  -  ${ratingInput.value}/10`
    } else {
        alert('Insert movie title');
        containerMovie.lastChild.remove();
    }

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('deleteBtn')
    deleteBtn.innerText = 'X';
    pTagMovie.prepend(deleteBtn);
    
    deleteBtn.addEventListener('click', () => {
        pTagMovie.remove();
    })

    let sortRatings = () => {
        let ratings = Array.from(containerMovie.children);

        ratings.sort((a, b) => {
            const ratingA = parseFloat(a.innerText.match(/(\d+)\/10/)[1]);
            const ratingB = parseFloat(b.innerText.match(/(\d+)\/10/)[1]);
            return ratingB - ratingA;
        })

        ratings.forEach(item => containerMovie.appendChild(item));
    }

    movieSorter.addEventListener('click', sortRatings);
});