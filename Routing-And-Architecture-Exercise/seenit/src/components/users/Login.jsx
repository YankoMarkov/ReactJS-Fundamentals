import React, { Component } from 'react'
import requester from '../../app/requester'
import Auth from './Auth';
import Input from '../common/Input';
import './../../style/submit.css'
import { withRouter } from 'react-router-dom'
import observMenu from './../../utils/observer'

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: ''
    }

    this.onSubmitHandler = this.onSubmitHandler.bind(this)
  }

  onChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  async onSubmitHandler(e) {
    try {
      e.preventDefault()
      let res = await requester.post('user', 'login', 'basic', this.state)
      Auth.authenticateUser(res._kmd.authtoken)
      Auth.saveUser(res)
      this.props.history.push('/menu/catalog')
      observMenu.executeObserv('notification', { info: true, message: "Success" })
    } catch (err) {
      observMenu.executeObserv('notification', { error: true, message: err.responseJSON.error })
    }
  }

  render() {
    return (
      <form id="loginForm" onSubmit={this.onSubmitHandler}>
        <h2>Sign In</h2>
        <Input
          name='username'
          type='text'
          value={this.state.username}
          onChange={this.onChangeHandler}
          label='Username:'
        />
        <Input
          name='password'
          type='password'
          value={this.state.password}
          onChange={this.onChangeHandler}
          label='Password:'
        />
        <input id="btnLogin" value="Sign In" type="submit" />
      </form>
    )
  }
}

export default withRouter(Login)