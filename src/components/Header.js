import React, {useState} from 'react'
import './css/header.css'
import { FaBars } from 'react-icons/fa'

// let menu = document.getElementById('menu');
// let list =  document.querySelector(".list");


// let navToggler = document.querySelector(".navToggler");
// navToggler.addEventListener('click', ()=> {
//     list.classList.toggle('none')
//     list.classList.toggle('block')
// });

// function toggle() {
//   list.classList.toggle('none')
//   list.classList.toggle('block')
//   alert('clicked')
// }


const Header = () => {
  const [showNav, setShowNav] = useState(true)

 
  const showMenu = () =>{
    setShowNav(!showNav)
  }

  return (
    <header id='header'>
        <div className='header'>
        <nav>
            <h2>
                <a href="./">
                {`<Austinet />`}
                </a>
            </h2>
           {
             showNav &&    
             <ul id="list" className="block list">
               <li><a href="#about">About</a></li>
               <li><a href="#skillset">Skill Set</a></li>
               <li><a href="#portfolio">Portfolio</a></li>
               <li><a href="https://austinet.hashnode.dev" target='_blank' rel='noreferrer'>Blog</a></li>
               <li><a href="#contact">Contact</a></li>
            </ul>
           }
        </nav>
        <FaBars className='navToggler fa-bars' id='menu' onClick={showMenu}/>
      </div>
    </header>
  )
}

export default Header