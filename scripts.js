
const starfield = document.querySelector('.starfield');


for (let i = 0; i < 500; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.top = `${Math.random() * 100}vh`;
    star.style.left = `${Math.random() * 100}vw`;
    star.style.animationDuration = `${Math.random() * 3 + 1}s`;
    starfield.appendChild(star);
}

for(let p = 0; p < 10; p++){
    const planet = document.createElement('div');
    planet.className = "planet";
    planet.style.top = `${Math.random() * 100}vh`;
    planet.style.left = `${Math.random() * 100}vw`;
    starfield.appendChild(planet);
}

const characters = [
    {
        name: "Luke Skywalker",
        role: "Jedi Knight",
        affiliation: "Rebel Alliance",
        species: "Human",
        homeWorld: "Tatooine",
        summary: "Luke Skywalker, a humble farm boy from Tatooine, becomes a legendary Jedi Knight and the key figure in the battle against the Galactic Empire. Guided by mentors like Obi-Wan Kenobi and Yoda, he learns the ways of the Force and discovers his true heritage as the son of Darth Vader. Luke plays a pivotal role in the Rebel Alliance's victory, ultimately redeeming his father and bringing balance to the Force. His journey embodies the classic hero's arc, transforming from an ordinary individual into a symbol of hope and resilience for the galaxy."
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
        species: "I have no idea..",
        homeWorld: "Unknown..",
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



const triggerSearch = (userInput) => {


    characters.map((char) =>{
        if(char.name == userInput){
            document.getElementById("resultsName").innerHTML = `${char.name}`;
            document.getElementById("resultsRole").innerHTML = `${char.role}`;
            document.getElementById("resultsAffiliation").innerHTML = `${char.affiliation}`;
            document.getElementById("resultsSpecies").innerHTML = `${char.species}`;
            document.getElementById("resultsHomeworld").innerHTML = `${char.homeWorld}`;
            document.getElementById("resultsSummary").innerHTML = `${char.summary}`;
            return
        };
    });
};
let inputField = document.getElementById("charSearchByName").value;

console.log(inputField);

document.getElementById("searchBtn").onClick = function (){

    if(inputField == ""){
        alert("The input field is empty. Please enter a charcters name");
        console.log(inputField)
    }else{
        
        triggerSearch(inputField);
        console.log("Input field is not empty. Event fired.");
    }
}


// Add characters to roster
const charNames = characters.map((char) => {
    return char.name;
 });