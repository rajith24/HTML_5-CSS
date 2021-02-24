import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Stock from './graph'

class App extends Component {
  
  constructor(props) {
    super(props);
    this.sayHello = this.sayHello.bind(this);
  }

  sayHello() {
    <Stock/>;
  }
  render() {
  return (
      <div>
            <canvas onClick={this.sayHello}>
            Click me!
            </canvas>
    </div>
  );}
}

export default App;