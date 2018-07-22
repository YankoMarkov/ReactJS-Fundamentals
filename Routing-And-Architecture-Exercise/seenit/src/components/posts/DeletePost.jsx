import React, { Component } from 'react'
import requester from '../../app/requester'
import { withRouter } from 'react-router-dom'

class DeletePost extends Component {
  constructor(props) {
    super(props)

    this.getPost = this.getPost.bind(this)
  }

  componentDidMount = () => {
    this.getPost()
  }

  async getPost() {
    let res = await requester.remove('appdata', 'posts/' + this.props.match.params.id)
    this.props.history.push('/menu/catalog')
  }

  render = () => (<div></div>)
}

export default withRouter(DeletePost)