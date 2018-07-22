import React, { Component } from 'react'
import Auth from '../users/Auth'
import { withRouter } from 'react-router-dom'
import userAction from '../../actions/userAction'
import userStore from '../../stores/userStore'
import { notify } from 'react-notify-toast'

class AddAdminRole extends Component {
  constructor(props) {
    super(props)

    userStore.on('addAdmin', this.addAdminHandler)
  }

  addAdminHandler = (data) => {
    notify.show(data.message, "success", 2000)
    this.props.history.push('/')
  }

  componentWillUnmount() {
    userStore.on('addAdmin', this.addAdminHandler)
  }

  addAdmin = (e) => {
    e.preventDefault()
    const user = Auth.getUser()
    userAction.addAdminRole(user)
  }

  render() {
    const name = Auth.getUser().name
    return (
      <div className="center">
        <h4>User: {name}</h4>
        <button onClick={this.addAdmin}>Add Admin Role</button>
      </div>
    )
  }
}


export default withRouter(AddAdminRole)