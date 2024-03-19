import React, {useState} from 'react'
import '../css/nav.css'
import logo from '../image/logo.jpg'
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import menu from '../image/menu.ico'
import close from '../image/close.png'
function Nav() {
  const scrollToDiv = () => {
    const divToScroll = document.getElementById('skill');
    if (divToScroll) {
      divToScroll.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const Experiance = () => {
    const divToScroll = document.getElementById('experiance');
    if (divToScroll) {
      divToScroll.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const project = () => {
    const divToScroll = document.getElementById('project');
    if (divToScroll) {
      divToScroll.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const About = () => {
    const divToScroll = document.getElementById('about');
    if (divToScroll) {
      divToScroll.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const Education = () => {
    const divToScroll = document.getElementById('education');
    if (divToScroll) {
      divToScroll.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const Contact = () => {
    const divToScroll = document.getElementById('contact');
    if (divToScroll) {
      divToScroll.scrollIntoView({ behavior: 'smooth' });
    }
  };
    const [showMenu, setShowMenu] = useState(false);
  
    const toggleMenu = () => {
      setShowMenu(!showMenu);
    };
  return (

    <div className='container'>
       <img onClick={toggleMenu} id='img' src={showMenu ? close : menu} alt='menu'/>
      <ul>
        
        <li onClick={About} className='portfolio'>
        <img src={logo} alt='logo'/>
        <h3><span>Dejene Tesfaye</span></h3>
        </li>

        <li onClick={About} className={showMenu ? 'links lin' : 'links'}>About</li>
        <li onClick={scrollToDiv} className={showMenu ? 'links lin' : 'links'}>Skills</li>
        <li onClick={Experiance} className={showMenu ? 'links lin' : 'links'}>Experiance</li>
        <li onClick={project} className={showMenu ? 'links lin' : 'links'}>Projects</li>
        <li onClick={Education} className={showMenu ? 'links lin' : 'links'}>Educations</li>
        <li onClick={Contact} className={showMenu ? 'links lin' : 'links'}>Contact</li>
        <li  className={showMenu ? 'lin github' : 'github'}><a href='https://github.com/Deju12'><span><FaGithub/></span><l>Github</l></a></li>
        <li  className={showMenu ? 'lin Linkedin' : 'Linkedin'}><a href='https://www.linkedin.com/in/dejene-tesfaye?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'><span><CiLinkedin /></span><l>Linkedin</l></a></li>
    </ul>
   
    </div>
  )
}

export default Nav