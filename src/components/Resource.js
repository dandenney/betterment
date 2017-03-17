// Global
import React, { Component } from 'react';

class Resource extends Component {
  render() {
    const { details } = this.props;

    return (
      <article>
        <h3>{ details.title }</h3>
        <p>{ details.description }</p>
        <o><a href={ details.url }>Link</a></o>
      </article>
    );
  }
}

export default Resource;
