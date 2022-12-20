import React from 'react'

const fetchpost = (id) => {
  return fetch('https://jsonplaceholder.typicode.com/posts/' + id, {
    next: {
      revalidate: 10
    }
  }).then(res => res.json())
}

const postpage = async ({ params }) => {
  const { id } = params
  const postInfo = await fetchpost(id)

  return (
    <div>
      <h1>{postInfo.title}</h1>
      <p>{postInfo.body}</p>
    </div>
  )
}

export default postpage
