import React from 'react'
import '../css/hero.css'
import logo2 from '../image/deju.jpg'
export default function Hero() {
  return (
    <div id='about' className='contain'>
        <div className='leftside'>
            <h1>Hi, I am </h1>
            <h1>Dejene Tesfaye</h1>
            <h4>I am a <span> FullStack Developer</span></h4>
            <p>I am a motivated and big dreamer individual, 
              always interested to take on new challenges.
              With a passion for learning I am dedicated to delivering high-quality results. 
              With a positive attitude and a growth mindset, 
              I am interested to make a meaningful contribution and achieve great things.
            </p>
            <a href='https://drive.google.com/file/d/1SZLOKI-ZfKhY34_OvDJI9PKaQEiNk_BX/view?usp=sharing' className='but'>Check Reume</a>
        </div>
        
        <div className='rightside'>
        
            <img src={logo2} alt='my pic'/>
        </div>
        
        
    </div>
  )
}
