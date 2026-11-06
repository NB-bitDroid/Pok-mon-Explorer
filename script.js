//https://pokeapi.co/

const pokemonDiv = document.getElementById("pokemonCards");
const enterIdBtn = document.getElementById("enterBtn");
const showFirst12Cards = document.getElementById("create12Cards");
const showMoreCards = document.getElementById("loadMore");
let text = document.getElementById("Text");

// async function getUser() { 
//     const response = await fetch( 
//         "https://jsonplaceholder.typicode.com/users/1" 
//     ); 
//     const user = await response.json(); 
//     const container = document.querySelector("#user-info"); 
//     const name = document.createElement("h3"); 
//     name.textContent = user.name; 
//     const email = document.createElement("p"); 
//     email.textContent = user.email; 
//     container.replaceChildren(name, email); 
// } 

// document.querySelector("#load-btn").addEventListener("click", getUser); 

// async function getUser() { 
//     try { 
//         const response = await fetch( 
//             "https://jsonplaceholder.typicode.com/users/1" 
//         ); 
//         if (!response.ok) { 
//             throw new Error("Unable to retrieve user."); 
//         } 
//         const user = await response.json(); 
//         console.log(user.name); 
//     } catch (error) { 
//         console.log("An error occurred:", error.message); 
//     } 
// } 
let thing = 13;
loadNumOfCards(1, 12);

async function loadNumOfCards(startId, endId){
    console.log(endId);
    console.log(startId);

    if (endId > 10326){
        endId = 10326;
        text.innerHTML = "That's all the pokemon probably";
    };
    if (startId > 1018 & startId < 1026){
        endId = 1025;
    };
    while (startId <= endId) {
        await checkPokiApi(startId);
        startId++;
    };
};

showFirst12Cards.addEventListener("click", function(){
    thing = 13;
    pokemonDiv.innerHTML = "";
    loadNumOfCards(1, 12);
});

showMoreCards.addEventListener("click", function(){
    if (thing >= 1026 & thing < 10000){
        thing = 10001;
    };
    // if(thing > 1030){
    //     thing = 10001
    // }
    // if(thing > 1025 & thing < 1032){
    //     thing = 1025
    // }
    loadNumOfCards(thing, (Number(thing)+6));
    thing+=7;
});

enterIdBtn.addEventListener("click", function(){
    pokemonDiv.innerHTML = "";
    let pokemonId = (document.getElementById("pokemonID")).value;
    if (pokemonId >= 1026 & pokemonId < 10000) {
        pokemonId = 10001;
    };
    checkPokiApi(pokemonId);
    thing = Number(pokemonId)+1;
    // fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId.value}`)
    // .then(response => response.json())
    // .then(data => createPokemonCards(data))
    // getPokemon()
});

async function checkPokiApi(pokemonId) {
    text.innerText = "Loading...";
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
        if (!response.ok){
            throw new Error("Unable to get pokemon info sorry :c");
        }else (getPokemon(pokemonId), text.innerText = "");
        // const data = await response.json();
        // console.log(data.name);
    } catch (error) {
        console.log("Error something went wrong sorry:", error.message);
        text.innerText = "Error Something Went Wrong!";
    };
};

async function getPokemon(pokemonId) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    const data = await response.json();
    createPokemonCards(data);
};

function createPokemonCards(pokemon){
    // pokemonDiv.innerHTML = "";
    pokemonDiv.innerHTML += getElement(pokemon);
    // console.log(pokemon);
};

function getTypes(data){
    allTypes = [];
    for (typ in data.types){
        allTypes += data.types[typ].type.name;
        allTypes += " ";
    };
    
    return allTypes;
    
};

function getElement(data) {
    return `
        <div class="card">
            <div id="cardText">
                <h2 id="number">#${data.id}</h2>
                <img src="${data.sprites.front_default}" alt="">
                <h3>${(data.name).charAt(0).toUpperCase() + (data.name.slice(1))}</h3>
                <p>${getTypes(data)}</p>
                <p>HP: ${data.stats[0].base_stat}</p>
                <p>Attack: ${data.stats[1].base_stat}</p>
                <p>Defence: ${data.stats[2].base_stat}</p>
            </div>
        </div>
        `;
};

// pokemonDiv.innerHTML += ``;


