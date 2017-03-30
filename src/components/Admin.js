import React from 'react';
import CreateResourceForm from './CreateResourceForm';

class Admin extends React.Component {
  constructor() {
    super();
    this.renderAdmin = this.renderAdmin.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e, key) {
    const resource = this.props.resources[key];
    // take a copy of that resource and update it with the new data
    const updatedResource = {...resource, [e.target.name]: e.target.value};
    this.props.updateResource(key, updatedResource);
  }

  renderAdmin(key) {
    const resource = this.props.resources[key];
    return (
      <div className="resource-edit" key={key}>
        <fieldset>
          <label htmlFor="resource-title">Title</label>
          <input
            type="text"
            name="title"
            value={resource.title}
            placeholder="Resource Name"
            onChange={e => this.handleChange(e, key)}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="resource-url">URL</label>
          <input
            type="text"
            name="url"
            value={resource.url}
            placeholder="Resource URL"
            onChange={e => this.handleChange(e, key)}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="resource-description">Description</label>
          <input
            type="text"
            name="description"
            value={resource.description}
            placeholder="Resource Description"
            onChange={e => this.handleChange(e, key)}
          />
        </fieldset>
      </div>
    );
  }

  render() {
    return (
      <div>
        <h2>Admin</h2>
        {Object.keys(this.props.resources).map(this.renderAdmin)}
      </div>
    );
  }
}

export default Admin;
