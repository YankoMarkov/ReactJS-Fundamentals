import React from 'react'
import Input from '../common/Input'

const RegisterForm = (props) => {

  const { onSubmit, onChange, email, password, name, repeat } = props

  return (
    <form onSubmit={onSubmit}>
      <Input
        name="name"
        type="text"
        value={name}
        onChange={onChange}
        label="Name"
        placeholder="Name must be non empty"
      />
      <Input
        name="email"
        type="text"
        value={email}
        onChange={onChange}
        label="E-mail"
        placeholder="Email  must be non empty"
      />
      <Input
        name="password"
        type="password"
        value={password}
        onChange={onChange}
        label="Password"
        placeholder="Password must be at least 8 symbols"
      />
      <Input
        name="repeatPass"
        type="password"
        value={repeat}
        onChange={onChange}
        label="Repeat password"
        placeholder="Password must be at least 8 symbols"
      />
      <input id="submit" type="submit" value="Register" />
    </form>
  )
}

export default RegisterForm