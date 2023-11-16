import React from 'react'
import "./Component3.css";
import Zoom from 'react-reveal/Zoom';
import Fade from "react-reveal/Fade";

import c3Img from "../../assets/peaceful-man.webp";

const Component3 = () => {
  return (
    <>
      
      {/* MENTAL HEALTH SERVICES */}
      <div className="component3">


          <div className="component3-content container">

          <div className="c3-left">
            <Fade bottom duration={3000}>
            <h5>WHAT WE DO</h5>
            <p>
            We offer different levels of care based on each individual’s needs. Our programs consist of an intensive outpatient program (IOP) and a more demanding and structured partial hospitalization program (PHP).</p>
            <p>You can be confident that our caring and professional staff will recommend the right level of care for you or your loved one.</p>
            <h5>TREATMENT</h5>
            <p>All treatment clients will have a recovery/treatment plan developed within 30 days of admission. Measurement and reassessment of treatment plan progress happen on a weekly basis through the weekly summary.</p>
            <p>In the weekly summary, the drug and alcohol counselor will ensure that action steps to be taken by client or counselor are on target and that the action step achievements will enable resolution of the objective. All treatment plans are reviewed by and signed off on by the clinical director.</p>
          </Fade>
          </div>


          <div className="c3-right">

          <Zoom duration={3000}>
            <div className='c3-right-img gradient-border'>
              <img src={c3Img} alt="Depressed Man" loading="lazy" />
            </div>
        </Zoom>

          </div>
          </div>
        </div>


    </>
  )
}

export default Component3
