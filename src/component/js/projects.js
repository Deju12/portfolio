import React from 'react'
import '../css/projects.css'
import img from '../image/img.png'
import semister from '../image/semister.png'
import final from '../image/final.png'
import appa from '../image/appa.png'
export default function Projects() {
  return (
    <div id='project' className='procontainer'>
      <div className='titl'>
      <h1>Projects</h1>
          <p>I have worked on a some projects.
             From website to disktop app and IOT. Here are some of my projects.</p>
      </div>
      <div className='prbody'>
        <div className='proj'>
          <div className='image'>
            <a href='https://github.com/Deju12/project/tree/main/semester%20project'> <img src={semister} alt='img'/></a>
          </div>
          <div className='prog'>
            <button>JAVA</button>
            <button>Mysql</button>
            <button>Netbeans</button>
          </div>
          <div className='discr'>
            <h3> SU Student Property Registration System</h3>
            <p>This project is my 4th year semister project.It is desktop application and used for Register Student laptops. </p>
          </div>
        </div>
        <div className='proj'>
        <div className='image'>
            <a href='https://github.com/Deju12/project/tree/main/final%20thesis'> <img src={final} alt='img'/></a>
          </div>
          <div className='prog'>
            <button>Arduino</button>
            <button>C#</button>
            <button>C</button>
            <button>Visual Studio</button>
            <button>proteus</button>
          </div>
          <div className='discr'>
            <h3> Advanced Plant Irrigation System</h3>
            <p>This project is my final thesis project. It is used for automate your plant watering system</p>
          </div>
        </div>
        <div className='proj'>
        <div className='image'>
            <a href='https://github.com/Deju12/project/tree/main/apparent%20project'> <img src={appa} alt='img'/></a>
          </div>
          <div className='prog'>
            <button>HTML</button>
            <button>CSS</button>
            <button>Javascript</button>
            <button>PHP</button>
            <button>Mysql</button>
            <button>Xammp Server</button>
          </div>
          <div className='discr'>
            <h3> Customer outdoor get system</h3>
            <p>This project done in apparent time. It is used to give permission for Customers to enter  </p>
          </div>
        </div>
        <div className='proj'>
        <div className='image'>
            <a href='#'> <img src={img} alt='img'/></a>
          </div>
          <div className='prog'>
            <button>React js</button>
            <button>Django</button>
            <button>HTML</button>
            <button>CSS</button>
          </div>
          <div className='discr'>
            <h3> MY portfolio</h3>
            <p>my portfolio</p>
          </div>
        </div>
      </div>
    </div>
  )
}
