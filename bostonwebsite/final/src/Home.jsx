import './Home.css';
import React, { useState } from 'react';
import image1 from './images/amanda-murphy-HOo8S172hTA-unsplash.jpg';
import image2 from './images/brie-odom-mabey-hI8Kdw0CkF0-unsplash.jpg';
import image3 from './images/esaias-tan-YeTnLWZrP30-unsplash.jpg';


function Home( {setPage} ){

    const [activeIndex, setActiveIndex] = useState(0);
  const images = [image1, image2, image3];

  const handlePrev = () => {
    const index = activeIndex === 0 ? images.length - 1 : activeIndex - 1;
    setActiveIndex(index);
  };

  const handleNext = () => {
    const index = activeIndex === images.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(index);
  };

  
    return (
    <div className="home" id="maincontent"> 
     <p className="home__title">Welcome to Boston!</p>

     <div className="carousel-container">
      <div className="carousel-slide" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="carousel-image">
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="carousel-controls">
       <button className="carousel-button" onClick={handlePrev}>
         <p>{'<<'}</p> 
        </button>
        <button className="carousel-button" onClick={handleNext}>
         <p>{'>>'}</p>
        </button>
      </div>
    </div> 
    
    </div>
    )
}

export default Home;