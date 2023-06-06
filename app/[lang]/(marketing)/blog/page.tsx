import Image from "next/image"
import Link from "next/link"
import { allPosts } from "contentlayer/generated"
import { compareDesc } from "date-fns"

import { formatDate } from "@/lib/utils"

export const metadata = {
  title: "Thư viện bài viết",
  description: "Thư viện bài viết ý tưởng bày trí, cảm hứng thiết kế và mẹo hay về nội thất - xây dựng, giúp mọi người dễ dàng kiến tạo không gian sống mơ ước."
}

export default async function BlogPage() {

  const posts = allPosts
    .filter((post) => post.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date))
    })

  return (
    <>
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-bold text-xl tracking-tight lg:text-2xl">
            Tất cả
          </h1>
          <p className="text-base text-muted-foreground">
            Giúp bạn kiến tạo không gian sống mơ ước
          </p>
        </div>
      </div>
      <hr className="my-8" />
      {posts?.length ? (
        <div className="grid gap-5 sm:grid-cols-3">
          {posts.map((post, index) => (
            <article
              key={post._id}
              className="group relative flex flex-col space-y-2"
            >
              {post.image && (
                <Image
                  src={post.image}
                  alt={post.title}
                  width={804}
                  height={452}
                  className="rounded-md grayscale transition-all duration-500 group-hover:grayscale-0 ease-out border bg-muted"
                  priority={index <= 1}
                />
              )}
              <h2 className="text-2xl font-extrabold">{post.title}</h2>
              {post.description && (
                <p className="text-muted-foreground">{post.description}</p>
              )}
              {post.date && (
                <p className="text-sm text-muted-foreground">
                  {formatDate(post.date)}
                </p>
              )}
              <Link href={`/blog/${post.category}/${post.slugAsParams}`} className="absolute inset-0">
                <span className="sr-only">View Article</span>
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <p>Chưa có bài viết.</p>
      )}
    </>

  )
}
