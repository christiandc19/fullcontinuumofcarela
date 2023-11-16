import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import DetoxPHP from '../components/Detox-PHP/DetoxPhp'
import ContactForm from '../components/contact/ContactForm'
import DetoxPHPSection from '../components/Detox-PHP/DetoxPhpSection'


const PanicDisorder = () => {
  return (
    <>
    <Navbar /> 
    <DetoxPHP />
    <DetoxPHPSection />
    <ContactForm />
    <Footer />
     </>
  )
}

export default PanicDisorder