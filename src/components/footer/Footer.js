import React from "react";
import { Link } from "react-router-dom";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import logo from '../../assets/logo.png'
import "./FooterStyles.css";

import { Link as LinkRoll } from "react-scroll";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="top">
            <div className="logo-footer">
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to='/'>
                  <img src={logo} alt="Oxnard Rehab Logo" loading="lazy"/>
                </Link>
              </LinkRoll>
            </div>


            <div className="hide">
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <BsFillArrowUpCircleFill className="icon" />
              </LinkRoll>
            </div>

            <div className="show">
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <BsFillArrowUpCircleFill className="icon" />
              </LinkRoll>
            </div>

          </div>



          <div className="col-container">


{/* NAVIGATION */}

            <div className="col">
              <h3>Navigation</h3>

{/* HOME */}

              <div>
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/">
                    <p>Home</p>
                  </Link>
                </LinkRoll>
              </div>

{/* JOB */}

              <div>
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/jobs">
                    <p>Job Assistance</p>
                  </Link>
                </LinkRoll>
              </div>


{/* CONTACT */}

            <div>
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/contact">
                    <p>Call Us</p>
                  </Link>
                </LinkRoll>
              </div>

            </div>








            <div className="col">
              <h3>DETOX PROGRAMS</h3>

{/* DETOX */}
              <div className="hide">
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/detox-programs">
                    <p>Detox Programs</p>
                  </Link>
                </LinkRoll>
              </div>

{/* RESIDENTIAL */}

              <div>
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/residential-programs">
                    <p>Residential Program</p>
                  </Link>
                </LinkRoll>
              </div>

{/* PHP */}

            <div>
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/detox-partial-hospitalization-program">
                    <p>Partial Hospitalization</p>
                  </Link>
                </LinkRoll>
              </div>

            </div>







            <div className="col">
              <h3>SUBSTANCE ADDICTION</h3>

{/* PHP */}
              <div>
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/partial-hospitalization-program">
                    <p>Partial Hospitalization Program</p>
                  </Link>
                </LinkRoll>
              </div>
{/* IOP */}

              <div>
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/intensive-outpatient-program">
                    <p>Intensive Outpatient program</p>
                  </Link>
                </LinkRoll>
              </div>

{/* OP */}

              <div>
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/outpatient-program">
                    <p>Outpatient Program</p>
                  </Link>
                </LinkRoll>
              </div>

            </div>





          </div>
          <p className="copyright">
            <p>
              &copy; 2023 FullContinuumOfCareLA All rights
              reserved
            </p>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
