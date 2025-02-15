import { Link } from "react-router-dom"
import { Navbar1 } from '../Components/Navbar1.jsx'
import { Navbar2 } from '../Components/Navbar2.jsx'
import {Quotes } from '../Components/Quotes.jsx'
import '../index.css'
import { Footer } from "../Components/Footer.jsx"
import { Poems } from "./Poems.jsx"
import { useState, useEffect } from "react"

export function Wiersze() {
  const [searchValue, setSearchValue] = useState("")

  return (
    <>
      <Navbar1/>
      <Navbar2/>
      <main id="home" className="main flex justify-center ">
        <Quotes />
      </main>
      <section id="maly-o-mnie">
      </section>
      <section id="poems">
        <h2 className="title">Wiersze</h2>
        <Poems/>
      </section>
     
      <Footer/>
    </>
  )
}
