import React from 'react'
import html5 from './img/html5.svg'
import css3 from './img/css3.svg'
import js from './img/js.svg'
import react from './img/react.svg'
import github from './img/github.svg'
import graphics from './img/pen-fancy.svg'
import './css/skillset.css'

const SkillSet = () => {
  return (
    <section id="skillset">
     <div className='skillset'>
       <h2>TECHNICAL SKILL SET</h2>
       <ul>
         <li>
           <h3>HTML</h3>
           <img src={html5} alt="HTML logo" className="svg" />
         </li>
         <li>
           <h3>CSS</h3>
           <img src={css3} alt="CSS logo" className="svg" />
         </li>
         <li>
           <h3>JavaScript</h3>
           <img src={js} alt="JavaScript logo" className="svg" />
         </li>
         <li>
           <h3>ReactJs</h3>
           <img src={react} alt="Git logo" className="svg" />
         </li>
         <li>
           <h3>Github</h3>
           <img src={github} alt="Github logo" className="svg" />
         </li>
         <li>
           <h3>Graphics Design </h3>
           <img src={graphics} alt="Pen" className="svg"/>
         </li>
         {/* <li>
           <h3>React </h3>
           <img src={reactJs} alt="ReactJs" className="svg"/>
         </li> */}
       </ul>
     </div>
    </section>
  )
}

export default SkillSet