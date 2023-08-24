const pokemonName = document.querySelector(".nomepokemon")
const pokemonNumber = document.querySelector(".numeropokemon")
const pokemonimage = document.querySelector(".pokemonimagem");
const form = document.querySelector(".form");
const input = document.querySelector(".buscador");
const botaoavanca = document.querySelector(".botaonext")
const botaovolta = document.querySelector(".botaoanterior")

let searchpokemon = 1

const fetchPokemon = async (pokemon) => {
const apiresponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
if(apiresponse.status = 200){
const data = await apiresponse.json();
return data;
}
}
const renderpokemon = async (pokemon) => {
    const data = await fetchPokemon(pokemon);
if (data) {
    pokemonName.innerHTML = data.name;
    pokemonNumber.innerHTML = data.id
    pokemonimage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
   input.value = ''
   searchpokemon = data.id
}
else{
    pokemonimage.style.display = "none"
    pokemonName.innerHTML = "Pokemon não encontrado"
    pokemonName.innerHTML = ''
}}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    renderpokemon(input.value.toLowerCase())
    input.value = ''
    })
    botaoavanca.addEventListener("click", () => {
    searchpokemon += 1
    renderpokemon(searchpokemon)
    })
    botaovolta.addEventListener("click", () => {
        if(searchpokemon > 1){
        searchpokemon -= 1
        renderpokemon(searchpokemon)}
        })
        
    
renderpokemon(searchpokemon)