import React, { Component } from 'react'
import requester from '../../app/requester'
import Input from '../common/Input'
import TextArea from '../common/TextArea'
import Navigation from '../menu/Navigation'

class EditPost extends Component {
  constructor(props) {
    super(props)

    this.state = {
      author: '',
      title: '',
      description: '',
      url: '',
      imageUrl: ''
    }

    this.onSubmitHandler = this.onSubmitHandler.bind(this)
    this.getPost = this.getPost.bind(this)
  }

  componentDidMount = () => {
    this.getPost()
  }

  async getPost() {
    let res = await requester.get('appdata', 'posts/' + this.props.match.params.id)
    this.setState({
      author: res.author,
      title: res.title,
      description: res.description,
      url: res.url,
      imageUrl: res.imageUrl
    })
  }

  onChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  async onSubmitHandler(e) {
    e.preventDefault()
    let res = await requester.update('appdata', 'posts/' + this.props.match.params.id, '', this.state)
    this.props.history.push('/menu/catalog')
  }

  render() {
    return (
      <section id="viewEdit">
        <div className="submitArea">
          <h1>Edit Post</h1>
          <p>Please, fill out the form. A thumbnail image/description is not required.</p>
        </div>
        <div className="submitArea formContainer">
          <form id="editPostForm" className="submitForm" onSubmit={this.onSubmitHandler}>
            <Input
              name='url'
              type='url'
              value={this.state.url}
              onChange={this.onChangeHandler}
              label='Link URL:'
              placeholder={this.state.url}
            />
            <Input
              name='title'
              type='text'
              value={this.state.title}
              onChange={this.onChangeHandler}
              label='Link Title:'
              placeholder={this.state.title}
            />
            <Input
              name='imageUrl'
              type='url'
              value={this.state.imageUrl}
              onChange={this.onChangeHandler}
              label='Link Thumbnail Image (optional):'
              placeholder={this.state.imageUrl}
            />
            <TextArea
              name="description"
              type='text'
              onChange={this.onChangeHandler}
              label='Comment (optional):'
              placeholder={this.state.description}
              value={this.state.description}>
            </TextArea>
            <input id="btnEditPost" type="submit" value="Update Post" />
          </form>
        </div>
      </section>
    )
  }
}

export default EditPost