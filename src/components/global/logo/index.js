import React from 'react';
import PropTypes from 'prop-types';

import Logo from '../../../logo.svg'


const imageLogo = ({clasedelLogo}) => (
  <img className={clasedelLogo} src={Logo} alt="logo"/>
);

imageLogo.propType = {
  clasedelLogo: PropTypes.string.isRequired
}


export default imageLogo;