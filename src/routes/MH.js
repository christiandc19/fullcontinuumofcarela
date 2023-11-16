import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import MH from '../components/MH/MH'
import MenuMentalHealth from "../components/menus/MenuMentalHealth";
import Contact2 from "../components/contact/Contact2";



const MHealth = () => {
  return (
    <>
    <Navbar /> 
    <MH />
    <MenuMentalHealth />
    <Contact2 />
    <Footer />
     </>
  )
}

export default MHealth