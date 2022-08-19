/* console.clear();

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
} */

console.clear();

console.log('It works!');

const apiUrl = 'https://pokeapi.co/api/v2/pokemon/ditto';

fetchPokemon(apiUrl);

async function fetchPokemon() {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
    const data = await response.json();
    createPokemonList(data);
  } catch (error) {
    console.log(error.message);
  }
}
fetchPokemon();

/* fetch(apiUrl)
  .then(response => response.json())
  .then(data => createPokemonList(data.result));
 */
function createPokemonList(pokemons) {
  const list = document.createElement('ul');
  list.className = 'pokemon__list';
  document.body.append(list);

  pokemons.forEach(pokemon => {
    const item = document.createElement('li');
    item.className = 'pokemon__list-infos';

    item.innerHTML = `
     /* <h2></h2>  */
     
     <ul>
     <li>$[{ability.name}] </li>
     
   </ul>
     
     `;
    list.append(item);
  });
}
