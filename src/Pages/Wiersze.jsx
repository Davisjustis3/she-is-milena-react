
import { Navbar1 } from '../Components/Navbar1.jsx'
import { Navbar2 } from '../Components/Navbar2.jsx'
import {Quotes } from '../Components/Quotes.jsx'
import '../index.css'
import { Footer } from "../Components/Footer.jsx"
import { Poems } from "./Poems.jsx"
import { quotes } from '../scripts/script.js'
import { PoemPopup } from '../Components/PoemPopup.jsx'
import { useState } from 'react'

export function Wiersze(props) {
  const { currentIndex, handleThumbnailClick } = props
  const [currentPoem, setCurrentPoem] = useState({
    poemName: "hello",
    poemDate: "2102/45/04",
    poemText: "Haksjdfhla"
  })
  const [poemDisplay, setPoemDisplay] = useState(false)
  const handlePoemDisplay = (poem) => {
    console.log('Display clicked')
    setPoemDisplay((prev) => !prev)
    setCurrentPoem(poem)
  }
  return (
    <>
      <Navbar1/>
      <Navbar2/>
      <main id="home" className="main flex justify-center"
        style={{
            backgroundImage: `url(${quotes[currentIndex].background})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
        >
       <Quotes
          currentIndex={currentIndex}
          handleThumbnailClick={handleThumbnailClick} />
      </main>
      <section id="maly-o-mnie">
      </section>
      <section id="poems">
        <h2 className="title">Wiersze</h2>
        <Poems
          handlePoemDisplay={handlePoemDisplay}
        />
      </section>
      <Footer />
      <PoemPopup
        poemDisplay={poemDisplay}
        handlePoemDisplay={handlePoemDisplay}
        currentPoem={currentPoem}
      />
    </>
  )
}
