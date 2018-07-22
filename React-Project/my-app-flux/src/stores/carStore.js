import { EventEmitter } from 'events'
import { CREATE_CAR, ALL_CARS, ALL_USER_CARS, CAR_DETAILS, DELETE_CAR, LIKE_CAR, UPDATE_CAR, GET_CAR, BUY_CAR } from '../actions/typeAction'
import { createCar, allCar, carDetails, getUserCars, deleteCar, likeCar, updateCar, getCar, buyCar } from './../api/remote'
import dispatcher from '../dispatcher'

class CarStore extends EventEmitter {

  create(car) {
    createCar(car)
      .then(data => this.emit('createCar', data))
  }

  all(page, search) {
    allCar(page, search)
      .then(data => this.emit('allCar', data))
  }

  getCar(id) {
    getCar(id)
      .then(data => this.emit('getCar', data))
  }

  details(id) {
    carDetails(id)
      .then(data => this.emit('carDetails', data))
  }

  getUserCars() {
    getUserCars()
      .then(data => this.emit('getUserCar', data))
  }

  delete(id) {
    deleteCar(id)
      .then(data => this.emit('deleteCar', data))
  }

  like(id) {
    likeCar(id)
      .then(data => this.emit('likeCar', data))
  }

  update(id, user) {
    updateCar(id, user)
      .then(data => this.emit('updateCar', data))
  }

  buy(id, user) {
    buyCar(id, user)
      .then(data => this.emit('buyCar', data))
  }

  handleAction(action) {
    switch (action.type) {
      case CREATE_CAR: {
        this.create(action.car)
        break
      }
      case ALL_CARS: {
        this.all(action.page, action.search)
        break
      }
      case CAR_DETAILS: {
        this.details(action.id)
        break
      }
      case ALL_USER_CARS: {
        this.getUserCars()
        break
      }
      case GET_CAR: {
        this.getCar(action.id)
        break
      }
      case DELETE_CAR: {
        this.delete(action.id)
        break
      }
      case UPDATE_CAR: {
        this.update(action.id, action.car)
        break
      }
      case BUY_CAR: {
        this.buy(action.id, action.car)
        break
      }
      case LIKE_CAR: {
        this.like(action.id)
        break
      }
      default: break
    }
  }
}

let carStore = new CarStore()

dispatcher.register(carStore.handleAction.bind(carStore))

export default carStore