const { GoogleGenerativeAI } = require("@google/generative-ai");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function generateBlog(topic) {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

  const prompt = `Write a detailed blog post about "${topic}".
  Make it at least 600 words, with headings and subheadings.`;

  const result = await model.generateContent(prompt);
  const text = result.response.text();

  // Save to Neon via Prisma
  const post = await prisma.post.create({
    data: {
      title: topic,
      content: text,
    },
  });

  console.log("✅ Blog saved to database:", post);
  await prisma.$disconnect();
}

// Run with: node scripts/generateBlog.js "AI in Education"
const topic = process.argv[2] || "Default Blog Topic";
generateBlog(topic);
