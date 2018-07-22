import React from 'react'
import { Link } from 'react-router-dom'
import '../../style/post.css'

const CommentForm = (props) => {

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
    <article className="post post-content">
      <p>{props.content}</p>
      <div className="info">
        submitted {calcTime()} ago by {props.author} | <Link to={'/comment/deleteComment/' + props._id} className="deleteLink">delete</Link>
      </div>
    </article>
  )
}

export default CommentForm