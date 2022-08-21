
const pokedex = document.getElementById('pokedex');
const pokemon_count =150;

async function fetchPokemons() {
  try {
    for (let i = 1; i <= pokemon_count; i++) {
      await getPokemon(i);
    }
  } catch (error) {
    console.log(error.message);
  }
}

fetchPokemons();

async function getPokemon(id)
 {
  const apiUrl = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const response = await fetch(apiUrl);
  const data = await response.json();
  console.log(data);
  createPokedexCard(data);
}
   /*  createPokemonList(data.results);
    console.log(data)
  } catch (error) {
    console.log(error.message);
  }
}
fetchPokemon(apiUrl); */
/* fetch(apiUrl)
  .then(response => response.json())
  .then(data => createPokemonList(data.result));
 */
function createPokedexCard(data) {
  const imageUrl = data.sprites.other["official-artwork"].front_default;
  
  const card = document.createElement("div");
  card.className = "pokedex__card";
  card.innerHTML = `
  
  <span class="pokedex__card-id">No.${data.id}</span>
  <img class="pokedex__card-img" src=${imageUrl} alt="image"/>

 
  <button class="icon-card" data-js="cardElement">
  
  <svg
    class="card--icon_down"
    
    viewBox="0 0 24 24"
  >
    <path
      d="M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M6,10L12,16L18,10L16.6,8.6L12,13.2L7.4,8.6L6,10Z"
    />
  </svg>
</button>


  <h2 class="pokedex__card-name">${data.name.toUpperCase()}</h2>

<div class="hidden">
  <span class="type">Type: ${data.types[0].type.name}</span>
  <span class="type">Weight: ${data.weight}</span>
  <span class="type">Height: ${data.height}</span>
</div>
  
     `;
  pokedex.append(card);
}


const button = cardElement.querySelector('[data-js="cardElement"]');
// const answer = cardElement.querySelectorAll('[data-js="dropdownAnswer"]');


console.log(answer.classList);
button.addEventListener("click", () => {
  answer.classList.toggle("hidden"); } )

//   if (answer.classList.contains("hidden")) {
//     button.textContent = "Show answer";
// } else {
//    button.textContent = "Hide answer";
// }
// });