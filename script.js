//https://pokeapi.co/

const pokemonId = document.getElementById("pokemonID")
const pokemonDiv = document.getElementById("pokemonCards")
const enterIdBtn = document.getElementById("enterBtn")

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

enterIdBtn.addEventListener("click", function(){
    checkPokiApi();
    // fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId.value}`)
    // .then(response => response.json())
    // .then(data => createPokemonCards(data))
    // getPokemon()
});

async function checkPokiApi() {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId.value}`);
        if (!response.ok){
            throw new Error("Unable to get pokemon info sorry :c");
        }else (getPokemon());
        const data = await response.json();
        console.log(data.name);
    } catch (error) {
        console.log("Error something went wrong sorry:", error.message);
    };
};

async function getPokemon() {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId.value}`);
    const data = await response.json();
    createPokemonCards(data);
};

function createPokemonCards(pokemon){
    pokemonDiv.innerHTML = "";
    pokemonDiv.innerHTML += getElement(pokemon);
    console.log(pokemon);
};

function getElement(data) {
    return `
        <div class="card">
            <h2>#${data.id}<h2/>
            <img src="${data.sprites.front_default}" alt="">
            <h3>${(data.name).charAt(0).toUpperCase() + (data.name.slice(1))}<h3/>
            <p>${data.types[0].type.name}<p/>
            <p>HP: ${data.stats[0].base_stat}<p/>
            <p>Attack: ${data.stats[1].base_stat}<p/>
            <p>Defence: ${data.stats[2].base_stat}<p/>
        </div>
        `;
};


