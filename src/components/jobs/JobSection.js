import React from 'react'
import './JobSection.css'

import Worker from '../../assets/program-jobs.webp'

const JobSection = () => {
    return (
        <>

        <div className='job-section container'>
            <div className='job-section-content'>



                <div className='job-section-flex '>
                    <div className='job-section-left job-section-flexItem'>
                        <h1>Get hired at a great company in recovery.</h1>
                        <p>We strive to assist participants to acquire the knowledge and skills needed to obtain self-sufficiency through the enhancement of their capacity for civic engagement, community leadership by securing meaningful and gratifying employment that will empower themselves, their families, which will create stronger and safer communities. Our jobs program starts with getting an ID, to helping with a resume, to coaching for the interview, transportation to the actual work site, and coaching on how to keep the job and appropriate behavior. Work is NOT an option.</p>

                        <p>For more information for our Jobs Program, visit <a href='https://www.transitionsfortomorrow.org/'>here.</a></p>

                    </div>

                    <div className='job-section-right job-section-flexItem gradient-border'>
                        <img src={Worker} alt='Worker'/>
                    </div>
                </div>
            </div>


        </div>
        </>
    )
}

export default JobSection
