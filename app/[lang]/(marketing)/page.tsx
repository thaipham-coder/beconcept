import { SectionHero } from "@/components/section-hero";
import { SectionTermService } from "@/components/section-term-service";

export const runtime = 'edge';
export const revalidate = 0;

export default async function IndexPage() {
    return (
        <div className="nc-PageHome relative overflow-hidden">
            <SectionHero />
            <SectionTermService />
        </div>
    )
}