let playerName = "Jack"; 
let playerChips = 145; 
let cards = [];
let sum = 0;
let hasBlackjack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");
let winSound = new Audio("win.mp3");
let loseSound = new Audio("lose.mp3");

playerEl.textContent = playerName + ": $" + playerChips;

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber > 10) {
        return 10;
    } else if (randomNumber === 1) {
        return 11;
    } else {
        return randomNumber;
    }
}

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cards: " + cards.join(" ");
    sumEl.textContent = "Sum: " + sum;

    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!";
        hasBlackjack = true;
        winSound.play();
    } else {
        message = "You're out of the game!";
        isAlive = false;
        message += " You lost all your chips.";
        loseSound.play(); 
    }
    messageEl.textContent = message;
}

function newCard() {
    if (isAlive && !hasBlackjack) {
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }
}

function restartGame() {
  
    cards = [];
    sum = 0;
    hasBlackjack = false;
    isAlive = false;
    message = "";
    messageEl.textContent = "";
    cardsEl.textContent = "";
    sumEl.textContent = "";

}