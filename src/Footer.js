import React from 'react';
import './Footer.css';
import { FaLinkedin, FaGithubSquare, FaPhoneSquare } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { useState } from 'react';

const Footer = () => {
  const [name, setName] = useState(
    "If you Like my portfolio, Please subscribe"
  );

  function handleNameChange() {
    const names = [
      "Thanks for your subscription",
      "Welcome",
      "It's my pleasure",
    ];
    const randomIndex = Math.floor(Math.random() * names.length);
    setName(names[randomIndex]);
  }
  return (
    <div className='footer'>
      <div className="contact-info-container">
        
        <div className="contact-info">
          <div className="contact-info-item">
            <MdMailOutline className="icon" />
            <h3>Email:</h3>
            <p>guselvaraanni24@gmail.com</p>
          </div>
          <div className="contact-info-item">
            <FaPhoneSquare className="icon" />
            <h3>Phone:</h3>
            <p>+91 8508816606</p>
          </div>
          <div className="contact-info-item">
            <FaLinkedin className="icon" />
            <h3>LinkedIn:</h3>
            <p><a href="https://www.linkedin.com/in/selva-raanni-gu-a0604a238/">https://www.linkedin.com/in/selva-raanni-gu-a0604a238/</a></p>
          </div>
          <div className="contact-info-item">
            <FaGithubSquare className="icon" />
            <h3>GitHub:</h3>
            <p><a href="https://github.com/guselvaraanni">https://github.com/guselvaraanni</a></p>
          </div>
        </div>
      </div>
      <div>

      <p>{name}</p>
      
        <button className="subscribe-button" onClick={handleNameChange}>Subscribe</button>
      </div>      
    </div>
  );
};

export default Footer;
