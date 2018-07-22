import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import ReviewForm from './ReviewForm'

const CarForm = (props) => {

  const { reviews, likes, make, model, image, year, engine, price, mileage, id } = props

  return (
    <div className="car-container">
      <section className="info">
        <img src={image} alt="car image" />
        <h4>Make: {make}</h4>
        <h4>Model: {model}</h4>
        <h4>Year: {year}</h4>
        <h4>Engine: {engine}</h4>
        <h4>Price: {price}lv.</h4>
        {mileage ? <h4>Mileage: {mileage}</h4> : null}
        <h3>Likes: {likes.length}</h3>
        <h3>Reviews</h3>
        {reviews.map((r, i) => <ReviewForm key={i} {...r} />)}
        <Link className="btn-green" to={"/cars/update/" + id}>Update</Link>
        <Link className="btn-red" to={"/cars/delete/" + id}>Delete</Link>
      </section>
    </div>
  )
}

export default withRouter(CarForm)