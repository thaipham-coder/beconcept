import { allCategories } from "@/.contentlayer/generated";
import Link from "next/link";
import { Suspense } from "react";
import Loading from "./loading";

interface BlogLayoutProps {
  children: React.ReactNode;
}

export default async function MarketingLayout({
  children,
}: BlogLayoutProps) {
  const categories = allCategories
  return (
    <div className="container py-6 lg:py-10">
      <div className="hidden lg:flex flex-1 space-x-4 pb-6">
        <Link
          href={"/blog"}
          className="flex items-center justify-center p-2 text-sm rounded-full border focus:outline-none select-none"
        >
          <span className="font-bold">
            Tất cả
          </span>
        </Link>
        {
          categories.map((item, idx) => (
            <Link
              scroll
              href={`/blog/${item.slugAsParams}`}
              key={idx}
              className="flex items-center justify-center p-2 text-sm rounded-full border focus:outline-none select-none"
            >
              <span className="font-bold">
                {item.title}
              </span>
            </Link>
          )
          )
        }
      </div>
      <Suspense fallback={<Loading />}>
        {children}
      </Suspense>
    </div>
  );
}