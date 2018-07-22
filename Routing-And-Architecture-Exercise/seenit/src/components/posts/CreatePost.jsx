import React, { Component } from 'react'
import Input from '../common/Input'
import TextArea from '../common/TextArea'
import requester from '../../app/requester'
import { withRouter } from 'react-router-dom'
import Auth from '../users/Auth'
import '../../style/submit.css'
import Navigation from '../menu/Navigation';

class CreatePost extends Component {
  constructor(props) {
    super(props)

    this.state = {
      author: Auth.getUser().username,
      title: '',
      description: '',
      url: '',
      imageUrl: ''
    }

    this.onSubmitHandler = this.onSubmitHandler.bind(this)
  }

  onChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  async onSubmitHandler(e) {
    e.preventDefault()
    let res = await requester.post('appdata', 'posts', '', this.state)
    this.props.history.push('/menu/catalog')
  }

  render() {
    return (
      <section id="viewSubmit">
        <div className="submitArea">
          <h1>Create Post</h1>
          <p>Please, fill out the form. A thumbnail image is not required.</p>
        </div>
        <div className="submitArea formContainer">
          <form id="submitForm" className="submitForm" onSubmit={this.onSubmitHandler}>
            <Input
              name='url'
              type='url'
              value={this.state.url}
              onChange={this.onChangeHandler}
              label='Link URL:'
            />
            <Input
              name='title'
              type='text'
              value={this.state.title}
              onChange={this.onChangeHandler}
              label='Link Title:'
            />
            <Input
              name='imageUrl'
              type='url'
              value={this.state.imageUrl}
              onChange={this.onChangeHandler}
              label='Link Thumbnail Image (optional):'
            />
            <TextArea
              name="description"
              onChange={this.onChangeHandler}
              label='Comment (optional):'>
              {this.state.description}
            </TextArea>
            <input id="btnSubmitPost" type="submit" value="Create Post" />
          </form>
        </div>
      </section>
    )
  }
}

export default withRouter(CreatePost)