"use client"
import { useState, useEffect } from 'react';

export default function TypingAnimation() {
    const texts = ["Developer", "Przemek Malec", "pixelcrafter.eu"];
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loop, setLoop] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);
  
    useEffect(() => {
      const handleTyping = () => {
        const index = loop % texts.length;
        const fullText = texts[index];
  
        if (isDeleting) {
          setCurrentText((prev) => fullText.substring(0, prev.length - 1));
          setTypingSpeed(50);
        } else {
          setCurrentText((prev) => fullText.substring(0, prev.length + 1));
          setTypingSpeed(150);
        }
  
        if (!isDeleting && currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 500);
        } else if (isDeleting && currentText === '') {
          setIsDeleting(false);
          setLoop(loop + 1);
        }
      };
  
      const typingTimer = setTimeout(handleTyping, typingSpeed);
      return () => clearTimeout(typingTimer);
    }, [currentText, isDeleting, loop]);
  
    return (
      
        <h1>
          I Am {currentText}
          <span className="cursor">|</span>
        </h1>
      
    );
}