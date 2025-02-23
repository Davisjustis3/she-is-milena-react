
import "./popup.css"
import { useState } from "react"
import { collection, addDoc } from "firebase/firestore";
import { db } from "../config/FirebaseConfig";

export function NewPoetry(props) {
  const { popup, handlePopup } = props
  const [poemName, setPoemName] = useState("")
  const [poemDate, setPoemDate] = useState("")
  const [poemText, setPoemText] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "poems"), {
        poemName,
        poemDate,
        poemText,
      })

        setPoemName("")
        setPoemDate("")
        setPoemText("")

      handlePopup();
    } catch (error) {
      console.error("Error adding poems: ", error);
    }
  }
  return (
    <>
    { popup && (
        <div id="popup-container">
              <form id="input-area" onSubmit={handleSubmit}>
            <i className="fa-solid fa-x w-full text-end" onClick={handlePopup}></i>
                <div id="title">
                    <h2 >Add Your Poetry</h2>
                </div>
                <label htmlFor="input-one">Name of poetry</label>
            <input
              id="input-one"
              className="input-bar"
              type="text"
              placeholder="Type here..."
              value={poemName}
              onChange={(e) => setPoemName(e.target.value)}
              required
            />
                <label htmlFor="input-two">Date</label>
            <input
              id="input-two"
              className="input-bar"
              type="text"
              placeholder="YYYY-MM-DD"
              value={poemDate}
              onChange={(e) => setPoemDate(e.target.value)}
              required />
                <label htmlFor="textarea">Poem</label>
            <textarea
              className="input-bar"
              name="text"
              id="textarea"
              placeholder="Add your poem here..."
              value={poemText}
              onChange={(e) => setPoemText(e.target.value)}
              required>
                </textarea>
                <button value="submit" id="submit-btn">Submit</button>
              </form>
      </div>
    )
}
    </>
    )
  }
