import { Link } from "react-router-dom"
import { Navbar1 } from "../Components/Navbar1"
import { Navbar2 } from "../Components/Navbar2"
import { Footer } from '../Components/Footer'
import './rozmowy.css'
import { Quotes } from "../Components/Quotes"
import { quotes } from '../scripts/script.js'

export function Rozmowy(props) {
  const {currentIndex, handleThumbnailClick} = props
  return (
    <>
      <Navbar1 />
      <Navbar2/>
      <main id="rozmowy" className="main flex justify-center "
      style={{
            backgroundImage: `url(${quotes[currentIndex].background})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}>
        <Quotes
          currentIndex={currentIndex}
          handleThumbnailClick={handleThumbnailClick} />
    </main>
    <section id="rozmowy-video"> 
      <h2 className="title">Rozmowy</h2>
      <div id="rozmowy-container">
          <a href="https://www.facebook.com/watch/?v=691339941437722">
            <img src="https://sheismilena.com/wp-content/uploads/2020/07/adnotacja-2020-07-28-173327.png" alt="Milena conversation video" />
          </a>
          <p>Projekt powstały dzięki Fundacji Tu Kultura. Rozmowa z Paulą Jołda, autorką bloga Turkusowa Kredka Czyta o tym, ile czasu pisze się książkę; jakie było moje wyobrażenie debiutu; jak wygląda debiut w sieci; co się czuje czytając pierwsze recenzje… I wiele więcej.</p>
          <a href="https://youtu.be/cfWTFuVxrag?si=hB8QxO5DQNLp_4GR">
            <img src="https://sheismilena.com/wp-content/uploads/2020/07/jpgpodcast-1.png" alt="Milena conversation video" />
          </a>
          <p>Wymiana myśli z Bartłomiejem Gawryszewskim, twórcą podcastu Rozmowy Histo(ete)ryczne.  Razem rozmawiamy o samej książce, o pomysłach na kolejne publikacje oraz o wpływie książek na światopogląd młodych ludzi.</p>
          <a href="https://www.janowlubelski.pl/aktualnosci/z-pasji-do-literatury-i-wywiad-z-milena-bres-autorka-powiesci-szepty-przeszlosci">
            <img src="https://sheismilena.com/wp-content/uploads/2020/07/lubelskie.jpg" alt="" />
          </a>
          <p>Wywiad do Gazety Janowskiej przeprowadzony przez Dorotę Kozdrę. Rozmowa o tym, czym dla mnie jest literatura; skąd czerpię pomysły i moich innych pasjach.</p>
      </div>
      </section>
      <Footer />
    </>
  )
}