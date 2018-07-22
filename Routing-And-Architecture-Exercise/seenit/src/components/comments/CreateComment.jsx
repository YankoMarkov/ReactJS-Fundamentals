import React, { Component } from 'react'
import TextArea from '../common/TextArea'
import Auth from './../users/Auth'
import requester from '../../app/requester'
import { withRouter } from 'react-router-dom'
import '../../style/comments.css'

class CreateComment extends Component {
  constructor(props) {
    super(props)

    this.state = {
      postId: props.id,
      content: '',
      author: Auth.getUser().username
    }

    this.onSubmitHandler = this.onSubmitHandler.bind(this)
  }

  onChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  async onSubmitHandler(e) {
    e.preventDefault()
    let res = await requester.post('appdata', 'comments', '', this.state)
    this.props.history.push('/menu/catalog')
  }

  render() {
    return (
      <form id="commentForm" onSubmit={this.onSubmitHandler}>
        <TextArea
          value={this.state.content}
          onChange={this.onChangeHandler}
          name="content"
          type="text"
          label="Comment:">
        </TextArea>
        <input type="submit" value="Add Comment" id="btnPostComment" />
      </form>
    )
  }
}

export default withRouter(CreateComment)