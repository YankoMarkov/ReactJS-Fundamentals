import React, { Component } from 'react'
import Auth from './../users/Auth';
import '../../style/header.css'
import Logout from './../users/Logout';

export default class Header extends Component {
  render() {
    const { loggedIn } = this.props

    return (
      <header>
        <li><span className="logo">☃</span><span className="header">SeenIt</span></li>
        {loggedIn &&
          <div id="profile">
            <span>Hello {Auth.getUser().username}</span>
            <Logout />
          </div>}
      </header>
    )
  }
}