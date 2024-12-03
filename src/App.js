import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Slideshow from './Slideshow';
import Slideshow2 from './Slideshow2';
import Slideshow4 from './Slideshow4';


const App = () => {
  return (
    <Router>
      <div>
        <nav>
          {/* Navigation links */}
          <Link to="/">Slideshow</Link> | <Link to="/slideshow2">Slideshow2</Link> | <Link to="/slideshow4">Slideshow4</Link>
        </nav>
        <Routes>
          {/* Define routes for Slideshow and Slideshow4 */}
          <Route path="/" element={<Slideshow />} />
          <Route path="/slideshow2" element={<Slideshow2 />} />
          <Route path="/slideshow4" element={<Slideshow4 />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
