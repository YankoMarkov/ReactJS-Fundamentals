import React, { Component } from 'react';
import './App.css';
import './style/site.css'
import Header from './components/common/Header';
import Navigation from './components/menu/Navigation'
import Auth from './components/users/Auth';
import Routes from './components/common/Routes';
import Footer from './components/common/Footer';
import Notifications from './components/common/Notification';

class App extends Component {

  render() {
    return (
      <div>
        <div id="container">
          <Header loggedIn={Auth.isUserAuthenticated()} />
          <div className="content">
            <Navigation />
            <Routes />
          </div>
          <Footer />
        </div>
        <Notifications />
      </div>
    )
  }
}

export default App;
