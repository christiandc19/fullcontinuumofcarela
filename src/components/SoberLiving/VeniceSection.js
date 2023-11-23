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
                        <p>Welcome to our LOS ANGELES - VENICE sober living home, a haven of hope and support nestled in the heart of vibrant Los Angeles. We understand that the journey to recovery is unique for each individual, which is why we offer a warm and nurturing environment where residents can rebuild their lives and rediscover their potential.
                        </p>

                        <p>Stay with us and enjoy a guided approach to treatment recovery just off Melrose Ave, only a few minutes from great restaurants in Wilshire, shopping at The Grove, hiking in the canyons, and the allure of all that Hollywood has to offer.<br/><br/>At [Clinic Name], we understand that the path to recovery is a personal and unique one. Our mission is to provide a safe and inclusive space where individuals can transition from addiction to a purposeful, substance-free life. With a focus on accountability, personal growth, and holistic well-being, we guide residents towards a future filled with promise.</p>

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
