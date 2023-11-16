import React from "react";
import { Link } from "react-router-dom";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import logo from '../../assets/nav-logo-wh2.png'
import "./FooterStyles.css";

import { Link as LinkRoll } from "react-scroll";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="top">
            <div className="logo-footer">
              <img src={logo} alt="Oxnard Rehab Logo" loading="lazy"/>
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
            <div className="col">
              <h3>COMPANY</h3>

{/* MISSION */}

              <div className="hide">
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/mission">
                    <p>Our Mission</p>
                  </Link>
                </LinkRoll>
              </div>

              <div className="show">
                <LinkRoll activeClass="active" to="scroll" spy={true} smooth={true} duration={500}>
                  <Link to="/mission">
                    <p>Our Mission</p>
                  </Link>
                </LinkRoll>
              </div>


{/* ABOUT US */}

              <div className="hide">
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/about-us">
                    <p>About Us</p>
                  </Link>
                </LinkRoll>
              </div>

              <div className="show">
                <LinkRoll activeClass="active" to="scroll" spy={true} smooth={true} duration={500}>
                  <Link to="/about-us">
                    <p>About Us</p>
                  </Link>
                </LinkRoll>
              </div>


{/* INSURANCE */}

              <div className="hide">
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="contact">
                    <p>Contact Us</p>
                  </Link>
                </LinkRoll>
              </div>

              <div className="show">
                <LinkRoll activeClass="active" to="scroll" spy={true} smooth={true} duration={500}>
                  <Link to="/contact">
                    <p>Contact Us</p>
                  </Link>
                </LinkRoll>
              </div>

          </div>



{/* NAVIGATION */}

            <div className="col">
              <h3>Navigation</h3>

{/* HOME */}

              <div className="hide">
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/">
                    <p>Home</p>
                  </Link>
                </LinkRoll>
              </div>

              <div className="show">
                <LinkRoll activeClass="active" to="scroll" spy={true} smooth={true} duration={500}>
                  <Link to="/">
                    <p>Home</p>
                  </Link>
                </LinkRoll>
              </div>


{/* INSURANCE */}

              <div className="hide">
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/insurance">
                    <p>Insurance</p>
                  </Link>
                </LinkRoll>
              </div>

              <div className="show">
                <LinkRoll activeClass="active" to="scroll" spy={true} smooth={true} duration={500}>
                  <Link to="/insurance">
                    <p>Insurance</p>
                  </Link>
                </LinkRoll>
              </div>

{/* JOB */}

<div className="hide">
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/jobs">
                    <p>Job Assistance</p>
                  </Link>
                </LinkRoll>
              </div>

              <div className="show">
                <LinkRoll activeClass="active" to="scroll" spy={true} smooth={true} duration={500}>
                  <Link to="/jobs">
                    <p>Job Assistance</p>
                  </Link>
                </LinkRoll>
              </div>

            </div>








            <div className="col">
              <h3>PROGRAMS</h3>

{/* PHP */}
              <div className="hide">
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/partial-hospitalization-program">
                    <p>Partial Hospitalization Program</p>
                  </Link>
                </LinkRoll>
              </div>

              <div className="show">
                <LinkRoll activeClass="active" to="scroll" spy={true} smooth={true} duration={500}>
                  <Link to="/partial-hospitalization-program">
                    <p>Partial Hospitalization Program</p>
                  </Link>
                </LinkRoll>
              </div>  


{/* IOP */}

<div className="hide">
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/intensive-outpatient-program">
                    <p>Intensive Outpatient Program</p>
                  </Link>
                </LinkRoll>
              </div>

              <div className="show">
                <LinkRoll activeClass="active" to="scroll" spy={true} smooth={true} duration={500}>
                  <Link to="/intensive-outpatient-program">
                    <p>Intensive Outpatient Program</p>
                  </Link>
                </LinkRoll>
              </div> 

{/* OP */}

<div className="hide">
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/outpatient-program">
                    <p>Outpatient Program</p>
                  </Link>
                </LinkRoll>
              </div>

              <div className="show">
                <LinkRoll activeClass="active" to="scroll" spy={true} smooth={true} duration={500}>
                  <Link to="/outpatient-program">
                    <p>Outpatient Program</p>
                  </Link>
                </LinkRoll>
              </div>


            </div>







            <div className="col">
              <h3>SERVICES</h3>

{/* PHP */}
              <div className="hide">
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/case-management">
                    <p>Case Management</p>
                  </Link>
                </LinkRoll>
              </div>

              <div className="show">
                <LinkRoll activeClass="active" to="scroll" spy={true} smooth={true} duration={500}>
                  <Link to="/case-management">
                    <p>Case Management</p>
                  </Link>
                </LinkRoll>
              </div>  


{/* IOP */}

<div className="hide">
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/crisis-intervention">
                    <p>Crisis Intervention</p>
                  </Link>
                </LinkRoll>
              </div>

              <div className="show">
                <LinkRoll activeClass="active" to="scroll" spy={true} smooth={true} duration={500}>
                  <Link to="/crisis-intervention">
                    <p>Crisis Intervention</p>
                  </Link>
                </LinkRoll>
              </div> 

{/* OP */}

<div className="hide">
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/family-therapy">
                    <p>Family Therapy</p>
                  </Link>
                </LinkRoll>
              </div>

              <div className="show">
                <LinkRoll activeClass="active" to="scroll" spy={true} smooth={true} duration={500}>
                  <Link to="/family-therapy">
                    <p>Family Therapy</p>
                  </Link>
                </LinkRoll>
              </div>


            </div>







          </div>
          <p className="copyright">
            <p>
              &copy; 2023 Oxnard Rehab Treatment Center. All rights
              reserved
            </p>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
