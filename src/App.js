// Global
import React, {Component} from 'react';
import './App.css';

// App
import base from './components/base';
import CreateResourceForm from './components/CreateResourceForm';
import Header from './components/Header';
import Resource from './components/Resource';

class App extends Component {
  constructor() {
    super();

    // Bindings
    this.addResource = this.addResource.bind(this);

    // Initial state
    this.state = {
      resources: {},
    };
  }

  addResource(resource) {
    // Update state
    const resources = {...this.state.resources};

    // Add new to state
    const timestamp = Date.now();
    resources[`resource-${timestamp}`] = resource;

    // Set state
    this.setState({resources});
  }

  componentWillMount() {
    this.ref = base.syncState('/resources', {
      context: this,
      state: 'resources',
    });
  }

  render() {
    return (
      <div className="app">
        <Header />
        <main className="container">
          <CreateResourceForm addResource={this.addResource} />
          <section>
            {Object.keys(this.state.resources).map(key => (
              <Resource
                index={key}
                key={key}
                details={this.state.resources[key]}
              />
            ))}
          </section>
        </main>
      </div>
    );
  }
}

export default App;
