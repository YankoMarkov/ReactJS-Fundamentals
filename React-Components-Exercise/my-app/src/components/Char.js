import React from 'react'
import observMenu from '../utils/observer'

let singleChar = (props) => {
  return (
    <span onClick={() => observMenu.executeObserv('changeFocus', { id: Number(props.params.id) })}>
      <img className='char-img' alt="char" src={props.params.url} />
    </span>
  )
}

export default singleChar