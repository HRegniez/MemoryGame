//---------------------------Cards Coontainer

const cardArray = [

    //---------------------------------Cards

    {
        name: 'fries',
        img: 'img/fries.png',
    },
    {
        name: 'cheeseburger',
        img: 'img/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: 'img/hotdog.png',
    },
    {
        name: 'iceCream',
        img: 'img/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: 'img/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'img/pizza.png',
    },
    {
        name: 'fries',
        img: 'img/fries.png',
    },
    {
        name: 'cheeseburger',
        img: 'img/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: 'img/hotdog.png',
    },
    {
        name: 'iceCream',
        img: 'img/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: 'img/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'img/pizza.png',
    }
];

//----------------------------Randomize Card Order

cardArray.sort(() => 0.5 - Math.random());

//------------------------------------------Layout

const grid = document.querySelector('.grid');
let scoreDisplay = document.querySelector('#score');
let cardChosen = [];
let cardChosenId = [];
const cardWon = [];

function createBoard () {

    for (let i = 0; i < cardArray.length; i++) {

        const card = document.createElement('img');
        card.setAttribute('src', 'img/blank.png');
        card.setAttribute('data-id', i);

        card.addEventListener('click', flipCard);

        grid.appendChild(card);
    }
}

createBoard();

//---------------------------------------Card Event

function checkMatch () {
    const cards = document.querySelectorAll('img');
    const optionOneId = cardChosenId[0];
    const optionTwoId = cardChosenId[1];

    //-----------------------------------Check Match
    if (optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'img/blank.png');
        cards[optionTwoId].setAttribute('src', 'img/blank.png');
        alert('You have clicked the same image !')
    }
    if (cardChosen[0] == cardChosen[1]) {
        cards[optionOneId].setAttribute('src', 'img/white.png');
        cards[optionTwoId].setAttribute('src', 'img/white.png');

        cards[optionOneId].removeEventListener('click', flipCard);
        cards[optionTwoId].removeEventListener('click', flipCard);

        cardWon.push(cardChosen);

    } else {
        cards[optionOneId].setAttribute('src', 'img/blank.png');
        cards[optionTwoId].setAttribute('src', 'img/blank.png');
    }

    //-----------------------------------Turn Reset

    scoreDisplay.textContent = cardWon.length;

    cardChosen = [];
    cardChosenId = [];

    if(cardWon.length == (cardArray.length/2)) {
        scoreDisplay.textContent = 'You win !';
    }
}

function flipCard () {

    let cardId = this.getAttribute('data-id');

    cardChosen.push(cardArray[cardId].name);
    cardChosenId.push(cardId);
    console.log(cardChosen);
    console.log(cardChosenId);
    this.setAttribute('src', cardArray[cardId].img);

    if (cardChosen.length === 2) {
        setTimeout( checkMatch, 500);
    }
}
