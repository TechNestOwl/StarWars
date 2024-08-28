// Array filter()

const toggleView = ()=>{
    document.getElementById("info-card").classList.toggle("displayCard");
    document.getElementById("inputContainer").classList.toggle("hideItAll");
}

document.getElementById("searchBtn").addEventListener("click", toggleView);
document.getElementById("close-card").addEventListener("click", toggleView);



const characters = [
    {
        name: "Luke Skywalker",
        role: "Jedi Knight",
        affiliation: "Rebel Alliance",
        species: "Human",
        homeWorld: "Tatooine",
        summary: "The son of Anakin Skywalker, Luke becomes a key figure in the Rebel Alliance and helps defeat the Galactic Empire."
    },
    {
        name: "Darth Vader",
        role: "Sith Lord",
        affiliation: "Galactic Empire",
        species: "Human",
        homeWorld: "Tatooine",
        summary: "Formerly Anakin Skywalker, Darth Vader is a powerful Sith Lord who serves the Emperor and seeks to crush the Rebel Alliance."
    },
    {
        name: "Leia Organa",
        role: "Princess / General",
        affiliation: "Rebel Alliance",
        species: "Human",
        homeWorld: "Alderaan",
        summary: "A leader in the Rebel Alliance, Leia is the twin sister of Luke Skywalker and a skilled diplomat and warrior."
    },
    {
        name: "Han Solo",
        role: "Smuggler / Captain",
        affiliation: "Rebel Alliance",
        species: "Human",
        homeWorld: "Corellia",
        summary: "A rogue smuggler turned hero, Han Solo becomes a key member of the Rebel Alliance and captain of the Millennium Falcon."
    },
    {
        name: "Yoda",
        role: "Jedi Master",
        affiliation: "Jedi Order",
        species: "Unknown",
        homeWorld: "Unknown",
        summary: "A wise and powerful Jedi Master, Yoda serves as a mentor to many Jedi, including Luke Skywalker."
    },
    {
        name: "Obi-Wan Kenobi",
        role: "Jedi Master",
        affiliation: "Jedi Order",
        species: "Human",
        homeWorld: "Stewjon",
        summary: "A dedicated Jedi Master, Obi-Wan trains Anakin Skywalker and later helps guide Luke in his journey to becoming a Jedi."
    },
    {
        name: "Emperor Palpatine",
        role: "Emperor / Sith Lord",
        affiliation: "Galactic Empire",
        species: "Human",
        homeWorld: "Naboo",
        summary: "The mastermind behind the rise of the Galactic Empire, Palpatine is a Sith Lord who seeks to rule the galaxy."
    },
    {
        name: "Chewbacca",
        role: "Co-pilot / Warrior",
        affiliation: "Rebel Alliance",
        species: "Wookiee",
        homeWorld: "Kashyyyk",
        summary: "A loyal friend to Han Solo, Chewbacca is a Wookiee warrior and co-pilot of the Millennium Falcon."
    },
    {
        name: "R2-D2",
        role: "Astromech Droid",
        affiliation: "Rebel Alliance",
        species: "Droid",
        homeWorld: "Naboo",
        summary: "A resourceful astromech droid, R2-D2 plays a crucial role in many key events of the Star Wars saga."
    },
    {
        name: "C-3PO",
        role: "Protocol Droid",
        affiliation: "Rebel Alliance",
        species: "Droid",
        homeWorld: "Tatooine",
        summary: "A protocol droid fluent in over six million forms of communication, C-3PO is often found at R2-D2's side."
    },
    {
        name: "Boba Fett",
        role: "Bounty Hunter",
        affiliation: "Independent",
        species: "Human (clone)",
        homeWorld: "Kamino",
        summary: "A notorious bounty hunter, Boba Fett is feared throughout the galaxy for his deadly skills and unrelenting pursuit of targets."
    },
    {
        name: "Lando Calrissian",
        role: "Gambler / General",
        affiliation: "Rebel Alliance",
        species: "Human",
        homeWorld: "Socorro",
        summary: "A suave gambler and businessman, Lando becomes a General in the Rebel Alliance and helps in the fight against the Empire."
    },
    {
        name: "Rey",
        role: "Jedi",
        affiliation: "Resistance",
        species: "Human",
        homeWorld: "Jakku",
        summary: "A scavenger from Jakku, Rey discovers her connection to the Force and becomes a key figure in the Resistance against the First Order."
    },
    {
        name: "Kylo Ren",
        role: "Supreme Leader",
        affiliation: "First Order",
        species: "Human",
        homeWorld: "Chandrila",
        summary: "The son of Han Solo and Leia Organa, Kylo Ren is a powerful Force user who leads the First Order in its quest to dominate the galaxy."
    },
    {
        name: "Padmé Amidala",
        role: "Queen / Senator",
        affiliation: "Galactic Republic",
        species: "Human",
        homeWorld: "Naboo",
        summary: "A former Queen of Naboo, Padmé becomes a senator and fights for peace and democracy during the Clone Wars."
    },
    {
        name: "Darth Maul",
        role: "Sith Lord",
        affiliation: "Sith",
        species: "Zabrak",
        homeWorld: "Dathomir",
        summary: "A fierce Sith warrior trained by Darth Sidious, Darth Maul is known for his menacing appearance and deadly combat skills."
    },
    {
        name: "Ahsoka Tano",
        role: "Jedi Padawan",
        affiliation: "Jedi Order / Rebel Alliance",
        species: "Togruta",
        homeWorld: "Shili",
        summary: "A former Jedi Padawan to Anakin Skywalker, Ahsoka becomes a key figure in the early days of the Rebel Alliance."
    },
    {
        name: "Mace Windu",
        role: "Jedi Master",
        affiliation: "Jedi Order",
        species: "Human",
        homeWorld: "Haruun Kal",
        summary: "A senior member of the Jedi Council, Mace Windu is one of the most powerful Jedi during the Clone Wars."
    },
    {
        name: "Qui-Gon Jinn",
        role: "Jedi Master",
        affiliation: "Jedi Order",
        species: "Human",
        homeWorld: "Coruscant",
        summary: "A wise and maverick Jedi Master, Qui-Gon Jinn discovers Anakin Skywalker and believes him to be the Chosen One."
    },
    {
        name: "Jar Jar Binks",
        role: "Gungan Representative",
        affiliation: "Galactic Republic",
        species: "Gungan",
        homeWorld: "Naboo",
        summary: "A clumsy yet well-meaning Gungan, Jar Jar Binks plays a surprising role in the rise of the Galactic Empire."
    }
];







