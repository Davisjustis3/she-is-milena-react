import { div, section } from "framer-motion/client";
import { Link } from "react-router-dom"
import "./admin-page.css"
import { Footer } from "../Components/Footer";
import { NewPoetry } from "../Components/NewPoetry";
import { useState } from "react";
export function AdminPage() {
  const [popup, setPopup] = useState(false);
  const handlePopup = () => {
    setPopup((prev) => !prev);
  }
  return (
    <>
      <section id="authentication">
      <nav id="left-nav">
        <div className="logo-container-auth">
          <Link to="/"><img id="logo-auth" src="src/assets/miles-logo.webp" alt="Milena logo"/></Link>
        </div>
        <ul className="nav-list-auth">
        <li><i className="fa-solid fa-scroll"></i><Link className="links" to="/">Wiersze</Link></li>
        <li><i className="fa-solid fa-book"></i><Link className="links" to="/Szepty">Szepty Przeszłości</Link></li>
        <li><i className="fa-solid fa-pen"></i><Link className="links" to="/Recenzje">Recenzje</Link></li>
        <li><i className="fa-solid fa-microphone-lines"></i><Link className="links" to="/Rozmowy">Rozmowy</Link></li>
        <li><i className="fa-solid fa-address-card"></i><Link className="links" to="/OMnie">O mnie</Link></li>
      </ul>
      </nav>
      <div id="authentication-container">
          <h2>My Profile</h2>
          <header>
            <div className="flex items-center ">
              <div className="w-3/6 font-bold"><p id="user-text" >Hi, Milena</p></div>
              <div className="w-3/6 flex justify-end"><button id="add-poetry-btn"  onClick={handlePopup}>Add Poetry</button></div>
            </div>
            <div className="flex ">
              <p className="w-1/3">Milena Bres</p>
              <p className="w-1/3">0000001</p>
              <p className="w-1/3">email@donkeykong.com</p>
            </div>
        </header>
        <div id="top-container">
          <h3>Poem Info</h3>
            <div id="info-container">
              <div id="interactions" className="bg-white">
                <p className="font-bold">Interactions</p>
                <p>Poem Likes: 150</p>
                <p>Comments: 24</p>
              </div>
              <div id="statistics" className="bg-white">
                <p className="font-bold">Poem Statistics</p>
                <p>Most liked poem: October Blues</p>
                <p>Poem with most Comments: Oddanie</p>
              </div>
              <div id="settings" className="bg-white">
                <p className="font-bold">Settings</p>
                <p><a href="">Change email</a></p>
                <p><a href="">Change password</a></p>
              </div>
              <div></div>
          </div>
        </div>
        </div>
        
      </section>
      <NewPoetry
        popup={popup}
        handlePopup={handlePopup} />
      <Footer />
      </>
  )
}