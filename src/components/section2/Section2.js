import React from "react";
import "./Section2.css";
import Fade from "react-reveal/Fade";
import Zoom from 'react-reveal/Zoom';

import { Link } from "react-router-dom";
import { Link as LinkRoll } from "react-scroll";

import { AiOutlineCheck } from 'react-icons/ai';


import Woman from "../../assets/smiling_woman.webp";

const Section2 = () => {
  return (
    <>

      

        <div className="section2">
        <div className="section2-content container">

        <Zoom duration={1500}>
          <div className="section2-content-left">
              <img src={Woman} alt="smiling woman"/>
          </div>
          </Zoom>


        <Fade bottom duration={1500}>
          <div className="section2-content-right">
            <h1>WHAT WE DO</h1>
            <p>
            We recognize that every person is unique, and their path to recovery should reflect that individuality. Our programs are tailored to meet the specific needs of each client, ensuring a personalized and effective approach to recovery. By addressing the physical, emotional, and psychological aspects of addiction, we empower individuals to achieve lasting recovery.
            </p>
            <ul>
              <li><span><AiOutlineCheck/> </span>House Managers on site</li>
              <li><span><AiOutlineCheck/> </span> Providing nutritious and balanced meals</li>
              <li><span><AiOutlineCheck/> </span>Doctor visit within 72 hours</li>
              <li><span><AiOutlineCheck/> </span>Med co-pays</li>
              <li><span><AiOutlineCheck/> </span>Doctor follow up visit as needed</li>
              <li><span><AiOutlineCheck/></span> Weekly 1 hour individual case management</li>
              <li><span><AiOutlineCheck/> </span>Weekly 1 hour individual therapy</li>
              <li><span><AiOutlineCheck/> </span>3 hours of group therapy daily, from Monday - Friday</li>
              <li><span><AiOutlineCheck/> </span>Access to a psychiatrist</li>
              <li><span><AiOutlineCheck/> </span>Access to psych meds</li>
              <li><span><AiOutlineCheck/> </span>Complete treatment plan</li>
              <li><span><AiOutlineCheck/> </span>Weekly drug test</li>
              <li><span><AiOutlineCheck/> </span>Job training/coaching</li>
              <li><span><AiOutlineCheck/> </span>Job Placement</li>
            </ul>
                  <div>
                    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                      <Link to="/contact">
                        <button>Call Us</button>
                      </Link>
                    </LinkRoll>
                  </div>
          </div>
          </Fade>
          </div>
        </div>
    </>
  );
};

export default Section2;
