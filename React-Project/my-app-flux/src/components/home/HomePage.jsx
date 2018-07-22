import React, { Component } from 'react'
import { status } from '../../api/remote'

export default class HomePage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      status: {}
    }
  }

  componentDidMount() {
    this.dataStatus()
  }

  async dataStatus() {
    const data = await status()
    this.setState({ status: data })
  }

  render() {
    let status = this.state.status
    return (
      <div className="center">
        <h1>Car Sell Home page</h1>
        <img src="http://res.cloudinary.com/dcsztxsuq/image/upload/v1490967882/2017-mercedes-benz-c300-coupe-12_n0irgb.jpg" alt="car image" />
        <h1>We have {status.cars} cars.</h1>
        <h1>We have {status.users} users.</h1>
      </div>
    );
  }
}