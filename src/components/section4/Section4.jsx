import React from 'react';

import ImageSlider from './ImageSlider';
import SoberLiving1 from "../../assets/north-citrus-bg.webp";
import SoberLiving2 from "../../assets/sober-living-2.webp";
import SoberLiving3 from "../../assets/sober-living-3.webp";


const Section4 = () => {
  const images = [
    SoberLiving1,
    SoberLiving2,
    SoberLiving3
  ];

  return (
          <div className='section4'>
            <ImageSlider images={images} />
          </div>
  );
}

export default Section4

