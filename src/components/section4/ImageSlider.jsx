import React, { useState } from 'react';
import './ImageSlider.css'
import { Link } from "react-router-dom";
import { Link as LinkRoll } from "react-scroll";
 
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";


const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
  };

  return (
    <>
    <div className='image-slider-flex container'>
        
        <div className="image-slider">
            <div className='arrow'>
                <FaChevronLeft onClick={prevSlide} />
            </div>
            <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
            <div className='arrow'>
                <FaChevronRight onClick={nextSlide}/>
            </div>
        </div>

        <div className='image-slider-right'>
            <h1>Sober Living</h1>
            <p>Nestled amidst the vibrant tapestry of Los Angeles, our Sober Living Homes stand as beacons of hope, offering a supportive and nurturing environment for those navigating the delicate path of recovery. In this city of dreams, our homes become the foundation upon which individuals rebuild their lives.</p>

                <div className='slider-btn'>
                    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                      <Link to="/sober-living">
                        <button>Learn More</button>
                      </Link>
                    </LinkRoll>
                </div>

        </div>



    </div>




    </>
  );
};

export default ImageSlider;
