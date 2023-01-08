import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import rehypePrism from 'rehype-prism-plus'
import rehypeRaw from "rehype-raw";
import PostImage from '../components/post-image'
import PostLink from '../components/post-link'
import { createElement, Fragment } from 'react'
import rehypeReact from 'rehype-react'
import rehypeCodeTitles from 'rehype-code-titles'
import { toc } from 'mdast-util-toc'

function getToc(options: any) {
  return (node: any) => {
    const result = toc(node, options);
    node.children = [result.map];
  };
}


export default async function markdownToHtml(markdown: string, slug: string) {
  const result = (await unified()
  .use(remarkParse)
  .use(remarkGfm)
  .use(remarkRehype, { allowDangerousHtml: true })
  .use(rehypeCodeTitles)
  .use(rehypePrism, { showLineNumbers: true, ignoreMissing: true })
  .use(rehypeRaw)
  .use(rehypeSlug)
  .use(rehypeReact, { 
    createElement, 
    components: {
      a: PostLink,
      img: PostImage(slug)
      },
    Fragment 
  })
  .process(markdown)).result

  const toc = (await unified()
  .use(remarkParse)
  .use(getToc, {
    tight: true,
  })
  // @ts-ignore
  .use(remarkRehype)
  .use(rehypeSlug)
  .use(rehypeReact, { 
    createElement,
    Fragment
  })
  .process(markdown)).result

  return [result, toc];
}
