import React from 'react'
import Input from '../common/Input'

const LoginForm = (props) => {

  const { onSubmit, onChange, email, password } = props

  return (
    <form onSubmit={onSubmit}>
      <Input
        name="email"
        type="text"
        value={email}
        onChange={onChange}
        label="E-mail"
      />
      <Input
        name="password"
        type="password"
        value={password}
        onChange={onChange}
        label="Password"
      />
      <input id="submit" type="submit" value="Login" />
    </form>
  )
}

export default LoginForm