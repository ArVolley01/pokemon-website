//alert("js is working");

// const pokemon = ['charmander','bulbasaur','squirtle'];
// const pokemonIDs = ["004","001","007"];
const pokemon = [
    {name: 'Charmander', id: '004'},
    {name: 'Bulbasaur', id: '001'},
    {name: 'Squirtle', id: '007'},
];

// loop over every id
// create html element
//set html elem values
//append html obj to the dom

pokemon.map((element) => {
    let imgUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${element.id}.png`
    console.log(element);
    let h3 = document.createElement('h3');
    h3.innerText = element.name;
    let img = document.createElement('img');
    img.src = imgUrl;
    let card = document.createElement('div');
    card.setAttribute('class', "pokemon-card");
    card.append(img, h3);
    document.getElementById('grid').append(card);
});