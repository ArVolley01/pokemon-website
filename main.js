//alert("js is working");

// const pokemon = ['charmander','bulbasaur','squirtle'];
// const pokemonIDs = ["004","001","007"];
const pokemon = [
    {name: 'Charmander', id: '004'},
    {name: 'Bulbasaur', id: '001'},
    {name: 'Squirtle', id: '007'},
];

const userRoster = [true, true, true, true, true, true];

const grid = document.getElementById('grid');
const newBtn = document.getElementById('new-pokemon-btn');
rosterDiv = document.querySelector('#roster');



const getDeleteButton = (index, func) => {

    const confirmation = () => {
        userRoster[index] = true;
        document.querySelector(`#pokemon-${index + 1}`).innerHTML = "";
        document.querySelector(`#pokemon-${index + 1}`).removeEventListener('click', func);
    };

    const button = document.createElement('button');

    button.addEventListener('click', () => {
        button.innerText = "confirm?"
        
        button.addEventListener('click', confirmation);
        setTimeout(() => {
            button.removeEventListener('click', confirmation);
            button.innerText = "DELETE";
        }, 3000);
    });

    button.innerText = "DELETE";
    return button;
};

createPokemon = (pokemonName, imgUrl) => {
    let card = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.innerText = pokemonName;
    let img = document.createElement('img');
    img.src = imgUrl;
    card.setAttribute('class', "pokemon-card");
    card.append(img, h3);
    let audioUrl = `https://play.pokemonshowdown.com/audio/cries/${pokemonName.toLowerCase()}.mp3`
    let audio = document.createElement('audio');
    let source = document.createElement('source');
    source.setAttribute('src', audioUrl);
    source.setAttribute('type', 'audio/mpeg');
    audio.append(source);
    card.classList.add('animate__animated');
    card.addEventListener('click', () => {
        card.classList.add('animate__shakeX');
        audio.play();
        setTimeout(() => {
            card.classList.remove('animate__shakeX');
        }, 1300);
    });
    return card;
}

newBtn.addEventListener('click', async () => {
    
    //Check if there's an open spot, and return if there isn't
    userRoster.map((isFree) => {if(!isFree) return});


    let inputID = prompt('enter pokemon by id');
    let imgUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${resolveID(inputID, 'image')}.png`;
    let dataUrl = `https://pokeapi.co/api/v2/pokemon/${resolveID(inputID, 'api')}`;
    let req = await fetch(dataUrl);
    let res = await req.json();
    let name = res.forms[0].name;
    let audioUrl = `https://play.pokemonshowdown.com/audio/cries/${name.toLowerCase()}.mp3`
    let audio = document.createElement('audio');
    let source = document.createElement('source');
    source.setAttribute('src', audioUrl);
    source.setAttribute('type', 'audio/mpeg');
    audio.append(source);
    let h3 = document.createElement('h3');
    h3.innerText = name;
    let img = document.createElement('img');
    img.setAttribute('src', imgUrl);
    img.setAttribute('class', 'roster-img');

    //Find an open spot
    let spot = -1;
    let notFound = true;
    userRoster.map((isFree, index) => {
        if (isFree && notFound) {
            spot = index;
            userRoster[index] = false;
            notFound = false;
        }
    });

    //not necessary, but jic
    if (spot === -1) return;

    const play = () => {
        audio.play();
    }

    let position = document.querySelector(`#pokemon-${spot+1}`);
    const deleter = getDeleteButton(spot, play);
    position.append(img, h3, deleter);
    position.addEventListener('click', play);
    // console.log(inputID);
});

// loop over every id
// create html element
//set html elem values
//append html obj to the dom

pokemon.map((element) => {
    let imgUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${element.id}.png`
    // console.log(element);
    const pokemonElement = createPokemon(element.name, imgUrl);
    grid.append(pokemonElement);
});

function resolveID (id, type) {
    if (type === 'api') return parseInt(id).toString();
    if (type === 'image') {
        if (id.length === 2) return '0' + id;
        if (id.length === 1) return '00' + id;
    }

    return id; //in the case nothing matches or nothing is needed
}

