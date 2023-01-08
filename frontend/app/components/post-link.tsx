import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { getPostBySlug } from '../lib/api'
import type PostType from '../interfaces/post'


const PostLink = ({ children, href }) => {
  if (href.startsWith(process.env.NEXT_PUBLIC_FRONTEND_URL)) {
    const slug = href.split('/').pop();

    const [post, setPost] = useState({} as PostType)
    useEffect(() => {
      const getPost = async () => {
        const post = await getPostBySlug(slug, [
          'title',
          'displayTitle',
          'date',
          'slug',
          'author',
          'coverImage',
          'excerpt',
          'content',
        ])
        setPost(post as any)
      }
      getPost()
    }, [slug])

    if (!post) {
      return (
        <Link href={href} className="block max-w-full max-h-36 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 flex items-center no-underline">
          <span className="flex flex-col w-4/5 flex-auto">
            <span className="no-underline">MuNeNiCK.me</span>
            <span className="hidden md:inline text-sm">Life isn't worth living, unless it is lived for someone else.</span>
            <span className="mt-6 text-xs text-gray-600">{href}</span>
          </span>
          <Image className="hidden md:block flex-none w-1/5" src={`${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/ogp?title=MuNeNiCK.me&height=630&width=1200`} alt="" height={200} width={250} />
        </Link>
      )
    }

    return (
      <Link href={href} className="block max-w-full max-h-36 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 flex items-center no-underline">
        <span className="flex flex-col w-4/5 flex-auto">
          <span className="no-underline">{post.displayTitle}</span>
          <span className="hidden md:inline text-sm">{post.excerpt}</span>
          <span className="mt-6 text-xs text-gray-600">{href}</span>
        </span>
        <Image className="hidden md:block flex-none w-1/5" src={`${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/ogp?title=${post.displayTitle}&height=630&width=1200`} alt="" title={post.title} height={200} width={250} />
      </Link>
    );
  }

  return (
    <Link href={href}>
      {children}
    </Link>
  );
};

export default PostLink
