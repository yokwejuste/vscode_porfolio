import React from "react";
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import '../styles/Footer.css';

function Footer() {
  return ( 
    <footer className="footer-container">
      <div className="links-footer">
        <p>It's me :)</p>
        <a href="https://www.linkedin.com/in/yokwejuste/" 
          target="_blank" 
          className="icon-container" 
          rel="noreferrer"
        >
          <BsLinkedin className="icon-footer"/>
        </a>
        <a href="https://github.com/yokwejuste" 
          target="_blank" 
          className="icon-container" 
          rel="noreferrer"
        >
          <BsGithub className="icon-footer"/>
        </a>
      </div>
      
      <p className="text-footer">Developed with ❤ by Steve Yonkeu</p>
    </footer>
  );
}

export default Footer;