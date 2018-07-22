import React, { Component } from 'react'
import SearchForm from '../common/SearchForm'
import queryString from 'query-string'
import { withRouter } from 'react-router-dom'
import CarForm from './CarForm'
import carAction from '../../actions/carAction'
import carStore from '../../stores/carStore'
import userAction from '../../actions/userAction'
import userStore from '../../stores/userStore'
import Auth from '../users/Auth'

class AllCars extends Component {
  constructor(props) {
    super(props)

    let query = queryString.parse(props.location.search)
    let page = Number(query.page) || 1
    let search = query.search || ''

    this.state = {
      page: page,
      search: search,
      cars: [],
      user: {}
    }

    userStore.on('getUser', this.getUserHandler)
    carStore.on('allCar', this.getAllCars)
  }

  getUserHandler = (data) => {
    this.setState({ user: data })
  }

  componentDidMount() {
    userAction.getUser(Auth.getUser().email)
    carAction.all(this.state.page, this.state.search)
  }

  componentWillUnmount() {
    userStore.on('getUser', this.getUserHandler)
    carStore.on('allCar', this.getAllCars)
  }

  getAllCars = (data) => {
    if (data.length === 0) {
      this.setState({ message: true })
      return
    }
    this.setState({ cars: data })
  }

  goToNextPage = (e) => {
    e.preventDefault()
    if (this.state.cars.length < 10) {
      return
    }
    let page = this.state.page + 1
    this.setState({ page })
    let search = this.state.search
    this.props.history.push(`/cars/all?page=${page}&search=${search}`)
    carAction.all(page, search)
  }

  goToPrevPage = (e) => {
    e.preventDefault()
    if (this.state.page === 1) {
      return
    }
    let page = this.state.page - 1
    this.setState({ page })
    let search = this.state.search
    this.props.history.push(`/cars/all?page=${page}&search=${search}`)
    carAction.all(page, search)
  }

  handleSearchChange = (e) => {
    e.preventDefault()
    this.setState({ search: e.target.value })
  }

  handleSearchSubmit = (e) => {
    e.preventDefault()
    carAction.all(this.state.page, this.state.search)
  }

  userRoles = () => {
    if (Auth.isUserAuthenticated()) {
      const user = this.state.user
      if (user.roles.includes('Admin')) {
        return true
      }
    }
    return false
  }

  render() {
    let noCars = true
    const cars = this.state.cars
    if (cars.length > 0) {
      noCars = false
    }
    return (
      <div>
        <div className="center">
          <h1>Welcome to Car Seller</h1>
          {noCars && <h3>No added cars!</h3>}
          <div>
            <SearchForm
              onSubmit={this.handleSearchSubmit}
              type='text'
              name='search'
              value={this.state.search}
              onChange={this.handleSearchChange}
              placeholder='Search...'
            />
          </div>
        </div>
        <div>
          {cars.map(c => <CarForm isAdmin={this.userRoles()} key={c.id} {...c} />)}
        </div>
        <div className="center">
          <button onClick={this.goToPrevPage.bind(this)}>&laquo; Prev</button>
          <button onClick={this.goToNextPage.bind(this)}>Next &raquo;</button>
        </div>
      </div>
    );
  }
}

export default withRouter(AllCars)