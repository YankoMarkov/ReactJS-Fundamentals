import dispatcher from '../dispatcher'
import { ADD_REVIEW, GET_ALL_REVIEW } from './typeAction'

const reviewAction = {
  create(review, id) {
    dispatcher.dispatch({
      type: ADD_REVIEW,
      review,
      id
    })
  },
  getAll(id) {
    dispatcher.dispatch({
      type: GET_ALL_REVIEW,
      id
    })
  }
}

export default reviewAction