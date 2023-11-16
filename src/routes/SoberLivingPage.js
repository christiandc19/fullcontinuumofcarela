import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import SoberLiving from '../components/SoberLiving/SoberLiving'
import SoberLivingSection from '../components/SoberLiving/SoberLivingSection'
import Contact2 from "../components/contact/Contact2";
import HomeGallery from '../components/SoberLiving/HomeGallery'



const FamilyTherapyPage = () => {
  return (
    <>
    <Navbar /> 
    <SoberLiving />
    <SoberLivingSection />
    <HomeGallery />
    <Contact2 />
    <Footer />
     </>
  )
}

export default FamilyTherapyPage