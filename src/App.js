// Global
import React, { Component } from 'react';
import './App.css';

// App
import Header from './components/Header';
import Resource from './components/Resource';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Resource />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
