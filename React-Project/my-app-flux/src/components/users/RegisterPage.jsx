import React, { Component } from 'react'
import validationFunc from '../../utils/formValidator'
import { withRouter } from 'react-router-dom'
import userStore from '../../stores/userStore'
import userAction from '../../actions/userAction'
import RegisterForm from './RegisterForm'
import { notify } from 'react-notify-toast'

class RegisterPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        name: 'yan',
        email: 'test@test.test',
        password: '123123123',
        repeatPass: '123123123'
      }
    }

    userStore.on('registered', this.registerHandler)
  }

  componentWillUnmount() {
    userStore.on('registered', this.registerHandler)
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
      user.name,
      user.email,
      user.password,
      user.repeatPass
    )
    if (valid.validMail && valid.validName && valid.validPassword) {
      return true
    }
    return false
  }

  onSubmitHandler = (e) => {
    e.preventDefault()
    if (!this.validObj()) {
      notify.show('Invalid Name, Email or Password', "error", 3000)
      return
    }
    userAction.register(this.state.user)
  }

  registerHandler = (data) => {
    if (!data.success) {
      notify.show(data.message, "error", 3000)
      return
    }
    notify.show(data.message, "success", 2000)
    this.props.history.push('/users/login')

  }

  render() {
    return (
      <div className="center">
        <h1>Register</h1>
        <RegisterForm
          onSubmit={this.onSubmitHandler}
          onChange={this.onChangeHandler}
          {...this.state.user}
        />
      </div>
    );
  }
}

export default withRouter(RegisterPage)