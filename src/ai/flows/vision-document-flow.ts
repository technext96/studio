'use server';
/**
 * @fileOverview A vision document generator AI agent.
 *
 * - generateVisionDocument - A function that handles the vision document generation process.
 * - VisionDocumentInput - The input type for the generateVisionDocument function.
 * - VisionDocumentOutput - The return type for the generateVisionDocument function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const VisionDocumentInputSchema = z.object({
  idea: z.string().describe('The user\'s initial idea for a product or service.'),
});
export type VisionDocumentInput = z.infer<typeof VisionDocumentInputSchema>;

const VisionDocumentOutputSchema = z.object({
  productName: z.string().describe('A catchy and relevant name for the product.'),
  tagline: z.string().describe('A short, memorable tagline for the product.'),
  summary: z.string().describe('A one-paragraph summary of the product.'),
  targetAudience: z.array(z.string()).describe('A list of potential target audience segments.'),
  problemsToSolve: z.array(z.string()).describe('A list of problems the product aims to solve for the target audience.'),
  coreFeatures: z.array(z.object({
    name: z.string().describe('The name of the feature.'),
    description: z.string().describe('A brief description of what the feature does.'),
  })).describe('A list of the main features of the product.'),
});
export type VisionDocumentOutput = z.infer<typeof VisionDocumentOutputSchema>;

export async function generateVisionDocument(input: VisionDocumentInput): Promise<VisionDocumentOutput> {
  return visionDocumentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'visionDocumentPrompt',
  input: { schema: VisionDocumentInputSchema },
  output: { schema: VisionDocumentOutputSchema },
  prompt: `You are an expert product strategist. A user will provide you with a business or product idea. Your task is to expand on this idea and generate a structured vision document.

Based on the user's idea, you need to generate a product name, a tagline, a summary, identify the target audience, list the key problems to solve, and outline the core features.

User Idea: {{{idea}}}`,
});

const visionDocumentFlow = ai.defineFlow(
  {
    name: 'visionDocumentFlow',
    inputSchema: VisionDocumentInputSchema,
    outputSchema: VisionDocumentOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    if (!output) {
        throw new Error("Failed to generate vision document.");
    }
    return output;
  }
);
