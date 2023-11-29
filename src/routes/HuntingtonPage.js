import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Huntington from '../components/SoberLiving/Huntington'
import HuntingtonSection from '../components/SoberLiving/HuntingtonSection'
import Contact2 from "../components/contact/Contact2";
import HuntingtonGallery from '../components/SoberLiving/HuntingtonGallery'
import HomeGallery from '../components/SoberLiving/HomeGallery'



const HuntingtonPage = () => {
  return (
    <>
    <Navbar /> 
    <Huntington />
    <HuntingtonSection />
    <HuntingtonGallery />
    <HomeGallery />
    <Contact2 />
    <Footer />
     </>
  )
}

export default HuntingtonPage