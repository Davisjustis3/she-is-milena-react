import { div } from "framer-motion/client"
import "./new-poetry.css"
import { useState } from "react"

export function NewPoetry(props) {
  const { popup, handlePopup } = props
  return (
    <>
    
    { popup && (
    <div
      id="new-poetry-container">
      <form id="input-area">
        <i className="fa-solid fa-x" onClick={handlePopup}></i>
        <h2>Add Your Poetry</h2>
        <p>Name of poetry:</p>
        <input className="poetry-popup" type="text" placeholder="Type here..." />
        <p>Date: </p>
        <input className="poetry-popup" type="text" placeholder="D/M/Y" />
        <p>Poem:</p>
        <textarea className="poetry-popup" name="text" id="textarea" placeholder="Add your poem here...">
        </textarea>
        <button id="submit-btn" onClick={handlePopup}>Submit</button>
      </form>
      </div>
    )
}
    </>
    )
  }
