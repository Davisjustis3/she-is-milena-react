import { Navbar1 } from "../Components/Navbar1"
import { Navbar2 } from "../Components/Navbar2"
import { Footer } from '../Components/Footer'
import './o-mnie.css'
import { OmnieCard } from "../Components/OmnieCard"
import { Quotes } from "../Components/Quotes"
import { quotes } from '../scripts/script.js'

export function OMnie(props) {
  const {currentIndex, handleThumbnailClick} = props
  return (
    <>
      <Navbar1/>
      <Navbar2/>
      <main id="o-mnie" className="main flex justify-center "
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
    <section id="o-mnie-page"> 
      <h2 className="title">About Me</h2>
      <OmnieCard/>
        </section>
        <Footer/>
    </>
  )
}