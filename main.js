//alert("js is working");

// const pokemon = ['charmander','bulbasaur','squirtle'];
// const pokemonIDs = ["004","001","007"];
const pokemon = [
    {name: 'Charmander', id: '004'},
    {name: 'Bulbasaur', id: '001'},
    {name: 'Squirtle', id: '007'},
];

const newBtn = document.getElementById('new-pokemon-btn');
newBtn.addEventListener('click', () => {
    let inputID = prompt('enter pokemon by id');
    console.log(inputID);
});
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
    let audioUrl = `https://play.pokemonshowdown.com/audio/cries/${element.name.toLowerCase()}.mp3`
    let audio = document.createElement('audio');
    let source = document.createElement('source');
    source.setAttribute('src', audioUrl);
    source.setAttribute('type', 'audio/mpeg');
    audio.append(source);
    card.addEventListener('click', () => {
        audio.play();
    });
    document.getElementById('grid').append(card);
});