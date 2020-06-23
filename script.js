const suits = ["Hearts", "Clubs","Diamonds","Spades"]

let deck = [] //Full Deck of cards

let playerOne = []  //Player one's hand throughout the game

let playerTwo = [] //Player two's hand throughout the game


// FUNCTION TO CREATE THE DECK OF 52 CARDS

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
createDeck()

// FUNCTION TO SHUFFLE(RANDOMIZE) THE DECK OF CARDS

function shuffleDeck(){
    for(let i = deck.length - 1; i > 0; i--){
  const j = Math.floor(Math.random() * i)
  const temp = deck[i]
  deck[i] = deck[j]
  deck[j] = temp
}
}

shuffleDeck()

//FUNCTION TO ASSIGN HALF THE DECK TO EACH PLAYER

function assignCards(deckArray, player){
    for (let i=0; i < deckArray.length / 2; i++){
        player.push(deckArray[0])
        deckArray.shift()
    }
}
