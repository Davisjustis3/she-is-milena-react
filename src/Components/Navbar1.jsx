import { Link } from "react-router-dom"
import { useState } from "react";
import { Login } from "./Login";
import { onAuthStateChanged } from "firebase/auth";

export function Navbar1() {
  const [popup, setPopup] = useState(false);
  const handlePopup = () => {
    setPopup((prev) => !prev)
    setSignUpPopup(false)
  }
  const [signUpPopup, setSignUpPopup] = useState(false)
   const handleSignUpPopup = () => {
     setSignUpPopup((prev) => !prev)
     setPopup(false)
  }
  const user = false
  return (  
    <>
    <nav id="navbar1">
    <div className="logo-container">
      <Link to="/"><img id="logo" src="src/assets/miles-logo.webp" alt="Milena logo"/></Link>
    </div>
    <div className="list-container">
      <ul className="nav-list">
        <li><Link className="links" to="/">Wiersze</Link></li>
        <li><Link className="links" to="/Szepty">Szepty Przeszłości</Link></li>
        <li><Link className="links" to="/Recenzje">Recenzje</Link></li>
        <li><Link className="links" to="/Rozmowy">Rozmowy</Link></li>
        <li><Link className="links" to="/OMnie">O mnie</Link></li>
        <li><Link id="lets-talk-btn" to="/Porozmawiajmy">Porozmawiajmy</Link></li>
      </ul>
            
      </div>
      <div className="login-container">
        <Link to="/AdminPage"><i className="fa-solid fa-user"></i></Link>
        {!user ?
                <p className="links-drop" onClick={handlePopup}>Login</p> : 
            <p className="links-drop" onClick={handlePopup}>Logout</p>}
      </div>
    </nav>
    <Login 
        popup={popup}
        handlePopup={handlePopup}
        signUpPopup={signUpPopup}
        handleSignUpPopup={handleSignUpPopup}
    />
    </>
  )
}
