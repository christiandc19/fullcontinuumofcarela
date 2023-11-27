import React from "react";
import "./Section3.css";

import { Link } from "react-router-dom";
import { Link as LinkRoll } from "react-scroll";


import AlcoholAddiction from "../../assets/alcohol_addiction.webp";
import CocaineAddiction from "../../assets/cocaine_addiction.webp";
import HeroinAddiction from "../../assets/heroin_addiction.webp";
import FentanylAddiction from "../../assets/fentanyl_addiction.webp";




const Section3 = () => {
  return (
    <>
      <div className="section3 container">
        <div className="section3-content container">

          <div className="section3-header container">
              <h1>
                Substance Addiction We Treat
              </h1>
              <p>
                At [ Name Of Clinic ], clients receive individual
                therapy alongside a range of additional treatments, including relapse
                prevention, trauma therapy, mindfulness meditation, transportation,
                yoga, and more. We offer support that clients need to allow them to
                gradually go back to treatment.
              </p>
            </div>


          <div className="section3-flex">

{/* Alcohol */}
            <div class="section3-flexItem">
                    <div className="section3-flexItem-img">
                      <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                        <Link to="/alcohol">
                          <img src={AlcoholAddiction} alt="Mental Health" loading="lazy" />
                        </Link>
                      </LinkRoll>
                    <div>
                    <div className="section3-flexItem-caption">
                      <h1>ALCOHOL ADDICTION</h1>
                    </div>
              </div>
            </div>
          </div>



{/* Cocaine */}
<div class="section3-flexItem">
                    <div className="section3-flexItem-img">
                      <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                        <Link to="/cocaine">
                          <img src={CocaineAddiction} alt="Mental Health" loading="lazy" />
                        </Link>
                      </LinkRoll>
                    <div>
                    <div className="section3-flexItem-caption">
                      <h1>COCAINE ADDICTION</h1>
                    </div>
              </div>
            </div>
          </div>


{/* Heroin */}
<div class="section3-flexItem">
                    <div className="section3-flexItem-img">
                      <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                        <Link to="/heroin">
                          <img src={HeroinAddiction} alt="Mental Health" loading="lazy" />
                        </Link>
                      </LinkRoll>
                    <div>
                    <div className="section3-flexItem-caption">
                      <h1>HEROIN ADDICTION</h1>
                    </div>
              </div>
            </div>
          </div>




{/* Fentanyl */}
<div class="section3-flexItem">
                    <div className="section3-flexItem-img">
                      <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                        <Link to="/fentanyl">
                          <img src={FentanylAddiction} alt="Mental Health" loading="lazy" />
                        </Link>
                      </LinkRoll>
                    <div>
                    <div className="section3-flexItem-caption">
                      <h1>FENTANYL ADDICTION</h1>
                    </div>
              </div>
            </div>
          </div>





{/* VIEW ALL */}

          </div>


          <div class="section3-btn">
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                      <Link to="/substance-abuse-treatment">
                        <button>View All</button>
                      </Link>
                  </LinkRoll>
          </div>    



        </div>
      </div>

    </>
  );
};

export default Section3;
