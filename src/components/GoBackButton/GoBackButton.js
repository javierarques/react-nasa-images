import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import backIcon from './back.svg';
import './GoBackButton.css';

const GoBackButton = ({ text = 'Go Back', history: { action, goBack } }) => {
  if (action === 'PUSH') {
    return (
      <a onClick={goBack} className="GoBackButton">
        <img src={backIcon} alt="go back" className="GoBackButton-image" />
        {text}
      </a>
    );
  } else {
    return null;
  }
};

GoBackButton.propType = {
  text: PropTypes.string
};

export default withRouter(GoBackButton);
