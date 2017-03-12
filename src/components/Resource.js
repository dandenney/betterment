// Global
import React, { Component } from 'react';

class Resource extends Component {
  render() {
    const { details } = this.props;

    return (
      <li>{ details.title }</li>
    );
  }
}

export default Resource;
