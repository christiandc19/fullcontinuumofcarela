import React from 'react'
import "./SoberLivingSection.css";

import SoberLiving from '../../assets/sober-living.webp'

const SoberLivingSection = () => {

  return (
    <>
        <div className='sober-living-section container'>
            <div className='sober-living-section-content'>



                <div className='sober-living-section-flex '>
                    <div className='sober-living-section-left sober-living-section-flexItem'>
                        <h1>Our Homes</h1>
                        <p>Welcome to our Los Angeles Sober Living Community, where hope, support, and transformation flourish. We understand that the journey to recovery is a profound and courageous one. Our mission is to provide a safe, nurturing environment where individuals can rebuild their lives, rediscover their potential, and embrace a future free from addiction.</p>

                      <p>Nestled amidst the vibrant tapestry of Los Angeles, our Sober Living Homes stand as beacons of hope, offering a supportive and nurturing environment for those navigating the delicate path of recovery. In this city of dreams, our homes become the foundation upon which individuals rebuild their lives.</p>

                    </div>

                    <div className='sober-living-section-right sober-living-section-flexItem gradient-border'>
                        <img src={SoberLiving} alt='Worker'/>
                    </div>
                </div>
            </div>


        </div>

    </>
  );
};

export default SoberLivingSection;
