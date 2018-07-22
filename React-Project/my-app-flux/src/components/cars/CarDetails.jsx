import React, { Component } from 'react'
import carAction from '../../actions/carAction'
import carStore from '../../stores/carStore'
import reviewAction from '../../actions/reviewAction'
import reviewStore from '../../stores/reviewStore'
import ReviewForm from '../cars/ReviewForm'
import { notify } from 'react-notify-toast'

class CarDetails extends Component {
  constructor(props) {
    super(props)

    let id = this.props.match.params.id
    this.state = {
      car: {
        id
      },
      rating: 0,
      comment: '',
      reviews: []
    }

    carStore.on('carDetails', this.carDetailsHandler)
    carStore.on('likeCar', this.likeCarHandler)
    carStore.on('buyCar', this.buyCarHandler)
    reviewStore.on('createReview', this.createReviewHandler)
    reviewStore.on('getAllReview', this.getReviewsHandler)
  }

  componentDidMount() {
    carAction.details(this.state.car.id)
  }

  componentWillUnmount() {
    carStore.on('carDetails', this.carDetailsHandler)
    carStore.on('likeCar', this.likeCarHandler)
    carStore.on('buyCar', this.buyCarHandler)
    reviewStore.on('createReview', this.createReviewHandler)
    reviewStore.on('getAllReview', this.getReviewsHandler)
  }

  buyCarHandler = (data) => {
    if (!data.success) {
      notify.show(data.message, "error", 3000)
      return
    }
    notify.show(data.message, "success", 2000)
    this.props.history.push('/users/profile')
  }

  createReviewHandler = (data) => {
    if (!data.success) {
      notify.show(data.message, "error", 3000)
      return
    }
    this.setState({
      comment: '',
      rating: 0
    })
    notify.show(data.message, "success", 2000)
    reviewAction.getAll(this.state.car.id)
  }

  getReviewsHandler = (data) => {
    this.setState({ reviews: data })
  }

  likeCarHandler = (data) => {
    if (!data.success) {
      notify.show(data.message, "error", 3000)
      return
    }
    notify.show(data.message, "success", 2000)
    carAction.details(this.state.car.id)
  }

  carDetailsHandler = (data) => {
    this.setState({ car: data })
    reviewAction.getAll(this.state.car.id)
  }

  like = (e) => {
    e.preventDefault()
    carAction.like(this.state.car.id)
  }

  handleRatingChange = (e) => {
    e.preventDefault()
    let value = e.target.value
    this.setState({ rating: value })
  }

  handleCommentChange = (e) => {
    e.preventDefault()
    let value = e.target.value
    this.setState({ comment: value })
  }

  handleReviewForm = (e) => {
    e.preventDefault()
    if (this.state.rating < 1 || this.state.rating > 5) {
      notify.show('Rating must be between 1 and 5', "error", 3000)
      return
    }
    reviewAction.create({
      rating: this.state.rating,
      comment: this.state.comment
    },
      this.state.car.id)
  }

  buy = (e) => {
    e.preventDefault()
    carAction.buy(this.state.car.id, this.state.car)
  }

  render() {
    const car = this.state.car
    return (
      <div className="center">
        <h1>Car details</h1>
        <div style={({ display: "inline-flex" })}>
          <span>
            <img className="product-img" src={car.image} alt="car image" />
          </span>
          <span>
            <h3>Make: {car.make}</h3>
            <h3>Model: {car.model}</h3>
            <h3>Year: {car.year}</h3>
            <h3>Engine: {car.engine}</h3>
            <h3>Price: {car.price}lv.</h3>
            {car.mileage ? <h3>Mileage: {car.mileage}</h3> : null}
          </span>
        </div>
        <div>
          <button onClick={this.like}>{car.likes} Like</button>
          <button onClick={this.buy}>Buy</button>
        </div>
        <div>
          <h3>Add review</h3>
          <form onSubmit={this.handleReviewForm}>
            <div>
              <label htmlFor='rating'>Rating</label>
              <input
                type='number'
                name='rating'
                value={this.state.rating}
                onChange={this.handleRatingChange} />
            </div>
            <div>
              <label htmlFor='comment'>Your comment</label>
              <textarea
                name='comment'
                rows='10'
                cols='30'
                value={this.state.comment}
                onChange={this.handleCommentChange} />
            </div>
            <input id="submit" type="submit" value="Add" />
          </form>
        </div>
        <div style={({ display: "inline-block" })}>
          <h3>Reviews</h3>
          {this.state.reviews.map((r, i) => <ReviewForm key={i} {...r} />)}
        </div>
      </div >
    )
  }
}

export default CarDetails