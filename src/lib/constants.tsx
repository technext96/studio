import { Code, Smartphone, Cloud, Bot, BrainCircuit, PencilRuler, Zap } from 'lucide-react';

const webDevProcess = [
    { title: "Discovery & Strategy", description: "We start by understanding your goals, audience, and market to define a clear roadmap for success." },
    { title: "UI/UX Design", description: "Our designers create intuitive and beautiful interfaces focused on delivering a superior user experience."},
    { title: "Agile Development", description: "We build your application in iterative sprints, allowing for flexibility and regular feedback."},
    { title: "Quality Assurance", description: "Rigorous testing is performed throughout the development cycle to ensure a bug-free, high-quality product."},
    { title: "Deployment & Support", description: "We handle the deployment process and offer ongoing support and maintenance to keep your application running smoothly."}
];

export const services = [
  {
    slug: 'web-development',
    title: 'Web Development',
    categoryFilter: 'Web',
    description: 'Creating high-performance, scalable, and secure web applications tailored to your business needs.',
    longDescription: "We build high-performance, scalable, and secure web applications that drive business growth. From marketing sites to complex enterprise platforms, our solutions are engineered for excellence.",
    icon: <Code className="w-10 h-10" />,
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'web development code screen',
    process: webDevProcess,
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "GraphQL", "PostgreSQL", "Docker", "Vercel"],
  },
  {
    slug: 'mobile-apps',
    title: 'Mobile App Development',
    categoryFilter: 'Mobile',
    description: 'Building intuitive and engaging native and cross-platform mobile apps for iOS and Android.',
    longDescription: 'We craft beautiful, high-performing mobile applications for both iOS and Android. Our team specializes in creating engaging user experiences that keep your audience coming back.',
    icon: <Smartphone className="w-10 h-10" />,
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'mobile app design interface',
    process: webDevProcess,
    technologies: ["React Native", "Swift", "Kotlin", "Flutter", "Firebase", "GraphQL"],
  },
  {
    slug: 'cloud-solutions',
    title: 'Cloud Solutions',
    categoryFilter: 'Cloud',
    description: 'Leveraging cloud platforms for scalable and resilient infrastructure.',
    longDescription: 'Unlock the power of the cloud with our expert services. We design and manage scalable, secure, and cost-efficient cloud infrastructures on platforms like AWS, Azure, and Google Cloud.',
    icon: <Cloud className="w-10 h-10" />,
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'cloud infrastructure network',
    process: webDevProcess,
    technologies: ["AWS", "Azure", "Google Cloud", "Kubernetes", "Docker", "Terraform", "Serverless"],
  },
  {
    slug: 'ai-integration',
    title: 'AI & ML Integration',
    categoryFilter: 'AI',
    description: 'Integrating AI and machine learning to create smarter applications.',
    longDescription: "Infuse your applications with the power of artificial intelligence. We specialize in integrating machine learning models, natural language processing, and computer vision to create intelligent, automated systems.",
    icon: <Bot className="w-10 h-10" />,
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'artificial intelligence brain',
    process: webDevProcess,
    technologies: ["Python", "TensorFlow", "PyTorch", "Genkit", "LangChain", "OpenAI API", "Hugging Face"],
  },
  {
    slug: 'generative-ai-solutions',
    title: 'Generative AI Solutions',
    categoryFilter: 'AI',
    description: 'Building custom generative AI applications for content creation, data analysis, and more.',
    longDescription: 'Harness the creative power of generative AI. We develop custom solutions using models like GPT and DALL-E for automated content generation, sophisticated data analysis, and unique user interactions.',
    icon: <BrainCircuit className="w-10 h-10" />,
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'generative art abstract',
    process: webDevProcess,
    technologies: ["Genkit", "Next.js", "Vercel AI SDK", "GPT-4", "Gemini", "Replicate"],
  },
  {
    slug: 'mvp-prototyping',
    title: 'MVP & Prototyping',
    categoryFilter: 'Web',
    description: 'Rapidly building Minimum Viable Products to validate your business ideas quickly and efficiently.',
    longDescription: 'Turn your idea into a tangible product, fast. Our MVP and prototyping service is designed to quickly build and launch a core version of your product, enabling you to gather user feedback and validate your market fit.',
    icon: <PencilRuler className="w-10 h-10" />,
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'startup blueprint sketch',
    process: webDevProcess,
    technologies: ["Next.js", "Firebase", "Supabase", "Vercel", "Figma", "ShadCN UI"],
  },
];

