import Container from '../../components/container'
import MoreStories from '../../components/more-stories-thread'
import HeroPost from '../../components/hero-post'
import Intro from '../../components/intro-thread'
import Layout from '../../components/layout'
import { getAllPosts } from '../../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../../lib/constants'
import Post from '../../interfaces/post'

type Props = {
  allPosts: Post[]
}

export default function Index({ allPosts }: Props) {
  const deltype = ['blog']
  const delpost = allPosts.filter((post) => !deltype.includes(post.type))
  const morePosts = delpost.slice(0)
  return (
    <>
      <Layout>
        <Head>
          <title>{CMS_NAME}</title>
        </Head>
        <Container>
          <Intro />
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}

export async function getServerSideProps() {
  const allPosts = await getAllPosts([
    'title',
    'displayTitle',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
    'displayTitle',
    'type',
  ])

  return {
    props: { 
      allPosts 
    },
  }
}
