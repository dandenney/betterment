// Global
import React, { Component } from 'react';
import './App.css';

// App
import Header from './components/Header';
import Resource from './components/Resource';
import Feed from './components/Feed';

class App extends Component {
  constructor() {
    super();

    // Bindings
    this.addResource = this.addResource.bind(this);

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
          <Feed addResource={ this.addResource } />
          <ul>
            {
              Object
                .keys( this.state.resources )
                .map( key => <Resource addToOrder={ this.addToOrder } index={ key } key={ key } details={ this.state.resources[ key ] } /> )
            }
          </ul>
        </main>
      </div>
    );
  }
}

export default App;
