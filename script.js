const suits = ["Hearts", "Clubs","Diamonds","Spades"]

let deck = [] //Full Deck of cards

let playerOne = []  //Player one's hand throughout the game

let playerTwo = [] //Player two's hand throughout the game


//DEFINE FUNCTION TO CREATE THE DECK OF 52 CARDS

function createDeck(){
for (let i = 0; i < suits.length; i++){
    for (let j = 2; j <= 14; j++){
        if(j === 11){
            deck.push({name: `Jack of ${suits[i]}`, value: j})
        }
    else if (j === 12){
        deck.push({name: `Queen of ${suits[i]}`, value: j})
    }
    else if (j === 13){
        deck.push({name: `King of ${suits[i]}`, value: j})
    }
    else if (j === 14){
        deck.push({name: `Ace of ${suits[i]}`, value: j})
    }
    else {
        deck.push({name: `${j} of ${suits[i]}`, value: j})
    }
        
    }
}
}


/* DEFINE FUNCTION TO SHUFFLE(RANDOMIZE) THE DECK OF CARDS. 
Makes use of the Fisher-Yates algorithm, taken from 
https://medium.com/@nitinpatel_20236/how-to-shuffle-correctly-shuffle-an-array-in-javascript-15ea3f84bfb */

function shuffleDeck(){
    for(let i = deck.length - 1; i > 0; i--){
  const j = Math.floor(Math.random() * i)
  const temp = deck[i]
  deck[i] = deck[j]
  deck[j] = temp
}
}


//DEFINE FUNCTION TO DIVIDE CARDS BETWEEN THE TWO PLAYERS

function divideCards(play1, play2){

//DEFINE FUNCTION TO ASSIGN HALF THE DECK TO A PLAYER

    function assignCards(deckArray, player){
        let deckLength = deckArray.length / 2
        for (let i=0; i < 26; i++){
            player.push(deckArray[0])
            deckArray.shift()
        }
    }

//ASSIGN CARDS TO EACH PLAYER

assignCards(deck, playerOne)
assignCards(deck, playerTwo)

}

//DEFINE FUNCTION TO CHECK FOR A WINNER

function checkForWinner(player1, player2){
if (player1.length >= 35){
    console.log("Game over! Player 1 wins!")
}
else if (player2.length >= 35){
    console.log("Game over! Player 2 wins!")
}
else {
    playRound(player1, player2)
}
}

//DEFINE FUNCTION TO COMPARE CARDS

function compareCard(card1, originDeck1, card2, originDeck2, position){
    if (card1[position].value > card2[position].value){
        for (let i=0; i < card1.length; i++){
            originDeck1.push(card1[i])
                }
         for (let j=0; j < card2.length; j++){
             originDeck1.push(card2[j])
             }
        console.log(`Player 1 plays ${card1[position].name}, Player 2 plays ${card2[position].name}. Player 1 wins!`)

        console.log(`player 1 has ${playerOne.length} cards. p2  has ${playerTwo.length} cards`)

        checkForWinner(originDeck1, originDeck2)

    }
    else if (card1[position].value < card2[position].value){
        for (let i=0; i < card1.length; i++){
        originDeck2.push(card1[i])
            }
        for (let j=0; j < card2.length; j++){
            originDeck2.push(card2[j])
            }
        console.log(`Player 1 plays ${card1[position].name}, Player 2 plays ${card2[position].name}. Player 2 wins!`)
        
        console.log(`player 1 has ${playerOne.length} cards. p2  has ${playerTwo.length} cards`)

        checkForWinner(originDeck1, originDeck2)
    }
    else {
        console.log(`Player 1 plays ${card1[position].name}, Player 2 plays ${card2[position].name}. WAAAAAAAR!`)
        
        war(card1, originDeck1, card2, originDeck2)
    }
}

//DEFINE FUNCTION FOR WAR
function war(initialCard1, playerOne, initialCard2, playerTwo){
    let p1War = initialCard1.concat(playerOne.splice(0,4))
       // console.log(p1War)
    let p2War = initialCard2.concat(playerTwo.splice(0,4))
                                                                                         //console.log(p2War)

    let warPosition = Math.min(p1War.length, p2War.length) - 1
        //console.log(warPosition)
    compareCard(p1War, playerOne, p2War, playerTwo, warPosition)
}

//DEFINE FUNCTION TO PLAY A ROUND. RECURRING IF THERE IS WAR

function playRound(cardsInPlay1, cardsInPlay2){

    let p1Cards = cardsInPlay1.splice(0,1)

    let p2Cards = cardsInPlay2.splice(0,1)
    
compareCard(p1Cards, playerOne, p2Cards, playerTwo, 0)

}

   

function playWar(){
createDeck()

shuffleDeck()

divideCards(playerOne, playerTwo)

checkForWinner(playerOne, playerTwo)
}
