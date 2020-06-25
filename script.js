const playButton = document.getElementById("play-button")

playButton.addEventListener("click", playWar)


class Deck {
    constructor(){
        this.deck = []
    }
    
    
    //DEFINE FUNCTION TO CREATE THE DECK OF 52 CARDS

    createDeck(){
        //this.deck = []
        const suits = ["Hearts", "Clubs","Diamonds","Spades"]

        for (let i = 0; i < suits.length; i++){
            for (let j = 2; j <= 14; j++){
                if(j === 11){
                    this.deck.push({name: `Jack of ${suits[i]}`, value: j})
                }
            else if (j === 12){
                this.deck.push({name: `Queen of ${suits[i]}`, value: j})
            }
            else if (j === 13){
                this.deck.push({name: `King of ${suits[i]}`, value: j})
            }
            else if (j === 14){
                this.deck.push({name: `Ace of ${suits[i]}`, value: j})
            }
            else {
                this.deck.push({name: `${j} of ${suits[i]}`, value: j})
            }
                
            }
        }
    }  
    
    /* DEFINE FUNCTION TO SHUFFLE(RANDOMIZE) THE DECK OF CARDS. 
    Makes use of the Fisher-Yates algorithm js translation described in: 
    https://medium.com/@nitinpatel_20236/how-to-shuffle-correctly-shuffle-an-array-in-javascript-15ea3f84bfb */

    shuffleDeck(){
        for(let i = this.deck.length - 1; i > 0; i--){
            const j = Math.floor(Math.random() * i)
            const temp = deck[i]
            this.deck[i] = this.deck[j]
            this.deck[j] = temp
        }
    } 


}

const firstGame = new Deck([])

let deck = firstGame.deck

let playerOne = []  //Player one's hand throughout the game

let playerTwo = [] //Player two's hand throughout the game

let cards1 = [] //Cards currently in play for player 1

let cards2 = [] //Cards currently in play for player 2


//DEFINE FUNCTION TO DIVIDE CARDS BETWEEN THE TWO PLAYERS

let divideCards = (player1, player2, deck) => {

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
    resetGame()
}
else if (player2.length >= winTotal){
    console.log("Game over! Player 2 wins!")
    resetGame()
}
else {
    runRound(player1, player2)
}
}


//DEFINE FUNCTION FOR WINNER TO COLLECT CARDS

let collectCards = (card1, card2, player) => {
    for (let i=0; i < card1.length; i++){
        player.push(card1[i])
    }
    
    for (let j=0; j < card2.length; j++){
        player.push(card2[j])
    }
}



//DEFINE FUNCTION TO LOG WHO WON THE ROUND

let roundWinner = (card1, card2, player, position) => console.log(`Player 1 plays ${card1[position].name}, Player 2 plays ${card2[position].name}. ${player} wins!`)



//DEFINE FUNCTION TO LOG PLAYER CARD TOTALS

let playerTotals = (player1, player2) => console.log(`Player 1 has ${player1.length} cards. Player 2  has ${player2.length} cards`)



//DEFINE FUNCTION TO COMPARE CARDS

function compareCard(card1, player1, card2, player2, position){ 

    if (card1[position].value > card2[position].value){
    
        collectCards(card1, card2, player1)

        roundWinner(card1, card2, "Player 1", position)

        playerTotals(player1, player2)

        checkForWinner(player1, player2, 52, playRound)

    }
    else if (card1[position].value < card2[position].value){

        collectCards(card1, card2, player2)
        
        roundWinner(card1, card2, "Player 2", position)
        
        playerTotals(player1, player2)

        checkForWinner(player1, player2, 52, playRound)
    }
    else {
        console.log(`Player 1 plays ${card1[position].name}, Player 2 plays ${card2[position].name}. WAAAAAAAAAAAAAAAAAR!`)
        
        checkForWinner(player1, player2, 47, war)
        
    }
}



//DEFINE FUNCTION TO PLAY A ROUND.

function playRound(player1, player2){

    cards1 = player1.splice(0,1)

    cards2 = player2.splice(0,1)
    
    compareCard(cards1, player1, cards2, player2, 0)

}



//DEFINE FUNCTION FOR WAR
function war(player1, player2){

    cards1 = cards1.concat(player1.splice(0,4))

    cards2 = cards2.concat(player2.splice(0,4))

    let position = cards1.length -1

    compareCard(cards1, player1, cards2, player2, position)
}


//DEFINE FUNCTION TO RESET GAME
const resetGame = () => {
    //deck = []
    playerOne = []
    playerTwo = []
}

   

function playWar(){

    firstGame.createDeck()

    firstGame.shuffleDeck()

    divideCards(playerOne, playerTwo, deck)

    checkForWinner(playerOne, playerTwo, 52, playRound)
}



