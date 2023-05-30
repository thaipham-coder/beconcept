import Image from "next/image"
import Link from "next/link"
import { allPosts, allCategories } from "contentlayer/generated"
import { compareDesc } from "date-fns"

import { formatDate } from "@/lib/utils"

export const metadata = {
    title: "Blog",
}

interface CategoryPageProps {
    params: {
        slug: string[]
    }
}

async function getCategoryFromParams(params: { slug: any }) {
    const slug = params?.slug?.join("/")
    const category = allCategories.find((categories) => categories.slugAsParams === slug)

    if (!category) {
        null
    }

    return category
}

export async function generateStaticParams(): Promise<
    CategoryPageProps["params"][]
> {
    return allCategories.map((categories) => ({
        slug: categories.slugAsParams.split("/"),
    }))
}

export default async function BlogPage({ params }: CategoryPageProps) {
    // const posts = allPosts
    //     .filter((post) => post.published)
    //     .sort((a, b) => {
    //         return compareDesc(new Date(a.date), new Date(b.date))
    //     })

    return (

        <div className="text-xl font-bold p-5 border-8">{params.slug}</div>
        // <div className="container max-w-4xl py-6 lg:py-10">
        //     <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        //         <div className="flex-1 space-y-4">
        //             <h1 className="inline-block font-bold text-xl tracking-tight lg:text-2xl">
        //                 Tất cả
        //             </h1>
        //             <p className="text-base text-muted-foreground">
        //                 Giúp bạn kiến tạo không gian sống mơ ước
        //             </p>
        //         </div>
        //     </div>
        //     <hr className="my-8" />
        //     {posts?.length ? (
        //         <div className="grid gap-10 sm:grid-cols-2">
        //             {posts.map((post, index) => (
        //                 <article
        //                     key={post._id}
        //                     className="group relative flex flex-col space-y-2"
        //                 >
        //                     {post.image && (
        //                         <Image
        //                             src={post.image}
        //                             alt={post.title}
        //                             width={804}
        //                             height={452}
        //                             className="rounded-md border bg-muted transition-colors"
        //                             priority={index <= 1}
        //                         />
        //                     )}
        //                     <h2 className="text-2xl font-extrabold">{post.title}</h2>
        //                     {post.description && (
        //                         <p className="text-muted-foreground">{post.description}</p>
        //                     )}
        //                     {post.date && (
        //                         <p className="text-sm text-muted-foreground">
        //                             {formatDate(post.date)}
        //                         </p>
        //                     )}
        //                     <Link href={post.slug} className="absolute inset-0">
        //                         <span className="sr-only">View Article</span>
        //                     </Link>
        //                 </article>
        //             ))}
        //         </div>
        //     ) : (
        //         <p>No posts published.</p>
        //     )}
        // </div>
    )
}
