// Global
import React, { Component } from 'react';
import './App.css';

// App
import CreateResourceForm from './components/CreateResourceForm';
import Header from './components/Header';
import Resource from './components/Resource';

class App extends Component {
  constructor() {
    super();

    // Initial state
    this.state = {
      resources: {}
    };
  }


  render() {
    return (
      <div className="app">
        <Header />
        <main className="container">
          <CreateResourceForm />
          <Resource />
        </main>
      </div>
    );
  }
}

export default App;
