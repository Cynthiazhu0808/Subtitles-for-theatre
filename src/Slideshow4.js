import React, { useState , useEffect, useCallback} from 'react';
import './Slideshow.css'; // Optional: Create a separate CSS file for styles

// Slide Component
const Slide = ({ character, line, bgColor = 'bg-black', textColor = 'text-white' }) => (
  <div className={`flex items-center justify-center w-full h-screen ${bgColor} ${textColor} p-8`}>
    <div className="text-center max-w-4xl">
      <h1 className="text-4xl font-bold mb-4">{character}</h1>
      <p className="text-2xl italic">"{line}"</p>
    </div>
  </div>
);

// Slideshow Component
const Slideshow4 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { character:"VOICES FROM THE NEXT ROOM", line: "Lulu! Lulu!"},

{ character: "GEORGY", line: "Lulu! Lulu!" },


{ character: "GEORGY", line: "No, no, I’ll be right back. See if I can't persuade her." },


{ character: "GEORGY", line: "Ah! My little Lulu! Si belle! Si charmantel et si mélancolique!" },

{ character: "GEORGY", line: "You are beautiful! You are beautiful this evening! Beautiful! Absolutely beautiful! You do know how to dress, so melancholically, so bewitchingly!" },
{ character: "GEORGY", line: "And you know how to wear perfume, it smells so — so delicate, yet so mysteriously distant!" },
{ character: "GEORGY", line: "Ah! The moment I smell the fragrance of your perfume —" },
{ character: "GEORGY", line: "ah non, the pure fragrance that emanates from your beautiful body, it takes me back to when I first went to Paris ..." },
{ character: "GEORGY", line: "Ah, those Paris nights! Paris at night! Mm! Exquise!" },
{ character: "FANG DASHE", line: "The END"}

  ];

const nextSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  }, [slides.length]);

  // Function to go to the previous slide
const prevSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight') {
        nextSlide(); // Right arrow key pressed
      } else if (event.key === 'ArrowLeft') {
        prevSlide(); // Left arrow key pressed
      }
    };

    window.addEventListener('keydown', handleKeyDown); // Add event listener for keydown

    return () => {
      window.removeEventListener('keydown', handleKeyDown); // Clean up event listener on unmount
    };
  }, [nextSlide, prevSlide]);

  return (
    <div className="relative">
      <Slide {...slides[currentSlide]} />
      <button
        className="absolute top-3/4 left-4 bg-white text-black p-2 rounded"
        onClick={prevSlide}
      >
        Previous
      </button>

      <button
        className="absolute top-3/4 right-4 bg-white text-black p-2 rounded"
        onClick={nextSlide}
      >
        Next
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white">
        {currentSlide + 1} / {slides.length}
      </div>
    </div>
  );
};

export default Slideshow4;