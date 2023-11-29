import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Citrus from '../components/SoberLiving/Citrus'
import CitrusSection from '../components/SoberLiving/CitrusSection'
import Contact2 from "../components/contact/Contact2";
import CitrusGallery from '../components/SoberLiving/CitrusGallery'
import HomeGallery from '../components/SoberLiving/HomeGallery'



const CitrusPage = () => {
  return (
    <>
    <Navbar /> 
    <Citrus />
    <CitrusSection />
    <CitrusGallery />
    <HomeGallery />
    <Contact2 />
    <Footer />
     </>
  )
}

export default CitrusPage