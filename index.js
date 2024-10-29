const apiUrl = "https://pokeapi.co/api/v2/pokemon/"

async function searchPokemon(){
    const name = document.getElementById("pokemonName").value.toLowerCase()

    if(name){
        fetchPokemon(apiUrl + name)

    }else {
        alert("Por favor, insira o nome de um pokemon!")

    }

}

async function randomPokemon(){
    const randomId = Math.floor(Math.random() * 898) + 1

    fetchPokemon(apiUrl + randomId)

}

async function fetchPokemon(url){
    try{
        const response = await fetch(url)
        
        if(!response.ok){
            throw new Error("Pokemon não encontado!")
        }
        const pokemon = await response.json()

        displayPokemon(pokemon)
    }catch(error){
        alert(error.message)
    }
}

function displayPokemon(pokemon){
    const pokemonContainer = document.getElementById("pokemon-container")

    const pokemonName = document.getElementById("pokemonNameDisplay")

    const pokemonImage = document.getElementById("pokemonImage")

    const pokemonInfo = document.getElementById("pokemonInfo")

    pokemonName.innerText = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
    pokemonImage.src = pokemon.sprites.front_default
    pokemonInfo.innerText = `ID: ${pokemon.id} | Tipo: ${pokemon.types.map(type => type.type.name).join(', ')}`

}