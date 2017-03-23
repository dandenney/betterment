// Global
import React, {Component} from 'react';

// Auth
import base from './base';

class CreateResourceForm extends Component {
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

  createResource(e) {
    e.preventDefault();

    const resource = {
      description: this.description.value,
      title: this.title.value,
      url: this.url.value,
      uid: this.state.uid,
      name: this.state.name,
      avatar: this.state.avatar,
    };

    this.props.addResource(resource);
    this.resourceForm.reset();
  }

  render() {
    if (!this.state.uid) {
      return <div>{this.renderLogin()}</div>;
    }

    return (
      <form
        className="resource-edit"
        onSubmit={this.createResource.bind(this)}
        ref={input => this.resourceForm = input}
      >
        <fieldset>
          <label htmlFor="resource-title">Title</label>
          <input
            id="resource-title"
            ref={input => this.title = input}
            placeholder="Resource Title"
            type="text"
          />
        </fieldset>
        <fieldset>
          <label htmlFor="resource-url">URL</label>
          <input
            id="resource-url"
            ref={input => this.url = input}
            placeholder="Resource URL"
            type="text"
          />
        </fieldset>
        <fieldset>
          <label htmlFor="resource-description">Description</label>
          <textarea
            id="resource-description"
            ref={input => this.description = input}
            placeholder="Resource Description"
          />
        </fieldset>
        <button type="submit">Add Resource</button>
      </form>
    );
  }
}

CreateResourceForm.propTypes = {
  addResource: React.PropTypes.func.isRequired,
};

export default CreateResourceForm;
