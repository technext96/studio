'use server';
/**
 * @fileOverview An AI flow to generate a complete, SEO-optimized blog post on a specific topic and save it to the database.
 *
 * - generateBlogOnTopic - A function that triggers the blog generation for a given topic.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { PrismaClient } from '@/generated/prisma';
import slugify from 'slugify';

const prisma = new PrismaClient();

const BlogOnTopicInputSchema = z.object({
  topic: z.string().describe('The specific topic for the blog post.'),
});

const BlogOnTopicOutputSchema = z.object({
  topic: z.string().describe('The topic that was provided for the blog post.'),
  frontmatter: z.object({
    title: z.string().describe('A catchy, SEO-friendly title for the blog post based on the topic.'),
    date: z.string().describe('The current date in YYYY-MM-DD format.'),
    description: z.string().describe('A strong SEO meta description, maximum 160 characters.'),
    tags: z.array(z.string()).describe('3–6 relevant keywords as tags related to the topic.'),
  }),
  content: z.string().describe('The full blog post content in MDX format, between 1200-1500 words, including headings, lists, and a call-to-action button.'),
  seo: z.object({
    seo_title: z.string().describe('The SEO title for the page metadata.'),
    seo_description: z.string().describe('The SEO meta description for the page metadata.'),
    seo_keywords: z.string().describe('A comma-separated list of SEO keywords.'),
    json_ld: z.string().describe('A complete JSON-LD structured data string for an Article.'),
  }),
});

export async function generateBlogOnTopic(topic: string): Promise<void> {
  await blogOnTopicFlow({ topic });
}

const prompt = ai.definePrompt({
  name: 'blogOnTopicPrompt',
  input: { schema: BlogOnTopicInputSchema },
  output: { schema: BlogOnTopicOutputSchema },
  prompt: `You are an expert AI writer and SEO strategist for TechNext96 (https://technext96.com), a software development company.

Your task is to perform the following actions for the given topic: "{{{topic}}}"

1.  **Write a complete SEO-optimized blog**: Generate a full blog post in MDX format based on the provided topic.
2.  **Include YAML frontmatter**: The post must start with YAML frontmatter containing:
    *   \`title\`: A catchy, SEO-friendly title related to the topic.
    *   \`date\`: The current date (YYYY-MM-DD).
    *   \`description\`: A compelling meta description, maximum 160 characters.
    *   \`tags\`: An array of 3–6 relevant keywords related to the topic.
3.  **Blog Content**: The body of the blog must be:
    *   Between 1200 and 1500 words.
    *   Well-structured with markdown headings ('##' and '###').
    *   Easy to read, using short paragraphs, bullet points, and numbered lists where appropriate.
    *   Include code examples in markdown code blocks if the topic is technical.
    *   End with a clear call-to-action: \`<Button>Contact TechNext96 Experts</Button>\`
4.  **Run a review pass**: Internally review the generated content to:
    *   Fix any grammatical errors and improve readability.
    *   Optimize keyword usage and heading structure for SEO.
    *   Ensure the writing is unique and plagiarism-free.
5.  **Provide SEO metadata separately**: In the final JSON output, include a separate \`seo\` object with:
    *   \`seo_title\`: The title for the page's <title> tag.
    *   \`seo_description\`: The meta description.
    *   \`seo_keywords\`: A comma-separated string of keywords.
    *   \`json_ld\`: A complete JSON-LD structured data script for an \`Article\` schema.

**Output Format**:
Return a single JSON object that strictly follows this structure, with no additional commentary.
\`\`\`json
{
  "topic": "{{{topic}}}",
  "frontmatter": {
    "title": "...",
    "date": "...",
    "description": "...",
    "tags": ["...", "..."]
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

const blogOnTopicFlow = ai.defineFlow(
  {
    name: 'blogOnTopicFlow',
    inputSchema: BlogOnTopicInputSchema,
    outputSchema: z.void(),
  },
  async ({ topic }) => {
    console.log(`[BlogOnTopic] Starting blog generation flow for topic: "${topic}"`);
    const { output } = await prompt({ topic });
    
    if (!output) {
      console.error(`[BlogOnTopic] Failed to generate blog post from AI for topic: "${topic}". Output was null.`);
      throw new Error('Failed to generate blog post.');
    }

    console.log(`[BlogOnTopic] AI generated content for topic: ${output.topic}`);

    const { frontmatter, content, seo } = output;
    const slug = slugify(frontmatter.title, { lower: true, strict: true });

    const blogData = {
      slug: slug,
      title: frontmatter.title,
      description: frontmatter.description,
      content: content,
      tags: frontmatter.tags,
      seoTitle: seo.seo_title,
      seoDescription: seo.seo_description,
      seoKeywords: seo.seo_keywords,
      jsonLd: seo.json_ld,
      createdAt: new Date(frontmatter.date),
    };

    try {
      console.log(`[BlogOnTopic] Attempting to save blog post with slug: ${slug}`);
      await prisma.blog.create({
        data: blogData,
      });
      console.log(`[BlogOnTopic] Successfully saved blog post: ${slug}`);
    } catch (error) {
      console.error(`[BlogOnTopic] Error saving blog post to database for slug: ${slug}`, error);
      throw error;
    }
  }
);
