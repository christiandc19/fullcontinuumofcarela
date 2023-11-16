import React, { useRef } from "react";



import './Contact2.css';
import emailjs from 'emailjs-com'


const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();


                // Popup message after send button is clicked
                const feedbackEl = document.querySelector(".feedback");
                feedbackEl.setAttribute("class", "feedback");
                setTimeout(function() {
                feedbackEl.setAttribute("class", "feedback hidden");
                }, 3000);
        



        //    Service Id        Template Id                 Public Key (Account Tab) 
        emailjs.sendForm('service_hsunksm', 'template_rxc8sbg', form.current, 'Rj5e7bWJla-kOEL0H')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset()
    };

    return (
        <>


    <div className="contact2-header contact2-container">
        <h1>DO YOU NEED URGENT HELP?</h1>
        <p>Our Addiction and Recovery Support team is available to assist you.</p>
    </div>

<div className="contact2-container">
    <div className="contact-form-content">

      <div className="left-side">

        <div className="address details">
          <i className="fas fa-map-marker-alt"></i>
          <div className="topic">Address</div><br/>
          <div className="text-one"> 68487 E Palm Canyon Dr, STE 44, </div>
          <div className="text-two">Cathedral City CA 92234</div>
        </div>

        <div className="phone details">
          <i className="fas fa-phone-alt"></i>
          <div className="topic">Phone</div><br/>
          <div className="text-one"><a href="tel:3234521224"> +1 (323) 452-1224</a></div>
        </div>

        <div className="email details">
          <i className="fas fa-envelope"></i>
          <div className="topic">Email</div><br/>
          <div className="text-one"> Info@PalmSpringsRehab.biz</div>
        </div>
      </div>

      <div className="right-side">
        <div className="topic-text">Send us a message</div> <br/>
        <p className="topic-text-p">Please call our admission department if you have any questions.</p>
      <form ref={form} onSubmit={sendEmail}>
        <div className="input-box">
        <input type="text" name='name' placeholder='Your Name' required />
        </div>
        <div className="input-box">
        <input type="text" name='email' placeholder='Your Email' required />
        </div>
        <div className="input-box">
        <input type="text" name='phone' placeholder='Your Phone' required />
        </div>
        <div className="input-box">
        <input type="text" name='subject' placeholder='Subject' required />
        </div>
        <div className="input-box message-box">
        <textarea name="message" rows="4" placeholder="How can we help?" required ></textarea>

        </div>
        <input className="contact-btn" type="submit" value="Submit" />

        <div className="textarea2 feedback hidden">
            <textarea name="message2" cols="30" rows="3" required>Message Sent to Oxnard Rehab</textarea>
        </div>



      </form>
    </div>
    </div>
  </div>

        </>
    )
}

export default ContactForm