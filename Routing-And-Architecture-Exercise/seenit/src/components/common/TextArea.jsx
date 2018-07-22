import React from 'react'

const TextArea = (props) => {

  const { name, type, value, onChange, label, placeholder } = props;

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <textarea
        onChange={onChange}
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}>
      </textarea>
    </div>
  )
}

export default TextArea