import React, { Component } from 'react'
import requester from '../../app/requester'
import { withRouter } from 'react-router-dom'

class DeleteComment extends Component {
  constructor(props) {
    super(props)

    this.getComment = this.getComment.bind(this)
  }

  componentDidMount = () => {
    this.getComment()
  }

  async getComment() {
    let res = await requester.remove('appdata', 'comments/' + this.props.match.params.id)
    this.props.history.push('/menu/catalog')
  }

  render = () => (<div></div>)
}

export default withRouter(DeleteComment)