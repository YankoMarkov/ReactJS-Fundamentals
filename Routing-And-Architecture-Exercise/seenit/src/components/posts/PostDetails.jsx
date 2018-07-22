import React, { Component } from 'react'
import Post from '../posts/Post'
import CreateComment from '../comments/CreateComment'
import CommentForm from '../comments/CommentForm'
import requester from '../../app/requester'
import '../../style/comments.css'
import '../../style/post.css'

class PostDetails extends Component {
  constructor(props) {
    super(props)

    this.state = {
      comments: []
    }

    this.getComments = this.getComments.bind(this)
  }

  componentDidMount() {
    this.getComments()
  }

  async getComments() {
    let res = await requester.get('appdata', 'comments')
    let data = res
    data = data.filter(c => c.postId === this.props.match.params.id)
    this.setState({ comments: data })
  }

  render() {
    return (
      <section id="viewComments">
        <Post id={this.props.match.params.id} time={this.props.match.params.time} />
        <div className="post post-content">
          <CreateComment id={this.props.match.params.id} />
        </div>
        {this.state.comments.map(c => <CommentForm key={c._id} {...c} />)}
      </section>
    )
  }
}

export default PostDetails