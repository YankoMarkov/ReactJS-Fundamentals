import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Headers from './components/common/Header'
import Routers from './components/common/Routers'
import Footer from './components/common/Footer'
import Auth from './components/users/Auth'
import Notifications, { notify } from 'react-notify-toast'

class App extends Component {

  onLogout = () => {
    Auth.deauthenticateUser()
    this.props.history.push('/')
    notify.show('You are Logged out', "success", 2000)
  }

  render() {
    return (
      <div className="body preload">
        <Notifications options={{ zIndex: 200, top: '50px' }} />
        <Headers onLogout={this.onLogout} />
        <section id="main-container">
          <Routers />
        </section>
        <Footer />
      </div>
    )
  }
}

export default withRouter(App)
