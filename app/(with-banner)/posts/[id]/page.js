import React from 'react'

const fetchPost = (id) => {
  return fetch('https://jsonplaceholder.typicode.com/photos/' + id, {
    next: {
      revalidate: 10
    }
  }).then(res => res.json())
}

const PostPage = async ({ params }) => {
  const { id } = params
  const postInfo = await fetchPost(id)

  return (
    <div>
      <h1>{postInfo.title}</h1>
      <Image src={postInfo.url} alt='Post Image' />
    </div>
  )
}

export default PostPage
