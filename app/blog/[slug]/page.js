import fs from 'fs'
import ReactMarkdown from 'react-markdown'
import matter from 'gray-matter'
import Head from 'next/head'

export default async function Page({ params }) {
  const { frontmatter, markdown }  = await getBlogDetail(params.slug);  

  return (
    <div>
      <Head>
        <title>Demo Blog | {frontmatter.title}</title>
      </Head>
      <h1>{frontmatter.title}</h1>
      <span>{frontmatter.date}</span>
      <hr />
      <ReactMarkdown>
        {markdown}
      </ReactMarkdown>
    </div>
  )
}

export async function getBlogDetail(slug) {
  const fileContent = matter(fs.readFileSync(`./content/blogs/${slug}.md`, 'utf8'))
  let frontmatter = fileContent.data
  const markdown = fileContent.content

  return { frontmatter, markdown } 
}