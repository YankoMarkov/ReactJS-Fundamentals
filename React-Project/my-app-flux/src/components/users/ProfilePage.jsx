import React, { Component } from 'react'
import carStore from '../../stores/carStore'
import carAction from '../../actions/carAction'
import MyCarForm from '../cars/MyCarForm'

export default class ProfilePage extends Component {
  constructor(params) {
    super(params)

    this.state = {
      cars: []
    }

    carStore.on('getUserCar', this.getUserCars)
  }

  componentDidMount() {
    carAction.getUserCars()
  }

  componentWillUnmount() {
    carStore.on('getUserCar', this.getUserCars)
  }

  getUserCars = (data) => {
    this.setState({ cars: data })
  }

  render() {
    let noCars = true
    const cars = this.state.cars
    if (cars.length > 0) {
      noCars = false
    }
    return (
      <div>
        <div className="center">
          <h1>My Cars</h1>
          {noCars && <h3>You don't have cars yet!</h3>}
        </div>
        <div>
          {this.state.cars.map(c => <MyCarForm key={c.id} {...c} />)}
        </div>
      </div>
    );
  }
}