export const portfolio = [
  {
    slug: 'ecommerce-platform',
    title: 'Next-Gen E-commerce Platform',
    category: 'Web Development',
    excerpt: 'A scalable e-commerce solution that boosted sales by 40% through an optimized user experience.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'fashion online store',
    details: {
        client: "FashionForward Inc.",
        timeline: "4 Months",
        industry: "Retail & E-commerce"
    },
    challenge: "FashionForward Inc., a rising star in online retail, was hampered by an outdated, slow, and non-responsive e-commerce site. The platform suffered from high cart abandonment rates, poor mobile experience, and difficulty in managing inventory, which directly impacted sales and customer satisfaction.",
    solution: "Code Harbor was tasked with a complete overhaul. We designed and developed a new e-commerce platform from the ground up using a modern tech stack centered on Next.js for superior performance and SEO. Our solution focused on three key areas: user experience, performance, and manageability.",
    keyFeatures: [
      "Intuitive, mobile-first UX/UI",
      "Sub-second page loads via SSR & ISR",
      "Frictionless Stripe checkout integration",
      "Custom admin dashboard for inventory and order management",
      "Advanced product search and filtering",
      "Automated email marketing flows"
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Stripe", "PostgreSQL", "Vercel"],
    results: {
        summary: "The new platform was a resounding success, delivering tangible business results within the first quarter of launch. The combination of a stellar user experience and lightning-fast performance created a frictionless shopping environment.",
        metrics: [
            { value: "+40%", label: "Increase in Sales" },
            { value: "-60%", label: "Page Load Time" },
            { value: "+75%", label: "Mobile Conversion Rate" },
        ]
    }
  },
  {
    slug: 'logistics-dashboard',
    title: 'AI-Powered Logistics Dashboard',
    category: 'Enterprise Software & AI',
    excerpt: 'A real-time data visualization tool for a major logistics firm, improving operational efficiency by 25%.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'logistics dashboard charts',
    details: {
        client: "Global-Trans",
        timeline: "6 Months",
        industry: "Logistics & Supply Chain"
    },
    challenge: "Global-Trans faced significant challenges with delivery route optimization, predictive maintenance, and real-time shipment tracking. Their existing system was fragmented and unable to provide actionable insights from their vast operational data.",
    solution: "We developed a centralized, AI-powered dashboard that unifies data streams and provides predictive analytics. The system uses machine learning algorithms to forecast demand, optimize routes in real-time, and predict vehicle maintenance needs, preventing costly downtime.",
    keyFeatures: [
      "Real-time GPS tracking of all shipments",
      "Predictive analytics for delivery time estimation",
      "AI-driven route optimization to reduce fuel costs",
      "Automated alerts for potential delays",
      "Vehicle maintenance prediction module",
      "Comprehensive performance reporting"
    ],
    technologies: ["Python", "React", "Next.js", "Google Maps API", "TensorFlow", "Kubernetes", "AWS"],
    results: {
        summary: "The dashboard revolutionized Global-Trans's operations, leading to significant cost savings and improved customer satisfaction. The ability to make data-driven decisions has given them a substantial competitive edge.",
        metrics: [
            { value: "+25%", label: "Operational Efficiency" },
            { value: "-15%", label: "Fuel Costs" },
            { value: "-30%", label: "Delivery Delays" },
        ]
    }
  },
  {
    slug: 'fitness-mobile-app',
    title: 'Personalized Fitness Mobile App',
    category: 'Mobile App Development',
    excerpt: 'A cross-platform mobile app with over 100,000 downloads, featuring personalized workout plans and progress tracking.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'fitness app interface',
    details: {
        client: "FitLife",
        timeline: "5 Months",
        industry: "Health & Fitness"
    },
    challenge: "FitLife aimed to enter the crowded fitness app market with a product that offered true personalization. They needed an app that could adapt to a user's fitness level, goals, and available equipment, providing a unique experience for everyone.",
    solution: "We built a sleek, cross-platform mobile app using React Native. The core of the app is a proprietary algorithm that generates dynamic workout plans. We also integrated social features, progress tracking, and gamification elements to keep users motivated and engaged.",
    keyFeatures: [
      "AI-based personalized workout generation",
      "Video demonstrations for all exercises",
      "Progress and body measurement tracking",
      "Social challenges and leaderboards",
      "Wearable device integration (Apple Watch, Fitbit)",
      "Diet and nutrition suggestions"
    ],
    technologies: ["React Native", "Firebase", "Node.js", "PostgreSQL", "Google Fit API", "Apple HealthKit"],
    results: {
        summary: "The app quickly gained traction, achieving over 100,000 downloads in its first six months. User engagement was exceptionally high, with an average of 4 sessions per week per active user.",
        metrics: [
            { value: "100k+", label: "Downloads" },
            { value: "4.8/5", label: "App Store Rating" },
            { value: "+50%", label: "User Retention" },
        ]
    }
  },
   {
    slug: 'saas-analytics',
    title: 'Marketing SaaS Analytics Platform',
    category: 'Cloud Solutions & Web Development',
    excerpt: 'A multi-tenant SaaS platform providing deep business intelligence insights for marketing agencies.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'saas dashboard analytics',
    details: {
        client: "MarketMinds",
        timeline: "8 Months",
        industry: "Marketing & Advertising"
    },
    challenge: "Marketing agencies struggle to consolidate campaign data from various platforms (Google Ads, Facebook, etc.). MarketMinds needed a unified platform that could aggregate this data and provide powerful, easy-to-understand analytics for their clients.",
    solution: "We architected and built a scalable multi-tenant SaaS platform on AWS. The application features a robust data pipeline that ingests data from multiple third-party APIs. The front-end, built with Next.js and Recharts, offers customizable dashboards and automated reporting.",
    keyFeatures: [
      "Automated data aggregation from 10+ marketing platforms",
      "Customizable, drag-and-drop dashboards",
      "Automated PDF report generation and scheduling",
      "Multi-tenant architecture with role-based access control",
      "Performance anomaly detection alerts",
      "White-labeling capabilities for agencies"
    ],
    technologies: ["Next.js", "Node.js", "Python", "AWS Lambda", "PostgreSQL", "Redis", "Docker"],
    results: {
        summary: "The platform has become an indispensable tool for marketing agencies, enabling them to save time on reporting and provide greater value to their clients. It currently serves over 200 agencies.",
        metrics: [
            { value: "200+", label: "Agency Customers" },
            { value: "90%", label: "Time Saved on Reporting" },
            { value: "$2M", label: "ARR in First Year" },
        ]
    }
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
