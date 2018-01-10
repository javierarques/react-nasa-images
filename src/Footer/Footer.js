import React from 'react';
import './Footer.css';
import githubIcon from './github.svg';

const Footer = () => (
  <footer className="Footer">
    <div className="Footer-wrapper">
      Developed by{' '}
      <a
        className="Footer-link"
        target="_blank"
        rel="noopener noreferrer"
        href="https://twitter.com/javiarques"
      >
        @javiarques
      </a>.{' '}
      <a
        className="Footer-link"
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/javierarques/react-nasa-images"
      >
        <img
          className="Footer-icon"
          src={githubIcon}
          alt="Github icon"
          width="16"
        />
        Github repository
      </a>.
    </div>
  </footer>
);

export default Footer;
