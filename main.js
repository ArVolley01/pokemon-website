//alert("js is working");

const pokemon = ['charmander','bulbasaur','squirtle'];
const pokemonIDs = ["004","001","007"];

// loop over every id
// create html element
//set html elem values
//append html obj to the dom

pokemonIDs.map((id) => {
    let imgUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`
    console.log(imgUrl);
    let img = document.createElement('img');
    img.src = imgUrl;
    let card = document.createElement('div');
    card.setAttribute('class', "pokemon-card");
    card.append(img);
    document.getElementById('grid').append(card);
});