const triggerSearch = () => {   
    let userInput = document.getElementById("charSearchByName").value;//grabing user input ( character name)

   characters.map((char) =>{
        if(char.name == userInput){
            document.getElementById("resultsName").innerHTML = `${char.name}`;
            document.getElementById("resultsRole").innerHTML = `${char.role}`;
            document.getElementById("resultsAffiliation").innerHTML = `${char.affiliation}`;
            document.getElementById("resultsSpecies").innerHTML = `${char.species}`;
            document.getElementById("resultsHomeworld").innerHTML = `${char.homeWorld}`;
            document.getElementById("resultsSummary").innerHTML = `${char.summary}`;
            return
        }
    }); // fitlering thrugh charactes array for name matching user input


    console.log(charOutput);
};







// Add characters to roster

const charNames = characters.map((char) => {
   return char.name;
});// creating an array with names of the characters 


const unorderedList = document.getElementById("charRoster");

charNames.forEach( i => {
    const li = document.createElement("li");
    li.className = "list-group"; // adding the bootstrap
    li.textContent = i;
    unorderedList.appendChild(li); //adding li into my unorderedList variable
});


















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


let lukeAI = "Luke Skywalker is a Jedi Knight who played a pivotal role in the defeat of the Galactic Empire. He is the son of Anakin Skywalker (Darth Vader) and Padmé Amidala, and the twin brother of Leia Organa."