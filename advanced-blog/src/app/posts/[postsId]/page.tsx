import { notFound } from "next/navigation"
import { getPostData, getSortedPostsData } from "../../../../lib/posts"
import getFormattedDate from "../../../../lib/getFormattedDate"
import Link from "next/link"

export function generateMetadata({ params }: { params: { postsId: string } }) {

  const posts = getSortedPostsData()
  const { postsId } = params

  const post = posts.find(post => post.id === postsId)

  if (!post) {
      return {
          title: 'Post Not Found'
      }
  }

    return {
      title: post.title,
    }
}

export function generateStaticParams(){
  const PostData =  getSortedPostsData()

  return PostData.map(post=>({
    postsId: post.id
  }))
}

export default async function BlogPost({params}: {params:{postsId: string} }) {

  const posts = getSortedPostsData()
  const {postsId} = params

  if (!posts.find(post => post.id === postsId)) notFound()

  const { title, date, contentHtml } = await getPostData(postsId)

  const pubDate = getFormattedDate(date)

  return (
      <main className="px-6 prose prose-xl prose-slate dark:prose-invert mx-auto">
          <h1 className="text-3xl mt-4 mb-0">{title}</h1>
          <p className="mt-0">
              {pubDate}
          </p>
          <article>
              <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
              <p>
                  <Link href="/">← Back to home</Link>
              </p>
          </article>
      </main>
  )
}