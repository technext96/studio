
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
        title: "Our Work",
        href: "/portfolio",
        description: "Our success stories and client achievements.",
        items: [
             { title: "AI On-Demand Learning Platform", href: "/portfolio/ai-on-demand-learning-platform", icon: <GraduationCap className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-110" />, description: "Overcoming Barriers to Traditional Coaching with AI-Powered On-Demand Learning." },
             { title: "Medical Radiology Chatbot", href: "/portfolio/medical-radiology-chatbot", icon: <Bot className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-110" />, description: "Transforming Radiology Patient Care with Real-time Support." },
             { title: "AI-Powered Shopping and Cooking", href: "/portfolio/ai-shopping-cooking", icon: <ShoppingCart className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-110" />, description: "Enhancing grocery experiences with AI for personalized recommendations." },
             { title: "Instant Medical Insights via AI Chatbot", href: "/portfolio/medical-insights-chatbot", icon: <HeartPulse className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-110" />, description: "Providing breast cancer patients with secure and evidence-based answers." },
        ]
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
            { title: "About Us", href: "/about", icon: <Users className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-110" />, description: "Our vision, mission, and values." },
            { title: "Careers", href: "/careers", icon: <Briefcase className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-110" />, description: "Join our team of innovators." },
            { title: "Contact Us", href: "/contact", icon: <Phone className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-110" />, description: "Let's start a conversation." },
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
    slug: 'ai-on-demand-learning-platform',
    title: 'AI-Powered On-Demand Learning Platform',
    category: 'On-demand eLearning & AI',
    excerpt: 'Overcoming Barriers to Traditional Coaching with AI-Powered On-Demand Learning.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'e-learning platform interface',
    details: {
        useCase: "AI Coaching tool for students",
        industry: "On-demand eLearning",
        headquarters: "Germany",
        product: "AI-Powered On-Demand Coaching Tool",
        results: "Personalized Learning Experience with Easy Access"
    },
    summary: "The AI-powered coaching tool helps students learn interactively while ensuring age-appropriate content through behavior analysis. It features an admin panel for teachers to register subjects and a student panel for AI-driven tutoring. To enhance accessibility, we developed PWA with a chat-based interface, personalized learning plans, multilingual support, and Stripe payment integration. This platform allows students to easily sign up, purchase subscriptions, and engage in adaptive learning.",
    solutions: {
        forStudents: [
            { title: "Easy Sign-Up & Profile Management", description: "Easily register or log in using email and password. Update your details, track your progress, and check your subscription status—all in one place." },
            { title: "Subscription Management", description: "Users can simply manage their subscription plans, obtain clear pricing details, and renew them." },
            { title: "Secure Payment Integration", description: "Integrated Stripe for seamless transactions. Students can purchase and use tokens for AI tutor interactions." },
            { title: "Subject-Specific Tutors", description: "The platform offers quick access to diverse AI tutors specializing in Math, Science, History, and many more subjects." },
            { title: "Interactive Chat System", description: "The platform features an interactive chat system for seamless learning. It also allows students to easily reference previous conversations through message threading." },
            { title: "Instant Q&A Sessions", description: "AI tutors offer instant feedback and real-time text-based answers. Students can also receive push notifications for new messages and updates." }
        ],
        forAdmins: [
            { title: "AI Tutor Setup & Customization", description: "Admins can create, edit, and manage AI tutor profiles, prompts, and subjects." },
            { title: "Specialized Instructions", description: "AI tutors can be configured with unique teaching styles, personality traits, and predefined responses." },
            { title: "User Controls", description: "Admins can easily view, edit, block, and unblock student accounts." },
            { title: "Performance Insights", description: "Track student engagement, AI tutor effectiveness, and subscription trends." },
            { title: "Report Generation", description: "Generate data-driven insights for platform optimization." }
        ]
    },
    usps: [
        { title: "Interactive Learning Environment", description: "Obtain real-time interactions, personalized recommendations, and customized learning paths tailored to each student's behavior." },
        { title: "24/7 AI Tutor Availability", description: "Access your learning and AI tutors anytime and from anywhere while ensuring that students receive guidance without time restrictions." },
        { title: "Cross-Platform Accessibility", description: "The PWA allows students to access the platform on any device, such as smartphones, tablets, or desktops, to ensure a seamless experience across all screen sizes." },
        { title: "Age-Appropriate Learning Content", description: "The platform intelligently analyzes student behavior and provides content tailored to their age group and educational level." },
        { title: "Career Guidance & Skill Development", description: "Get the career orientation tools that help students explore interests and potential career paths based on their interests and preferences." },
        { title: "Data Security & Privacy", description: "Your privacy is important; that's why the platform protects your child's data and ensures a secure learning environment." }
    ],
    techStack: ["Node.js", "OpenAI API", "Swift", "ChatGPT"],
    impacts: [
        { title: "Enhanced User Experience", description: "AI-driven tutoring offers an easy-to-use interface that improves the learning experience. It provides personalized learning paths and interactive features, making education more engaging and effective." },
        { title: "Greater User Retention", description: "The platform’s hyper-personalized coaching sessions are adapted to individual learning styles. This approach keeps students engaged and reduces dropout rates. As a result, long-term learning outcomes improve." },
        { title: "Cost & Effort Savings", description: "The platform’s process automation reduced the need for manual work, lessened administrative tasks, and lowered costs. This change allowed teachers to spend more time on teaching instead of repeating tasks." },
        { title: "Data Security Compliance", description: "The system has strong security measures to protect user data. It uses encrypted logins, stores data securely, and follows global privacy rules. This ensures that user information stays safe at all times." }
    ]
  },
  {
    slug: 'medical-radiology-chatbot',
    title: 'Medical Radiology Chatbot',
    category: 'Healthcare & AI',
    excerpt: 'Transforming Radiology Patient Care with a real-time support chatbot that provides instant, accurate information.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'medical chatbot interface',
    summary: "Radiology departments face high patient inquiries, leading to administrative overhead and patient anxiety. We built a HIPAA-compliant, AI-powered chatbot to provide instant, 24/7 support for questions about procedures, preparations, and result status in a secure manner.",
    details: {
        client: "MedScan AI",
        timeline: "5 Months",
        industry: "Healthcare",
        product: "AI-Powered Radiology Chatbot",
    },
    keyFeatures: [
        "24/7 Availability for Patient Queries",
        "HIPAA-Compliant and Secure",
        "Procedure and Preparation Information",
        "Non-Diagnostic Result Status Updates",
        "Multi-lingual Support",
        "Integration with Hospital Information Systems (HIS)"
    ],
    techStack: ["Python", "Dialogflow", "FHIR", "GCP"],
  },
  {
    slug: 'ai-shopping-cooking',
    title: 'AI-Powered Shopping and Cooking',
    category: 'Retail & AI',
    excerpt: 'Enhancing grocery shopping experiences with an AI assistant for personalized recommendations and recipe generation.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'cooking ingredients kitchen',
    summary: "To combat meal-planning fatigue and food waste, we developed an AI-powered mobile app that acts as a personal shopping and cooking assistant. Users get personalized recipes based on dietary needs and available ingredients, complete with an optimized shopping list.",
    details: {
        client: "FreshPicks",
        timeline: "4 Months",
        industry: "Retail & eCommerce",
        product: "AI Cooking & Shopping Assistant App"
    },
    keyFeatures: [
        "Personalized Recipe Generation",
        "Dietary Preference Filtering",
        "Pantry Inventory Management",
        "Automated Shopping List Creation",
        "Ingredient Substitution Suggestions",
        "Integration with Online Grocery Retailers"
    ],
    techStack: ["React Native", "Firebase", "Genkit", "Google Vision API"],
  },
  {
    slug: 'medical-insights-chatbot',
    title: 'Instant Medical Insights via AI Chatbot',
    category: 'Healthcare & AI',
    excerpt: 'Providing breast cancer patients with secure and evidence-based answers to their most pressing questions.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'doctor patient consultation',
    summary: "Breast cancer patients need a reliable, 24/7 source of information. In partnership with oncologists, we developed a specialized AI chatbot trained on peer-reviewed medical literature to provide secure, evidence-based, and empathetic answers to non-diagnostic questions.",
    details: {
        client: "Hope & Heal Foundation",
        timeline: "7 Months",
        industry: "Healthcare",
        product: "AI Medical Information Chatbot"
    },
    keyFeatures: [
        "Trained on Vetted Medical Literature",
        "Secure and Confidential",
        "Empathetic and Natural Language Conversation",
        "Information on Treatments, Side Effects, and Support",
        "Resource Links to Trusted Organizations",
        "Admin Dashboard for Content Curation"
    ],
    techStack: ["Genkit", "Pinecone", "Next.js", "GCP"],
  },
  {
    slug: 'ai-vision-prototyper',
    title: 'AI Vision Prototyper',
    category: 'AI & Prototyping',
    excerpt: 'Generate interactive UI prototypes from simple text descriptions using the power of generative AI.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'ui design prototype',
    demoUrl: '#',
    purchaseUrl: '#',
    summary: "The AI Vision Prototyper is a revolutionary tool that allows designers and developers to generate interactive UI prototypes from simple text descriptions. Leveraging generative AI, it interprets natural language to create high-fidelity mockups, drastically reducing the time from idea to prototype.",
    details: {
        product: "SaaS Application",
        industry: "Software Development",
        timeline: "6 Months"
    },
    keyFeatures: [
        "Natural Language to UI Conversion",
        "Generates Interactive Components",
        "Supports Multiple Frameworks (React, Vue)",
        "Collaborative Real-time Editing",
        "Export to Code Snippets",
        "Version History and Control"
    ],
    techStack: ["Next.js", "Genkit", "Firebase", "Vercel"],
  },
  {
    slug: 'vr-real-estate-showcase',
    title: 'VR Real Estate Showcase',
    category: 'Real Estate & VR',
    excerpt: 'Immersive virtual reality tours of properties for real estate agencies and potential buyers.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'virtual reality real estate',
    demoUrl: '#',
    purchaseUrl: '#',
    summary: "The VR Real Estate Showcase provides an immersive and interactive way for potential buyers to tour properties from anywhere in the world. This platform uses high-resolution 360-degree imagery and VR technology to create a realistic and engaging experience, helping agents close deals faster.",
    details: {
        product: "Platform",
        industry: "Real Estate",
        timeline: "8 Months"
    },
    keyFeatures: [
        "High-Fidelity Virtual Tours",
        "Cross-Platform VR Headset Support",
        "Agent-Guided Tour Mode",
        "Interactive Hotspots for Property Details",
        "Virtual Staging Capabilities",
        "Lead Capture and Analytics Dashboard"
    ],
    techStack: ["A-Frame", "Three.js", "React", "Node.js"],
  }
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
