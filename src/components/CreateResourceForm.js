// Global
import React, { Component } from 'react';

class CreateResourceForm extends Component {

  createResource(e) {
    e.preventDefault();

    const resource = {
      title: this.title.value
    }

    this.resourceForm.reset();
  }

  render() {
    return (
      <form className="resource-edit" onSubmit={ this.createResource.bind(this) } ref={ (input) => this.resourceForm = input }>
        <input ref={ (input) => this.title = input } placeholder="Resource Name" type="text" />
        <button type="submit">Add Resource</button>
      </form>
    );
  }
}

export default CreateResourceForm;
