import Image from "next/image"
import Link from "next/link"
import { allPosts, allCategories } from "contentlayer/generated"
import { compareDesc } from "date-fns"

import { absoluteUrl, formatDate } from "@/lib/utils"
import { notFound } from "next/navigation"
import { Metadata } from "next"
import { env } from "@/env.mjs"

interface CategoryPageProps {
    params: {
        categories: string
    }
}

async function getCategoryFromParams(params: { categories: string }) {
    const categories = params?.categories
    const category = allCategories.find((category) => category.slugAsParams === categories)

    if (!category) {
        null
    }

    return category
}

export async function generateMetadata({
    params,
  }: CategoryPageProps): Promise<Metadata> {
    const post = await getCategoryFromParams(params)
  
    if (!post) {
      return {}
    }
  
    const url = env.NEXT_PUBLIC_APP_URL
  
    const ogUrl = new URL(`${url}/api/og`)
    ogUrl.searchParams.set("heading", post.title)
    ogUrl.searchParams.set("type", "Blog Post")
    ogUrl.searchParams.set("mode", "dark")
  
    return {
      title: post.title,
      description: post.description,
      openGraph: {
        title: post.title,
        description: post.description,
        type: "article",
        url: absoluteUrl(post.slug),
        images: [
          {
            url: ogUrl.toString(),
            width: 1200,
            height: 630,
            alt: post.title,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: post.title,
        description: post.description,
        images: [ogUrl.toString()],
      },
    }
  }

// export async function generateStaticParams(): Promise<
//     CategoryPageProps["params"][]
// > {
//     return allCategories.map((category) => ({
//         categories: category.slugAsParams.split("/"),
//     }))
// }

export default async function BlogPage({ params }: CategoryPageProps) {
    const category = await getCategoryFromParams(params)

    if (!category) {
        notFound()
    }

    const posts = allPosts
        .filter((post) => post.category === params.categories)

    return (
        <>
            <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
                <div className="flex-1 space-y-4">
                    <h1 className="inline-block font-bold text-xl tracking-tight lg:text-2xl">
                        {category.title}
                    </h1>
                    <p className="text-base text-muted-foreground">
                        {category.description}
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
                            <Link href={`blog/${post.category}/${post.slugAsParams}`} className="absolute inset-0">
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
