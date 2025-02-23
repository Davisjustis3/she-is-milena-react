import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./quotes.css"
import { quotes } from '../scripts/script.js'

export function Quotes(props) {
  const {currentIndex, handleThumbnailClick} = props
  return (
    <div id="slider-container">
      <div id="quote-container">
                <motion.h2
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          id="current-quote"
        >
          {quotes.length > 0 ? quotes[currentIndex].text : <h2>Loading...</h2>}
                </motion.h2>
      </div>
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