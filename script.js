const playButton = document.getElementById("play-button")

playButton.addEventListener("click", playWar)



class Card {
    constructor(suit, rank, score){
       this.suit = suit
       this.rank = rank
       this.score = score
    }

}

class Deck {
    constructor(deckLength){
        this.deckLength = deckLength
        this.cards = []
        this.suits = ["Hearts", "Spades", "Diamonds", "Clubs"]
        this.ranks = ["Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King","Ace"]
    }

    //DEFINE FUNCTION TO CREATE DECK
   
createDeck(){
    for (let i=0; i < this.suits.length; i++){
        for (let j=0; j < 13; j++){
            this.cards.push(new Card(this.suits[i], this.ranks[j], j+2))
        }
    }
 } 

  /* DEFINE FUNCTION TO SHUFFLE(RANDOMIZE) THE DECK OF CARDS. 
    Makes use of the Fisher-Yates algorithm js translation described in: 
    https://medium.com/@nitinpatel_20236/how-to-shuffle-correctly-shuffle-an-array-in-javascript-15ea3f84bfb */

    shuffleDeck(){
        for(let i = this.cards.length - 1; i > 0; i--){
            const j = Math.floor(Math.random() * i)
            const temp = this.cards[i]
            this.cards[i] = this.cards[j]
            this.cards[j] = temp
        }
    } 
}

let firstGame = new Deck(52)


let deck = firstGame.cards

let playerOne = new Deck(26)  //Player one's hand throughout the game

let playerTwo = new Deck(26) //Player two's hand throughout the game

let cards1 = [] //Cards currently in play for player 1

let cards2 = [] //Cards currently in play for player 2

let pot = new Deck(0)


//DEFINE FUNCTION TO DIVIDE CARDS BETWEEN THE TWO PLAYERS

let divideCards = (player1, player2, deck) => {

    //DEFINE FUNCTION TO ASSIGN HALF THE DECK TO A PLAYER

    function assignCards(deck, player){
        //console.log(deckSize)

        for (let i=0; i < player.deckLength; i++){
            player.cards.push(deck[0])
            deck.shift()
        }
    }

    //ASSIGN CARDS TO EACH PLAYER

    assignCards(deck, player1)
    assignCards(deck, player2)

}

//DEFINE FUNCTION TO CHECK FOR A WINNER

function checkForWinner(player1, player2, winTotal, runRound){
if (player2.cards.length <= winTotal){
    console.log("Game over! Player 1 wins! Click Play WAR! to play again.")
    resetGame()
}
else if (player1.cards.length <= winTotal){
    console.log("Game over! Player 2 wins! Click Play WAR! to play again.")
    resetGame()
}
else {
    runRound(player1, player2)
}
}


//DEFINE FUNCTION FOR WINNER TO COLLECT CARDS

let collectCards = (card1, card2, player) => {
    
    pot.cards = card1.concat(card2)
    pot.shuffleDeck()

    for (let i=0; i < pot.cards.length; i++){
        player.cards.push(pot.cards[i])
    }
    
}



//DEFINE FUNCTION TO LOG WHO WON THE ROUND

let roundWinner = (card1, card2, player, position) => console.log(`Player 1 plays ${card1[position].rank} of ${card1[position].suit}, Player 2 plays ${card2[position].rank} of ${card2[position].suit}. ${player} wins! `)



//DEFINE FUNCTION TO LOG PLAYER CARD TOTALS

let playerTotals = (player1, player2) => console.log(`Player 1 has ${player1.cards.length} cards. Player 2  has ${player2.cards.length} cards`)



//DEFINE FUNCTION TO COMPARE CARDS

function compareCard(card1, player1, card2, player2, position){ 

    if (card1[position].score > card2[position].score){
    
        collectCards(card1, card2, player1)

        roundWinner(card1, card2, "Player 1", position)

        playerTotals(player1, player2)

        checkForWinner(player1, player2, 1, playRound)

    }
    else if (card1[position].score < card2[position].score){

        collectCards(card1, card2, player2)
        
        roundWinner(card1, card2, "Player 2", position)
        
        playerTotals(player1, player2)

        checkForWinner(player1, player2, 1, playRound)
    }
    else {
        console.log(`Player 1 plays ${card1[position].rank} of ${card1[position].suit}, Player 2 plays ${card2[position].rank} of ${card2[position].suit}. WAAAAAAAAAAAAAAAAAR!`)
        
        checkForWinner(player1, player2, 5, war)
        
    }
}



//DEFINE FUNCTION TO PLAY A ROUND.

function playRound(player1, player2){

    cards1 = player1.cards.splice(0,1)

    cards2 = player2.cards.splice(0,1)
    
    compareCard(cards1, player1, cards2, player2, 0)

}



//DEFINE FUNCTION FOR WAR
function war(player1, player2){

    cards1 = cards1.concat(player1.cards.splice(0,4))

    cards2 = cards2.concat(player2.cards.splice(0,4))

    let position = cards1.length -1

    compareCard(cards1, player1, cards2, player2, position)
}


//DEFINE FUNCTION TO RESET GAME
const resetGame = () => {
    //deck = []
    playerOne.cards = []
    playerTwo.cards = []
}

   

function playWar(){

    firstGame.createDeck()

    firstGame.shuffleDeck()

    divideCards(playerOne, playerTwo, firstGame.cards)

    checkForWinner(playerOne, playerTwo, 52, playRound)
}



