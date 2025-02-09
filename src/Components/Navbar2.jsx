import { Link } from "react-router-dom"

export function Navbar2() {
  const burgerMenu = document.querySelector('.fa-bars')
  const dropDown = document.getElementById('nav-list2')
  if (burgerMenu && dropDown) {
    burgerMenu.addEventListener('click', () => {
      dropDown.style.display == 'none' ?
      dropDown.style.display = 'block' :
      dropDown.style.display = 'none'
  })  
  } else {
    console.log('Its not working')
  }
  return (
    <>
        <nav id="navbar2">
        <div id="burger-container">
              <div className="logo-container">
            <Link><img id="logo" src="src/assets/miles-logo.webp" alt="" /></Link>
          </div>
          <div className="burger-menu"><i className="fa-solid fa-bars"></i></div>
        </div>
        <div id="drop-down">
            <ul id="nav-list2">
                <li><Link className="links-drop" to="/">Wiersze</Link></li>
                <hr/>
                <li><Link className="links-drop" to="/Szepty">Szepty Przeszłości</Link></li>
                <hr/>
                <li><Link className="links-drop" to="/Recenzje">Recenzje</Link></li>
                <hr/>
                <li><Link className="links-drop" to="/Rozmowy">Rozmowy</Link></li>
                <hr/>
                <li><Link className="links-drop" to="/OMnie">O mnie</Link></li>
                <hr/>
                <li><Link className="links-drop" to="/Porozmawiajmy">Porozmawiajmy</Link></li>
            </ul>
        </div>
    </nav>
   
    </>
  )
}