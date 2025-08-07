
import { Button } from "@/components/ui/button";
import { industries } from "@/lib/data.tsx";
import Link from "next/link";
import { FadeIn } from "@/components/ui/fade-in";
import { iconMap } from "@/lib/constants";

export default function IndustriesSection() {
    return (
        <section id="industries" className="w-full py-16 md:py-24 lg:py-32 bg-secondary/20">
            <div className="px-8 md:px-12">
                <FadeIn className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-3">
                        <div className="inline-block rounded-lg bg-primary/20 px-3 py-1 text-sm text-primary font-semibold">Industries We Serve</div>
                        <h2 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl">Driving Client Success Through Innovation</h2>
                        <p className="max-w-3xl text-foreground/80 md:text-xl/relaxed">
                            Delivering impactful and customized software solutions to meet unique industry challenges. Our deep domain expertise ensures that we speak your language and understand what it takes to succeed. Explore our work in key sectors like <Link href="/industries/fintech" className="text-primary hover:underline">Fintech</Link>, <Link href="/industries/healthcare" className="text-primary hover:underline">Healthcare</Link>, and <Link href="/solutions/carpooling-app" className="text-primary hover:underline">Mobility Solutions</Link>.
                        </p>
                    </div>
                </FadeIn>
                <div className="mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mt-16 text-center">
                    {industries.slice(0, 10).map((industry, i) => {
                        const Icon = iconMap[industry.icon];
                        return (
                        <FadeIn key={industry.slug} style={{ animationDelay: `${i * 0.05}s` }}>
                            <Link href={`/industries/${industry.slug}`} className="group flex flex-col items-center gap-4">
                                <div className="w-20 h-20 rounded-full bg-primary/10 text-primary flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110">
                                    {Icon && <Icon className="w-10 h-10" />}
                                </div>
                                <p className="font-semibold text-md transition-colors group-hover:text-primary">{industry.title}</p>
                            </Link>
                        </FadeIn>
                    )})}
                </div>
                <FadeIn className="mt-16 text-center">
                    <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6">
                        <Link href="/industries">View All Industries</Link>
                    </Button>
                </FadeIn>
            </div>
        </section>
    );
}
