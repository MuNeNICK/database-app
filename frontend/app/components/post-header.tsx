import Avatar from './avatar'
import DateFormatter from './date-formatter'
import PostTitle from './post-title'
import type Author from '../interfaces/author'

type Props = {
  displayTitle: string
  coverImage: string
  date: string
  author: Author
}

const PostHeader = ({ displayTitle, date, author }: Props) => {
  return (
    <>
      <PostTitle>{displayTitle}</PostTitle>
      <div className="flex">
        <div className="mr-auto">
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <div className="ml-auto">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  )
}

export default PostHeader
