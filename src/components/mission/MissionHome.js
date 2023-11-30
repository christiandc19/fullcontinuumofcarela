import React from "react";
import "./MissionHome.css";
import Fade from "react-reveal/Fade";

const MissionHome = () => {
  return (
    <>
      <div className="mission-home">
        <div className="mission-home-content">
          <div className="mission-flex container">

              <Fade bottom duration={2000}>
                <h1>OUR MISSION</h1>
                <p>
                  Provide every individual a quiet, calm, and safe place to begin the
                  journey. It is our philosophy that in order to reduce the incidence
                  and prevalence of Mental Health issues and other behavioral health
                  problems among adults through the provision of addiction treatment
                  services, each individual must be empowered to make decisions about
                  their care with the expected outcome of an increased quality of
                  life.
                </p>
              <br/>
                <h1>OUR VISSION</h1>
                  <p>
                  Our vision is to be a beacon of hope and healing in the journey towards recovery from addiction. We imagine a world where individuals struggling with substance abuse find solace, support, and a path to lasting transformation through our comprehensive detox resources. We aspire to break the chains of addiction by fostering a compassionate and understanding community. Our vision is to provide a safe and informative online space that empowers individuals to confront and overcome the challenges of detoxification with resilience and determination.
                  </p>
              </Fade>
          </div>


        </div>
      </div>
    </>
  );
};

export default MissionHome;
