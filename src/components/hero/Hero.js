import React from "react";
import Zoom from 'react-reveal/Zoom';
import { MdPhoneCallback } from "react-icons/md";
import "./Hero.css";

import Gauge from './Gauge'


import Hero1 from '../../assets/hero-bg1.webp'
import Hero2 from '../../assets/hero-bg2.webp'
import Hero3 from '../../assets/hero-bg3.webp'
import Hero4 from '../../assets/hero-bg4.webp'


const Hero = () => {
  return (
    <>
<div className="hero-overlay">
      <div className="hero">

      <div class="fling-minislide">
        <img src={Hero1} alt="Slide 1" />
        <img src={Hero2} alt="Slide 2" />
        <img src={Hero3} alt="Slide 3" />
        <img src={Hero4} alt="Slide 4" />

      <div className="hero-container">

                <div className="content">
                  <Zoom duration={3000}>
                    <h1>Full Continuum Of Care LA</h1>
                  </Zoom>

                  <Zoom duration={3000} delay={1000}>
                     <h2>Creating Stability in Recovery.</h2>
                  </Zoom>
                     <div className='gauges container'>
                     <Zoom duration={3000} delay={1500}>
                        <div className='gauge-container'>
                            <Gauge Gauge="50,000" Name="Homeless Treated" ClassName="homeless"/>
                        </div>

                        <div className='gauge-container'>
                            <Gauge Gauge="60%" Name="Sober & Working / Off The Streets" ClassName="sober"/>
                        </div>
                      </Zoom>
                    </div>


                    <div className='hero-btn'>
                      <Zoom duration={3000} delay={2000}>
                          <h2><span><MdPhoneCallback /></span> <a href="tel:1234567890">(123) 456-7890</a></h2>
                            {/* <button>Call Us</button> */}
                      </Zoom>                   
                      </div>


    </div>

                      </div>
            </div>

      </div>
      </div>
    </>
  );
};

export default Hero;







