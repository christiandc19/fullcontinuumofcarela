import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Detox from '../components/Programs-Detox/DetoxProgram'
import DetoxSection from '../components/Programs-Detox/DetoxProgramSection'
import ContactForm from '../components/contact/ContactForm'


const DetoxProgramPage = () => {
  return (
    <>
    <Navbar /> 
    <Detox />
    <DetoxSection />
    <ContactForm />
    <Footer />
     </>
  )
}

export default DetoxProgramPage