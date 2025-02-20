import { Route, Routes } from "react-router-dom"
import { Wiersze } from './Pages/Wiersze.jsx'
import { Szepty } from './Pages/Szepty.jsx'
import { Recenzje } from './Pages/Recenzje.jsx'
import { Rozmowy } from './Pages/Rozmowy.jsx'
import { OMnie } from './Pages/OMnie.jsx'
import { Porozmawiajmy } from './Pages/Porozmawiajmy.jsx'
import { AdminPage } from "./Pages/AdminPage.jsx"


function App() {

  return (

  <Routes>
    <Route path="/" element={<Wiersze/>}></Route>
    <Route path="/Szepty" element={<Szepty/>}></Route>
    <Route path="/Recenzje" element={<Recenzje/>}></Route>
    <Route path="/Rozmowy" element={<Rozmowy/>}></Route>
    <Route path="/OMnie" element={<OMnie/>}></Route>
    <Route path="/AdminPage" element={<AdminPage/>}></Route>
    <Route path="/Porozmawiajmy" element={<Porozmawiajmy/>}></Route>
  </Routes>

  )
}

export default App
