import { EventEmitter } from 'events'
import { REGISTER_USER, LOGIN_USER, ADD_ADMIN_ROLE, GET_USER } from '../actions/typeAction'
import { register, login, addAdminRole, getUser } from './../api/remote'
import dispatcher from '../dispatcher'

class UserStore extends EventEmitter {

  register(user) {
    register(user)
      .then(data =>
        this.emit('registered', data))
  }

  login(user) {
    login(user)
      .then(data => {
        this.emit('loged_in', data)
      })
  }

  addAdmin(user) {
    addAdminRole(user)
      .then(data => {
        this.emit('addAdmin', data)
      })
  }

  getUser(email) {
    getUser(email)
      .then(data => {
        this.emit('getUser', data)
      })
  }

  handleAction(action) {
    switch (action.type) {
      case REGISTER_USER: {
        this.register(action.user)
        break
      }
      case LOGIN_USER: {
        this.login(action.user)
        break
      }
      case ADD_ADMIN_ROLE: {
        this.addAdmin(action.user)
        break
      }
      case GET_USER: {
        this.getUser(action.email)
        break
      }
      default: break
    }
  }
}

let userStore = new UserStore()

dispatcher.register(userStore.handleAction.bind(userStore))

export default userStore