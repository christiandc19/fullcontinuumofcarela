import React from 'react'
import "./VeniceSection.css";


const VeniceSection = () => {

  return (
    <>
        <div className='venice-section container'>
            <div className='venice-section-content'>



                <div className='venice-section-flex '>
                    <div className='venice-section-left venice-section-flexItem'>
                        <h1>Our Venice California Home</h1>
                        <p>Shops & restaurants, sports & skate parks, jogging paths, yoga, and countless other seaside activities. Restore your mind and body within the eclectic neighborhoods of Venice Beach
                        </p>

                    </div>

                    <div className='venice-section-right venice-section-flexItem gradient-border'>
                        <img src="https://55silver.s3.us-west-1.amazonaws.com/55silver_medias/venice-retreat2.png" alt='Home'/>
                    </div>
                </div>
            </div>


        </div>

    </>
  );
};

export default VeniceSection;
