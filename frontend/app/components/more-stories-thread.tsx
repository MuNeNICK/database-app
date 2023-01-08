import PostPreview from './thread-preview'
import type Post from '../interfaces/post'

type Props = {
  posts: Post[]
}

const MoreStories = ({ posts }: Props) => {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 pb-32">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.displayTitle}
            coverImage={`${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/ogp?title=${post.displayTitle}`}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  )
}

export default MoreStories
