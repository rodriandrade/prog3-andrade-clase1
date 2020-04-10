const CardItem = props => {
    const { image, name, species, origin, id } = props;
    const { name: planet, url } = origin;

            return `
                <div class="column is-one-quarter">
                    <div class="card">
                        <div class="card-image">
                        <figure class="image is-4by3">
                            <img src="${image}" alt="Placeholder image">
                        </figure>
                        </div>
                        <div class="card-content">
                        <div class="media">
                            <div class="media-content">
                            <h2 class="title is-4">${name}</h2>
                            <h3 class="title is-6">Species: ${species}</h3>
                            <h4 class="title is-6">Planet: ${planet}</h4>
                            </div>
                        </div>
                        <div class="content">
                            <div class="buttons">
                                <button data="${id}" class="button is-primary open_modal">More</button>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>`

}
       
const getCharacters = async (baseURL, from, to) => {
    //Array.from({length: 5}, (v, i) => i);
    const charactersRange = Array.from({ length: to - from + 1 }, (_, index) => index + 1).join(',');
    const url = `${baseURL}character/${charactersRange}`;
    const response = await fetch(url);
    const characters = await response.json();

    return characters
}
       
const getCharactersByQuery = async (baseURL, query) => {
    const url = `${baseURL}/character/?name=${query}`;
    const response = await fetch(url);
    const characters = await response.json();
    return characters
}
   
const appendElements = (characters, emptyGrid) => {
    const $grid = document.querySelector('.grid');
    if (emptyGrid) { $grid.innerHTML = null; }
        characters.forEach(character => {
        const cardItemHtml = CardItem(character);
        $grid.innerHTML += cardItemHtml;
    });
}

const main = async () => {

    const baseURL = 'https://rickandmortyapi.com/api/';

    const characters = await getCharacters(baseURL, 1, 20);
    appendElements(characters)

    //parte 2: crear un buscador de personajes
    const $submit = document.querySelector('.handle_search');
    $submit.addEventListener('click', async (event) => {
    event.preventDefault();
    const $input = document.querySelector('.input_search');
    const valor = $input.value;

    const charactersByQuery = await getCharactersByQuery(baseURL, valor);
    //console.log(charactersByQuery.results)
    appendElements(charactersByQuery.results, true)

    })

    //Modal
    const $modalOpenArr = document.querySelectorAll('.open_modal');
    const $modal = document.querySelector('.modal');
    const $modalClose = document.querySelector('.modal-close');
        $modalOpenArr.forEach((boton) => {
            boton.addEventListener('click', () => {
            $modal.classList.add("is-active");
            const buttonId = boton.getAttribute("data");
            getDataModal(buttonId, characters);
        })
    })

        $modalClose.addEventListener('click', () => {
        $modal.classList.remove("is-active");
    })

    const $random = document.querySelector('.random_search');
    $random.addEventListener('click', async (event) => {
        event.preventDefault();
        getDataModal(random(1,20), characters);
        $modal.classList.add("is-active");
    })

}

main();

/////////////////// NUEVAS FUNCIONES

const getDataModal = async (idCharacter, characters) => {
    
    let episodeData = [];
    let planetData = [];
    
    const characterSelected = characters.find( ({id}) => id == idCharacter); 
    const {episode, origin} = characterSelected;
    const { name: planet, url } = origin;

    if(url !== ""){ //////////////// PLANETAS
        const response = await fetch(url); 
        const locationData = await response.json();
        const {name, dimension} = locationData; 
        planetData.push({name, dimension});
    } else{
        planetData.push({name: planet, dimension: "Dimension: unknown"});
    }

    for(i=0;i<episode.length;i++){ /////////////////// EPISODIOS
        const response = await fetch(episode[i]);
        const data = await response.json();
        const { name, episode: episodes, air_date } = data;
        episodeData.push({name, episodes, air_date});
    } 

    appendDataModal(characterSelected, planetData, episodeData);

}

const appendDataModal = (characterInfo, location, episode) =>{

    const {name, image, status, species, gender} = characterInfo;
    const $modalContent = document.querySelector('.is-striped');
    const $planetContent = document.querySelector('#episodeData'); 
    const $image = document.querySelector('#avatar'); 
    $modalContent.innerHTML = "";

    $image.innerHTML = `<img id="avatarImg" src="${image}" width="150px"><h3 id="characterName" class="title is-3">${name}</h3>`

    $planetContent.innerHTML = `<span class="tag is-link is-medium">Planet:&nbsp<b>${location[0].name}</b></span><span class="tag is-link is-medium"><b>${location[0].dimension}</b></span><span class="tag is-link is-medium">Status:&nbsp<b>${status}</b></span><span class="tag is-link is-medium">Gender:&nbsp<b>${gender}</b></span><span class="tag is-link is-medium">Species:&nbsp<b>${species}</b></span>`
    
    for(i=0;i<episode.length;i++){
        $modalContent.innerHTML += `<tr><td>${episode[i].episodes}</td><td>${episode[i].name}</td><td>${episode[i].air_date}</td></tr>`;
    } 

}

const random = (min,max) => Math.floor(Math.random() * (max - min + 1) ) + min;

/* Intento de uso de la API de GIPHY. Cuando queria mostrar los GIFS en el HTML me daba este error ---> Cross-Origin Read Blocking (CORB) blocked cross-origin response <URL> with MIME type text/html. See <URL> for more details.

const gifAppers = async () => {

    const $submitGif = document.querySelector('.handle_search_gif');
    $submitGif.addEventListener('click', async (event) => {
    event.preventDefault();
    const $inputGif = document.querySelector('.input_search_gif');
    const valorGif = $inputGif.value;

    console.log("It works");

    gifSearch();

    })

}

gifAppers();

const gifSearch = async () => {

    const url = "http://api.giphy.com/v1/gifs/search?q=rick-and-morty&api_key=lYebCU7wWZDdsjHkzS7Msr639hWqzvWt&limit=20";
    const response = await fetch(url);
    const gifs = await response.json();
    const {data} = gifs;
    const urls = data.map(({url}) => {
        return url;
    })
    console.log(urls);

    const div = document.querySelector(".holis");
    //div.innerHTML = "";
    
    for(i=0;i<urls.length;i++){
        //div.innerHTML += `<iframe src="${urls[i]}" alt="gif_rick_and_morty></iframe>`;
        div.innerHTML += `<img src="${urls[i]}">`;
        console.log(urls[i]);
    }
}

*/

