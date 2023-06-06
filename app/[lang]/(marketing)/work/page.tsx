import { getDictionary } from '@/get-dictionary'
import { Locale } from '@/i18n-config'
import { formatDate } from '@/lib/utils'
import { allActualWorks } from "contentlayer/generated"
import { compareDesc } from 'date-fns'
import Image from 'next/image'
import Link from 'next/link'

export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const dictionary = await getDictionary(lang)

  const works = allActualWorks
    .filter((work) => work.locale === lang)

  return (
    <div className='container'>
      <div className="flex flex-col items-start gap-4 md:pt-10 md:flex-row md:justify-between md:gap-8">
        <div className="flex-none space-y-4">
          <h1 className="inline-block font-bold text-2xl tracking-tight lg:text-6xl">
            {dictionary['work-page'].title}
          </h1>
        </div>
      </div>
      <hr className="my-8" />
      {works?.length ? (
        <div className="grid gap-5 sm:grid-cols-3">
          {works.map((work, index) => (
            <article
              key={work._id}
              className="group relative flex flex-col space-y-2"
            >
              {work.image && (
                <Image
                  src={work.image}
                  alt={work.title}
                  width={804}
                  height={452}
                  className="rounded-md grayscale transition-all duration-500 group-hover:grayscale-0 ease-out border bg-muted"
                  priority={index <= 1}
                />
              )}
              <h2 className="text-2xl font-extrabold">{work.title}</h2>
              {work.description && (
                <p className="text-muted-foreground">{work.description}</p>
              )}
              {work.date && (
                <p className="text-sm text-muted-foreground">
                  {formatDate(work.date)}
                </p>
              )}
              <Link href={`/${lang}/work/${work.slugAsParams}`} className="absolute inset-0">
                <span className="sr-only">View Article</span>
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <p>Chưa có bài viết.</p>
      )}
    </div>
  )
}