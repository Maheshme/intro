import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="test">
          <ul className="wraper">
           <li className="child">1</li>
           <li className="child">2</li>
           <li className="child">3</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
