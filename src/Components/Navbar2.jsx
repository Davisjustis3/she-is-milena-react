import { Link } from "react-router-dom"
import { useState } from "react"

export function Navbar2() {
  const [dropDown, setDropDown] = useState(false)
  const handleDropDown = () => {
    setDropDown((prev) => !prev)
  } 
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
              <Link className="links-drop" to="/Authentication">Admin Login</Link>
              <hr />
              <li><Link className="links-drop" to="/Porozmawiajmy">Porozmawiajmy</Link></li>
            </ul>
            )}
          </div>
    </nav>
    </>
  )
}