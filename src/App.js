import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import Library from './components/Library';
import Landing from './components/Landing';
import Album from './components/Album';
import Logo from './data/images/bloc_jams_logo.png';

import './App.css';
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="App-container">
        <div className="App-header">
          <div className="navbar fixed-top">
            <Link to="/" className="navbar-brand">
              <img
                src={Logo}
                alt="Bloc Jams Logo"
                style={{ height: '2.2em' }}
              />
            </Link>
            <Link to="/Library" className="library-link">
              Library
            </Link>
          </div>
        </div>
        <main>
          <Route exact path="/" component={Landing} />
          <Route path="/library" component={Library} />
          <Route path="/album/:slug" component={Album} />
        </main>
        <footer className="App-footer" />
      </div>
    );
  }
}

export default App;
