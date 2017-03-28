// Global
import React, {Component} from 'react';

class CreateResourceForm extends Component {
  constructor() {
    super();

    // Initial state
    this.state = {
      uid: null,
      applied: false,
    };
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
    if (this.props.uid) {
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
    } else {
      return <p>Nada</p>;
    }
  }
}

CreateResourceForm.propTypes = {
  addResource: React.PropTypes.func.isRequired,
};

export default CreateResourceForm;
