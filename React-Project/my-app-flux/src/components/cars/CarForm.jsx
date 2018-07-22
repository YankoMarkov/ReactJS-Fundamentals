import React from 'react'
import { withRouter, Link } from 'react-router-dom'

const CarForm = (props) => {

  const { isAdmin, make, model, image, year, price, id } = props

  const onClickHandler = (e) => {
    e.preventDefault()
    props.history.push('/cars/details/' + id)
  }

  return (
    <div className="car-container">
      <section className="info">
        <img onClick={onClickHandler} src={image} alt="car image" />
        <h4>Make: {make}</h4>
        <h4>Model: {model}</h4>
        <h4>Year: {year}</h4>
        <h4>Price: {price}lv.</h4>
        {isAdmin && <Link className="btn-green" to={"/cars/update/" + id}>Update</Link>}
        {isAdmin && <Link className="btn-red" to={"/cars/delete/" + id}>Delete</Link>}
      </section>
    </div>
  )
}

export default withRouter(CarForm)