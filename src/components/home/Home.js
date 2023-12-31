import React from 'react'
import InsuranceSection from '../insurance/InsuranceSection';
import Section2 from '../section2/Section2';
import ContactForm from '../contact/ContactForm';
import MissionHome from '../mission/MissionHome';
import TherapySA from '../therapySA/TherapySA';
import Section3 from '../section3/Section3';
import Section4 from '../section4/Section4';
import Component3 from '../component3/Component3';
// import ReviewSection from '../reviews/ReviewSection';



const home = () => {
  return (
    <>
    <TherapySA />
    <Section4 />
    <Section2 />
    <Component3 />
    <Section3 />
    <InsuranceSection />
    {/* <ReviewSection /> */}
    <MissionHome />
    <ContactForm />
    </>
  )
}

export default home
