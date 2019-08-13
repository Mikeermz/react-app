import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const imageLogo = ({clasedelLogo, imagenDelLogo}) => (
  <img className={clasedelLogo} src={imagenDelLogo} alt="logo"/>
);

imageLogo.propType = {
  clasedelLogo: PropTypes.string.isRequired
}

export default imageLogo;