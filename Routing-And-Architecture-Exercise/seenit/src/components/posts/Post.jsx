import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import requester from '../../app/requester'
import '../../style/post.css'

class Post extends Component {
  constructor(props) {
    super(props)

    this.state = {
      post: ''
    }

    this.getPost = this.getPost.bind(this)
  }

  componentDidMount() {
    this.getPost()
  }

  async getPost() {
    let res = await requester.get('appdata', 'posts')
    let data = res
    data = data.filter(p => p._id === this.props.id)[0]
    this.setState({ post: data })
  }

  calcTime = () => {
    let dateIsoFormat = this.props.time
    let diff = new Date - (new Date(dateIsoFormat));
    diff = Math.floor(diff / 60000);
    if (diff < 1) return 'less than a minute';
    if (diff < 60) return diff + ' minute' + pluralize(diff);
    diff = Math.floor(diff / 60);
    if (diff < 24) return diff + ' hour' + pluralize(diff);
    diff = Math.floor(diff / 24);
    if (diff < 30) return diff + ' day' + pluralize(diff);
    diff = Math.floor(diff / 30);
    if (diff < 12) return diff + ' month' + pluralize(diff);
    diff = Math.floor(diff / 12);
    return diff + ' year' + pluralize(diff);

    function pluralize(value) {
      if (value !== 1) return 's';
      else return '';
    }
  }

  render() {
    return (
      <div className="post" >
        <div className="col thumbnail">
          <a href={this.state.post.url}>
            <img src={this.state.post.imageUrl} />
          </a>
        </div>
        <div className="post-content">
          <div className="title">
            <a href={this.state.post.url}>{this.state.post.title}</a>
          </div>
          <div className="details">
            <p>{this.state.post.description}</p>
            <div className="info">
              submitted {this.calcTime()} ago by {this.state.post.author}
            </div>
            <div className="controls">
              <ul>
                <li className="action"><Link className="editLink" to={'/posts/editPost/' + this.state.post._id}>edit</Link></li>
                <li className="action"><Link className="deleteLink" to={'/posts/deletePost/' + this.state.post._id}>delete</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="clear"></div>
      </div >
    )
  }
}

export default Post