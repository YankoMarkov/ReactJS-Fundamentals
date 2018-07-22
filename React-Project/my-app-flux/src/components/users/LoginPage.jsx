import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import validationFunc from '../../utils/formValidator'
import Auth from './Auth'
import userStore from '../../stores/userStore'
import userAction from '../../actions/userAction'
import LoginForm from './LoginForm'
import { notify } from 'react-notify-toast'

class LoginPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: {
        email: 'test@test.test',
        password: '123123123'
      }
    }

    userStore.on('loged_in', this.logedHandler)
  }

  componentWillUnmount() {
    userStore.on('loged_in', this.logedHandler)
  }

  onChangeHandler = (e) => {
    e.preventDefault()
    let state = this.state.user
    state[e.target.name] = e.target.value
    this.setState({ user: state })
  }

  validObj = () => {
    let user = this.state.user
    let valid = validationFunc(
      null,
      user.email,
      user.password,
      user.password
    )
    if (valid.validMail && valid.validPassword) {
      return true
    }
    return false
  }

  onSubmitHandler = (e) => {
    e.preventDefault();
    if (!this.validObj()) {
      notify.show('Invalid Email or Password', "error", 3000)
      return
    }
    userAction.login(this.state.user)
  }

  logedHandler = (data) => {
    if (!data.success) {
      notify.show(data.message, "error", 3000)
      return
    }
    notify.show(data.message, "success", 2000)
    Auth.authenticateUser(data.token)
    Auth.saveUser(data.user)
    this.props.history.push('/')
    
  }

  render() {
    return (
      <div className="center">
        <h1>Login</h1>
        <LoginForm
          onSubmit={this.onSubmitHandler}
          onChange={this.onChangeHandler}
          {...this.state.user}
        />
      </div>
    );
  }
}

export default withRouter(LoginPage)