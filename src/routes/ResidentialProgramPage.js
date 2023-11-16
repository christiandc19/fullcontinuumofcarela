import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Residential from '../components/Programs-Residential/Residential'
import ResidentialSection from '../components/Programs-Residential/ResidentialSection'
import ContactForm from '../components/contact/ContactForm'


const ResidentialProgramPage = () => {
  return (
    <>
    <Navbar /> 
    <Residential />
    <ResidentialSection />
    <ContactForm />
    <Footer />
     </>
  )
}

export default ResidentialProgramPage