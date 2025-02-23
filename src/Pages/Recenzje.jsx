import { Link } from "react-router-dom"
import { Navbar1 } from "../Components/Navbar1.jsx"
import { Footer } from "../Components/Footer.jsx"
import { reviews } from '../scripts/script.js'
import { Navbar2 } from "../Components/Navbar2.jsx"
import './recenzje.css'
import { Quotes } from "../Components/Quotes.jsx"
import { quotes } from '../scripts/script.js'

export function Recenzje(props) {
  const {currentIndex, handleThumbnailClick} = props
  const reviewContainer = document.getElementById('review-container');
  return (
    <>
      <Navbar1 />
      <Navbar2/>
      <main id="recenzje"
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
      <section id="recenzje-list" className="main flex justify-center "> 
        <h2 className="title">Recenzje</h2>
        <div id="review-container">
          {reviews && reviews.length > 0 ? (
            reviews.map((review, index) => (
              <>
              <div className="card-container">
                <div className="review-card">
                  <img
                    className="review-image"
                    src={review.image}
                    alt="Szepty Book Cover"
                  />
                  </div>
                  <div className="text-link">
                    <p>{review.reviewText}</p>
                    <a href={review.link}>Przeczytaj Recenzję</a>
                </div>
              </div>
              <div className="line"></div>
              </>
            ))
          ) : (
            <p>No reviews available.</p>
          )}
        </div>
      </section>
      <Footer />
    </>
  )
}