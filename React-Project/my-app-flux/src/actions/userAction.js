import dispatcher from '../dispatcher'
import { REGISTER_USER, LOGIN_USER, ADD_ADMIN_ROLE, GET_USER } from './typeAction'

const userAction = {
  register(user) {
    dispatcher.dispatch({
      type: REGISTER_USER,
      user
    })
  },
  login(user) {
    dispatcher.dispatch({
      type: LOGIN_USER,
      user
    })
  },
  addAdminRole(user) {
    dispatcher.dispatch({
      type: ADD_ADMIN_ROLE,
      user
    })
  },
  getUser(email) {
    dispatcher.dispatch({
      type: GET_USER,
      email
    })
  }
}

export default userAction
