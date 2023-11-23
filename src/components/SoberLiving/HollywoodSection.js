import React from 'react'
import "./HollywoodSection.css";


const HollywoodSection = () => {

  return (
    <>
        <div className='hollywood-section container'>
            <div className='hollywood-section-content'>



                <div className='hollywood-section-flex '>
                    <div className='hollywood-section-left hollywood-section-flexItem'>
                        <h1>Our West Hollywood Sober Living Home</h1>
                        <p>Find long-term sobriety in our luxurious and convenient home in West Hollywood, near all the sights and sounds of The Grove, Beverly Center, Westfield Century City mall, and more.</p>

                    </div>

                    <div className='hollywood-section-right hollywood-section-flexItem gradient-border'>
                        <img src="https://55silver.s3.us-west-1.amazonaws.com/55silver_medias/hollywood-retreat1-min.png" alt='Home'/>
                    </div>
                </div>
            </div>


        </div>

    </>
  );
};

export default HollywoodSection;
