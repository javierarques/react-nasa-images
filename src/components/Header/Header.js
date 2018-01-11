import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import nasaLogo from '../../assets/nasa-logo.svg';
import './Header.css';

const Header = ({ children }) => {
  return (
    <header className="Header">
      <div className="Header-wrapper">
        <Link to="/" className="Header-logoLink">
          <img
            src={nasaLogo}
            alt="NASA images"
            title="NASA images"
            height="64"
            className="Header-logo"
          />
        </Link>
        <div className="Header-content">{children}</div>
      </div>
    </header>
  );
};

Header.propTypes = {
  children: PropTypes.node
};

export default Header;
