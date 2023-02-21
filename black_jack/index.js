// 1. Create two variables, firstCard and secondCard.
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards


let cards =  []
let sum = 0;
let hasBlaclJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")

let player = {
   name : "MR. X",
   chips : 145
}



let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function startGame(){
  isAlive = true
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  cards = [firstCard, secondCard]
  sum = firstCard + secondCard
  hasBlaclJack = false
  renderGame()
}


function renderGame() {
  if (sum < 21) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlaclJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent  = message

  sumEl.textContent = 'Sum: ' + sum

  cardsEl.textContent = "Cards: "
  for (let count = 0; count < cards.length; count++){
    cardsEl.textContent  += cards[count] + ' '
  }
  
}

function newCard() {
  if (isAlive && !hasBlaclJack){
  let card = getRandomCard()
  cards.push(card)
  sum += card
  renderGame()}
  
}

function getRandomCard() {
  let randomCard = Math.floor( Math.random() * 13) + 1
  if (randomCard > 10){
    return 10 
  }
  else if (randomCard === 1){
    return 11
  }
  else {return randomCard}
   
  
  return Math.floor( Math.random() * 13) + 1
  
}
