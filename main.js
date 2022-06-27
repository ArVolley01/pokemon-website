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
    img.setAttribute('height','100px')
    img.setAttribute('width','100px')
    document.body.append(img);
});