// Global
import React, { Component } from 'react';
import './App.css';

// App
import CreateResourceForm from './components/CreateResourceForm';
import Header from './components/Header';
import Resource from './components/Resource';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <main className="container">
          <CreateResourceForm />
          <Resource />
        </main>
      </div>
    );
  }
}

export default App;
