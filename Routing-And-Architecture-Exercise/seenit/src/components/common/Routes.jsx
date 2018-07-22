import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PrivateRoute from '../common/PrivateRoute'
import HomePage from './../home/HomePage'
import Login from './../users/Login'
import Register from './../users/Register'
import Catalog from '../menu/Catalog'
import CreatePost from '../posts/CreatePost'
import MyPosts from '../posts/MyPosts'
import EditPost from '../posts/EditPost'
import DeletePost from '../posts/DeletePost'
import PostDetails from '../posts/PostDetails'
import DeleteComment from '../comments/DeleteComment'

const Routers = () => {
  return (
    <Switch>
      <Route path='/' exact component={HomePage} />
      <Route path='/users/login' component={Login} />
      <Route path='/users/register' component={Register} />
      <PrivateRoute path='/menu/catalog' component={Catalog} />
      <PrivateRoute path='/posts/createPost' component={CreatePost} />
      <PrivateRoute path='/posts/myPosts/:id' component={MyPosts} />
      <PrivateRoute path='/posts/editPost/:id' component={EditPost} />
      <PrivateRoute path='/posts/deletePost/:id' component={DeletePost} />
      <PrivateRoute path='/posts/postDetails/:id/:time' component={PostDetails} />
      <PrivateRoute path='/comment/deleteComment/:id' component={DeleteComment} />
    </Switch>
  )
}

export default Routers