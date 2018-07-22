import React from 'react'
import { Link } from 'react-router-dom'
import Auth from '../users/Auth'
import '../../style/post.css'

const PostForm = (props) => {

  const calcTime = () => {
    let dateIsoFormat = props._kmd.ect
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

  return (
    < article className="post" >
      <div className="col rank">
        <span>{props.index + 1}</span>
      </div>
      <div className="col thumbnail">
        <a href={props.url}>
          <img src={props.imageUrl} />
        </a>
      </div>
      <div className="post-content">
        <div className="title">
          <a href={props.url}>{props.title}</a>
        </div>
        <div className="details">
          <div className="info">
            submitted {calcTime()} ago by {props.author}
          </div>
          <div className="controls">
            <ul>
              <li className="action"><Link className="commentsLink" to={'/posts/postDetails/' + props._id + '/' + props._kmd.ect}>details</Link></li>
              <li className="action"><Link className="editLink" to={'/posts/editPost/' + props._id}>edit</Link></li>
              <li className="action"><Link className="deleteLink" to={'/posts/deletePost/' + props._id}>delete</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </article >
  )
}

export default PostForm