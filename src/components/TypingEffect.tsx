import { useEffect, useState } from 'react';

interface TypingEffectProps {
  text: string;
  speed?: number;
  className?: string;
}

export function TypingEffect({ text, speed = 50, className = '' }: TypingEffectProps) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) {
      const timer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, 1500); // Pause at the end of the text
      return () => clearTimeout(timer);
    }

    if (isDeleting) {
      if (displayText.length === 0) {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % text.split('|').length);
        return;
      }

      const timeout = setTimeout(() => {
        setDisplayText(displayText.slice(0, -1));
      }, speed / 2);
      return () => clearTimeout(timeout);
    }

    if (displayText.length < text.split('|')[currentIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayText(text.split('|')[currentIndex].slice(0, displayText.length + 1));
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      setIsPaused(true);
    }
  }, [displayText, currentIndex, isDeleting, isPaused, text, speed]);

  return (
    <span className={`inline-block ${className}`}>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
}
