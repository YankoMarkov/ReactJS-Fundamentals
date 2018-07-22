import React, { Component } from 'react'
import requester from '../../app/requester'
import Input from '../common/Input';
import '../../style/submit.css'
import { withRouter } from 'react-router-dom'
import observMenu from '../../utils/observer'

class Register extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: '',
      repeatPass: ''
    }

    this.onSubmitHandler = this.onSubmitHandler.bind(this)
  }

  onChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  async onSubmitHandler(e) {
    try {
      e.preventDefault()
      const { username, password } = this.state
      const res = await requester.post('user', '', 'basic', { username, password })
      this.props.history.push('/menu/catalog')
      observMenu.executeObserv('notification', { info: true, message: "Success" })
    } catch (err) {
      observMenu.executeObserv('notification', { error: true, message: err.responseJSON.error })
    }
  }

  render() {
    return (
      <form id="registerForm" onSubmit={this.onSubmitHandler}>
        <h2>Register</h2>
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
        <Input
          name='repeatPass'
          type='password'
          value={this.state.repeatPass}
          onChange={this.onChangeHandler}
          label='Repeat Password:'
        />
        <input id="btnRegister" value="Sign Up" type="submit" />
      </form>
    )
  }
}

export default withRouter(Register)