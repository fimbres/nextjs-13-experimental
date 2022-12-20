import Image from 'next/image'
import Link from 'next/link'
import LikeButton from './[id]/LikeButton'

const fetchPosts = () => {
  return fetch('https://jsonplaceholder.typicode.com/photos').then(res => res.json())
}

const PostPage = async ({ params }) => {
  const posts = await fetchPosts()

  return (
    <section>
      {posts.slice(0, 5).map(post => (
        <article key={post.id}>
          <Image src={post.url} alt='post image' width={200} height={200} />
          <Link href={`/posts/${post.id}`}>{post.title}</Link>
          <LikeButton id={post.id} />
        </article>
      ))}
    </section>
  )
}

export default PostPage
