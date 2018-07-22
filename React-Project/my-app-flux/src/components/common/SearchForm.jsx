import React from 'react'

const SearchForm = (props) => {

  const { name, type, value, onChange, label, placeholder, onSubmit } = props

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor={name}>{label}</label>
      <input
        onChange={onChange}
        name={name}
        id={name}
        type={type}
        value={value}
        placeholder={placeholder} />
      <input id="submit" type="submit" value="Search" />
    </form>
  )
}

export default SearchForm