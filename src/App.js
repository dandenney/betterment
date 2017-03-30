// Global
import React, {Component} from 'react';
import './App.css';

// App
import base from './components/base';
import CreateResourceForm from './components/CreateResourceForm';
import Header from './components/Header';
import Admin from './components/Admin';
import Resource from './components/Resource';

class App extends Component {
  constructor() {
    super();

    // Bindings
    this.addResource = this.addResource.bind(this);
    this.authenticate = this.authenticate.bind(this);
    this.authHandler = this.authHandler.bind(this);
    this.renderLogin = this.renderLogin.bind(this);
    this.updateResource = this.updateResource.bind(this);

    // Initial state
    this.state = {
      uid: null,
      resources: {},
    };
  }

  authenticate(provider) {
    console.log(`Trying to log in with ${provider}`);
    base.authWithOAuthPopup(provider, this.authHandler);
  }

  authHandler(err, authData) {
    console.log(authData);

    if (err) {
      console.error(err);
      return;
    }

    const resourcesRef = base.database().ref();

    resourcesRef.once('value', snapshot => {
      this.setState({
        uid: authData.user.uid,
        name: authData.user.displayName,
        avatar: authData.user.photoURL,
      });
    });
  }

  renderLogin() {
    return (
      <section>
        <h2>Auth</h2>
        <button
          className="auth-github"
          onClick={() => this.authenticate('github')}
        >
          Log In with GitHub
        </button>
        <button
          className="auth-twitter"
          onClick={() => this.authenticate('twitter')}
        >
          Log In with Twitter
        </button>
      </section>
    );
  }

  addResource(resource) {
    // Update state
    const resources = {...this.state.resources};

    // Add new to state
    const timestamp = Date.now();
    resources[`${timestamp}`] = resource;

    // Set state
    this.setState({resources});
  }

  updateResource(key, updatedResource) {
    const resources = {...this.state.resources};
    resources[key] = updatedResource;
    this.setState({resources});
  }

  componentWillMount() {
    this.ref = base.syncState('/resources', {
      context: this,
      state: 'resources',
    });
  }

  render() {
    if (!this.state.uid) {
      return (
        <div className="app">
          <Header />
          <main className="container">
            {this.renderLogin()}

            <section>
              <CreateResourceForm
                addResource={this.addResource}
                avatar={this.state.avatar}
                name={this.state.name}
                uid={this.state.uid}
              />
              {Object.keys(this.state.resources).map(key => (
                <Resource
                  uid={this.state.uid}
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

    return (
      <div className="app">
        <Header />
        <main className="container">
          <section>
            <CreateResourceForm
              addResource={this.addResource}
              avatar={this.state.avatar}
              name={this.state.name}
              uid={this.state.uid}
            />
            <Admin
              addResource={this.addResource}
              resources={this.state.resources}
              updateResource={this.updateResource}
            />
            {Object.keys(this.state.resources).map(key => (
              <Resource
                uid={this.state.uid}
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
