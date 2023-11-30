import React from 'react'
import './ContactButton.css'
import { Link } from "react-router-dom";
import { Link as LinkRoll } from "react-scroll";


const ContactButton = () => {
  return (
    <div className='contact-fixed'>
        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
        <Link to="/contact">
            <h1>contact us</h1>
        </Link>
        </LinkRoll>

    </div>
  )
}

export default ContactButton