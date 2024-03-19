import React, { useState } from 'react';
import axios from 'axios';
import '../css/contact.css';
import email from '../image/gmail.png';

export default function Contact() {
  const [emailValue, setEmailValue] = useState('');
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/send-email/', {
        email: emailValue,
        name,
        subject,
        message
      });
      setErrorMessage('');
      setSuccessMessage('Sent successfully!');
      // Clear input fields after successful submission
      setEmailValue('');
      setName('');
      setSubject('');
      setMessage('');
    } catch (error) {
      setSuccessMessage('');
      setErrorMessage('Error');

      console.error('Error sending email:', error);
    }
  };

  return (
    <div id='contact' className='concontainer'>
      <div className='contitle'>
        <h1>Contact</h1>
        <p>Feel free to reach out to me for any questions or opportunities!</p>
      </div>
      <div className='conbody'>
        <div className='formbody'>
          <form onSubmit={handleSubmit}>
            <h2>Email Me <img src={email} alt='email'/>{successMessage && <span className="success">{successMessage}</span>}{errorMessage && <span className="error">{errorMessage}</span>}</h2>
            
            <div className='yemail'><input type='text' placeholder='Your Email' value={emailValue} onChange={(e) => setEmailValue(e.target.value)} /></div>
            <div className='name'><input type='text' placeholder='Your Name' value={name} onChange={(e) => setName(e.target.value)} /></div>
            <div className='subject'><input type='text' placeholder='Subject' value={subject} onChange={(e) => setSubject(e.target.value)} /></div>
            <div className='message'>
              <textarea name="message" rows="10" cols="500" placeholder='Message' value={message} onChange={(e) => setMessage(e.target.value)} />
            </div>
            <div className='button'>
              <input type='submit' value="Send" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
