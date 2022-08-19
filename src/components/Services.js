import React from 'react'
import './css/services.css'
import coding from './img/coding.jpeg'
import instructor from './img/instructor.jpg'

const Services = () => {
  return (
    <section id='services'>
        <h2>SERVICES</h2>
        <div className="services">
            <div className="web-dev">
              <h3>Frontend Web Development</h3>
              <img src={coding} alt="laptop with codes" />
            </div>
            <div className="tutoring">
              <h3>Tutoring and Mentoring</h3>
              <img src={instructor} alt="laptop with codes" />
            </div>
        </div>
    </section>
  )
}

export default Services