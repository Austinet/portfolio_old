import React from 'react'
import profile from './img/profile.jpg'
import './css/about.css'

const About = () => {
    return(
        <section id="about">
          <div className="about-container">
            <div className="about-me">
                <div className="about-image">
                    <img src={profile} alt="Profile " />
                </div>
                <div className="about-text">
                    <h1>
                        Hi, I'm Udhe Austine Ogaga <br />
                        Frontend Web Developer
                    </h1>
                    <p>
                        An innovative Frontend Web Developer,
                        with passion for designing and developing aesthetically pleasing,
                        user-friendly, interactive and responsive webpages for users
                        and for the internet. I love learning new things and adapting to
                        new technologies, and improvements in the Tech space.
                    </p>
                </div>        
            </div>
         </div>
         {/* <div className="flex">
            <div className="hobbies">
                <h2>HOBBIES</h2>
                <ol>
                    <li>Football</li>
                    <li>Video Games</li>
                    <li>Surfing the internet</li>
                    <li>Reading</li>
                </ol>
            </div>
            <div className="priorities">
                <h2>PRIORITIES</h2>
                <ul>
                    <li>God</li>
                    <li>Family</li>
                    <li>Health</li>
                    <li>Personal growth</li>
                    <li>Relationships</li>      
                    <li>Work</li>
                </ul>
            </div>
            <div className="other-skills">
                <h2>OTHER SKILLS</h2>
                <ul>
                    <li>Graphics Design</li>
                    <li>Leadership skills</li>
                    <li>Collaboration skills</li>
                    <li>Communication skills</li>
                </ul>
            </div>
         </div>
         <div className="contact-link">
            <a href="./contact.html" className="btn">CONTACT ME</a>
         </div> */}
      </section>
    )
}

export default About