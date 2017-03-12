// Global
import React, { Component } from 'react';

import CreateResourceForm from './CreateResourceForm';

class Feed extends Component {
  render() {
    return (
      <CreateResourceForm addResource={ this.props.addResource } />
    );
  }
}

export default Feed;
