import React from 'react'

const ReviewForm = (props) => {

  const { comment, rating, createdOn, user } = props

  return (
    <div style={({ textAlign: "left"})}>
      <p>Comment: {comment}</p>
      <p>Rating: {rating}</p>
      <p>Date: {createdOn}</p>
      <p>From: {user}</p>
    </div>
  )
}

export default ReviewForm