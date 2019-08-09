import React from 'react';
import PropTypes from 'prop-types';

import Logo from '../../global/logo'

const headerView = ({ saludo }) => (
  <header className="App-header">
    <Logo clasedelLogo="App-logo" />
    <Logo clasedelLogo="App-logo" />
    <p>
      {saludo} a todos
    </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  </header>
);

headerView.propTypes = {
  saludo: PropTypes.string.isRequired
};

export default headerView;
