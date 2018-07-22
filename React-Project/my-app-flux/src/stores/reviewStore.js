import { EventEmitter } from 'events'
import { ADD_REVIEW, GET_ALL_REVIEW } from '../actions/typeAction'
import { createReview, getAllReviews } from './../api/remote'
import dispatcher from '../dispatcher'

class ReviewStore extends EventEmitter {

  create(review, id) {
    createReview(review, id)
      .then(data => this.emit('createReview', data))
  }

  getAll(id) {
    getAllReviews(id)
      .then(data => this.emit('getAllReview', data))
  }

  handleAction(action) {
    switch (action.type) {
      case ADD_REVIEW: {
        this.create(action.review, action.id)
        break
      }
      case GET_ALL_REVIEW: {
        this.getAll(action.id)
        break
      }
      default: break
    }
  }
}

let reviewStore = new ReviewStore()

dispatcher.register(reviewStore.handleAction.bind(reviewStore))

export default reviewStore