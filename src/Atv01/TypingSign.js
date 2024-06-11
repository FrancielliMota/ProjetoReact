import React, { useState, useEffect } from 'react';
import '../style.css';

const TypingSign = () => {
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const text = 'Conheça a Fatec !';

  useEffect(() => {
    if (typedText !== text) {
      const typingInterval = setInterval(() => {
        const nextChar = text[currentIndex];
        setTypedText(prevText => prevText + nextChar);
        setCurrentIndex(prevIndex => (prevIndex + 1) % text.length);
      }, 200); // Velocidade da digitação (milissegundos)

      return () => clearInterval(typingInterval);
    }
  }, [typedText, currentIndex, text]);

  return (
    <div>
      <h2>{typedText}</h2>
    </div>
  );
};

export default TypingSign;



