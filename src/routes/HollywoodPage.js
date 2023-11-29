import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Hollywood from '../components/SoberLiving/Hollywood'
import HollywoodSection from '../components/SoberLiving/HollywoodSection'
import Contact2 from "../components/contact/Contact2";
import HollywoodGallery from '../components/SoberLiving/HollywoodGallery'
import HomeGallery from '../components/SoberLiving/HomeGallery'



const HollywoodPage = () => {
  return (
    <>
    <Navbar /> 
    <Hollywood />
    <HollywoodSection />
    <HollywoodGallery />
    <HomeGallery />
    <Contact2 />
    <Footer />
     </>
  )
}

export default HollywoodPage