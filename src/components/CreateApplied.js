// Global
import React, {Component} from 'react';

class CreateApplied extends Component {
  constructor() {
    super();

    // Bindings
    this.renderForm = this.renderForm.bind(this);
  }

  renderForm() {
    return <p>Create Applied Form</p>;
  }

  render() {
    const {details} = this.props;
    console.log(details);

    return this.renderForm();
  }
}

export default CreateApplied;
