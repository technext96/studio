
import { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import IndustriesSection from "@/components/home/IndustriesSection";
import PortfolioSection from "@/components/home/PortfolioSection";
import BlogSection from "@/components/home/BlogSection";
import FaqSection from "@/components/home/FaqSection";
import CtaSection from "@/components/home/CtaSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";

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
        <HeroSection />
        <ServicesSection />
        <IndustriesSection />
        <PortfolioSection />
        <TestimonialsSection />
        <BlogSection />
        <FaqSection />
        <CtaSection />
      </main>
    </div>
  );
}
