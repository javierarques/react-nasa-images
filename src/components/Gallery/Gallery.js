import React from 'react';
import PropTypes from 'prop-types';
import './Gallery.css';

const Gallery = ({ children }) => {
  const galleryItems = children.map(child => (
    <div className="Gallery-item">{child}</div>
  ));

  return <div className="Gallery">{galleryItems}</div>;
};

Gallery.propTypes = {
  children: PropTypes.node
};

export default Gallery;
