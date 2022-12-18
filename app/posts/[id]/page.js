import React from 'react'

const PostPage = ({ params }) => {
  const { id } = params

  return (
    <div>Post: {id}</div>
  )
}

export default PostPage
