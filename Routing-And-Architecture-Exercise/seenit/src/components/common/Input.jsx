import React from 'react'

const Input = (props) => {

  const { name, type, value, onChange, label, placeholder } = props;

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        onChange={onChange}
        name={name}
        id={name}
        type={type}
        value={value}
        placeholder={placeholder} />
    </div>
  )
}

export default Input