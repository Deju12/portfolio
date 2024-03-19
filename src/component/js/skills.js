import React from 'react'
import '../css/skills.css'
import html from '../image/html.ico'
import react from '../image/react.ico'
import css from '../image/css.ico'
import javascript from '../image/javascript.ico'
import python from '../image/python.ico'
import django from '../image/django.ico'
import php from '../image/php.ico'
import vs from '../image/visual-studio-code (1).ico'
import postman from '../image/postman.ico'
import protues from '../image/protues.png'
import postgres from '../image/postgresql.ico'
import powerpoint from '../image/powerpoint.ico'
import word from '../image/word.ico'
import mysql from '../image/mysql.ico'
import git from '../image/git.ico'
function Skills() {
  return (
    <div id='skill' className='containn'>
        <div className='skills'>
          <h1>Skills</h1>
          <p>Here are some of my skills on which I have been working on for the past 1 years.</p>
        </div>
        <div className='contbody'>
        <div className='body'>
          <div className='b front'>
            <h1>front end</h1>
            <button><img src={html} alt='html'/><h3>HTML</h3></button>
            <button><img src={css} alt='html'/><h3>CSS</h3></button>
            <button><img src={javascript} alt='html'/><h3>javascript</h3></button>
            <button><img src={react} alt='html'/><h3>REACT JS</h3></button>
          </div>
          <div className='b back'>
          <h1>back end</h1>
          <button><img src={python} alt='html'/><h3>PYTHON</h3></button>
            <button><img src={django} alt='html'/><h3>DJANGO</h3></button>
            <button><img src={mysql} alt='html'/><h3>MYSQL</h3></button>
            <button><img src={postgres} alt='html'/><h3>Postgresql</h3></button>
            <button><img src={php} alt='html'/><h3>PHP</h3></button>
            
          </div>
          <div className='b software'>
          <h1>software</h1>
          <button><img src={vs} alt='html'/><h3>VS Code</h3></button>
            <button><img src={postman} alt='html'/><h3>Postman</h3></button>
            <button><img src={protues} alt='html'/><h3>Protues</h3></button>
           
          </div>
          <div className='b other'>
          <h1>other</h1>
          <button><img src={git} alt='html'/><h3>Git</h3></button>
            <button><img src={powerpoint} alt='html'/><h3>Power Point</h3></button>
            <button><img src={word} alt='html'/><h3>Word</h3></button>
            
          </div>
        </div>
        </div>
        
        
    </div>
  )
}

export default Skills