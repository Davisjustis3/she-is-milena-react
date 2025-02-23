import "./poem-popup.css"

export function PoemPopup(props) {
  const {poemDisplay, currentPoem, handlePoemDisplay} = props
  return (
    <>
      { poemDisplay && (
        <div id="poem-popup-container">
          <div id="poem-full-display">
            <i className="fa-solid fa-pen-to-square "></i>
            <i className="fa-solid fa-x w-full text-end cursor-pointer" onClick={handlePoemDisplay}></i>
            <h1 className="poem-name">{currentPoem.poemName}</h1>
            <p className="poem-date">Published <span className="date-text">{currentPoem.poemDate}</span></p>
            <hr />
            <pre>{currentPoem.poemText.replace(/<br\s*\/?>/g, "\n")}</pre>
            
          </div>
        </div>)
      }
 
    </>
  )
}