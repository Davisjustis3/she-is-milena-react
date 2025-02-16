import { div, section } from "framer-motion/client";
import { Link } from "react-router-dom"
import "./auth.css"
import { Footer } from "../Components/Footer";
import { NewPoetry } from "../Components/NewPoetry";
import { useState } from "react";
export function Authentication() {
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
        <li><Link className="links" to="/">Wiersze</Link></li>
        <li><Link className="links" to="/Szepty">Szepty Przeszłości</Link></li>
        <li><Link className="links" to="/Recenzje">Recenzje</Link></li>
        <li><Link className="links" to="/Rozmowy">Rozmowy</Link></li>
        <li><Link className="links" to="/OMnie">O mnie</Link></li>
        <li><Link id="lets-talk-btn-auth" to="/Porozmawiajmy">Porozmawiajmy</Link></li>
      </ul>
      </nav>
      <div id="authentication-container">
        <header>
          <h2>HEADER</h2>
          <h2 id="user-text">Hi, User</h2>
        </header>
        <button id="add-poetry-btn" onClick={handlePopup}>Add New Poetry</button>
        <button id="add-poetry-btn">Update Poetry</button>
        <button id="add-poetry-btn">Delete Poetry</button>
        <div id="top-container">
          <div>
            <h2>Wszystkie Wiersze:</h2>
            <p>92</p>
          </div>
          <div>
            <h2>Całkowita Liczba Użytkowników:</h2>
            <p>1</p>
          </div>
          <div>
            <h2>Całkowita Liczba Polubień:</h2>
            <p>93</p>
          </div>
        </div>
        <div id="bottom-container">
          <div>
            <h2>Najbardziej Lubiany Wiersz:</h2>
              <p>
                Lah di dah lah di dah di dah
              </p>
          </div>
          <div>
            <h2>Najczęściej Odwiedzana Strona:</h2>
            <p>
              Wiersze
            </p>
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