import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Detroit from '../components/SoberLiving/Detroit'
import DetroitSection from '../components/SoberLiving/DetroitSection'
import Contact2 from "../components/contact/Contact2";
import DetroitGallery from '../components/SoberLiving/DetroitGallery'



const DetroitPage = () => {
  return (
    <>
    <Navbar /> 
    <Detroit />
    <DetroitSection />
    <DetroitGallery />
    <Contact2 />
    <Footer />
     </>
  )
}

export default DetroitPage