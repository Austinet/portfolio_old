import React from 'react'
import './css/educationWorkExperience.css'

const EducationWorkExperience = () => {
  return (
    <section id="education-work">
      <div className="education">
          <h3>EDUCATION</h3>
          <ul>
              <li>Computer Science, The University Of Port Harcourt (2017 - 2022)</li>
              <li>Soft Skills training, Jobberman (June, 2021)</li>
              <li>Graphics Design, Eagle's Academy (May, 2021)</li>
              <li>West Africa Senior School Certificate(WAEC), Divine Grace Academy, Delta, Nigeria (2016)</li>
         </ul>
      </div>
      <div className="work">
         <h3>WORK EXPERIENCE</h3>
         <ul>
             <li>Frontend Web Developer(Intern), Side Hustle Internship (August, 2022 - present)</li>
             {/* <li>Frontend Web Developer(Intern),HNG Internship (August, 2021 - September, 2021)</li> */}
             <li>Frontend Web Developer(Intern), Kodecamp Internship (March, 2022 - July, 2022)</li>
             <li>Frontend Web Developer(Intern), Side Hustle Internship (June - August, 2021)</li>
             <li>Student Industrial Work Experience Scheme(SIWES - Intern), Fonglo IT Place (April - September, 2021) </li>
         </ul>
       </div>
    </section>
  )
}

export default EducationWorkExperience