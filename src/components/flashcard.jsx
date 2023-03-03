import { useState } from 'react'
import flashcardsData from "./flashcards_container"
import React from 'react'
import '../App.css'

function Flashcards() {

  const [flashcards, set_flashcards] = useState(flashcardsData);
  const [counter, setCounter] = useState(0)
  const [clicked, setClickStatus] = useState(false)

  function handleChange(event) {
    // Increments Backwards
    if (event.target.id == "previous") {
      if (counter == 0) {
        setCounter(9)
      } else {
        setCounter(counter - 1)
      }
    }
    if (event.target.id == "next") {
      if (counter == 9) {
        setCounter(0)
      } else {
        setCounter(counter + 1)
      }
    }
    // Flips card here
    if (event.target.className == "card-text") {
      if (clicked == false){
        document.getElementsByClassName("card-text")[0].innerHTML = flashcards[counter].Language
        setClickStatus(true)

      }
      if (clicked == true){
        document.getElementsByClassName("card-text")[0].innerHTML = flashcards[counter].Hello
        setClickStatus(false)
      }
    }
  }
  return (
    <div className="flashcard">
      <div>
        Number of Flashcards : {flashcards.length}
      </div>
      <div className='card-container'>
        <div className='card-text' onClick={handleChange}>{flashcards[counter].Hello}</div>
        <button id = "previous" onClick={handleChange}>Previous</button>
        <button id = "next" onClick={handleChange}>Next</button>
      </div>
    </div>
  )
}

export default Flashcards
