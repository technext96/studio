
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
             { title: "Enatega Food Delivery", href: "/portfolio/enatega-food-delivery", icon: <ShoppingCart className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-110" />, description: "The leading open-source food delivery solution for cafes and restaurants." },
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
    { slug: "fintech", title: "Fintech", icon: <ShieldCheck/>, description: "We deliver secure, compliant, and innovative digital solutions for the financial industry. Our expertise in blockchain, AI, and mobile banking helps clients navigate the complex world of finance, from payment gateways to algorithmic trading platforms, ensuring robust security and a seamless user experience.", imageUrl: 'https://placehold.co/600x400.png', imageHint: 'financial technology dashboard' },
    { slug: "logistics", title: "Logistics", icon: <ShoppingCart/>, description: "Our solutions optimize supply chains with real-time tracking, warehouse management systems, and predictive analytics for demand forecasting. We help logistics companies enhance efficiency, reduce costs, and improve delivery times through intelligent automation and data-driven insights.", imageUrl: 'https://placehold.co/600x400.png', imageHint: 'logistics cargo ship' },
    { slug: "automotive", title: "Automotive", icon: <Building/>, description: "We develop connected car platforms, fleet management software, and dealership management systems that drive the automotive industry forward. Our expertise in IoT, telematics, and data analytics enables us to build solutions that enhance vehicle performance, safety, and the driver experience.", imageUrl: 'https://placehold.co/600x400.png', imageHint: 'automotive technology car' },
    { slug: "healthcare", title: "Healthcare", icon: <HeartPulse/>, description: "We create HIPAA-compliant software, telemedicine platforms, and AI-powered diagnostic tools to revolutionize patient care. Our solutions improve clinical workflows, secure patient data, and facilitate remote consultations, making healthcare more accessible and efficient.", imageUrl: 'https://placehold.co/600x400.png', imageHint: 'healthcare medical technology' },
    { slug: "manufacturing", title: "Manufacturing", icon: <Factory/>, description: "We build IIoT solutions, process automation software, and smart factory management systems to optimize production. By leveraging data analytics and machine learning, we help manufacturers implement predictive maintenance, improve quality control, and streamline their operations for Industry 4.0.", imageUrl: 'https://placehold.co/600x400.png', imageHint: 'manufacturing factory robot' },
    { slug: "oil-gas", title: "Oil and Gas", icon: <Fuel/>, description: "Our digital solutions for the oil and gas sector include digital twin technology, predictive maintenance platforms, and energy trading systems. We help companies optimize asset performance, enhance safety, and make data-driven decisions in a volatile market.", imageUrl: 'https://placehold.co/600x400.png', imageHint: 'oil rig platform' },
    { slug: "insurance", title: "Insurance", icon: <Shield/>, description: "We build modern insurtech platforms, policy management systems, and AI-powered claims processing applications. Our solutions help insurers automate underwriting, detect fraud, and deliver personalized customer experiences in a competitive digital landscape.", imageUrl: 'https://placehold.co/600x400.png', imageHint: 'insurance protection concept' },
    { slug: "travel", title: "Travel", icon: <Plane/>, description: "We create custom booking engines, travel management software, and personalized itinerary planners for the travel industry. Our solutions leverage AI to offer tailored recommendations, streamline reservations, and enhance the overall travel experience for customers.", imageUrl: 'https://placehold.co/600x400.png', imageHint: 'travel airplane sunset' },
    { slug: "cybersecurity", title: "Cybersecurity", icon: <ShieldCheck/>, description: "We develop advanced threat detection platforms, security automation tools, and secure software solutions to protect businesses from cyber threats. Our expertise in encryption, threat intelligence, and secure coding practices ensures the integrity and resilience of your digital assets.", imageUrl: 'https://placehold.co/600x400.png', imageHint: 'cybersecurity lock code' },
    { slug: "ecommerce", title: "Retail & eCommerce", icon: <ShoppingCart/>, description: "We build custom e-commerce platforms, AI-driven recommendation engines, and personalized shopping experiences that boost sales. Our solutions integrate seamlessly with inventory management, payment gateways, and CRM systems to create a unified and engaging retail ecosystem.", imageUrl: 'https://placehold.co/600x400.png', imageHint: 'ecommerce online shopping' },
    { slug: "education", title: "Education", icon: <BookOpen/>, description: "We design e-learning platforms, student information systems, and AI-powered tutoring applications to transform the educational landscape. Our technology fosters personalized learning, simplifies administration, and makes education more accessible and engaging for students of all ages.", imageUrl: 'https://placehold.co/600x400.png', imageHint: 'education online learning' },
    { slug: "media-entertainment", title: "Media & Entertainment", icon: <Clapperboard/>, description: "We build robust streaming platforms, content management systems (CMS), and royalty management software for the media industry. Our solutions support high-quality content delivery, digital rights management, and audience engagement analytics to help creators and distributors thrive.", imageUrl: 'https://placehold.co/600x400.png', imageHint: 'media entertainment cinema' },
    { slug: "real-estate", title: "Real Estate", icon: <Home/>, description: "We develop property management software, VR property tours, and real estate analytics platforms that are changing the way people buy and sell property. Our technology provides immersive experiences, simplifies transactions, and offers data-driven insights for agents, buyers, and sellers.", imageUrl: 'https://placehold.co/600x400.png', imageHint: 'real estate modern house' },
    { slug: "telecom", title: "Telecommunication", icon: <Phone/>, description: "Our solutions for the telecommunications industry include OSS/BSS systems, network management tools, and customer self-service portals. We help telecom companies automate operations, manage network infrastructure, and improve the customer experience in a rapidly evolving sector.", imageUrl: 'https://placehold.co/600x400.png', imageHint: 'telecommunication tower' },
    { slug: "government", title: "Government", icon: <Building/>, description: "We drive digital transformation for public services with secure data management solutions, citizen engagement platforms, and streamlined administrative systems. Our technology helps government agencies improve efficiency, transparency, and the delivery of services to the public.", imageUrl: 'https://placehold.co/600x400.png', imageHint: 'government building architecture' },
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
    slug: 'enatega-food-delivery',
    title: 'Enatega - Open Source Food Delivery Solution',
    category: 'Retail & eCommerce',
    excerpt: 'The leading open-source food delivery solution for cafes and restaurants, offering full control and customization.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'food delivery app',
    details: {
        useCase: "Multi-vendor Food Delivery",
        industry: "Retail & eCommerce",
        product: "Open Source Delivery Platform",
        results: "Launched 100+ stores, saved $100k in commissions"
    },
    summary: "Enatega is a comprehensive open-source food delivery solution that gives businesses full control over their platform. It enables a rapid launch (in as little as 5 days), offers deep customization to meet specific needs, and includes lifetime updates—all with complete code ownership.",
    keyFeatures: [
        "Full Source Code Ownership", "No Additional or Hidden Charges", "All Essential Apps Included (Customer, Rider, Restaurant)",
        "Powerful Admin Dashboard", "Lifetime Updates", "2 Hours Free Technical Consultation"
    ],
    techStack: ["React Native", "Node.js", "GraphQL", "MongoDB", "Firebase"],
    impacts: [
        { title: "Significant Cost Savings", description: "Clients have saved over $100,000 in commissions by owning their platform instead of relying on third-party services." },
        { title: "Rapid Market Entry", description: "The streamlined deployment process allows businesses to launch a fully functional delivery service in under two weeks." },
        { title: "Proven Scalability", description: "One client, Yalla, achieved 60,000 active users in their first year, demonstrating the platform's robustness and scalability." },
        { title: "High User Adoption", description: "The modern, feature-rich, and beautifully designed UI across all apps has led to a 4.7/5 rating from over 150+ users." }
    ]
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
        "Personalized Recipe Generation", "Dietary Preference Filtering", "Pantry Inventory Management",
        "Automated Shopping List Creation", "Ingredient Substitution Suggestions", "Integration with Online Grocery Retailers"
    ],
    techStack: ["React Native", "Firebase", "Genkit", "Google Vision API"],
  },
  {
    slug: 'instant-medical-insights-chatbot',
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
        "Trained on Vetted Medical Literature", "Secure and Confidential", "Empathetic and Natural Language Conversation",
        "Information on Treatments & Side Effects", "Resource Links to Trusted Organizations", "Admin Dashboard for Content Curation"
    ],
    techStack: ["Genkit", "Pinecone", "Next.js", "GCP"],
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
