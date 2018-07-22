import React from 'react'
import Auth from './Auth';
import { Link, withRouter } from 'react-router-dom';
import requester from '../../app/requester'

const Logout = (props) => {

  async function onLogout(e) {
    e.preventDefault()
    const res = await requester.post('user', '_logout')
    Auth.deauthenticateUser()
    Auth.removeUser()
    props.history.push('/')
  }

  return (
    <Link to="javascript:void(0)" onClick={onLogout} >logout</Link>
  )
}

export default withRouter(Logout)