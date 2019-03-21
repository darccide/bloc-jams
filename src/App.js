import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Library from './components/Library';
import Landing from './components/Landing';
import Album from './components/Album';
import Logo from './data/images/bloc_jams_logo.png';

class App extends Component {
  render() {
    return (
      <div className="App-container">
        <div className="App-header">
          <div className="navbar fixed-top">
            <a href="/" className="navbar-brand">
              <img
                src={Logo}
                alt="Bloc Jams Logo"
                style={{ height: '2.2em' }}
              />
            </a>
            <a href="/Library" className="library-link">
              Library
            </a>
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
