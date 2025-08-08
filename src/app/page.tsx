
import { Metadata } from "next";
import HeroSectionV2 from "@/components/home-v2/HeroSectionV2";
import ServicesSectionV2 from "@/components/home-v2/ServicesSectionV2";
import ProcessSection from "@/components/home-v2/ProcessSection";
import FeaturedProjectsSection from "@/components/home/FeaturedProjectsSection";
import PortfolioAndBlogSection from "@/components/home/PortfolioAndBlogSection";
import CtaSectionV2 from "@/components/home-v2/CtaSectionV2";

export const metadata: Metadata = {
    title: 'TechNext | Elite Software Engineering & AI Solutions',
    description: 'TechNext architects elite custom software, AI-powered systems, and scalable web solutions to give your business a decisive competitive edge. Partner with us for innovation that performs.',
    openGraph: {
        title: 'TechNext | Elite Software Engineering & AI Solutions',
        description: 'We build high-performance, scalable software solutions that deliver measurable results and a powerful ROI.',
    },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh">
      <main className="flex-1">
        <HeroSectionV2 />
        <ServicesSectionV2 />
        <ProcessSection />
        <FeaturedProjectsSection />
        <PortfolioAndBlogSection />
        <CtaSectionV2 />
      </main>
    </div>
  );
}
