import React from 'react'
import "./Component3.css";
import Man from "../../assets/smiling_man.webp";
import Zoom from 'react-reveal/Zoom';


const Component3 = () => {
  return (
    <>
      
      {/* MENTAL HEALTH SERVICES */}
      <div className="component3">


          <div className="component3-content container">

          <div className="c3-left">
          <Zoom duration={2000}>

              <h1>"The first step towards getting somewhere is to decide that you are not going to stay where you are."</h1>
              <h2>- J.P. Morgan</h2>
            {/* <h1>TREATMENT</h1>
            <p>
            We offer different levels of care based on each individual’s needs. Our programs consist of an intensive outpatient program (IOP) and a more demanding and structured partial hospitalization program (PHP).</p>
            <p>You can be confident that our caring and professional staff will recommend the right level of care for you or your loved one.</p>
            <p>All treatment clients will have a recovery/treatment plan developed within 30 days of admission. Measurement and reassessment of treatment plan progress happen on a weekly basis through the weekly summary.</p>
            <p>In the weekly summary, the drug and alcohol counselor will ensure that action steps to be taken by client or counselor are on target and that the action step achievements will enable resolution of the objective. All treatment plans are reviewed by and signed off on by the clinical director.</p> */}
          </Zoom>
          </div>


          <div className="c3-center">

            <div className='c3-right-img gradient-border'>
              <img src={Man} alt="Depressed Man" loading="lazy" />
            </div>

          </div>


          <div className="c3-right">      
            <h1>TREATMENT</h1>        
            <p>
            We offer different levels of care based on each individual’s needs. Our programs consist of an intensive outpatient program (IOP) and a more demanding and structured partial hospitalization program (PHP).</p>
            <p>You can be confident that our caring and professional staff will recommend the right level of care for you or your loved one.</p>

            </div>
          </div>

        </div>


    </>
  )
}

export default Component3
