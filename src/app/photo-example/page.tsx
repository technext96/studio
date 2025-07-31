
import { FadeIn } from '@/components/ui/fade-in';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Photo Example',
  description: 'An example of how to add a photo to the website.',
};

export default function PhotoExamplePage() {
  return (
    <div className="w-full py-16 md:py-24 lg:py-28">
      <div className="px-8 md:px-12">
        <FadeIn className="space-y-6 max-w-4xl mx-auto">
          <h1 className="text-4xl font-headline font-bold text-primary">How to Add a Picture</h1>
          <p className="text-foreground/80 text-lg">
            This page demonstrates how to add an image to your website using the `next/image` component. This component is the best practice for Next.js projects because it automatically optimizes images for performance, handles different screen sizes, and prevents layout shifts.
          </p>

          <div className="prose prose-invert max-w-none prose-pre:bg-secondary/50 prose-pre:border prose-pre:border-border prose-code:text-foreground">
            <h2 className="font-headline text-2xl text-primary">The Image Component</h2>
            <p className="text-lg text-foreground/80">
              Here is an example of an image added with the `next/image` component. We're using a placeholder image from `https://placehold.co`.
            </p>
            
            <div className="my-8 p-4 border border-primary/20 rounded-lg glow-effect">
                 <Image
                    src="https://placehold.co/800x450.png"
                    data-ai-hint="developer working computer"
                    width={800}
                    height={450}
                    alt="A placeholder image showing a developer at a computer."
                    className="rounded-md w-full"
                />
            </div>

            <h2 className="font-headline text-2xl text-primary">Code Example</h2>
            <p className="text-lg text-foreground/80">
              Below is the code used to display the image above. Notice the key attributes:
            </p>
            <ul>
              <li><code className='text-base'>src</code>: The path or URL to your image.</li>
              <li><code className='text-base'>width</code>: The original width of the image in pixels.</li>
              <li><code className='text-base'>height</code>: The original height of the image in pixels.</li>
              <li><code className='text-base'>alt</code>: A description of the image for accessibility and SEO. This is very important!</li>
            </ul>

            <pre>
              <code>
{`import Image from 'next/image';

<Image
    src="https://placehold.co/800x450.png"
    data-ai-hint="developer working computer"
    width={800}
    height={450}
    alt="A placeholder image showing a developer at a computer."
    className="rounded-md w-full"
/>`}
              </code>
            </pre>
            
            <h2 className="font-headline text-2xl text-primary">Where to Store Images</h2>
             <p className="text-lg text-foreground/80">You have two main options for storing your images:</p>
             <ol>
                <li><strong>Local Images:</strong> Place your image files inside the <code className='text-base'>public</code> folder at the root of your project. You can then reference them directly, for example: `src="/my-image.png"`.</li>
                <li><strong>Remote Images:</strong> Use images hosted on another server, like we did in the example. For security, you must tell Next.js which domains you will be using for images. This is done in the `next.config.ts` file, which is already configured for `placehold.co`.</li>
            </ol>
          </div>

        </FadeIn>
      </div>
    </div>
  );
}
