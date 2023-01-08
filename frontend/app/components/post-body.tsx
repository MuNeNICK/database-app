import markdownStyles from './markdown-styles.module.css'
import tocStyles from './toc-styles.module.css'
import PostToc from './post-toc'
import { Fragment, useEffect, useState, useRef } from 'react'
import markdownToHTML from '../lib/markdownToHtml'

type Props = {
  content: string
  slug: string
}

const PostBody = ({ content, slug }: Props) => {

  const [component, setComponent] = useState(<Fragment />)
  useEffect(() => {
    (async () => {
      const contentComponent = await markdownToHTML(content, slug)
      setComponent(contentComponent[0])
    })()
    return () => { }
  }, [content])

  const [toc, setToc] = useState(<Fragment />)
  useEffect(() => {
    (async () => {
      const tocComponent = await markdownToHTML(content, slug)
      setToc(tocComponent[1])
    })()
    return () => { }
  }, [content])

  PostToc()

  const [isMenuVisible, setMenuVisible] = useState(false);
  const menuRef = useRef(null)

  function handleMenuClick(event) {
    event.stopPropagation()
    setMenuVisible(!isMenuVisible)
  }

  function handleClickOutside(event) {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuVisible(false)
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleClickOutside)
    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  })

  return (
    <div className="xl:grid grid-cols-4 gap-4">
      <div className="max-w-4xl mx-auto mb-32 col-span-3">
        <div
          className={markdownStyles['markdown']}
        >{component}</div>
      </div>
      <div className="hidden xl:block mx-auto mb-32 col-span-1">
        <div className="sticky top-40">
          <h2 className="text-2xl font-bold mb-4">目次</h2>
          <div className={tocStyles['toc']}>{toc}</div>
        </div>
      </div>
      <div className="block xl:hidden fixed bottom-0 right-0 mr-6 mb-6">
        <button onClick={handleMenuClick} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline-blue">
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M2 6h20v3H2zm0 5h20v3H2zm0 5h20v3H2z"></path>
          </svg>
        </button>
        {isMenuVisible && (
          <div ref={menuRef} className="absolute bottom-0 right-0 mr-6 mb-6 bg-white rounded-lg shadow-xl p-4 w-32 md:w-64">
            <div className={tocStyles['toc']}>{toc}</div>
          </div>
        )}
      </div>
    </div>
  )
}

export default PostBody
