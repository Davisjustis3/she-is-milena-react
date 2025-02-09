import { Link } from "react-router-dom"
import { Navbar1 } from "../Components/Navbar1.jsx"
import { Footer } from "../Components/Footer.jsx"
import './recenzje.css'
import { reviews } from '../scripts/script.js'
import { Navbar2 } from "../Components/Navbar2.jsx"

export function Recenzje() {

  const reviewContainer = document.getElementById('review-container');
  return (
    <>
      <Navbar1 />
      <Navbar2/>
     <main id="recenzje">
      </main>
      <section id="recenzje-list"> 
        <h2>Recenzje</h2>
        <div id="review-container">
          {reviews && reviews.length > 0 ? (
            reviews.map((review, index) => (
              <>
              
              <div key={index} className="card-container">
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