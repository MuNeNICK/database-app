import type Author from './author'

type PostType = {
  slug: string
  title: string
  displayTitle: string
  date: string
  coverImage: string
  author: Author
  excerpt: string
  content: string
  type: string
}

export default PostType
