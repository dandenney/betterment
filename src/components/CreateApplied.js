// Global
import React, {Component} from 'react';

class CreateApplied extends Component {
  constructor() {
    super();
  }

  renderForm() {
    return <p>Create Applied Form</p>;
  }

  render() {
    if (this.props.uid === this.props.ownerUID) {
      return (
        <section>
          {this.renderForm()}
        </section>
      );
    }

    return null;
  }
}

export default CreateApplied;
