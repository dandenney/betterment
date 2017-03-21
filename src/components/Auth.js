// Global
import React, {Component} from 'react';

// Auth
import base from './base';

class Auth extends Component {
  constructor() {
    super();

    // Bindings
    this.authenticate = this.authenticate.bind(this);
    this.authHandler = this.authHandler.bind(this);
    this.renderLogin = this.renderLogin.bind(this);

    // Initial state
    this.state = {
      uid: null,
    };
  }

  authenticate(provider) {
    console.log(`Trying to log in with ${provider}`);
    base.authWithOAuthPopup(provider, this.authHandler);
  }

  authHandler(err, authData) {
    console.log(authData);
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

  render() {
    if (!this.state.uid) {
      return <div>{this.renderLogin()}</div>;
    }
  }
}

export default Auth;
