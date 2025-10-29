// task 1
let data = {
    name: "Mikolaj",
    age: 20,
    resmål: null,
    antSyskon: 1,
    husDjur: 1,
    favSport: 'volleyball',
};

console.log(data);

// task 2
let favFrukt = [" Banana", " Apple", " Pear", " Watermelon", " Kiwi"];
favFrukt.push(" Grapes");

console.log(favFrukt[0] + favFrukt[3] + favFrukt[5]);

//task 3
let favMoviesBooks = [" LOTR 1-3", " Hobbit 1-3", " Silmalirion", " GOTG 1-3", " Green Mile"];
let first = favMoviesBooks.at(0);
let almostLast = favMoviesBooks.at(3);
let thrownOut = favMoviesBooks.pop();
console.log(first + almostLast + thrownOut);

//task 4
let dogData = {
    type: "dog",
    race: "Maltipo",
    age: 4,
    name: "Coco",
    vegetarian: false,
    friend: {
        type: "cat",
        race: "Simply a cat",
        age: 5,
        name: "Kajtek",
        vegetarian: false,
    }
};

dogData.sound = function () {
    return("\n" + dogData.name + " woof" + "\n" + dogData.friend.name + " meow")
};

console.log(' name: ' + dogData.name + ' age: ' + dogData.age + ' and her best friend: ' + dogData.friend.name + dogData.sound());

//task 5
let myName = "Mikolaj";
let myAge = 20;
let myFavSport = "Volleyball";

console.log(`My name is ${myName} and I am ${myAge} years old. My favourite sport is ${myFavSport}.`);

//task Bonus
document.getElementById("checkWeather").addEventListener("click", function() {
    let weather = document.getElementById("weather").value;

    if (weather === "Sunny") {
        document.getElementById("weather-output").innerHTML = "For todays weather better take you sunglasses.";
    } 
    else if (weather === "Rainy") {
        document.getElementById("weather-output").innerHTML = "Uhh, it looks like it is raining. Better don't forget your umbrella.";
    } 
    else if (weather === "Snowy") {
        document.getElementById("weather-output").innerHTML = "Brrrrr, it is very cold and on top of that it's snowing! Better to wear your jacket today."
    }
    else if (weather === "") {
        document.getElementById("weather-output").innerHTML = "I have no idea what it is best to wear today.";
    }
    else {
        document.getElementById("weather-output").innerHTML = "input correct weather type";
    }
});
