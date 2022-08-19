const apiPokemonUrl = 'https://pokeapi.co/api/v2/pokemon/'

async function fetchPokemons() {
    try {
        const response = await fetch(apiPokemonUrl);
        const data = await response.json();
        const pokemons = data.results;
        createPokemonsList(pokemons);
    }  catch (error) {
        console.log(error.message);
    }
}

fetchPokemons()

function createPokemonsList(pokemons) {
    const list = document.createElement('ul');
    list.className = 'pokemon__list'
    document.body.append(list);

    pokemons.forEach(pokemon => {
        const item = document.createElement('li');
        item.classList = 'pokemon__list--infos';

        item.innerHTML = `${pokemon.name}`;

        list.append(item);
    })
}


