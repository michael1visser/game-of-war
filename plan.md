
** GAME FLOW **

START GAME
    - Shuffle deck
    - assign cards to both players
PLAY ROUND
    - compare top cards
            -if one is greater, player wins -> collect cards
            -if cards are the same, war -> play war 
    
    -play war 
        - take 4 cards from the top
        - compare last card pulled.
            -if one is greater, player wins -> collect cards
            -if cards are the same, war -> repeat war   

    -collect cards:
        - winning player adds all cards to bottom of deck
CHECK FOR WINNER
    -count how many cards each player has.
    -if one player has 52 cards, player wins -> END GAME
    -if not, repeat play round

END GAME
    -print which player won. 


** GLOBAL VARIABLES **

playerOne - object:
    - current card total
    - array of player's hand

playerTwo - object:
    - current card total
    - array of player's hand

deck - array of 52 cards:
    -each card is an object with a name, suit, and value.

round - count of the number of rounds that have been played.

** FUNCTIONS **

shuffleAndDeal() - randomize the deck array, give each player half the cards.

playRound() - shift one card from each player's hand. Use compareCards() to check for winner or war.
        LOCAL VARIABLE - p1Cards, p2Cards - both are arrays in case there is a round of war. use if/else to determine compareCards or war.

compareCards() - uses two parameters to compare designated card (first for normal round, last for war) from each player to determine winner or war. if one card is greater, call collectCards(). If cards are equal, call war()

war() - use for loop to shift first four cards from players' hand into p1Cards/p2Cards variables. use compareCards function to compare last card. if one card is greater, call collectCards(). If cards are equal, call war()

collectCards() - push cards from p1Cards and p2Cards to winning player's array. Update both players' card totals. If one total is 52, player is winner, else repeat compareCards()

printWinner() - name of winning player and number of rounds printed in the console. 
