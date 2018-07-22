import React, { Component } from 'react'
import requester from '../../app/requester'
import PostForm from '../posts/PostForm'
import Navigation from '../menu/Navigation'
import Auth from './../users/Auth';

export default class MyPosts extends Component {
  constructor(props) {
    super(props)

    this.state = {
      posts: []
    }

    this.getMyPosts = this.getMyPosts.bind(this)
  }

  componentDidMount() {
    this.getMyPosts()
  }

  async getMyPosts() {
    let res = await requester.get('appdata', 'posts')
    let data = res
    data = data.filter(o => o.author === 'yanaki')
    this.setState({ posts: data })
  }

  render() {
    return (
      <section id="viewMyPosts">
        <div className="post post-content">
          <h1>Your Posts</h1>
        </div>
        <div className="posts">
          {this.state.posts.map((e, i) => <PostForm index={i} key={e._id} {...e} />)}
        </div>
      </section>
    )
  }
}