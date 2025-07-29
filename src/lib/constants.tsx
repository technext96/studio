import { Code, Smartphone, Cloud, Bot, BrainCircuit, PencilRuler, Zap, Users, ShieldCheck, ShoppingCart, BookOpen, Building, HeartPulse, Factory, Fuel, Shield, Plane, GraduationCap, Clapperboard, Home, Phone, Briefcase, Handshake, Cog, Group, Newspaper, Lightbulb, Rocket, Video } from 'lucide-react';

export const navLinks = [
    { 
        title: "Services",
        href: "/services",
        description: "Explore our comprehensive technology solutions.",
        items: [
            { title: "AI/ML Services", href: "/services/ai-ml", icon: <BrainCircuit className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-110" />, description: "Unlock the power of Artificial Intelligence." },
            { title: "Intelligent Automation", href: "/services/automation", icon: <Cog className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-110" />, description: "Streamline your business processes." },
            { title: "Offshore Software Development", href: "/services/offshore", icon: <Group className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-110" />, description: "Build your dream team with us." },
            { title: "Custom Software Development", href: "/services/custom-software", icon: <Code className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-110" />, description: "Tailored solutions for your unique needs." },
            { title: "DevOps", href: "/services/devops", icon: <Cloud className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-110" />, description: "Accelerate your development lifecycle." },
            { title: "Marketing Services", href: "/services/marketing", icon: <Zap className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-110" />, description: "Grow your business with our expertise." },
        ]
    },
    {
        title: "Industries",
        href: "/industries",
        description: "Driving success across various sectors.",
        items: [
            { title: "Fintech", href: "/industries/fintech", icon: <ShieldCheck className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-110" />, description: "Secure and innovative financial solutions." },
            { title: "Logistics", href: "/industries/logistics", icon: <ShoppingCart className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-110" />, description: "Optimizing supply chain management." },
            { title: "Healthcare", href: "/industries/healthcare", icon: <HeartPulse className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-110" />, description: "Transforming patient care with technology." },
            { title: "Manufacturing", href: "/industries/manufacturing", icon: <Factory className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-110" />, description: "Enhancing production and efficiency." },
            { title: "Retail & eCommerce", href: "/industries/ecommerce", icon: <ShoppingCart className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-110" />, description: "Creating seamless shopping experiences." },
            { title: "Education", href: "/industries/education", icon: <GraduationCap className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-110" />, description: "Empowering learning with AI." },
        ]
    },
    {
        title: "Portfolio",
        href: "/portfolio",
        description: "Our success stories and client achievements.",
    },
    {
        title: "Resources",
        href: "/blog",
        description: "Insights and knowledge from our experts.",
        items: [
             { title: "Blog", href: "/blog", icon: <Newspaper className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-110" />, description: "Expert articles on AI, RPA, and custom software development." },
             { title: "Courses", href: "/blog", icon: <Video className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-110" />, description: "Upskill your team with our hands-on tech courses and workshops." },
             { title: "Tech Insights", href: "/blog", icon: <Lightbulb className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-110" />, description: "Gain expert analysis on AI trends and actionable strategies." },
             { title: "Startup Chronicles", href: "/blog", icon: <Rocket className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-110" />, description: "Discover valuable ideas and tips for startup success." },
        ]
    },
    {
        title: "Company",
        href: "/about",
        description: "Learn more about our team and vision.",
        items: [
            { title: "About Us", href: "/about", icon: <Users className="h-5 w-5 text-primary" />, description: "Our vision, mission, and values." },
            { title: "Careers", href: "/careers", icon: <Briefcase className="h-5 w-5 text-primary" />, description: "Join our team of innovators." },
            { title: "Contact Us", href: "/contact", icon: <Phone className="h-5 w-5 text-primary" />, description: "Let's start a conversation." },
        ]
    },
];


export const services = [
  {
    slug: 'ai-ml',
    title: 'AI/ML Services',
    categoryFilter: 'AI',
    description: 'Custom AI and Machine Learning solutions to automate processes, gain insights, and drive business growth.',
    longDescription: "Leverage the power of Artificial Intelligence and Machine Learning to build intelligent applications, automate complex processes, and extract valuable insights from your data. Our experts deliver end-to-end AI solutions, from strategy to implementation.",
    icon: <BrainCircuit className="w-10 h-10" />,
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'artificial intelligence brain',
    subServices: [
        "AI Strategy & Consultation", "AI Development Services", "AI Chatbot Development",
        "Custom RAG Development", "Generative AI", "Secure & Private LLM Implementation",
        "Machine Learning Development", "MLops"
    ]
  },
  {
    slug: 'automation',
    title: 'Intelligent Automation',
    categoryFilter: 'Automation',
    description: 'Streamline operations and boost efficiency with our Robotic Process Automation (RPA) consulting and integration.',
    longDescription: "Unlock new levels of efficiency by automating repetitive tasks and streamlining workflows. We provide expert RPA consulting and integration services using leading platforms to help you reduce costs and improve accuracy.",
    icon: <Cog className="w-10 h-10" />,
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'automation gears process',
    subServices: ["RPA Consulting & Integration", "HubSpot Automation", "Zoho Automation", "UIpath Development", "Opensource RPA Solutions"]
  },
  {
    slug: 'offshore',
    title: 'Offshore Software Development',
    categoryFilter: 'Talent',
    description: 'Scale your team with our top-tier offshore developers and dedicated development teams.',
    longDescription: "Augment your team with our pre-vetted, elite tech professionals. We provide dedicated development teams and individual experts to help you accelerate your projects and scale your operations without the overhead of traditional hiring.",
    icon: <Group className="w-10 h-10" />,
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'global team collaboration',
    subServices: ["Hire Developers", "Offshore Development Services", "Dedicated Development Team"]
  },
  {
    slug: 'custom-software',
    title: 'Custom Software Development',
    categoryFilter: 'Web',
    description: 'Bespoke web, mobile, and MVP solutions built to meet your specific business objectives.',
    longDescription: "We build tailored software solutions from the ground up to meet your unique business challenges. From rapid MVP development to scalable enterprise applications, our custom solutions are designed for performance, scalability, and success.",
    icon: <Code className="w-10 h-10" />,
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'web development code screen',
    subServices: ["MVP Development & Consulting", "Custom Web App Development", "Mobile App Development", "Job Portal Development"]
  },
  {
    slug: 'devops',
    title: 'DevOps',
    categoryFilter: 'DevOps',
    description: 'Accelerate your software delivery lifecycle with our comprehensive DevOps services.',
    longDescription: "Our DevOps services bridge the gap between development and operations, enabling faster, more reliable software delivery. We implement CI/CD pipelines, containerization, and cloud automation to streamline your entire development lifecycle.",
    icon: <Cloud className="w-10 h-10" />,
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'cloud infrastructure devops',
    subServices: ["CI/CD Pipeline Implementation", "Infrastructure as Code (IaC)", "Containerization (Docker, Kubernetes)", "Cloud Automation", "Monitoring & Logging"]
  },
  {
    slug: 'marketing',
    title: 'Marketing Services',
    categoryFilter: 'Marketing',
    description: 'Data-driven digital marketing and automation services to fuel your growth.',
    longDescription: "Power your growth with our expert marketing services. We specialize in marketing automation, HubSpot services, and data-driven digital marketing campaigns to help you attract, engage, and delight your customers.",
    icon: <Zap className="w-10 h-10" />,
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'digital marketing analytics',
    subServices: ["HubSpot Services", "Marketing Automation", "Digital Marketing Strategy"]
  },
];

export const industries = [
    { slug: "fintech", title: "Fintech", icon: <ShieldCheck/>, description: "Secure, compliant, and innovative solutions for the financial industry.", imageUrl: 'https://placehold.co/600x400.png', imageHint: 'financial technology dashboard' },
    { slug: "logistics", title: "Logistics", icon: <ShoppingCart/>, description: "Optimizing supply chains with real-time tracking and predictive analytics.", imageUrl: 'https://placehold.co/600x400.png', imageHint: 'logistics cargo ship' },
    { slug: "automotive", title: "Automotive", icon: <Building/>, description: "Connected car platforms, fleet management, and dealer software.", imageUrl: 'https://placehold.co/600x400.png', imageHint: 'automotive technology car' },
    { slug: "healthcare", title: "Healthcare", icon: <HeartPulse/>, description: "HIPAA-compliant software, telemedicine platforms, and medical AI.", imageUrl: 'https://placehold.co/600x400.png', imageHint: 'healthcare medical technology' },
    { slug: "manufacturing", title: "Manufacturing", icon: <Factory/>, description: "IIoT solutions, process automation, and smart factory management.", imageUrl: 'https://placehold.co/600x400.png', imageHint: 'manufacturing factory robot' },
    { slug: "oil-gas", title: "Oil and Gas", icon: <Fuel/>, description: "Digital twin solutions, predictive maintenance, and energy trading platforms.", imageUrl: 'https://placehold.co/600x400.png', imageHint: 'oil rig platform' },
    { slug: "insurance", title: "Insurance", icon: <Shield/>, description: "Insurtech platforms, policy management systems, and AI-powered claims processing.", imageUrl: 'https://placehold.co/600x400.png', imageHint: 'insurance protection concept' },
    { slug: "travel", title: "Travel", icon: <Plane/>, description: "Booking engines, travel management software, and personalized itinerary planners.", imageUrl: 'https://placehold.co/600x400.png', imageHint: 'travel airplane sunset' },
    { slug: "cybersecurity", title: "Cybersecurity", icon: <ShieldCheck/>, description: "Threat detection platforms, security automation, and secure software development.", imageUrl: 'https://placehold.co/600x400.png', imageHint: 'cybersecurity lock code' },
    { slug: "ecommerce", title: "Retail & eCommerce", icon: <ShoppingCart/>, description: "Custom e-commerce platforms, recommendation engines, and personalized shopping experiences.", imageUrl: 'https://placehold.co/600x400.png', imageHint: 'ecommerce online shopping' },
    { slug: "education", title: "Education", icon: <BookOpen/>, description: "E-learning platforms, student information systems, and AI-powered tutoring.", imageUrl: 'https://placehold.co/600x400.png', imageHint: 'education online learning' },
    { slug: "media-entertainment", title: "Media & Entertainment", icon: <Clapperboard/>, description: "Streaming platforms, content management systems, and royalty management software.", imageUrl: 'https://placehold.co/600x400.png', imageHint: 'media entertainment cinema' },
    { slug: "real-estate", title: "Real Estate", icon: <Home/>, description: "Property management software, VR property tours, and real estate analytics.", imageUrl: 'https://placehold.co/600x400.png', imageHint: 'real estate modern house' },
    { slug: "telecom", title: "Telecommunication", icon: <Phone/>, description: "OSS/BSS systems, network management tools, and customer self-service portals.", imageUrl: 'https://placehold.co/600x400.png', imageHint: 'telecommunication tower' },
    { slug: "government", title: "Government", icon: <Building/>, description: "Digital transformation for public services, secure data management, and citizen engagement platforms.", imageUrl: 'https://placehold.co/600x400.png', imageHint: 'government building architecture' },
];

export const portfolio = [
  {
    slug: 'personalized-learning-ai',
    title: 'Personalized Learning with AI',
    category: 'Education & AI',
    excerpt: 'Empowering students through AI-driven educational experiences that adapt to individual learning styles.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'student learning online',
    details: {
        client: "EduVation",
        timeline: "6 Months",
        industry: "Education"
    },
    challenge: "Traditional education often uses a one-size-fits-all approach. EduVation wanted to create a platform that could personalize learning paths for students, improving engagement and outcomes.",
    solution: "We developed an AI-powered e-learning platform that analyzes student performance in real-time. It creates adaptive learning paths, suggests relevant content, and identifies areas where students need help, providing a truly personalized educational journey.",
  },
  {
    slug: 'medical-radiology-chatbot',
    title: 'Medical Radiology Chatbot',
    category: 'Healthcare & AI',
    excerpt: 'Transforming Radiology Patient Care with a real-time support chatbot that provides instant, accurate information.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'medical chatbot interface',
     details: {
        client: "MedScan AI",
        timeline: "5 Months",
        industry: "Healthcare"
    },
    challenge: "Radiology departments face high volumes of patient inquiries about procedures, preparations, and results, leading to administrative overhead. Patients often experience anxiety due to long waiting times for information.",
    solution: "We built a HIPAA-compliant, AI-powered chatbot that provides patients with instant, 24/7 support. The chatbot can answer questions about different radiology procedures, explain preparation instructions, and provide non-diagnostic result status, all in a secure and empathetic manner.",
  },
  {
    slug: 'ai-shopping-cooking',
    title: 'AI-Powered Shopping and Cooking',
    category: 'Retail & AI',
    excerpt: 'Enhancing grocery shopping experiences with an AI assistant for personalized recommendations and recipe generation.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'cooking ingredients kitchen',
     details: {
        client: "FreshPicks",
        timeline: "4 Months",
        industry: "Retail & eCommerce"
    },
    challenge: "Grocery shoppers often struggle with meal planning and finding recipes that match their dietary preferences and what's in their pantry. This leads to food waste and a frustrating shopping experience.",
    solution: "We developed an AI-powered mobile app that acts as a personal shopping and cooking assistant. Users can input their dietary needs and available ingredients, and the app generates personalized recipes, creates a shopping list, and even suggests alternatives for items, optimizing the entire meal-planning process.",
  },
  {
    slug: 'medical-insights-chatbot',
    title: 'Instant Medical Insights via AI Chatbot',
    category: 'Healthcare & AI',
    excerpt: 'Providing breast cancer patients with secure and evidence-based answers to their most pressing questions.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'doctor patient consultation',
     details: {
        client: "Hope & Heal Foundation",
        timeline: "7 Months",
        industry: "Healthcare"
    },
    challenge: "Breast cancer patients and their families are often overwhelmed with information and have urgent questions that cannot wait for the next doctor's appointment. They need a reliable source of information that is available anytime.",
    solution: "In partnership with oncologists, we developed a specialized AI chatbot trained on a vast corpus of peer-reviewed medical literature. The chatbot provides secure, evidence-based, and empathetic answers to non-diagnostic questions about breast cancer, treatments, side effects, and support resources.",
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
