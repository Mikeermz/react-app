import React, { Component, Fragment } from 'react';

const initalState = {
  count: 0,
  name: 'MediaKeyMessageEvent',
}

const buttonArray = [ 'agregar', 'restar', 'reset', 'hola', 'sergio'];

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = initalState
  }

  componentDidUpdate() {

  }

  
  agregar = () => {
    debugger;
    this.setState({
      count: this.state.count + 1
    })
    debugger;
  }

  restar = () => {
    this.setState({
      count: this.state.count - 1
    })
  }

  reset = () => {
    this.setState( initalState )
  }

  render() { 
    return (  
      <Fragment>
          <p>{this.state.count}</p>
          {
            buttonArray && buttonArray.map( (element, key) => (
              <button key={key + element} className={element} onClick={this[element]}>{element}</button>
            ))
          }
      </Fragment>
    );
  }
}
 
export default Counter;