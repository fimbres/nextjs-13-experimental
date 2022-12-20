import Link from 'next/link'
import LikeButton from './LikeButton'

import styles from '../../../styles/home.module.css'

const fetchPosts = async () => {
  await new Promise(resolve => setTimeout(resolve, 5000))
  return fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-store' }).then(res => res.json())
}

const PostPage = async ({ params }) => {
  const posts = await fetchPosts()

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {posts.slice(0, 5).map(post => (
          <article key={post.id} className={styles.postcard}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
            <LikeButton id={post.id} />
          </article>
        ))}
      </div>
    </div>
  )
}

export default PostPage
