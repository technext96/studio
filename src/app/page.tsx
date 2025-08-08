
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
    title: 'TechNext | Custom Software, AI, & Web Development Solutions',
    description: 'TechNext delivers expert custom software, AI/ML integration, and web development services to power your business growth and innovation. Get your free quote today.',
    openGraph: {
        title: 'TechNext | Custom Software, AI, & Web Development Solutions',
        description: 'We build high-performance, scalable software solutions to turn your ideas into reality.',
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
