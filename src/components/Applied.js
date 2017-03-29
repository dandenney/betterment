// Global
import React, {Component} from 'react';

class Applied extends Component {
  renderForm() {
    return <p>Applied Form {this.props.resourceId}</p>;
  }

  renderApplied() {
    return <p>Applied:</p>;
  }

  render() {
    if (this.props.uid === this.props.ownerUID) {
      return (
        <section>
          {this.renderForm()}
          {this.renderApplied()}
        </section>
      );
    }

    return <p>Applied: {this.props.uid}</p>;
  }
}

export default Applied;
