import React from "react";
import "./Section3.css";

import { Link } from "react-router-dom";
import { Link as LinkRoll } from "react-scroll";
import { FaArrowRight } from "react-icons/fa";

import Card1 from "../../assets/program_php.webp";
import Card2 from "../../assets/program_iop.webp";
import Card3 from "../../assets/program_op.webp";
import Card4 from "../../assets/program_case_management.webp";
import Card5 from "../../assets/program_crisis_intervention.webp";



const Section3 = () => {
  return (
    <>
      <div className="section3 container">
        <div className="section3-content container">

          <div className="menu-programs-header container">
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
                  <img src={Card1} alt="Mental Health" loading="lazy" />
                <div>
                  <h1>ALCOHOL ADDICTION</h1>
                  <div>
                    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                      <Link to="/alcohol">
                        <button>Learn More</button>
                      </Link>
                    </LinkRoll>
                  </div>
                </div>
              </div>

{/* Cocaine */}

              <div class="section3-flexItem">
                  <img src={Card2} alt="Mental Health" loading="lazy" />
                <div>
                  <h1>COCAINE ADDICTION</h1>
                  <div>
                    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                      <Link to="/cocaine">
                        <button>Learn More</button>
                      </Link>
                    </LinkRoll>
                  </div>
                </div>
              </div>


{/* Fentanyl */}

<div class="section3-flexItem">
                  <img src={Card3} alt="Mental Health" loading="lazy" />
                <div>
                  <h1>FENTANYL ADDICTION</h1>
                  <div>
                    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                      <Link to="/fentanyl">
                        <button>Learn More</button>
                      </Link>
                    </LinkRoll>
                  </div>
                </div>
              </div>


{/* Heroin */}

<div class="section3-flexItem">
                  <img src={Card4} alt="Mental Health" loading="lazy" />
                <div>
                  <h1>HEROIN ADDICTION</h1>
                  <div>
                    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                      <Link to="/heroin">
                        <button>Learn More</button>
                      </Link>
                    </LinkRoll>
                  </div>
                </div>
              </div>



{/* Kratom */}

<div class="section3-flexItem">
                  <img src={Card5} alt="Mental Health" loading="lazy" />
                <div>
                  <h1>KRATOM ADDICTION</h1>
                  <div>
                    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                      <Link to="/kratom">
                        <button>Learn More</button>
                      </Link>
                    </LinkRoll>
                  </div>
                </div>
              </div>




{/* VIEW ALL */}

<div class="section3-flexItem view-all">
                <div>
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                      <Link to="/substance-abuse-treatment">
                          <h1>View All <span><FaArrowRight /></span></h1>
                      </Link>
                  </LinkRoll>

                  <div>
                  </div>
                </div>
              </div>














          </div>
        </div>
      </div>

    </>
  );
};

export default Section3;
