/**
 *
 *
 *
Riprendiamo l'esercizio carosello e rifacciamolo, questa volta usando gli oggetti, prendendo come riferimento il codice scritto 
oggi insieme a lezione, che troverete direttamente nella mia repository di github a questo link: [link github]

Modifichiamo il codice dell'esercizio per renderlo funzionante con un array di oggetti al posto dei tre array separati, con una 
sola regola: non è possibile modificare l'HTML ma solamente JS e CSS.
Ricordiamo sempre l'importanza dell'integrità del dato.

Bonus 1:
Sperimentiamo attraverso l'uso delle timing functions anche una funzionalità di scorrimento al nostro carosello:
al click di un bottone o già dall'inizio possiamo far partire, ad intervalli di tempo a piacere, lo scorrimento delle immagini 
disponibili nel carosello stesso.

Bonus 2:
E se volessi un bottone per invertire la "direzione" del carosello?

 *
 */
// Array di oggetti fornito
const mainArray = [
    {
    place: 'Svezia',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    image: 'img/01.jpg',
    },
    {
    place: 'Svizzera',
    text: 'Lorem ipsum',
    image: 'img/02.jpg',
    },
    {
    place: 'Gran Bretagna',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    image: 'img/03.jpg',
    },
    {
    place: 'Germania',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    image: 'img/04.jpg',
    },
    {
    place: 'Paradise',
    text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    image: 'img/05.jpg',
    },
];

// Inizializzo le variabili con cui verranno inseriti gli elementi nell'HTML
let carouselContent = ``;
let thumbnailsContent = ``;

// Creo un ciclo for per inserire i contenuti degli array nei div
for (let i = 0; i < mainArray.length; i++){
    carouselContent += `
    <div class="main-carousel position-relative ${i != 0 ? 'd-none' : ''}">
        <img src="${mainArray[i].image}" alt="${mainArray[i].place}">
        <div class="text-white text-end position-absolute bottom-0 end-0 pe-2">
            <h3>${mainArray[i].place}</h3>
            <p>${mainArray[i].text}</p>
        </div>
    </div>
    `

    thumbnailsContent += `
    <div class="my-thumbnails-container d-inline-block ${i != 0 ? 'my-filter' : 'my-border-white'}">
    <img class="img-fluid" src="${mainArray[i].image}" alt="${mainArray[i].place}">
    </div>`
}; 

// Creo una variabile con cui prendo tramite id l'elemento dell'html dove inserire i nuovi elementi
const mainCarousel = document.querySelector(".my-carousel-images");
mainCarousel.innerHTML=carouselContent;

// Creo una variabile con cui prendo tramite id l'elemento dell'html dove inserire i nuovi elementi
const thumbnailsContainer = document.querySelector(".my-thumbnails");
thumbnailsContainer.innerHTML+=thumbnailsContent;

// Creo una variabile con cui prendo tramite id l'elemento dell'html dove inserire i nuovi elementi
const carouselElements = document.getElementsByClassName(`main-carousel`);

// Creo una variabile con cui prendo tramite id l'elemento dell'html dove inserire i nuovi elementi
const thumbnailsElements = document.getElementsByClassName("my-thumbnails-container");

// Creo una variabile a cui do di base valore 0 e che mi servirà come posizione di partenza per l'addEventListener
let index = 0;

// addEventListener su next-arrow
const nextButton = document.querySelector(".my-next");
nextButton.addEventListener(`click`, function() {
    carouselElements[index].classList.add(`d-none`);
    thumbnailsElements[index].classList.remove(`my-border-white`);
    thumbnailsElements[index].classList.add(`my-filter`);

    if (index === mainArray.length -1){
        index = 0;
    } else {
        index++;
    }
    carouselElements[index].classList.remove(`d-none`);
    thumbnailsElements[index].classList.add(`my-border-white`);
    thumbnailsElements[index].classList.remove(`my-filter`);

})

// addEventListener su up-arrow
const prevButton = document.querySelector(".my-previous");
prevButton.addEventListener(`click`, function() {
    carouselElements[index].classList.add(`d-none`);
    thumbnailsElements[index].classList.remove(`my-border-white`);
    thumbnailsElements[index].classList.add(`my-filter`);

    if (index === 0){
        index = mainArray.length - 1;
    } else {
        index--;
    }
    carouselElements[index].classList.remove(`d-none`);
    thumbnailsElements[index].classList.add(`my-border-white`);
    thumbnailsElements[index].classList.remove(`my-filter`);

})