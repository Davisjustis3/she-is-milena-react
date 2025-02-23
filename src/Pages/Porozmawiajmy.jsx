import { Footer } from "../Components/Footer";
import { Navbar1 } from "../Components/Navbar1";
import { Navbar2 } from "../Components/Navbar2";
import './porozmawiajmy.css'

export function Porozmawiajmy() {
  return (
    <>
      <Navbar1/>
      <Navbar2/>
       <section id="contact">
        <form id="contact-form" action="https://formspree.io/f/xbldkwdn" method="POST">
          <h2>Contact Me</h2>
            <label for="name">Name</label>
            <input className="white" type="text" name="name" placeholder="Name here" required/>
            <label for="email">Email</label>
            <input className="white" type="email" name="email" placeholder="Email here" required/>
            <label for="description">Reason for contact</label>
            <textarea className="white" name="description" id="text-box" placeholder="Message here" required></textarea>
            <button id="submit">Submit</button>
          </form>
        </section>
      <Footer/>
    </>
  )
}