import React, { Component } from 'react'
import carStore from '../../stores/carStore'
import carAction from '../../actions/carAction'
import { notify } from 'react-notify-toast'

export default class DeleteCar extends Component {
  constructor(props) {
    super(props)

    carStore.on('deleteCar', this.deleteHAndler)
  }

  componentDidMount() {
    carAction.delete(this.props.match.params.id)
  }

  componentWillUnmount() {
    carStore.on('deleteCar', this.deleteHAndler)
  }

  deleteHAndler = (data) => {
    if (!data.success) {
      notify.show(data.message, "error", 3000)
      return
    }
    notify.show(data.message, "success", 2000)
    this.props.history.push('/users/profile')
  }

  render() {
    return (
      <div></div>
    )
  }
}