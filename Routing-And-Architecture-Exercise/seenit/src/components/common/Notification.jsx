import React, { Component } from 'react'
import './../../style/notifications.css'
import observMenu from './../../utils/observer'

export default class Notifications extends Component {
  constructor(props) {
    super(props)

    this.state = {
      notify: ''
    }


    observMenu.addObserv('notification', this.showNotify)
  }

  showNotify = (data) => {
    this.setState({ notify: data })
    setTimeout(this.hideNotify, 3000)
  }

  hideNotify = () => {
    this.setState({ notify: '' })
  }

  render() {
    let notifyId = ''
    if (this.state.notify.info) {
      notifyId = "infoBox"
    } else if (this.state.notify.error) {
      notifyId = "errorBox"
    } else if (this.state.notify.loading) {
      notifyId = "loadingBox"
    }
    return (
      <div id="notifications" >
        {this.state.notify.message && <div id={notifyId} className="notification" onClick={this.hideNotify}><span>{this.state.notify.message}</span></div>}
      </div>
    )
  }
}