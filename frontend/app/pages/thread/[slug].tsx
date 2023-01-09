import dynamic from 'next/dynamic'
import ErrorPage from 'next/error'
import { useRouter } from 'next/router'
import { parseCookies } from 'nookies'
import { useEffect, useState } from "react"
import { getPostBySlug } from '../../lib/api'
import { CMS_NAME } from '../../lib/constants'
import type PostType from '../../interfaces/post'
import Chat from '../../components/chat'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import PostHeader from '../../components/post-header'
import PostTitle from '../../components/post-title'
import Layout from '../../components/layout'
import Edit from '../../components/post-edit'


type Props = {
  post: PostType
  morePosts: PostType[]
  preview?: boolean
}


export default function Post({ post, preview }: Props) {
  const accessToken = parseCookies().accessToken;
  const [isClient, setIsClient] = useState(false);
  const editor = () => {
    if (isClient) {
      return <Edit />;
    } else {
      return null;
    }
  };

  if (accessToken) {
    useEffect(() => {
      setIsClient(true);
    }, []);
  }

  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout preview={preview}>
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="prose prose-lg max-w-none">
              <PostHeader
                displayTitle={post.displayTitle}
                coverImage={`${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/ogp?title=${post.displayTitle}&height=630&width=1200`}
                date={post.date}
                author={post.author}
              />
              <PostBody content={post.content} slug={post.slug} />
              <Chat />
            </article>
          </>
        )}
        {editor()}
      </Container>
    </Layout>
  )
}

type Params = {
  params: {
    slug: string
  }
}

export async function getServerSideProps({ params }: Params) {
  const post = await getPostBySlug(params.slug, [
    'title',
    'displayTitle',
    'date',
    'slug',
    'author',
    'content',
    'coverImage',
  ])

  return {
    props: {
      post,
    },
  }
}
