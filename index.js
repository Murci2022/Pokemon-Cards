console.clear();

console.log('It works!');

const apiUrl = 'https://pokeapi.co/api/v2/pokemon/ditto';

fetch(apiUrl)
  .then(response => response.json())
  .then(data => createPokemonList(data.result));

function createPokemonList(pokemons) {
  const list = document.createElement('ul');
  list.className = 'pokemon__list';
  document.body.append(list);

  pokemons.forEach(pokemon => {
    const item = document.createElement('li');
    item.className = 'pokemon__list-infos';

    item.textContent = pokemon.name;
    item.append(item);
  });
}
