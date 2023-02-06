import dynamic from 'next/dynamic'

const Layout = dynamic(() => import("../../components/layout"))
const New = dynamic(() => import("../../components/post-new"))

export default function NewMD() {
  return (
    <>
        <Layout>
          <New />
          <iframe
            width="100%"
            height="1500"
            src={`${process.env.NEXT_PUBLIC_HACKMD_URL}`}
            frameBorder="0"
          />
        </Layout>
    </>
  )
}