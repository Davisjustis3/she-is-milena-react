import { Link } from "react-router-dom"
import { useState } from "react"
import { Login } from "./Login"

export function Navbar2() {
  const [dropDown, setDropDown] = useState(false)
  const handleDropDown = () => {
    setDropDown((prev) => !prev)
  } 
  const [popup, setPopup] = useState(false);
  const handlePopup = () => {
    setPopup((prev) => !prev);
  }
  // placeholder
  const user = false
  return (
    <>
        <nav id="navbar2">
        <div id="burger-container">
              <div className="logo-container">
            <Link><img id="logo" src="src/assets/miles-logo.webp" alt="" /></Link>
          </div>
          <div className="burger-menu"><i className="fa-solid fa-bars" onClick={handleDropDown}></i></div>
        </div>
        <div id="drop-down">
          {dropDown && (
            <ul id="nav-list2">
              <li><Link className="links-drop" to="/">Wiersze</Link></li>
              <hr />
              <li><Link className="links-drop" to="/Szepty">Szepty Przeszłości</Link></li>
              <hr />
              <li><Link className="links-drop" to="/Recenzje">Recenzje</Link></li>
              <hr />
              <li><Link className="links-drop" to="/Rozmowy">Rozmowy</Link></li>
              <hr />
              <li><Link className="links-drop" to="/OMnie">O mnie</Link></li>
              <hr />
              <li><Link className="links-drop" to="/Porozmawiajmy">Porozmawiajmy</Link></li>
              <hr />
              {!user ?
                <li><a href="" className="links-drop" onClick={handlePopup}>Login</a></li> :
                <li><a href="" className="links-drop" onClick={handlePopup}>Profile</a></li>
              }
            </ul>
            )}
          </div>
      </nav>
      <Login 
        popup={popup}
        handlePopup={handlePopup}
    />
    </>
  )
}