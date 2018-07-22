import dispatcher from '../dispatcher'
import { CREATE_CAR, ALL_CARS, ALL_USER_CARS, CAR_DETAILS, DELETE_CAR, LIKE_CAR, UPDATE_CAR, GET_CAR, BUY_CAR } from './typeAction'

const carAction = {
  crete(car) {
    dispatcher.dispatch({
      type: CREATE_CAR,
      car
    })
  },
  all(page, search) {
    page = page || 1
    search = search || ''
    dispatcher.dispatch({
      type: ALL_CARS,
      page,
      search
    })
  },
  details(id) {
    dispatcher.dispatch({
      type: CAR_DETAILS,
      id
    })
  },
  delete(id) {
    dispatcher.dispatch({
      type: DELETE_CAR,
      id
    })
  },
  getUserCars() {
    dispatcher.dispatch({
      type: ALL_USER_CARS
    })
  },
  getCar(id) {
    dispatcher.dispatch({
      type: GET_CAR,
      id
    })
  },
  like(id) {
    dispatcher.dispatch({
      type: LIKE_CAR,
      id
    })
  },
  update(id, car) {
    dispatcher.dispatch({
      type: UPDATE_CAR,
      id,
      car
    })
  },
  buy(id, car) {
    dispatcher.dispatch({
      type: BUY_CAR,
      id,
      car
    })
  }
}

export default carAction