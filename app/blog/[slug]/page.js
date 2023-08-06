import fs from 'fs'
import ReactMarkdown from 'react-markdown'
import matter from 'gray-matter'

export default async function Page({ params }) {
  const { content, data} = await getBlogDetail(params.slug);  

  return (
    <div>
      <h1>{data.title}</h1>
      <span>{data.date}</span>
      <hr />
      <ReactMarkdown>
        {content}
      </ReactMarkdown>
    </div>
  )
}

export async function getBlogDetail(slug) {
  const post = matter(fs.readFileSync(`./content/blogs/${slug}.md`, 'utf8'))
  console.log('blog post', post)
  return  post
}