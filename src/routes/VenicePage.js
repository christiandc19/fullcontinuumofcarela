import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Venice from '../components/SoberLiving/Venice'
import VeniceSection from '../components/SoberLiving/VeniceSection'
import Contact2 from "../components/contact/Contact2";
import VeniceGallery from '../components/SoberLiving/VeniceGallery'
import HomeGallery from '../components/SoberLiving/HomeGallery'



const VenicePage = () => {
  return (
    <>
    <Navbar /> 
    <Venice />
    <VeniceSection />
    <VeniceGallery />
    <HomeGallery />
    <Contact2 />
    <Footer />
     </>
  )
}

export default VenicePage