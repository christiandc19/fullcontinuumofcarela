import React from "react";
import { Link as LinkRoll } from "react-scroll";
import Zoom from 'react-reveal/Zoom';

import "./TherapySA.css";
import { Link } from "react-router-dom";

import Alcoholism from '../../assets/alcoholism.webp'
import Detox from '../../assets/program-detox.webp'
import SoberLiving from '../../assets/program-sober-living.webp'
import Jobs from '../../assets/program-jobs.webp'

const TherapySA = () => {
  return (
    <>
      <div className="therapy-sa">
        <div className="content container">

          <div className="therapy-sa-header">
            <Zoom duration={3000} delay={1000}>
              <h2>Break Free from Addiction</h2>
            </Zoom>
            
            <Zoom duration={3000} delay={1500}>
              <h1>Explore Our Programs</h1>
            </Zoom>
            {/* <p>Here at Oxnard Rehab, we offer a full array of affordable drug rehab programs that can take addicts from detox to inpatient or outpatient care and back home again.</p> */}
          </div>
          
        <div className="therapy-sa-flex">

        <Zoom duration={2000}>
            <div className="sa-card gradient-border">
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/substance-abuse">
                    <img src={Alcoholism} alt="Depressed Man For Alcohol Addiction" loading="lazy"/>
                </Link>
              </LinkRoll>
              <div className="sa-card-caption">                   
                <h1>SUBSTANCE ABUSE</h1>
              </div>
            </div>
          </Zoom>

          <Zoom duration={2000}>
            <div className="sa-card gradient-border">
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/detox-programs">
                  <div className="box-content">
                    <img src={Detox} alt="Depressed Man For Alcohol Addiction" loading="lazy"/>
                  </div>
                </Link>
              </LinkRoll>
              <div className="sa-card-caption">                   
                <h1>DETOX</h1>
              </div>
            </div>
          </Zoom>

          <Zoom duration={2000}>
            <div className="sa-card gradient-border">
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/sober-living">
                  <div className="box-content">
                    <img src={SoberLiving} alt="Depressed Man For Alcohol Addiction" loading="lazy"/>
                  </div>
                </Link>
              </LinkRoll>
              <div className="sa-card-caption">                   
                <h1>SOBER LIVINGS</h1>
              </div>
            </div>
          </Zoom>

          <Zoom duration={2000}>
            <div className="sa-card gradient-border">
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/jobs">
                  <div className="box-content">
                    <img src={Jobs} alt="Depressed Man For Alcohol Addiction" loading="lazy"/>
                  </div>
                </Link>
              </LinkRoll>
              <div className="sa-card-caption">                   
                <h1>JOBS PROGRAMS</h1>
              </div>
            </div>
          </Zoom>

            </div>

          </div>
        </div>
    </>
  );
};

export default TherapySA;
