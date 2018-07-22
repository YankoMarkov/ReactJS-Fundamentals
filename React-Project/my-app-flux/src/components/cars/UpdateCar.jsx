import React, { Component } from 'react'
import CreateCarForm from './CreateCarForm'
import { withRouter } from 'react-router-dom'
import carStore from '../../stores/carStore'
import carAction from '../../actions/carAction'
import { notify } from 'react-notify-toast'

class CreateCar extends Component {
  constructor(props) {
    super(props)

    let id = this.props.match.params.id
    this.state = {
      car: {
        id
      }
    }

    carStore.on('carDetails', this.getCarHandler)
    carStore.on('updateCar', this.carUpdateHandler)
  }

  componentDidMount() {
    carAction.details(this.state.car.id)
  }

  componentWillUnmount() {
    carStore.on('carDetails', this.getCarHandler)
    carStore.on('updateCar', this.carUpdateHandler)
  }

  getCarHandler = (data) => {
    this.setState({ car: data })
  }

  carUpdateHandler = (data) => {
    if (!data.success) {
      notify.show(data.message, "error", 3000)
      return
    }
    notify.show(data.message, "success", 2000)
    this.props.history.push('/users/profile')
  }

  onChangeHandler = (e) => {
    e.preventDefault()
    let state = this.state.car
    state[e.target.name] = e.target.value
    this.setState({ car: state })
  }

  onSubmitHandler = (e) => {
    e.preventDefault()
    let car = this.state.car

    if (car.make.length < 3) {
      notify.show('Make must be more than 3 symbols.', "error", 3000)
      return
    }
    if (car.model.length < 2) {
      notify.show('Model must be more than 2 symbols.', "error", 3000)
      return
    }
    if (Number(car.year) < 1900 || Number(car.year) > 2020) {
      notify.show('Year must be between 1900 and 2020.', "error", 3000)
      return
    }
    if (car.engine.length <= 1) {
      notify.show('Engine must be more than 1 symbol.', "error", 3000)
      return
    }
    if (Number(car.price) < 0) {
      notify.show('Price must be a positive number.', "error", 3000)
      return
    }
    if (!car.image) {
      notify.show('Image URL is required.', "error", 3000)
      return
    }
    carAction.update(this.state.car.id, car)
  }

  render() {
    return (
      <div className="center">
        <h1>Add Car</h1>
        <CreateCarForm
          onSubmit={this.onSubmitHandler}
          onChange={this.onChangeHandler}
          {...this.state.car}
        />
      </div>
    )
  }
}

export default withRouter(CreateCar)