import { Code, Smartphone, Cloud, Bot, BarChart } from 'lucide-react';

export const services = [
  {
    slug: 'web-development',
    title: 'Web Development',
    description: 'Creating high-performance, scalable, and secure web applications tailored to your business needs.',
    icon: <Code className="w-10 h-10" />,
  },
  {
    slug: 'mobile-apps',
    title: 'Mobile App Development',
    description: 'Building intuitive and engaging native and cross-platform mobile apps for iOS and Android.',
    icon: <Smartphone className="w-10 h-10" />,
  },
  {
    slug: 'cloud-solutions',
    title: 'Cloud Solutions',
    description: 'Leveraging cloud platforms like AWS, Azure, and Google Cloud for scalable and resilient infrastructure.',
    icon: <Cloud className="w-10 h-10" />,
  },
  {
    slug: 'ai-integration',
    title: 'AI & ML Integration',
    description: 'Integrating artificial intelligence and machine learning to create smarter, more efficient applications.',
    icon: <Bot className="w-10 h-10" />,
  },
];

export const portfolio = [
  {
    slug: 'ecommerce-platform',
    title: 'E-commerce Platform',
    category: 'Web Development',
    excerpt: 'A scalable e-commerce solution that increased client sales by 40% through an optimized user experience.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'online shopping',
  },
  {
    slug: 'logistics-dashboard',
    title: 'Logistics Dashboard',
    category: 'Enterprise Software',
    excerpt: 'A real-time data visualization tool for a major logistics firm, improving operational efficiency by 25%.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'data dashboard',
  },
  {
    slug: 'fitness-mobile-app',
    title: 'Fitness Mobile App',
    category: 'Mobile App',
    excerpt: 'A cross-platform mobile app with over 100,000 downloads, featuring personalized workout plans and progress tracking.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'mobile application',
  },
   {
    slug: 'saas-analytics',
    title: 'SaaS Analytics Platform',
    category: 'Cloud Solutions',
    excerpt: 'A multi-tenant SaaS platform providing deep business intelligence insights for marketing agencies.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'analytics charts',
  },
];

export const valuePropositions = [
    { title: 'Agile Methodology', description: 'We adapt to changing requirements and deliver value incrementally, keeping you in the loop at every stage.' },
    { title: 'Quality First', description: 'Our rigorous testing and QA processes ensure your product is reliable, secure, and bug-free.' },
    { title: 'Transparent Communication', description: 'We believe in open and honest communication, providing regular updates and clear roadmaps.' },
];

export const blogPosts = [
  {
    slug: 'quantum-computing-explained',
    title: 'Quantum Computing: The Next Frontier',
    category: 'Future Tech',
    author: 'Dr. Evelyn Reed',
    date: '2024-07-22',
    excerpt: 'A beginner-friendly dive into the mind-bending world of quantum computing and its potential to revolutionize industries.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'quantum circuit',
  },
  {
    slug: 'building-with-gen-ai',
    title: 'Practical Generative AI: From Prompts to Products',
    category: 'AI/ML',
    author: 'Jian Li',
    date: '2024-07-15',
    excerpt: 'Learn how to leverage large language models to build real-world applications that are both smart and scalable.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'neural network',
  },
  {
    slug: 'the-rise-of-spatial-computing',
    title: 'The Rise of Spatial Computing',
    category: 'Web Development',
    author: 'Alex Chen',
    date: '2024-07-05',
    excerpt: 'Exploring how WebXR and new hardware are merging the digital and physical worlds, creating new immersive experiences.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'augmented reality',
  },
];
