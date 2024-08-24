// Array filter()

const toggleView = ()=>{
    document.getElementById("info-card").classList.toggle("displayCard");
    document.getElementById("inputContainer").classList.toggle("hideItAll");
}

document.getElementById("open-card").addEventListener("click", toggleView);
document.getElementById("close-card").addEventListener("click", toggleView);


const characters = [
    {
        name: "Luke Skywalker",
        role: "Jedi Knight",
        affiliation: "Rebel Alliance",
        species: "Human",
        homeworld: "Tatooine"
    },
    {
        name: "Darth Vader",
        role: "Sith Lord",
        affiliation: "Galactic Empire",
        species: "Human",
        homeworld: "Tatooine"
    },
    {
        name: "Leia Organa",
        role: "Princess",
        affiliation: "Rebel Alliance",
        species: "Human",
        homeworld: "Alderaan"
    },
    {
        name: "Han Solo",
        role: "Smuggler",
        affiliation: "Rebel Alliance",
        species: "Human",
        homeworld: "Corellia"
    },
    {
        name: "Yoda",
        role: "Jedi Master",
        affiliation: "Jedi Order",
        species: "Yoda's species",
        homeworld: "Unknown"
    },
    {
        name: "Obi-Wan Kenobi",
        role: "Jedi Master",
        affiliation: "Jedi Order",
        species: "Human",
        homeworld: "Stewjon"
    },
    {
        name: "Chewbacca",
        role: "Co-pilot",
        affiliation: "Rebel Alliance",
        species: "Wookiee",
        homeworld: "Kashyyyk"
    },
    {
        name: "Emperor Palpatine",
        role: "Emperor",
        affiliation: "Galactic Empire",
        species: "Human",
        homeworld: "Naboo"
    },
    {
        name: "R2-D2",
        role: "Astromech Droid",
        affiliation: "Rebel Alliance",
        species: "Droid",
        homeworld: "Naboo"
    },
    {
        name: "C-3PO",
        role: "Protocol Droid",
        affiliation: "Rebel Alliance",
        species: "Droid",
        homeworld: "Tatooine"
    }
];








const triggerSearch = (event) => {   
    event.preventDefault();
    let userInput = document.getElementById("charSearchByName").value;


    console.log("You searched for: " + userInput);
};


























//***MAP***
//1. Get array of all names
//2. Get array of all species and their homeworld
//3. Get array of objects with just name and role properties
//4. Get array of all first names

//1:
let nameArr = [];
characters.map((i)=>{
    nameArr.push(i.name)
});

//simplier method
let planets = characters.map(i => i.homeworld);


//2:
let charType = [];
characters.map((i)=>{
    charType.push([i.species,i.homeworld]);
});

let planetObj = characters.map( (i) => ({
    species: i.species,
    homeworld: i.homeworld
    })
);

//3:
let charObj = [];
characters.map((i)=>{
    charObj.push({
        name:i.name,
        role:i.role,
    });
});


//4:
const firstName = characters.map( char => char.name.split(' ')[0]);


// console.log(firstNames)


//***REDUCE***
//1. Get total mass of all characters
//2. Get total height of all characters
//3. Get total number of characters by eye color
//4. Get total number of characters in all the character names

//***FILTER***
//1. Get characters with role Revel Alliance
//3. Get all droid characters based on their role ( not species )

//1:
let heros = characters.filter( character => {

    if(character.affiliation == "Rebel Alliance"){
        return character; // if condition is true, current character will pass the filter and be added to heros array
    };
});
//refactored code above:
let scum = characters.filter(character => character.affiliation == "Galactic Empire");

//3:
let droids = characters.filter(char => char.role.includes("Droid"));




//***SORT***
//1. Sort by mass
//2. Sort by height
//3. Sort by name
//4. Sort by gender

//***EVERY***
//1. Does every character have blue eyes?
//2. Does every character have mass more than 40?
//3. Is every character shorter than 200?
//4. Is every character male?

//***SOME***
//1. Is there at least one male character?
//2. Is there at least one character with blue eyes?
//3. Is there at least one character taller than 210?
//4. Is there at least one character that has mass less than 50?


