//Declare Global Variables
let cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];
let cardsInPlay = [];
let score = 0;

//Logic Functions
function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
		score++;
		document.getElementById('score').textContent = score;
	}
		else {
			alert("Sorry, try again.");
		}
}

function flipCard() {
	let cardId = this.getAttribute('data-id');
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);
	if (cardsInPlay.length === 2) {
		setTimeout(checkForMatch, 100);
	}
}

//Main Display
function createBoard() {
	for (let i = 0; i < cards.length; i++) {
		let cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}

//Reset
function reset() {
	let deleteElement = document.getElementById('game-board');
	for (let i = 0; i < cards.length; i++) {
		deleteElement.removeChild(deleteElement.lastChild);
	}
	while (cardsInPlay.length > 0) {
		cardsInPlay.pop();
	}
	createBoard();
}

document.querySelector('button').addEventListener('click', reset);

//Main Function
createBoard();