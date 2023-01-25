import React from "react";
import Navbar from '../components/Navbar'
//import { useState } from 'react-router-dom';
// import Header from "../components/Header_WIP/Header";
// import Footer from "../components/Footer_WIP/Footer";
import FlashcardStudy from "../components/FlashcardStudy/FlashcardStudy";
import { useQuery } from '@apollo/client';
// import { STUDY_DECK} from '../utils/queries';
import { FLASHCARD, HOME_DECKS } from '../utils/queries';
import { useLocation } from 'react-router-dom'



const Study = () => {
  const location = useLocation();
  const deckId = location.state.deck;
  // console.log(`useLocation hook: ------------------`)
  // console.log(location);
  // console.log("deck ID-----------------");
  // console.log(deckId);

  const {loading, data} = useQuery(FLASHCARD,{variables: {deck: deckId}});
  const {loadingDecks, dataDecks} = useQuery(HOME_DECKS);
  console.log(dataDecks);
  // console.log(useQuery(HOME_DECKS
    // ,{variables: {deck: deckId}})
  // ));
  //WE HAVE TO BE SPECIFIC AND TELL IT WHAT WE WANT FROM THE DATA THUS .FLASHCARDS
  //THE OR OPERATOR IS HERE FOR SAFETY IN CASE WE DON'T GET ANYTHING BACK FROM THE QUERY DATA
  const flashcardData = data || {}
  // const home_flashcards = data
  

  if (loading) {
    return <h2>Loading...</h2>
  }
  return (
    <main>
    <Navbar />

      <div className="flex-row justify-center">
        <div>
          <h2>Study</h2>
          <FlashcardStudy flashcards={flashcardData}/>
          {/* <SearchBar/> */}
        </div>
      </div>
    </main>
  );
};

export default Study;