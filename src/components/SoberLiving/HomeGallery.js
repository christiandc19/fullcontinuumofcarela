import React from 'react'

import { Link } from "react-router-dom";
import { Link as LinkRoll } from "react-scroll";
import Zoom from 'react-reveal/Zoom';


import './HomeGallery.css'

import Citrus from '../../assets/north-citrus-bg.webp'
import Detroit from '../../assets/north-detroit-bg.webp'
import Huntington from '../../assets/huntington-bg.webp'
import Hollywood from '../../assets/hollywood-bg.webp'
import Venice from '../../assets/venice-bg.webp'


const Location = () => {
  return (
    <>
      <div className="location">
        <div className='location-content container'>
          <div className='location-header'>
              <h1>Our Los Angeles Sober Living Homes</h1>
          </div>
          <div className='location-flex'>

          <Zoom duration={2000}>


              <div className='location-flexItem'>
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/north-citrus-los-angeles">
                  <img src={Citrus} alt='sober living home' className="pic" />
                  <h1>North Citrus Avenue</h1>
                  </Link>
                </LinkRoll>
              </div>

              <div className='location-flexItem'>
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/north-detroit-los-angeles">
                    <img src={Detroit}  alt='sober living home' className="pic" />
                    <h1>North Detroit Street</h1>
                </Link>
                </LinkRoll>
              </div>

              <div className='location-flexItem'>
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/huntington-beach">
                    <img src={Huntington}  alt='sober living home' className="pic" />
                    <h1>Huntington Beach</h1>
                </Link>
                </LinkRoll>
              </div>

              <div className='location-flexItem'>
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/west-hollywood">
                    <img src={Hollywood}  alt='sober living home' className="pic" />
                    <h1>West Hollywood</h1>
                </Link>
                </LinkRoll>
              </div>

              <div className='location-flexItem'>
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/venice-california">
                    <img src={Venice}  alt='sober living home' className="pic" />
                    <h1>Venice</h1>
                </Link>
                </LinkRoll>
              </div>

        </Zoom>
        
            </div>

          </div>
        </div>
    </>
  )
}

export default Location
