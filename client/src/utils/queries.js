import {gql} from '@apollo/client';
//make a query for user decks that show all the associated with one user

//user flashcards which is dependent on the deck they have

export const HOME_DECKS = gql`
query decks{
    decks{
      _id
      title
      category
      description
      flashcards {
          _id
      }
    }
}
`
// this is not working yet
export const USER_DECKS = gql`
query userDecks{
    decks{
        _id
        title
        category
        description
        author
    }

}`

// this is not working yet
//you only need the 'query flashcards' here to put parameters in parenthesis

// this is not working yet
export const FLASHCARDS = gql`
query flashcards{
    flashcards{
        _id
        sideA
        sideB
        noteSideA
        noteSideB
    }
}`
// this is not working yet
export const FLASHCARD = gql`
query getFullDeck($deck: ID!){
    flashcard(deck: $deck){
        _id
        sideA
        sideB
        noteSideA
        noteSideB
        deck
    }
}`

//no data coming back and get a 400 error
export const STUDY_DECK = gql`
query getSingleDeck($deckId: ID!){
    deck(deckId: $deckId){
      _id
      title
      category
      description
      author
      flashcards {
          _id
      }
    }
}
`
//this does work
export const DECK_ID = gql`
query getSingleDeck($deckTitle: String){
    deckTitle(deckTitle: $deckTitle){
      _id
      title 
    }
}
`