import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import './GalleryItem.css';

const GalleryItem = ({ image, id, title }) => (
  <article className="GalleryItem">
    <Link className="GalleryItem-wrapper" to={`/asset/${id}`} title={title}>
      <div className="GalleryItem-imageWrapper">
        <LazyLoad height={200} once>
          <img
            src={image}
            alt={title}
            title={title}
            className="GalleryItem-image"
          />
        </LazyLoad>
      </div>
      {title && <p className="GalleryItem-title">{title}</p>}
    </Link>
  </article>
);

GalleryItem.propType = {
  image: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default GalleryItem;
