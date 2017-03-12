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

  addResource(resource) {
    // Update state
    const resources = { ...this.state.resources };

    // Add new to state
    const timestamp = Date.now();
    resources[`resource-${timestamp}`] = resource;

    // Set state
    this.setState({ resources });
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
