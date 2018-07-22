import React, { Component } from 'react'
import requester from '../../app/requester'
import PostForm from '../posts/PostForm'
import Navigation from '../menu/Navigation'

export default class Catalog extends Component {
  constructor(props) {
    super(props)

    this.state = {
      posts: []
    }
    
    this.getAllPosts = this.getAllPosts.bind(this)
  }

  componentDidMount() {
    this.getAllPosts()
  }

  async getAllPosts() {
    let res = await requester.get('appdata', 'posts')
    this.setState({ posts: res })
  }

  render() {
    return (
      <section id="viewCatalog">
        <div className="posts">
          {this.state.posts.map((e, i) => <PostForm index={i} key={e._id} {...e} />)}
        </div>
      </section>
    )
  }
}