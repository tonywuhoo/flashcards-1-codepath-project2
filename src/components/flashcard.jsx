import { useState } from 'react'
import flashcardsData from "./flashcards_container"
import React from 'react'
import '../App.css'

function Flashcards() {

  const [flashcards, set_flashcards] = useState(flashcardsData);
  const [counter, setCounter] = useState(0)
  const [clicked, setClickStatus] = useState(false)
  const [input, setInput] = useState("")
  const [winstreak, setwinstreak] = useState(0)
  const [highestscore, sethighestscore] = useState(0)

  

  function handleButton(event) {
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
    if (event.target.id == "shuffle") {
      setCounter(Math.floor(Math.random() * 10))
    }
    // Flips card here
    if (event.target.className == "card-container" || event.target.className == "card-text") {
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

  function handleSubmit(event) {
    event.preventDefault()
    if (clicked == true) {
      alert("The answer is being shown...")
    }
    if (input == flashcards[counter].Language && clicked == false) {
      console.log(document.getElementById("inputform").value = "")
      setInput("")
      setwinstreak(winstreak + 1)
      if (winstreak >= highestscore) {
        sethighestscore(winstreak + 1)
      }
      alert("Correct Answer")
      setCounter(counter + 1)
    }
    if (input != flashcards[counter].Language && clicked == false) {
      console.log(document.getElementById("inputform").value = "")
      setInput("")
      setwinstreak(0)
      alert("Wrong Answer")
    }
  }
  
  function handleChange(event) {
    if (event.target.id == "inputform") {
      setInput(event.target.value)
    }
  }
  return (
    <div className="flashcard">
      <div>
        Number of Flashcards : {flashcards.length}
      </div>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">{flashcards[counter].Hello}</div>
          <div class="flip-card-back">{flashcards[counter].Language}</div>
        </div>
      </div>
      
      <br></br>
      <div className='container-for-game'>
        <div className='win-streak'>Win Streak: {winstreak}</div>
        <div className='highest-score'>Highest Score: {highestscore}</div>
      </div>
      <br></br>
      <form onSubmit={handleSubmit}>
        <label for="inputform">Enter an Answer: </label>
        <input onChange={handleChange} id = "inputform" placeholder="Enter an answer" type="text"/>
        <input type="submit"/>
      </form>
      <br></br>
      <button id = "previous" onClick={handleButton}>Previous</button>
      <button id="next" onClick={handleButton}>Next</button>
      <button id = "shuffle" onClick={handleButton}>Shuffle</button>
    </div>
  )
}

export default Flashcards
