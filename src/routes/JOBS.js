import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import JOBS from '../components/jobs/Jobs'
import ContactForm from "../components/contact/ContactForm";


const Jobs = () => {
  return (
    <>
    <Navbar /> 
    <JOBS />
    <ContactForm />
    <Footer />
     </>
  )
}

export default Jobs