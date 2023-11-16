import React from 'react'
import InsuranceSection from '../insurance/InsuranceSection';
import Section2 from '../section2/Section2';
import ContactForm from '../contact/ContactForm';
import MissionHome from '../mission/MissionHome';
import TherapySA from '../therapySA/TherapySA';
import Section3 from '../section3/Section3';
import Component3 from '../component3/Component3';



const home = () => {
  return (
    <>
    <TherapySA />
    <Section2 />
    <Component3 />
    <Section3 />
    <InsuranceSection />
    <MissionHome />
    <ContactForm />
    </>
  )
}

export default home
