import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Auth from '../users/Auth'

export default class Header extends Component {
  render() {

    const { onLogout } = this.props
    const isLogged = Auth.isUserAuthenticated()

    return (
      <header>
        <nav>
          <ul id="main-nav">
            <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
            <li><NavLink to="/cars/all" activeClassName="active">All Cars</NavLink></li>
            {isLogged && <li><NavLink to="/cars/create" activeClassName="active">Create Car</NavLink></li>}
            <ul id="user">
              {isLogged && <li><NavLink to="/users/profile">Profile {Auth.getUser().name}</NavLink></li>}
              {isLogged && <li><a href="javascript:void(0)" className="user" onClick={onLogout}>Logout</a></li>}
              {!isLogged && <li><NavLink to="/users/login" className="user" activeClassName="active">Login</NavLink></li>}
              {!isLogged && <li><NavLink to="/users/register" className="user" activeClassName="active">Register</NavLink></li>}
            </ul>
          </ul>
        </nav>
      </header>
    )
  }
}