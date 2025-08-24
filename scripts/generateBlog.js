// This script is designed to be run from the command line to generate a blog post on a specific topic.
// Usage: node scripts/generateBlog.js "Your Blog Post Topic"

// Dynamically import the ESM module
async function run() {
  try {
    const { generateBlogOnTopic } = await import('../src/ai/flows/generate-blog-on-topic-flow.ts');

    const topic = process.argv[2];

    if (!topic) {
      console.error('Error: Please provide a topic as a command-line argument.');
      console.log('Usage: node scripts/generateBlog.js "Your Blog Post Topic"');
      process.exit(1);
    }

    console.log(`Starting blog generation for topic: "${topic}"...`);
    await generateBlogOnTopic(topic);
    console.log('Blog generation process completed successfully!');
  } catch (error) {
    console.error('An error occurred during blog generation:', error);
    process.exit(1);
  }
}

run();
