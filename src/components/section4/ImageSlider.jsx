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
    <div className='slider-bg'>
        <div className='image-slider-header container'>
            <h1>Check Out Our Los Angeles Sober Living Homes</h1>
            <p>At Our Sober Living Homes, we understand that the journey to recovery is unique for each individual. Our mission is to provide a supportive and nurturing environment for those transitioning from addiction treatment to independent living.</p>
        </div>

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
            <h1>What Sets Us Apart</h1>
            <p>Our sober living homes are more than just a place to stay—they are a community that fosters growth, connection, and healing. Located in the heart of Los Angeles, our homes offer a safe and structured environment where residents can build a strong foundation for their recovery.</p>

                <div className='slider-btn'>
                    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                      <Link to="/sober-living">
                        <button>Learn More</button>
                      </Link>
                    </LinkRoll>
                </div>

        </div>



    </div>

    </div>



    </>
  );
};

export default ImageSlider;
