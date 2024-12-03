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
const Slideshow2 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {character:"Wang Fusheng",line:" Bah! Bah! Bahhhhh! Hai-ei-hai! Nothing but freaking ‘Hai-ei-hai’! By the time the building’s finished, we’ll all be driven to madness. "},
{character:"Wang Fusheng",line:" Listen! Listen to this! Still at it! When I can only in daytime snatch forty winks, these lot of good-for-nothings have to bawl on and on all day long! "}, 
{character:"Wang Fusheng",line:" Now that it’s getting all dark, these swine still keep on bawling and ramming, just won’t get fed up with this stuff! Born prole! Eat your expired junk! "}, 
{character:"Wang Fusheng",line:" Yuck! My son would starve to death than do such lowly work! Bah!  "},
{character:"Wang Fusheng",line:" Come on, then! Sing! Just go on with your hai-ei-hai! Just sing out loud! Now that I’m stuck with you! I’ll listen; you’ll sing; let’s see who in hell first gives in! See who gives in first!"},
{character:"Wang Fusheng",line:" Oh, Mr. Fang. You up already?"},
{character:"Fang Dasheng",line:" Why, of course—it is getting dark."},
{character:"Wang Fusheng",line:" It’s no wonder you’re up! No chance of sleeping with these bastard worthy to be butchered --"},
{character:"Fang Dasheng",line:" Hush! Listen!"},
{character:"",line:"End of Act 2"},
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

export default Slideshow2;