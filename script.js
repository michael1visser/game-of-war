const suits = ["Hearts", "Clubs","Diamonds","Spades"]

let fullDeck = [] //Full Deck of cards

//let deckSize // Total number of cards in deck

let playerOne = []  //Player one's hand throughout the game

let playerTwo = [] //Player two's hand throughout the game

let cards1  //Cards currently in play for player 1

let cards2 //Cards currently in play for player 2


//DEFINE FUNCTION TO CREATE THE DECK OF 52 CARDS

function createDeck(deck){
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
 //deckSize = deck.length /2
}


/* DEFINE FUNCTION TO SHUFFLE(RANDOMIZE) THE DECK OF CARDS. 
Makes use of the Fisher-Yates algorithm, taken from 
https://medium.com/@nitinpatel_20236/how-to-shuffle-correctly-shuffle-an-array-in-javascript-15ea3f84bfb */

function shuffleDeck(deck){
    for(let i = deck.length - 1; i > 0; i--){
  const j = Math.floor(Math.random() * i)
  const temp = deck[i]
  deck[i] = deck[j]
  deck[j] = temp
}
}


//DEFINE FUNCTION TO DIVIDE CARDS BETWEEN THE TWO PLAYERS

function divideCards(player1, player2, deck){

//DEFINE FUNCTION TO ASSIGN HALF THE DECK TO A PLAYER

    function assignCards(deck, player){
        //console.log(deckSize)

        for (let i=0; i < 26; i++){
            player.push(deck[0])
            deck.shift()
        }
    }

//ASSIGN CARDS TO EACH PLAYER

assignCards(deck, player1)
assignCards(deck, player2)

}

//DEFINE FUNCTION TO CHECK FOR A WINNER

function checkForWinner(player1, player2, winTotal, runRound){
if (player1.length >= winTotal){
    console.log("Game over! Player 1 wins!")
}
else if (player2.length >= winTotal){
    console.log("Game over! Player 2 wins!")
}
else {
    runRound(player1, player2)
}
}

//DEFINE FUNCTION TO COMPARE CARDS

function compareCard(card1, player1, card2, player2, position){
    if (card1[position].value > card2[position].value){
        for (let i=0; i < card1.length; i++){
            player1.push(card1[i])
                }
         for (let j=0; j < card2.length; j++){
            player1.push(card2[j])
             }
        console.log(`Player 1 plays ${card1[position].name}, Player 2 plays ${card2[position].name}. Player 1 wins!`)

        console.log(`player 1 has ${player1.length} cards. p2  has ${player2.length} cards`)

        checkForWinner(player1, player2, 52, playRound)

    }
    else if (card1[position].value < card2[position].value){
        for (let i=0; i < card1.length; i++){
            player2.push(card1[i])
            }
        for (let j=0; j < card2.length; j++){
            player2.push(card2[j])
            }
        console.log(`Player 1 plays ${card1[position].name}, Player 2 plays ${card2[position].name}. Player 2 wins!`)
        
        console.log(`player 1 has ${player1.length} cards. p2  has ${player2.length} cards`)

        checkForWinner(player1, player2, 52)
    }
    else {
        console.log(`Player 1 plays ${card1[position].name}, Player 2 plays ${card2[position].name}. WAAAAAAAR!`)
        
        checkForWinner(player1, player2, 49, war)
        //war(card1, player1, card2, player2)
    }
}

//DEFINE FUNCTION FOR WAR
function war(player1, player2){


    cards1 = cards1.concat(player1.splice(0,4))
       // console.log(p1War)
    cards2 = cards2.concat(player2.splice(0,4))
                                                                                         //console.log(p2War)

    compareCard(cards1, player1, cards2, player2, 4)
}

//DEFINE FUNCTION TO PLAY A ROUND. RECURRING IF THERE IS WAR

function playRound(player1, player2){

    let cards1 = player1.splice(0,1)

    let cards2 = player2.splice(0,1)
    
compareCard(cards1, player1, cards2, player2, 0)

}

   

function playWar(){
createDeck(fullDeck)

shuffleDeck(fullDeck)

divideCards(playerOne, playerTwo, fullDeck)

checkForWinner(playerOne, playerTwo, 52, playRound)
}


//USE SPREAD OPERATOR (...) ON NEW ARRAYS TO MAKE SURE ORIGINAL ARRAYS ARE NOT AFFECTED BY POP/PUSH/ETC... 
//CAN I REDUCE DUPLICATE CODE WITH FUNCTION REFERENCES?


function testDeck(){
    createDeck(fullDeck)

shuffleDeck(fullDeck)

divideCards(playerOne, playerTwo, fullDeck)
}