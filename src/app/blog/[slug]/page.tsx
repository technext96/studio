import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import BlogPostClient from "@/components/BlogPostClient";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const post = await prisma.blog.findUnique({
    where: { slug: params.slug },
  });

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  const siteUrl = 'https://technext96.com';
  const ogImage = '/og-image.png';
  const canonicalUrl = `${siteUrl}/blog/${post.slug}`;

  // Use the pre-generated SEO metadata from the database
  return {
    title: post.seoTitle,
    description: post.seoDescription,
    keywords: post.seoKeywords,
    openGraph: {
      title: post.seoTitle,
      description: post.seoDescription,
      url: canonicalUrl,
      type: 'article',
      publishedTime: post.createdAt.toISOString(),
      images: [
        {
          url: `${siteUrl}${ogImage}`, 
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.seoTitle,
      description: post.seoDescription,
      images: [`${siteUrl}${ogImage}`],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const post = await prisma.blog.findUnique({
    where: { slug: params.slug },
  });

  if (!post) {
    notFound();
  }

  // A bit of a type mapping to fit the existing client component
  const clientPost = {
    ...post,
    date: post.createdAt.toISOString(),
    excerpt: post.description,
    category: post.tags.join(', '),
    author: { name: 'TechNext AI Writer', role: 'AI Content Specialist' },
    illustration: 'aiMl', // Using a default illustration
    jsonLd: post.jsonLd,
    keyTakeaways: [], // Can be added to schema later if needed
    faq: [], // Can be added to schema later if needed
  };

  return <BlogPostClient post={clientPost} />;
}

export async function generateStaticParams() {
  const posts = await prisma.blog.findMany({
    select: { slug: true },
  });

  return posts.map((p) => ({
    slug: p.slug,
  }));
}
