
const apiUrl = 'https://pokeapi.co/api/v2/pokemon/';



async function fetchPokemon() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
console.log(data.results)

    createPokemonList(data.results);
    console.log(data)
  } catch (error) {
    console.log(error.message);
  }
}
fetchPokemon(apiUrl);

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
