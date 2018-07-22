import React from 'react'
import { NavLink } from 'react-router-dom'
import Auth from '../users/Auth'
import '../../style/menu.css'

const Navigation = () => (
  <div id="menu">
    <div className="title">Navigation</div>
    <NavLink className="nav" activeClassName="active" to='/menu/catalog'>Catalog</NavLink>
    <NavLink className="nav" activeClassName="active" to='/posts/createPost'>Create Post</NavLink>
    <NavLink className="nav" activeClassName="active" to={'/posts/myPosts/' + Auth.getUser()._id}>My Posts</NavLink>
  </div>
)

export default Navigation