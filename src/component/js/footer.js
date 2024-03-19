import React from 'react'
import git from '../image/github.ico'
import linkedin from '../image/linkedin.ico'
import facebook from '../image/facebook.ico'
import insta from '../image/instagram.ico'
import twet from '../image/twitter.ico'
import '../css/footer.css'
export default function footer() {
    const Skills = () => {
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
      
        
  return (
    <div className='footer'>
    <h2>Dejene Tesfaye</h2>
    <ul>
      <li onClick={About}>About</li>
      <li onClick={Skills} >Skills</li>
      <li onClick={Experiance}>Experiance</li>
      <li onClick={project} >project</li>
      <li onClick={Education}>Education</li>
    </ul>
    <div className='socialmedia'>
      <a href='https://www.facebook.com/dejulove.tesfaye?mibextid=rS40aB7S9Ucbxw6v'><img src={facebook} alt='facebook'/></a>
      <a href='https://github.com/Deju12'><img src={git} alt='github'/></a>
      <a href='https://www.linkedin.com/in/dejene-tesfaye?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'><img src={linkedin} alt='linkedin'/></a>
      <a href='https://www.linkedin.com/in/dejene-tesfaye?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'><img src={twet} alt='twitter'/></a>
      <a href='https://github.com/Deju12'><img src={insta} alt='instagram'/></a>
    </div>
    <div className='contact'>
      <p>Email :  dejotesfa123@gmail.com</p>
      <p>Phone : +251940218838</p>
      
    </div>
    <div className='copy'>
    <p>&copy; 2024</p>
    </div>
    
  </div>
  )
}
