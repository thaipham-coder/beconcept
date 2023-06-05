import CommonClient from "@/components/common-client";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Suspense } from "react";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  return (
    <div className="bg-white text-base dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200">
      <SiteHeader />
      <main className="min-h-screen">
        <Suspense>
          {children}
        </Suspense>
      </main>
      <CommonClient />
      <SiteFooter />
    </div>
  );
}
