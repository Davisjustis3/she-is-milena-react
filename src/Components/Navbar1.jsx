import { Link } from "react-router-dom"

export function Navbar1() {
  return (  
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
      <div className="glass-container">
        <Link to="/Authentication"><i className="fa-solid fa-user"></i></Link>
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
  </nav>
  )
}
