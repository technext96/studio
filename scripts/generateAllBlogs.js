// This script is designed to be run from the command line to generate multiple blog posts on specific topics.
// Usage: node scripts/generateAllBlogs.js

// Dynamically import the ESM module
async function run() {
  try {
    const { generateBlogOnTopic } = await import('../src/ai/flows/generate-blog-on-topic-flow.ts');

    const topics = [
        "White-Label Rideshare App: A Comprehensive Guide",
        "How to Launch an Uber Clone App in 2025",
        "White-Label vs. Custom Development for Rideshare Apps",
        "Top 10 Must-Have Features for a Carpooling App in 2025",
        "The Future of Urban Mobility: The Rise of White-Label Rideshare Solutions",
        "Maximizing ROI in the Ride-Hailing Business: A Strategic Guide",
        "The Business Case for Ethical AI",
        "Balancing Data Privacy and Analytics for Business Growth",
        "The SaaS Scaling Playbook: From Startup to Enterprise",
        "A Practical Guide to Intelligent Automation in Business",
        "A Practical Guide to Implementing DevOps in Your Organization",
        "The Ultimate Guide to Offshore Development for Tech Companies",
        "Essentials of Modern E-commerce Technology Stacks",
        "A Primer on Cybersecurity for Modern Businesses",
        "Top 5 Trends Shaping the Future of Fintech",
        "The Future of Healthcare Software: Trends and Predictions",
        "A Deep Dive into Custom Software Development"
    ];

    console.log(`Starting bulk blog generation for ${topics.length} topics...`);

    for (const topic of topics) {
        try {
            console.log(`\n--- Generating blog for topic: "${topic}" ---`);
            await generateBlogOnTopic(topic);
            console.log(`--- Successfully generated blog for: "${topic}" ---`);
            // Add a small delay to avoid hitting API rate limits
            await new Promise(resolve => setTimeout(resolve, 5000));
        } catch (error) {
            console.error(`--- Failed to generate blog for topic: "${topic}" ---`, error);
        }
    }

    console.log('\nBulk blog generation process completed!');
  } catch (error) {
    console.error('An error occurred during the bulk blog generation process:', error);
    process.exit(1);
  }
}

run();
