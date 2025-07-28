'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { generateVisionDocument, VisionDocumentOutput } from '@/ai/flows/vision-document-flow';
import { Loader2, Zap, User, Target, ListChecks, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function VisionDocumentGenerator() {
  const [idea, setIdea] = useState('');
  const [visionDocument, setVisionDocument] = useState<VisionDocumentOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!idea) {
      setError('Please enter your idea.');
      return;
    }
    setIsLoading(true);
    setError(null);
    setVisionDocument(null);

    try {
      const result = await generateVisionDocument({ idea });
      setVisionDocument(result);
    } catch (err) {
      setError('Failed to generate vision document. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="bg-card/50 backdrop-blur-sm border-primary/20 shadow-[0_0_20px_theme(colors.primary/0.2)]">
        <form onSubmit={handleSubmit}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-headline">
              <Zap className="text-primary"/>
              Let's Build Your Vision
            </CardTitle>
            <CardDescription>
              Describe your product or service idea, and our AI will help you flesh it out.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Textarea
              placeholder="e.g., An app that uses AI to create personalized travel itineraries based on user preferences and budget."
              value={idea}
              onChange={(e) => setIdea(e.target.value)}
              rows={4}
              className="bg-background/50"
              disabled={isLoading}
            />
            {error && <p className="text-destructive text-sm mt-2">{error}</p>}
          </CardContent>
          <CardFooter>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                'Generate Document'
              )}
            </Button>
          </CardFooter>
        </form>
      </Card>

      {visionDocument && (
        <Card className="mt-8 bg-card/50 backdrop-blur-sm border-primary/10 animate-fade-in-up">
          <CardHeader>
            <CardTitle className="text-primary font-headline flex items-center gap-2">
                <Sparkles /> {visionDocument.productName}
            </CardTitle>
            <CardDescription>{visionDocument.tagline}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
                <h3 className="font-semibold text-lg flex items-center gap-2"><ListChecks /> Summary</h3>
                <p className="text-foreground/80 mt-2">{visionDocument.summary}</p>
            </div>
            <div>
                <h3 className="font-semibold text-lg flex items-center gap-2"><User /> Target Audience</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                    {visionDocument.targetAudience.map((audience, i) => <Badge variant="secondary" key={i}>{audience}</Badge>)}
                </div>
            </div>
            <div>
                <h3 className="font-semibold text-lg flex items-center gap-2"><Target /> Problems to Solve</h3>
                <ul className="list-disc list-inside space-y-1 mt-2 text-foreground/80">
                    {visionDocument.problemsToSolve.map((problem, i) => <li key={i}>{problem}</li>)}
                </ul>
            </div>
             <div>
                <h3 className="font-semibold text-lg flex items-center gap-2"><ListChecks /> Core Features</h3>
                <div className="space-y-2 mt-2">
                    {visionDocument.coreFeatures.map((feature, i) => (
                        <div key={i} className="p-3 bg-secondary/30 rounded-md">
                            <p className="font-semibold">{feature.name}</p>
                            <p className="text-foreground/80 text-sm">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
