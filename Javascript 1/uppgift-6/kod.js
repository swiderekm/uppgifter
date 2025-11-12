document.querySelector("h1").innerText = 'Ankademin Café';
document.getElementById("slogan").innerText = 'Stockholms no.1 coding café!';
document.querySelector('body').style.background = 'pink';

let samtligaPriser = document.querySelectorAll('.pris');
samtligaPriser.forEach((samtligaPriser) => {
    samtligaPriser.innerText = '19 kr';
});

document.querySelector('.produkt:nth-of-type(3) .pris').innerText = '15 kr';

let lastLink = document.querySelector('.produkt:nth-of-type(4)');
lastLink.innerText = 'Cheese -';
let priceSpan = document.createElement('span')
priceSpan.className = 'pris';
priceSpan.innerText = '25 kr';

lastLink.appendChild(priceSpan);

let mainDiv = document.querySelector('#website');
let lastH3 = document.createElement('h3');
lastH3.innerText = 'Öppettider: Alla dagar kl 18-21';

mainDiv.appendChild(lastH3);

let lastP = document.createElement('p');
lastP.innerText = 'Till Ankademin Café är alla välkomna att sitta och koda och ta en mysig fika!'

mainDiv.appendChild(lastP);

let allP = document.querySelectorAll('p');

allP.forEach((allP) => {
    allP.style.color = 'red';
})

console.log(document);
