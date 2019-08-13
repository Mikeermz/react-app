import React from 'react';
import PropTypes from 'prop-types';

import Logo from '../../global/logo';
import Counter from '../../global/counter'

import LogodeReact from '../../../logo.svg';
import Alan from './Alan.jpg';

const arrayImages = [
  {
    img: Alan,
    miClase: 'App-logo-Alan'
  },
  {
    img: LogodeReact,
    miClase: 'App-logo' 
  }
]
console.log(Alan);

const headerView = ({ saludo }) => (
  <header className="App-header">
    
    {
      arrayImages && 
      arrayImages.map( (element, key) => (
        <Logo key={key} clasedelLogo={element.miClase} imagenDelLogo={element.img} />
      ))
    }

    <Counter/>
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
