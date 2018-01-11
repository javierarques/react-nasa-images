import React from 'react';
import PropTypes from 'prop-types';
import './Gallery.css';

const Gallery = ({ children }) => <div className="Gallery">{children}</div>;

Gallery.propTypes = {
  children: PropTypes.node
};

export default Gallery;
