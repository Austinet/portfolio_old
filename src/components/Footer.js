import React from 'react'
import './css/footer.css'
import { FaFacebookF, FaGithub, FaLinkedin, FaTwitter, FaCaretSquareUp } from 'react-icons/fa'

const Footer = () => {
    return(
        <footer>
         <div className="footer">
          <div className="socials">
            <a href="https://github.com/Austinet"> <FaGithub style={iconStyles}/> </a>  
            <a href="https://linkedin.com/in/udhe-austine-ogaga-25961820b"> <FaLinkedin style={iconStyles}/> </a>   
            <a href="https://facebook.com/udhe.austine"> <FaFacebookF style={iconStyles}/> </a>   
            <a href="https://twitter.com/@austineudhe"> <FaTwitter style={iconStyles}/> </a>    
          </div>
          <p> Copyright &copy; 2022 All rights reserved, Udhe Austine Ogaga</p>
          <a href="#header"> <FaCaretSquareUp style={iconStyles}/></a>
         </div>
        </footer>
    )
}

const iconStyles = {
  color:'white',
  border:'2px solid white',
  borderRadius:'100%',
  fontSize:'35px',
  padding:'5px',
  margin: '10px 10px 5px',
  display:'inline-block'
}

export default Footer