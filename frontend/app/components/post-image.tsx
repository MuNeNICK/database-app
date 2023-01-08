import Image from 'next/image'
import React, { createElement } from 'react'

type PostImageFunc = (slug: string) => React.FC<JSX.IntrinsicElements['img']>

const PostImage: PostImageFunc = () => (props) => {
  try {
    const { src, alt, title } = props
  
    return <Image
      src={src}
      alt={alt}
      title={title}
      height={1000}
      width={2000}
      priority
    />

  } catch (e) {
    return createElement('img', props)
  }
}
export default PostImage
