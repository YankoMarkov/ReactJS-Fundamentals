import React, { Component } from 'react'
import './App.css'

import SingUpForm from './components/form/SingUpForm'
import LoginForm from './components/form/loginForm'
import PokemonForm from './components/form/PokemonForm'

class App extends Component {
  constructor() {
    super()

    this.state = {
      username: '',
      token: ''
    }
  }

  authenticate = (data) => {
    if (data.success) {
      this.setState({ token: data.token, username: data.user.name })
      sessionStorage.setItem('token', data.token)
    }
  }

  componentDidMount() {
    this.setState({ token: sessionStorage.getItem('token') })
  }

  render() {
    if (this.state.token !== '' && this.state.token !== 'undefined' && typeof (sessionStorage.token) !== 'undefined') {
      return (
        <div>
          <PokemonForm/>
      </div>
      )
    }
    return (
      <div>
        <SingUpForm />
        <LoginForm authFunc={this.authenticate} />
      </div>
    )
  }
}

export default App
