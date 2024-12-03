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
const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { character: "", line: "Sunrise" },
    { character: "CHEN BAILU", line: "Come on in! I say, why don't you come in? Come in. What are you afraid of?" },
    { character: "FANG DASHENG", line: "Nothing! There is nobody here, right?" },
    { character: "CHEN BAILU", line: "Who knows? Probably not." },
    { character: "FANG DASHENG", line: "Disgusting. Can't get away from people in this place." },
    { character: "CHEN BAILU", line: "So what if there were anyone here? You can't be shy of people when you live here." },
    { character: "FANG DASHENG", line: "So this is where you've been living all these years." },
    { character: "CHEN BAILU", line: "What? Is there anything wrong with it?" },
    { character: "FANG DASHENG", line: "Um---no, it's fine!" },
    { character: "CHEN BAILU", line: "Why don't you take your clothes off?" },
    { character: "FANG DASHENG", line: "Oh, um, my clothes? Oh, no, I haven't, haven't taken them off." },
    { character: "CHEN BAILU", line: "I know you haven't. I mean, why are you so polite that you won't even take your coat off without being asked?" },
    { character: "FANG DASHENG", line: "Um---Perhaps, it's because I'm not used to taking my coat off right after going inside... Is it a bit cold inside?" },
    { character: "CHEN BAILU", line: "Cold? It's very hot to me." },
    { character: "", line: "End of Act 1" }

  ];

  // Function to go to the next slide
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

export default Slideshow;

