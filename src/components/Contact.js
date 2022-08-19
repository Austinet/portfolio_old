import React from 'react'
import './css/contact.css'
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa'

const Contact = () => {
  return (
    <section id="contact">
        <h2>CONTACT</h2>
        <div className="contact-section">
          <div className="form">
           <form action="mailto:austinetsplendour@gmail.com" method="POST" encType="text/plain">
              <div className="sub-form">
                 <div>
                  <label htmlFor="name">Name:</label>
                  <input type="text" name="name" id="name" placeholder="Please Enter Your Name" required />
                 </div>
                 <div>
                   <label htmlFor="email" >Email:</label>
                   <input type="email" name="email" id="email" placeholder="Enter Your Email Address" required />
                 </div>
               </div>
               <label htmlFor="message">Message:</label>
               <textarea name="message" id="message" placeholder="Enter Your Message" required></textarea>
               <input type="submit" value="SEND" className="btn" />
            </form>
          </div>
          <div className="contact">
            <ul>
                <li><FaPhoneAlt /> <span>08142211941</span></li>
                <li><FaEnvelope /> <span>austinetsplendour@gmail.com</span></li>
                <li><FaMapMarkerAlt /> <span>Port Harcourt, Nigeria</span></li>
            </ul>
          </div>
        </div>
    </section>
  )
}

export default Contact