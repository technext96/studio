'use server';
/**
 * @fileOverview An AI flow to automatically generate a complete, SEO-optimized blog post and save it to the database.
 *
 * - generateAndSaveAutoBlog - A function that triggers the blog generation and saving process.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { PrismaClient } from '@/generated/prisma/client';
import slugify from 'slugify';
import { illustrationMap } from '@/lib/constants';

const prisma = new PrismaClient();

const illustrationKeys = Object.keys(illustrationMap);

const AutoBlogOutputSchema = z.object({
  topic: z.string().describe('The trending topic that was selected for the blog post.'),
  frontmatter: z.object({
    title: z.string().describe('A catchy, SEO-friendly title for the blog post.'),
    date: z.string().describe('The current date in YYYY-MM-DD format.'),
    description: z.string().describe('A strong SEO meta description, maximum 160 characters.'),
    tags: z.array(z.string()).describe('3–6 relevant keywords as tags.'),
    image: z.enum(illustrationKeys as [string, ...string[]]).describe('A relevant illustration key from the provided list for the blog post cover image.'),
  }),
  content: z.string().describe('The full blog post content in MDX format, between 1200-1500 words, including headings, lists, and a call-to-action button.'),
  seo: z.object({
    seo_title: z.string().describe('The SEO title for the page metadata.'),
    seo_description: z.string().describe('The SEO meta description for the page metadata.'),
    seo_keywords: z.string().describe('A comma-separated list of SEO keywords.'),
    json_ld: z.string().describe('A complete JSON-LD structured data string for an Article.'),
  }),
});

export async function generateAndSaveAutoBlog(): Promise<void> {
  await autoBlogFlow();
}

const prompt = ai.definePrompt({
  name: 'autoBlogPrompt',
  output: { schema: AutoBlogOutputSchema },
  prompt: `You are an expert AI writer and SEO strategist for TechNext96 (https://technext96.com), a software development company.

Your task is to perform the following actions in a single, comprehensive step:

1.  **Pick a trending topic**: Choose a relevant and trending topic in AI, intelligent automation, custom software development, or offshore development. The topic should be aimed at attracting business decision-makers (e.g., CTOs, Product Managers, Founders).
2.  **Write a complete SEO-optimized blog**: Generate a full blog post in MDX format.
3.  **Include all frontmatter fields**: The post must have:
    *   \`title\`: A catchy, SEO-friendly title.
    *   \`date\`: The current date (YYYY-MM-DD).
    *   \`description\`: A compelling meta description, maximum 160 characters.
    *   \`tags\`: An array of 3–6 relevant keywords.
    *   \`image\`: Choose the most relevant illustration key from this list: ${illustrationKeys.join(', ')}.
4.  **Blog Content**: The body of the blog must be:
    *   Between 1200 and 1500 words.
    *   Well-structured with markdown headings ('##' and '###').
    *   Easy to read, using short paragraphs, bullet points, and numbered lists where appropriate.
    *   Include code examples in markdown code blocks if the topic is technical.
    *   End with a clear call-to-action: \`<Button>Contact TechNext96 Experts</Button>\`
5.  **Run a review pass**: Internally review the generated content to:
    *   Fix any grammatical errors and improve readability.
    *   Optimize keyword usage and heading structure for SEO.
    *   Ensure the writing is unique and plagiarism-free.
6.  **Provide SEO metadata separately**: In the final JSON output, include a separate \`seo\` object with:
    *   \`seo_title\`: The title for the page's <title> tag.
    *   \`seo_description\`: The meta description.
    *   \`seo_keywords\`: A comma-separated string of keywords.
    *   \`json_ld\`: A complete JSON-LD structured data script for an \`Article\` schema.

**Output Format**:
Return a single JSON object that strictly follows this structure, with no additional commentary.
\`\`\`json
{
  "topic": "The chosen trending topic",
  "frontmatter": {
    "title": "...",
    "date": "...",
    "description": "...",
    "tags": ["...", "..."],
    "image": "..."
  },
  "content": "The full MDX blog post content...",
  "seo": {
    "seo_title": "...",
    "seo_description": "...",
    "seo_keywords": "...",
    "json_ld": "{...}"
  }
}
\`\`\``,
});

const autoBlogFlow = ai.defineFlow(
  {
    name: 'autoBlogFlow',
    outputSchema: z.void(),
  },
  async () => {
    console.log('[AutoBlog] Starting blog generation flow...');
    const { output } = await prompt();
    
    if (!output) {
      console.error('[AutoBlog] Failed to generate blog post from AI. Output was null.');
      throw new Error('Failed to generate blog post.');
    }

    console.log(`[AutoBlog] AI generated content for topic: ${output.topic}`);

    const { frontmatter, content, seo } = output;
    const slug = slugify(frontmatter.title, { lower: true, strict: true });

    const blogData = {
      slug: slug,
      title: frontmatter.title,
      description: frontmatter.description,
      content: content,
      tags: frontmatter.tags,
      image: frontmatter.image,
      featured: false, // Default to not featured
      seoTitle: seo.seo_title,
      seoDescription: seo.seo_description,
      seoKeywords: seo.seo_keywords,
      jsonLd: seo.json_ld,
      createdAt: new Date(frontmatter.date),
    };

    try {
      // Set the newest post as featured
      await prisma.blog.updateMany({
        data: { featured: false },
      });
      blogData.featured = true;

      console.log(`[AutoBlog] Attempting to save blog post with slug: ${slug}`);
      await prisma.blog.create({
        data: blogData,
      });
      console.log(`[AutoBlog] Successfully saved blog post: ${slug}`);
    } catch (error) {
      console.error(`[AutoBlog] Error saving blog post to database for slug: ${slug}`, error);
      throw error;
    }
  }
);
