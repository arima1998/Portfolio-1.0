import React, { useEffect, useState } from 'react'
import '../css/loading.css'

const CustomLoading = () => {
  const alphabets = ["Привет, мир", "Hola mundo", "Hallo Welt", "مرحباً بالعالم", "こんにちは世界"];
  const [currentAlphabetIndex, setCurrentAlphabetIndex] = useState(0);
  const [showTemporaryLetter, setShowTemporaryLetter] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (showTemporaryLetter) {
        setTimeout(() => {
          setShowTemporaryLetter(false);
        }, 1000);
      } else {
        setCurrentAlphabetIndex((prevIndex) => (prevIndex + 1) % alphabets.length);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [showTemporaryLetter, alphabets.length]);


  return (
    <div className="flex justify-center items-center h-screen LL">
      <p className="text-6xl font-bold text-white text-animation">
      {showTemporaryLetter ? " Hello World ! ! " : alphabets[currentAlphabetIndex]}
      </p>
    </div>
  )
}

export default CustomLoading
