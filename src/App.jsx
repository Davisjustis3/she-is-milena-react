import { Route, Routes } from "react-router-dom"
import { Wiersze } from './Pages/Wiersze.jsx'
import { Szepty } from './Pages/Szepty.jsx'
import { Recenzje } from './Pages/Recenzje.jsx'
import { Rozmowy } from './Pages/Rozmowy.jsx'
import { OMnie } from './Pages/OMnie.jsx'
import { Porozmawiajmy } from './Pages/Porozmawiajmy.jsx'
import { AdminPage } from "./Pages/AdminPage.jsx"
import { quotes } from './scripts/script.js'
import { useState, useRef, useEffect } from "react"

function App() {
 const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
  };
  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
    restartInterval();
  };
  const startInterval = () => {
    intervalRef.current = setInterval(() => {
      nextImage();
    }, 10000);
  };
  const clearIntervalRef = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };
  const restartInterval = () => {
    clearIntervalRef();
    startInterval();
  };
  useEffect(() => {
    startInterval();
    return () => clearIntervalRef();
  }, [currentIndex]);
  return (

  <Routes>
      <Route path="/" element={
        <Wiersze
          currentIndex={currentIndex}
          handleThumbnailClick={handleThumbnailClick}
      />}></Route>
      <Route path="/Szepty" element={
        <Szepty
          currentIndex={currentIndex}
          handleThumbnailClick={handleThumbnailClick}
      />}></Route>
      <Route path="/Recenzje" element={
        <Recenzje
          currentIndex={currentIndex}
          handleThumbnailClick={handleThumbnailClick}
        />}></Route>
      <Route path="/Rozmowy" element={
        <Rozmowy
          currentIndex={currentIndex}
          handleThumbnailClick={handleThumbnailClick}
        />}></Route>
      <Route path="/OMnie" element={
        <OMnie
        currentIndex={currentIndex}
          handleThumbnailClick={handleThumbnailClick}
        />}></Route>
      <Route path="/AdminPage" element={
        <AdminPage
        currentIndex={currentIndex}
          handleThumbnailClick={handleThumbnailClick}
        />}></Route>
    <Route path="/Porozmawiajmy" element={<Porozmawiajmy/>}></Route>
  </Routes>

  )
}

export default App
