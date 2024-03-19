import React from 'react'
import '../css/education.css'
import sama from '../image/sama.jpeg'
import elemet from '../image/elementary.png'
import high from '../image/highschool.png'
import prep from '../image/preparatory.png'
import cisco from '../image/cisco.png'
export default function Education() {
  return (
    <div id='education' className='edcontainer'>
        
    <div className='edtitl'>
    <h1>Education</h1>
      <p>My education has been a journey of self-discovery and growth. My educational details are as follows.</p>
    </div>
    <div className='edbody'>
        <div className='bodyle le'>
          <div className='left'>
           <div className='box sel'>
           <div className='left'>
              <div className='image'>
                <img src={elemet} alt='img'/>
                
              </div>
              <div className='titlee'>
                <h2>Elementery School</h2>
                <h3> Abomsa Elementery School</h3>
                <h4>2006 G.C - 2014 G.C</h4>
              </div>
            </div>
            <div className='right'>
            <p>From grade 1 to 8  i am studied in oromia region Abomsa Town and my score was 51.</p>
            </div>
           </div>
           <div className='box'>
            
           </div>
           <div className='box sel' >
           <div className='left'>
              <div className='image'>
                <img src={prep} alt='img'/>
                
              </div>
              <div className='titlee'>
                <h2>Preparatory School</h2>
                <h3> Abomsa Preparatory School</h3>
                <h4>2017 G.C - 2018 G.C</h4>
              </div>
            </div>
            <div className='right'>
              <p>From grade 11 to 12  i am studied in oromia region Abomsa Town. And my University enterance exam result is 372</p>
            </div>
           </div>
           <div className='box'></div>
           <div className='box sel'>
           <div className='left'>
              <div className='image'>
                <img src={cisco} alt='img'/>
                
              </div>
              <div className='titlee'>
                <h2>Cisco Acadamy</h2>
                <h3> Samara University</h3>
                <h4>Nev 2021 - Jun 2023 E.C</h4>
              </div>
            </div>
            <div className='right'>
              <p>I have two certificates by IT Essentials and CCNA Networking from cisco acadamy </p>
            </div>
           </div>
          </div>
           
        </div>
        <div className='bline'>
            <div className='vertical'></div>
        </div>
        <div className='bodyle'>
           <div className='box'></div>
           <div className='box sel'>
           <div className='left'>
              <div className='image'>
                <img src={high} alt='img'/>
                
              </div>
              <div className='titlee'>
                <h2>High School</h2>
                <h3> Jinga Dhibu high school</h3>
                <h4>2015 G.C - 2016 G.C</h4>
              </div>
            </div>
            <div className='right'>
              <p>I studied my grade 9 and 10 class in this high school. And i have 3.14 matric result</p>
            </div>
           </div>
           <div className='box'></div>
           <div className='box sel'>
           <div className='left'>
              <div className='image'>
                <img className='imgsama' src={sama} alt='img'/>
                
              </div>
              <div className='titlee'>
                <h2>Samara University</h2>
                <h3> Degree Program</h3>
                <h4>2019 G.C - 2023 G.C</h4>
              </div>
            </div>
            <div className='right'>
              <p>I have a degree in electrical and computer engineering with 3.75 CGPA and 80% exit exam result</p>
            </div>
           </div>
           <div className='box'></div>
        </div>
    </div>
</div>
  )
}
