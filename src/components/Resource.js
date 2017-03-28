// Global
import React, {Component} from 'react';

// Resource
import Applied from './Applied';
import CreateApplied from './CreateApplied';

class Resource extends Component {
  render() {
    const {details} = this.props;

    return (
      <article>
        <h3>{details.title}</h3>
        <p>{details.description}</p>
        <p><a href={details.url}>Link</a></p>
        <p>{details.name}</p>
        <p><img alt={details.name} src={details.avatar} width="24" /></p>
        <Applied uid={this.props.uid} ownerUID={this.props.details.uid} />
      </article>
    );
  }
}

export default Resource;
