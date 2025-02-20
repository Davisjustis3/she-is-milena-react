import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./quotes.css"
import { quotes } from '../scripts/script.js'

export function Quotes() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
  };
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? quotes.length - 1 : prevIndex - 1
    );
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
    <div id="slider-container">
      {/* Big Image */}
      <div id="quote-container">
      {/* Current QUOTE */}
                <motion.h2
          key={currentIndex} // Ensures animation runs when quote changes
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          id="current-quote"
        >
          {quotes.length > 0 ? quotes[currentIndex] : <h2>Loading...</h2>}
                </motion.h2>
      </div>
      {/* Thumbnail Buttons */}
      <div id="index-buttons-container"
      >
        {quotes.length > 0 ? quotes.map((image, index) => (
          <div className="index-button"
            key={index}
            alt={`Thumbnail ${index}`}
            style={{
              border: currentIndex === index ? "2px solid blue" : "none"
            }}
            onClick={() => handleThumbnailClick(index)}
          ></div>
        )) : 
        <h2>Loading...</h2>}
      </div>
    </div>
  );
};