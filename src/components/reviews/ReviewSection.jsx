import React from 'react';

import ReviewSlider from './Reviews';
// import SoberLiving1 from "../../assets/north-citrus-bg.webp";
// import SoberLiving2 from "../../assets/sober-living-2.webp";
// import SoberLiving3 from "../../assets/sober-living-3.webp";
// import SoberLiving4 from "../../assets/sober-living.webp";


const ReviewSection = () => {
  const reviews = [
    "Hello",
    "Hi",
    "Welcome",
    "Olla"
  ];

  return (
          <div className='review-section'>
            <ReviewSlider reviews={reviews} />
          </div>
  );
}

export default ReviewSection

             