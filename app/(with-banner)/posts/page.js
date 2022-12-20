import Link from 'next/link'
import LikeButton from './LikeButton'

const fetchPosts = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())
}

const PostPage = async ({ params }) => {
  const posts = await fetchPosts()

  return (
    <section>
      {posts.slice(0, 5).map(post => (
        <article key={post.id}>
          <Link href={`/posts/${post.id}`}>{post.title}</Link>
          <LikeButton id={post.id} />
        </article>
      ))}
    </section>
  )
}

export default PostPage
