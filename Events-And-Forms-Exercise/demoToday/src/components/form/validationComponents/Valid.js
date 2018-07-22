import React from 'react'

let Valid = (props) => {
  return (
    <span
      role="img"
      aria-label="valid"
      style={{
        display: props.display ? '' : 'none',
        marginLeft: '-23px'
      }}
    >
      ✅
    </span>
  )
}

export default Valid