import React, { Component } from 'react';
import Translator from './Translator.js';
import Output from './Output.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Translator />
        <Output />
      </div>
    );
  }
}

export default App;
