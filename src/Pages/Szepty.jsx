import { Link } from "react-router-dom"
import '/src/Pages/szepty.css'
import { Navbar1 } from "../Components/Navbar1"
import { Navbar2 } from "../Components/Navbar2"
import { Footer } from "../Components/Footer"
import { Quotes } from "../Components/Quotes"
import { quotes } from '../scripts/script.js'

export function Szepty(props) {
  const {currentIndex, handleThumbnailClick} = props
  return (
    <>
      <Navbar1 />
      <Navbar2/>
      <main id="szepty" className="main flex justify-center "
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
  <section id="szepty-book"> 
    <h2 className="title">Szepty Przeszłości</h2>
    <div id="book-container">
      <div id="text-container">
        <h3>O Książce</h3>
        <hr className="line"/>
        <h4>Wzruszająca opowieść o walce z własnymi lękami i uzdrawiającej mocy przyjaźni.</h4>
            <figure>
              <img id="book-cover" src="https://sheismilena.com/wp-content/uploads/2020/07/szepty_przeszlosci_okl.jpg?w=1280" alt="Szepty Book Cover" /></figure>
          <p>Kiedy nastoletnia Miriam po raz kolejny wszczyna awanturę w klubie, matka decyduje się na umieszczenie jej w szpitalu psychiatrycznym. Z koszmaru, jaki rozgrywa się za murami placówki, uwalnia dziewczynę dziadek, który zabiera wnuczkę do siebie. Starszy pan stawia jeden warunek – Miriam musi zacząć chodzić do szkoły. Dla nastolatki, która do tej pory uczyła się w domu, nie będzie to proste, ale tym razem nie ma wyboru. W przystosowaniu się do nowej rzeczywistości ma jej pomóc Piotrek, najprzystojniejszy chłopak w liceum. Czy mu się uda? Zadania z pewnością nie ułatwi fakt, że Miriam ma już przyjaciela, który… jest niewidzialny. A to tylko początek tajemnic, jakie skrywa w sobie nieszczęśliwa nastolatka…</p>
          <a href="https://lubimyczytac.pl/ksiazka/4910751/szepty-przeszlosci">Zobacz na lubimyczytac.pl</a>
      </div>
    </div>
      </section>
      <Footer/>
    </>
  )
}