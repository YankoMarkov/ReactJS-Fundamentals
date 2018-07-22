import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import HomePage from '../home/HomePage'
import LoginPage from '../users/LoginPage'
import RegisterPage from '../users/RegisterPage'
import AllCars from '../cars/AllCars'
import CreateCar from '../cars/CreateCar'
import CarDetails from '../cars/CarDetails'
import DeleteCar from '../cars/DeleteCar'
import UpdateCar from '../cars/UpdateCar'
import ProfilePage from '../users/ProfilePage'
import AddAdminRole from '../users/AddAdminRole'

const Routers = () => (
  <Switch>
    <Route path="/" exact component={HomePage} />
    <Route path="/users/login" component={LoginPage} />
    <Route path="/users/register" component={RegisterPage} />
    <Route path="/cars/all" component={AllCars} />
    <PrivateRoute path="/cars/create" component={CreateCar} />
    <PrivateRoute path="/cars/details/:id" component={CarDetails} />
    <PrivateRoute path="/cars/delete/:id" component={DeleteCar} />
    <PrivateRoute path="/cars/update/:id" component={UpdateCar} />
    <PrivateRoute path="/users/profile" component={ProfilePage} />
    <PrivateRoute path="/addAdminRole" component={AddAdminRole} />
  </Switch>

)

export default Routers