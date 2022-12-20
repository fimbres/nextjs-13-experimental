import React from 'react'

import styles from '../../../../styles/home.module.css'

const fetchpost = (id) => {
  const isError = Math.random() > 0.5

  if (isError) {
    throw new Error('This is a custom error')
  }

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
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>{postInfo.title}</h1>
        <p style={{ marginTop: 43 }}>{postInfo.body}</p>
      </div>
    </div>
  )
}

export default postpage
