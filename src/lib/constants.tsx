

import { Code, Smartphone, Cloud, Bot, BrainCircuit, PencilRuler, Zap, Users, ShieldCheck, ShoppingCart, BookOpen, Building, HeartPulse, Factory, Fuel, Shield, Plane, GraduationCap, Clapperboard, Home, Phone, Briefcase, Handshake, Cog, Group, Newspaper, Lightbulb, Rocket, Video, Car, QrCode, MessageSquare, BookUser, Mail } from 'lucide-react';

const AiMlIllustration = () => (
    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="grad-aiml" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: 'hsl(var(--primary))', stopOpacity:1}} />
          <stop offset="100%" style={{stopColor: 'hsl(var(--secondary))', stopOpacity:1}} />
        </linearGradient>
      </defs>
      <path d="M256 96 C192 96 192 224 256 224 S 320 96 256 96" fill="none" stroke="url(#grad-aiml)" strokeWidth="2">
        <animateTransform attributeName="transform" type="rotate" from="0 256 256" to="360 256 256" dur="10s" repeatCount="indefinite" />
      </path>
      <path d="M256 288 C192 288 192 416 256 416 S 320 288 256 288" fill="none" stroke="url(#grad-aiml)" strokeWidth="2">
        <animateTransform attributeName="transform" type="rotate" from="360 256 256" to="0 256 256" dur="10s" repeatCount="indefinite" />
      </path>
      <circle cx="256" cy="256" r="32" fill="hsl(var(--primary))" />
      <g fill="hsl(var(--foreground))" opacity="0.7">
        <circle cx="256" cy="256" r="4" />
      </g>
    </svg>
  );
  
  const AutomationIllustration = () => (
    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="grad-auto" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: 'hsl(var(--primary))', stopOpacity:1}} />
          <stop offset="100%" style={{stopColor: 'hsl(var(--secondary))', stopOpacity:1}} />
        </linearGradient>
      </defs>
      <g fill="none" stroke="url(#grad-auto)" strokeWidth="4">
        <path d="M 256,128 a 128,128 0 1,0 0,256 a 128,128 0 1,0 0,-256" opacity="0.5" />
        <path d="M 256,160 a 96,96 0 1,0 0,192 a 96,96 0 1,0 0,-192" />
      </g>
      <Cog className="lucide lucide-cog text-primary" x="224" y="224" width="64" height="64">
         <animateTransform attributeName="transform" type="rotate" from="0 256 256" to="360 256 256" dur="5s" repeatCount="indefinite" />
      </Cog>
    </svg>
  );
  
  const OffshoreIllustration = () => (
    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
       <defs>
        <linearGradient id="grad-off" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: 'hsl(var(--primary))', stopOpacity:1}} />
          <stop offset="100%" style={{stopColor: 'hsl(var(--secondary))', stopOpacity:1}} />
        </linearGradient>
      </defs>
      <circle cx="256" cy="256" r="160" fill="none" stroke="url(#grad-off)" strokeWidth="2" opacity="0.3"/>
      <circle cx="256" cy="256" r="120" fill="hsl(var(--primary) / 0.1)"/>
      <Users className="lucide lucide-users text-primary" x="224" y="224" width="64" height="64" />
      <g fill="hsl(var(--primary))">
        <circle cx="120" cy="120" r="20"><animate attributeName="r" values="20;25;20" dur="4s" repeatCount="indefinite" /></circle>
        <circle cx="392" cy="120" r="20"><animate attributeName="r" values="20;25;20" dur="4s" repeatCount="indefinite" begin="1s"/></circle>
        <circle cx="120" cy="392" r="20"><animate attributeName="r" values="20;25;20" dur="4s" repeatCount="indefinite" begin="2s"/></circle>
        <circle cx="392" cy="392" r="20"><animate attributeName="r" values="20;25;20" dur="4s" repeatCount="indefinite" begin="3s"/></circle>
      </g>
    </svg>
  );
  
  const CustomSoftwareIllustration = () => (
    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path d="M128 128 L384 128 L384 384 L128 384 Z" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" rx="10"/>
        <polyline points="160,224 192,256 160,288" stroke="hsl(var(--primary))" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="224" y1="208" x2="256" y2="304" stroke="hsl(var(--primary))" strokeWidth="2"/>
        <animate attributeName="opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite" />
    </svg>
  );
  
  const DevOpsIllustration = () => (
    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <Cloud className="text-primary" x="128" y="128" width="256" height="256" strokeWidth="1" opacity="0.5">
          <animate attributeName="opacity" values="0.5;0.8;0.5" dur="3s" repeatCount="indefinite" />
        </Cloud>
        <Cog className="text-primary" x="192" y="192" width="64" height="64">
            <animateTransform attributeName="transform" type="rotate" from="0 224 224" to="360 224 224" dur="5s" repeatCount="indefinite"/>
        </Cog>
        <Rocket className="text-primary" x="256" y="256" width="64" height="64">
            <animateTransform attributeName="transform" type="translate" values="0 0; -10 -10; 0 0" dur="2s" repeatCount="indefinite"/>
        </Rocket>
    </svg>
  );
  
  const MarketingIllustration = () => (
    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path d="M 128 384 L 256 128 L 384 384 Z" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" />
        <line x1="128" y1="384" x2="384" y2="384" stroke="hsl(var(--primary))" strokeWidth="2"/>
        <circle cx="256" cy="256" r="32" fill="hsl(var(--primary) / 0.5)">
           <animate attributeName="r" values="32;40;32" dur="3s" repeatCount="indefinite" />
        </circle>
    </svg>
  );

  const FintechIllustration = () => <ShieldCheck className="w-full h-full text-primary" strokeWidth="0.5"/>
  const LogisticsIllustration = () => <ShoppingCart className="w-full h-full text-primary" strokeWidth="0.5"/>
  const AutomotiveIllustration = () => <Building className="w-full h-full text-primary" strokeWidth="0.5"/>
  const HealthcareIllustration = () => <HeartPulse className="w-full h-full text-primary" strokeWidth="0.5"/>
  const ManufacturingIllustration = () => <Factory className="w-full h-full text-primary" strokeWidth="0.5"/>
  const OilGasIllustration = () => <Fuel className="w-full h-full text-primary" strokeWidth="0.5"/>
  const InsuranceIllustration = () => <Shield className="w-full h-full text-primary" strokeWidth="0.5"/>
  const TravelIllustration = () => <Plane className="w-full h-full text-primary" strokeWidth="0.5"/>
  const CybersecurityIllustration = () => <ShieldCheck className="w-full h-full text-primary" strokeWidth="0.5"/>
  const EcommerceIllustration = () => <ShoppingCart className="w-full h-full text-primary" strokeWidth="0.5"/>
  const EducationIllustration = () => <BookOpen className="w-full h-full text-primary" strokeWidth="0.5"/>
  const MediaIllustration = () => <Clapperboard className="w-full h-full text-primary" strokeWidth="0.5"/>
  const RealEstateIllustration = () => <Home className="w-full h-full text-primary" strokeWidth="0.5"/>
  const TelecomIllustration = () => <Phone className="w-full h-full text-primary" strokeWidth="0.5"/>
  const GovernmentIllustration = () => <Building className="w-full h-full text-primary" strokeWidth="0.5"/>

  const AiLearningIllustration = () => <GraduationCap className="w-full h-full text-primary" strokeWidth="0.5"/>
  const FoodDeliveryIllustration = () => <ShoppingCart className="w-full h-full text-primary" strokeWidth="0.5"/>
  const AiShoppingIllustration = () => <ShoppingCart className="w-full h-full text-primary" strokeWidth="0.5"/>
  const MedicalChatbotIllustration = () => <HeartPulse className="w-full h-full text-primary" strokeWidth="0.5"/>

  const QuantumIllustration = () => <BrainCircuit className="w-full h-full text-primary" strokeWidth="0.5"/>
  const GenAiIllustration = () => <Bot className="w-full h-full text-primary" strokeWidth="0.5"/>
  const SpatialIllustration = () => <PencilRuler className="w-full h-full text-primary" strokeWidth="0.5"/>
  const WhatsAppFabIllustration = () => <MessageSquare className="w-full h-full text-primary" strokeWidth="0.5"/>
  const DevopsCultureIllustration = () => <Users className="w-full h-full text-primary" strokeWidth="0.5"/>
  const MicroservicesIllustration = () => <Cog className="w-full h-full text-primary" strokeWidth="0.5"/>
  const ServerlessIllustration = () => <Cloud className="w-full h-full text-primary" strokeWidth="0.5"/>
  const Web3Illustration = () => <Shield className="w-full h-full text-primary" strokeWidth="0.5"/>
  const GreenTechIllustration = () => <Zap className="w-full h-full text-primary" strokeWidth="0.5"/>
  const NoCodeIllustration = () => <Code className="w-full h-full text-primary" strokeWidth="0.5"/>


const TeamIllustration = () => (
    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-cover">
      <g fill="none" stroke="hsl(var(--primary) / 0.2)">
        <circle cx="256" cy="256" r="200" strokeWidth="1" />
        <circle cx="256" cy="256" r="150" strokeWidth="1" />
      </g>
      <g fill="hsl(var(--primary))">
        <circle cx="256" cy="106" r="30">
          <animateTransform attributeName="transform" type="rotate" from="0 256 256" to="360 256 256" dur="20s" repeatCount="indefinite"/>
        </circle>
        <circle cx="156" cy="206" r="20">
          <animateTransform attributeName="transform" type="rotate" from="0 256 256" to="360 256 256" dur="18s" repeatCount="indefinite" begin="-2s"/>
        </circle>
        <circle cx="356" cy="206" r="20">
           <animateTransform attributeName="transform" type="rotate" from="0 256 256" to="360 256 256" dur="18s" repeatCount="indefinite" begin="-2s"/>
        </circle>
        <circle cx="186" cy="356" r="25">
           <animateTransform attributeName="transform" type="rotate" from="0 256 256" to="360 256 256" dur="22s" repeatCount="indefinite" begin="-4s"/>
        </circle>
        <circle cx="326" cy="356" r="25">
            <animateTransform attributeName="transform" type="rotate" from="0 256 256" to="360 256 256" dur="22s" repeatCount="indefinite" begin="-4s"/>
        </circle>
      </g>
      <g stroke="hsl(var(--primary) / 0.5)" strokeWidth="0.5">
        <path d="M 256 136 L 166 196" />
        <path d="M 256 136 L 346 196" />
        <path d="M 156 226 L 196 331" />
        <path d="M 356 226 L 316 331" />
      </g>
    </svg>
);

export const navLinks = [
    {
        title: "Services",
        href: "/services",
        description: "Explore our comprehensive technology solutions, from AI/ML to custom software development.",
        image: <DevOpsIllustration />,
        items: [
            { title: "AI/ML Solutions", href: "/services/ai-ml", icon: <Bot />, description: "Harness the power of AI to automate and innovate." },
            { title: "Intelligent Automation", href: "/services/intelligent-automation", icon: <Zap />, description: "Streamline workflows and boost efficiency." },
            { title: "Custom Software", href: "/services/custom-software", icon: <Code />, description: "Bespoke solutions tailored to your unique needs." },
            { title: "Mobile App Development", href: "/services/mobile-apps", icon: <Smartphone />, description: "Engaging mobile experiences for iOS and Android." },
            { title: "DevOps", href: "/services/devops", icon: <Cloud />, description: "Accelerate your development lifecycle." },
            { title: "Offshore Development", href: "/services/offshore-development", icon: <Users />, description: "Extend your team with our global talent." },
        ]
    },
    {
        title: "Industries",
        href: "/industries",
        description: "We apply our deep industry knowledge to deliver solutions that drive success and address unique sector challenges.",
        image: <AiMlIllustration />,
        items: [
            { title: "Fintech", href: "/industries/fintech", icon: <ShieldCheck />, description: "Secure and scalable financial technology." },
            { title: "Logistics", href: "/industries/logistics", icon: <ShoppingCart />, description: "Optimizing supply chain management." },
            { title: "Healthcare", href: "/industries/healthcare", icon: <HeartPulse />, description: "Transforming patient care with technology." },
            { title: "Manufacturing", href: "/industries/manufacturing", icon: <Factory />, description: "Innovating the factory floor with smart tech." },
            { title: "Automotive", href: "/industries/automotive", icon: <Car />, description: "Driving the future of mobility." },
            { title: "Education", href: "/industries/education", icon: <BookOpen />, description: "Modernizing learning experiences." },
        ]
    },
    {
        title: "Our Work",
        href: "/portfolio",
        description: "Explore our portfolio of successful projects and see how we solve complex challenges for our clients.",
        image: <CustomSoftwareIllustration />,
        items: [
            { title: "Portfolio", href: "/portfolio", icon: <Newspaper />, description: "See our case studies and success stories." },
            { title: "QR Attendance System", href: "/solutions/qr-attendance", icon: <QrCode />, description: "A proxy-proof attendance solution for modern workplaces." },
            { title: "Carpooling App", href: "/solutions/carpooling-app", icon: <Car />, description: "A white-label carpooling startup in a box." },
            { title: "Training Programs", href: "/solutions/training-program", icon: <BookUser />, description: "Our expert-led curricula for developers, designers, and more." },
            { title: "CampiX.AI", href: "/solutions/campix", icon: <Bot />, description: "Autonomous AI-powered ad campaigns." },
        ]
    },
    {
        title: "Company",
        href: "/about",
        description: "Learn about our mission, vision, and the team driving innovation at TechNext.",
        image: <OffshoreIllustration />,
        items: [
            { title: "About Us", href: "/about", icon: <Users />, description: "Our mission, vision, and values." },
            { title: "Careers", href: "/careers", icon: <Briefcase />, description: "Join our team of innovators." },
            { title: "Contact Us", href: "/contact", icon: <Mail />, description: "Get in touch with our experts." },
        ]
    },
     {
        title: "Blog",
        href: "/blog",
    },
];

export const services = [
    {
        title: 'Custom Software Development',
        slug: 'custom-software',
        description: 'We build tailored software solutions to meet your specific business needs, ensuring scalability and performance.',
        longDescription: 'Our custom software development service provides end-to-end solutions, from ideation to deployment. We specialize in creating high-quality, scalable, and maintainable software that perfectly aligns with your business goals.',
        icon: <Code size={36} />,
        illustration: <CustomSoftwareIllustration/>,
        subServices: ["Enterprise Software", "Web Application Development", "SaaS Product Development", "API Development & Integration", "System Modernization"]
    },
    {
        title: 'AI and ML Solutions',
        slug: 'ai-ml',
        description: 'Leverage the power of Artificial Intelligence and Machine Learning to unlock data-driven insights and automate processes.',
        longDescription: 'Our AI and ML services help you integrate intelligent solutions into your business. From predictive analytics to natural language processing, we build models that drive efficiency, personalization, and innovation.',
        icon: <BrainCircuit size={36} />,
        illustration: <AiMlIllustration/>,
        subServices: ["Predictive Analytics", "Natural Language Processing (NLP)", "Computer Vision", "Recommender Systems", "AI Chatbots"]
    },
    {
        title: 'Mobile App Development',
        slug: 'mobile-apps',
        description: 'We design and develop beautiful, high-performance mobile applications for both iOS and Android platforms.',
        longDescription: 'We create engaging and intuitive mobile apps that provide a seamless user experience. Our team handles the entire lifecycle, from UI/UX design to development, testing, and App Store submission.',
        icon: <Smartphone size={36} />,
        illustration: <CustomSoftwareIllustration/>,
        subServices: ["iOS App Development", "Android App Development", "Cross-Platform (React Native)", "UI/UX Design for Mobile", "App Maintenance & Support"]
    },
    {
        title: 'Intelligent Automation',
        slug: 'intelligent-automation',
        description: 'Automate your repetitive tasks and complex workflows to improve efficiency and reduce operational costs.',
        longDescription: 'We implement intelligent automation solutions, including Robotic Process Automation (RPA), to streamline your business processes. Let technology handle the mundane tasks so your team can focus on what matters most.',
        icon: <Zap size={36} />,
        illustration: <AutomationIllustration/>,
        subServices: ["Robotic Process Automation (RPA)", "Business Process Automation (BPA)", "Workflow Automation", "Data Entry Automation", "Report Generation"]
    },
    {
        title: 'Offshore Development Center',
        slug: 'offshore-development',
        description: 'Extend your team with our dedicated offshore developers who work as a seamless extension of your in-house team.',
        longDescription: 'Our offshore development services provide you with a dedicated team of skilled engineers, developers, and project managers. We offer a cost-effective way to scale your development capabilities without compromising on quality.',
        icon: <Users size={36} />,
        illustration: <OffshoreIllustration/>,
        subServices: ["Dedicated Development Teams", "Staff Augmentation", "Project-Based Outsourcing", "QA & Testing Services", "IT Support"]
    },
    {
        title: 'DevOps & Cloud Solutions',
        slug: 'devops',
        description: 'Accelerate your software development lifecycle and improve reliability with our DevOps and cloud engineering services.',
        longDescription: 'We help you adopt a DevOps culture and leverage cloud infrastructure to build, test, and release software faster and more reliably. From CI/CD pipelines to cloud migration, we have you covered.',
        icon: <Cloud size={36} />,
        illustration: <DevOpsIllustration/>,
        subServices: ["CI/CD Pipeline Implementation", "Cloud Migration (AWS, GCP, Azure)", "Infrastructure as Code (IaC)", "Containerization (Docker, Kubernetes)", "Performance Monitoring"]
    },
];

export const industries = [
    { title: 'Fintech', slug: 'fintech', icon: <ShieldCheck className="w-9 h-9"/>, illustration: <FintechIllustration/>, description: 'Developing secure payment gateways, trading platforms, and personalized financial advisory tools.' },
    { title: 'Logistics', slug: 'logistics', icon: <ShoppingCart className="w-9 h-9"/>, illustration: <LogisticsIllustration/>, description: 'Optimizing supply chains with real-time tracking, inventory management, and route planning systems.' },
    { title: 'Automotive', slug: 'automotive', icon: <Car className="w-9 h-9"/>, illustration: <AutomotiveIllustration/>, description: 'Building connected car platforms, predictive maintenance systems, and fleet management solutions.' },
    { title: 'Healthcare', slug: 'healthcare', icon: <HeartPulse className="w-9 h-9"/>, illustration: <HealthcareIllustration/>, description: 'Creating EHR systems, telemedicine platforms, and AI-powered diagnostic tools.' },
    { title: 'Manufacturing', slug: 'manufacturing', icon: <Factory className="w-9 h-9"/>, illustration: <ManufacturingIllustration/>, description: 'Implementing IoT for smart factories, predictive quality control, and supply chain visibility.' },
    { title: 'Oil & Gas', slug: 'oil-gas', icon: <Fuel className="w-9 h-9"/>, illustration: <OilGasIllustration/>, description: 'Developing solutions for exploration data analysis, asset management, and operational safety.' },
    { title: 'Insurance', slug: 'insurance', icon: <Shield className="w-9 h-9"/>, illustration: <InsuranceIllustration/>, description: 'Automating claims processing, personalized policy pricing, and fraud detection systems.' },
    { title: 'Travel & Hospitality', slug: 'travel-hospitality', icon: <Plane className="w-9 h-9"/>, illustration: <TravelIllustration/>, description: 'Building booking engines, personalized recommendation systems, and property management software.' },
    { title: 'Cybersecurity', slug: 'cybersecurity', icon: <ShieldCheck className="w-9 h-9"/>, illustration: <CybersecurityIllustration/>, description: 'Creating threat intelligence platforms, security automation, and compliance management tools.' },
    { title: 'E-commerce', slug: 'ecommerce', icon: <ShoppingCart className="w-9 h-9"/>, illustration: <EcommerceIllustration/>, description: 'Developing scalable online stores, recommendation engines, and personalized shopping experiences.' },
    { title: 'Education', slug: 'education', icon: <BookOpen className="w-9 h-9"/>, illustration: <EducationIllustration/>, description: 'Building learning management systems (LMS), virtual classrooms, and personalized learning paths.' },
    { title: 'Media & Entertainment', slug: 'media-entertainment', icon: <Clapperboard className="w-9 h-9"/>, illustration: <MediaIllustration/>, description: 'Developing content management systems, streaming platforms, and royalty management software.' },
    { title: 'Real Estate', slug: 'real-estate', icon: <Home className="w-9 h-9"/>, illustration: <RealEstateIllustration/>, description: 'Creating property management software, virtual tour platforms, and real estate market analytics tools.' },
    { title: 'Telecommunications', slug: 'telecommunications', icon: <Phone className="w-9 h-9"/>, illustration: <TelecomIllustration/>, description: 'Building network management systems, customer self-service portals, and predictive analytics for network performance.' },
    { title: 'Government', slug: 'government', icon: <Building className="w-9 h-9"/>, illustration: <GovernmentIllustration/>, description: 'Developing digital services for citizens, data management platforms, and smart city solutions.' },
];

export const portfolio = [
    {
        title: "AI-Powered Adaptive Learning Platform",
        slug: "ai-learning-platform",
        category: "Education Technology",
        excerpt: "An AI-driven platform that personalizes learning paths for students based on their performance, learning style, and goals, improving engagement and outcomes.",
        summary: "This platform uses machine learning algorithms to create a unique educational journey for each student. It analyzes performance on quizzes, tracks time spent on topics, and adapts the curriculum in real-time. The goal is to make learning more efficient and effective by focusing on areas where students need the most help.",
        illustration: <AiLearningIllustration/>,
        keyFeatures: [
            "Personalized learning paths",
            "Real-time performance analytics",
            "AI-powered content recommendations",
            "Gamified learning modules",
            "Progress tracking for teachers and parents"
        ],
        details: {
            industry: "Education",
            useCase: "Personalized Learning",
            headquarters: "Tech City",
            product: "SaaS Platform",
            results: "40% increase in student engagement",
            timeline: "6 Months"
        },
        solutions: {
            forStudents: [
                { title: "Personalized Study Plans", description: "AI generates daily and weekly study plans tailored to each student's learning pace and goals." },
                { title: "Interactive Content", description: "Engaging video lessons, quizzes, and simulations to make learning fun and effective." },
                { title: "Instant Feedback", description: "Students receive immediate feedback on their answers, helping them understand their mistakes." }
            ],
            forAdmins: [
                { title: "Student Performance Analytics", description: "A comprehensive dashboard for teachers to monitor student progress and identify at-risk students." },
                { title: "Curriculum Management", description: "Easily upload, organize, and manage learning materials and assessments." },
                { title: "Automated Reporting", description: "Generate automated reports on student performance, engagement, and overall class progress." }
            ]
        },
        usps: [
            { title: "Truly Adaptive", description: "Unlike static learning systems, our platform's curriculum evolves with the student." },
            { title: "Data-Driven Insights", description: "Provides actionable insights for educators to improve their teaching strategies." },
            { title: "Scalable & Secure", description: "Built on a robust cloud infrastructure to support thousands of concurrent users securely." }
        ],
        techStack: ["React", "Node.js", "Python", "Flask", "PostgreSQL", "AWS", "Docker"],
        impacts: [
            { title: "Improved Student Outcomes", description: "Students using the platform showed a 25% improvement in test scores on average." },
            { title: "Reduced Teacher Workload", description: "Automated grading and reporting saved teachers an average of 5 hours per week." }
        ],
        faq: [
            { question: "Is this platform suitable for all age groups?", answer: "Yes, the platform is designed to be adaptable for K-12 and higher education." },
            { question: "How is data privacy handled?", answer: "We are fully GDPR and COPPA compliant, with end-to-end encryption for all user data." }
        ],
        demoUrl: 'https://youtube.com/@technext-096',
        purchaseUrl: 'https://technext96.com/contact'
    },
    {
        title: "On-Demand Food Delivery Super App",
        slug: "food-delivery-app",
        category: "Logistics & E-commerce",
        excerpt: "A comprehensive food delivery application connecting restaurants, delivery partners, and customers in a seamless ecosystem, with a powerful admin dashboard.",
        summary: "This super app provides a complete solution for the food delivery business. It includes a customer-facing app for ordering, a delivery partner app for managing deliveries, a restaurant portal for order management, and a master admin dashboard to oversee the entire operation.",
        illustration: <FoodDeliveryIllustration/>,
        keyFeatures: [
            "Real-time order tracking",
            "Multi-restaurant support",
            "Integrated payment gateways",
            "Driver management and earnings tracking",
            "Promotions and discount engine",
            "Advanced analytics dashboard"
        ]
    },
    {
        title: "AI-Powered Personal Shopping Assistant",
        slug: "ai-shopping-assistant",
        category: "E-commerce & AI",
        excerpt: "An AI chatbot that acts as a personal shopper, helping users find the perfect products through natural language conversations and visual search.",
        summary: "This AI assistant integrates with e-commerce stores to provide a conversational shopping experience. Users can describe what they're looking for, upload images of styles they like, and get personalized recommendations. The AI understands context, preferences, and even fashion trends to provide a curated shopping experience.",
        illustration: <AiShoppingIllustration/>,
        keyFeatures: [
            "Natural Language Understanding (NLU)",
            "Visual Search (Image-based recommendations)",
            "Personalized product carousels",
            "Style and preference learning",
            "Seamless checkout integration"
        ]
    },
    {
        title: "AI Medical Symptom Checker & Triage Chatbot",
        slug: "medical-symptom-checker",
        category: "Healthcare & AI",
        excerpt: "An intelligent chatbot that helps users understand their symptoms and provides guidance on the appropriate next steps, reducing unnecessary doctor visits.",
        summary: "This HIPAA-compliant chatbot uses a sophisticated AI model trained on medical data to analyze user-reported symptoms. It asks clarifying questions and, based on the responses, provides a list of potential conditions and a recommendation, such as 'self-care at home,' 'see a doctor in a few days,' or 'seek immediate medical attention.'",
        illustration: <MedicalChatbotIllustration/>,
        keyFeatures: [
            "HIPAA-compliant architecture",
            "AI-powered symptom analysis",
            "Integration with clinic scheduling systems",
            "Triage to appropriate levels of care",
            "Health education content delivery"
        ]
    },
];

export const valuePropositions = [
    {
        title: "Expertise & Innovation",
        description: "Our team consists of industry veterans and tech enthusiasts who are passionate about building innovative solutions. We stay at the forefront of technology to deliver cutting-edge products.",
        icon: <Lightbulb className="h-10 w-10 text-primary" />
    },
    {
        title: "Client-Centric Approach",
        description: "Your success is our success. We work collaboratively with our clients to understand their unique challenges and goals, ensuring that our solutions deliver real business value.",
        icon: <Handshake className="h-10 w-10 text-primary" />
    },
    {
        title: "Quality & Reliability",
        description: "We are committed to delivering high-quality, reliable, and scalable software. Our rigorous testing and quality assurance processes ensure that our products are built to last.",
        icon: <ShieldCheck className="h-10 w-10 text-primary" />
    }
];

export const blogPosts = [
    {
        title: "The Rise of Quantum Computing: What It Means for Business",
        slug: "quantum-computing-business",
        author: "Dr. Evelyn Reed",
        date: "2025-08-15",
        category: "Future Tech",
        excerpt: "Quantum computing is poised to revolutionize industries by solving problems currently intractable for classical computers. This article explores its potential impact on business, from drug discovery to financial modeling, and what leaders should be doing now to prepare for the quantum leap.",
        illustration: <QuantumIllustration />
    },
    {
        title: "Generative AI: The Creative Force Multiplier for Modern Enterprises",
        slug: "generative-ai-enterprise",
        author: "Mark Chen",
        date: "2025-08-10",
        category: "AI/ML",
        excerpt: "Generative AI is more than just a buzzword; it's a transformative technology that's reshaping how businesses create content, design products, and innovate. Discover how enterprises are leveraging generative AI to gain a competitive edge and drive unprecedented growth and efficiency in their operations.",
        illustration: <GenAiIllustration />
    },
    {
        title: "Navigating the Metaverse: An Enterprise Guide to Spatial Computing",
        slug: "enterprise-spatial-computing",
        author: "Sophia Dominguez",
        date: "2025-08-05",
        category: "Emerging Tech",
        excerpt: "Spatial computing is the next evolution of the internet, blending the physical and digital worlds. This guide provides a roadmap for enterprises looking to understand and invest in the metaverse, covering everything from virtual collaboration to customer engagement in 3D spaces.",
        illustration: <SpatialIllustration />
    },
    {
        title: "How to Add a Floating WhatsApp FAB to Your Website or App",
        slug: "floating-whatsapp-fab",
        author: "Jane Doe",
        date: "2025-08-04",
        category: "Web Development",
        excerpt: "Boost your conversions by adding a floating WhatsApp button with a pre-filled greeting to your website or mobile app. Learn how in just 5 minutes.",
        illustration: <WhatsAppFabIllustration />
    },
    {
        title: "Beyond Code: Fostering a True DevOps Culture for High-Performing Teams",
        slug: "devops-culture",
        author: "John Smith",
        date: "2025-07-28",
        category: "DevOps",
        excerpt: "DevOps is not just about tools and automation; it's a cultural shift that emphasizes collaboration, communication, and shared responsibility. Learn how to foster a genuine DevOps culture that breaks down silos, accelerates delivery, and improves the quality and reliability of your software.",
        illustration: <DevopsCultureIllustration />
    },
    {
        title: "The Future is Composable: Why Microservices are Dominating Modern Architecture",
        slug: "microservices-architecture",
        author: "David Lee",
        date: "2025-07-22",
        category: "Software Architecture",
        excerpt: "Monolithic architectures are giving way to more flexible, scalable, and resilient microservices-based systems. This article explores the benefits of a composable enterprise and provides a practical guide to designing, building, and managing a successful microservices architecture.",
        illustration: <MicroservicesIllustration />
    },
    {
        title: "Serverless Computing: The No-Ops Revolution and What It Means for Your Business",
        slug: "serverless-computing-revolution",
        author: "Emily White",
        date: "2025-07-15",
        category: "Cloud Computing",
        excerpt: "Serverless computing allows you to build and run applications without thinking about servers. This article demystifies serverless, explores its benefits and drawbacks, and shows how it can help your business reduce costs, increase agility, and focus on delivering value to your customers.",
        illustration: <ServerlessIllustration />
    },
    {
        title: "Web3 and the Decentralized Web: A New Internet for a New Era",
        slug: "web3-decentralized-web",
        author: "Michael Brown",
        date: "2025-07-08",
        category: "Blockchain",
        excerpt: "Web3 represents a fundamental shift in how the internet is owned, operated, and governed. This article explores the core concepts of Web3, from blockchain and cryptocurrencies to DAOs and NFTs, and discusses its potential to create a more open, transparent, and user-centric internet.",
        illustration: <Web3Illustration />
    },
    {
        title: "Green Tech: How Sustainable Technology is Driving Business and Saving the Planet",
        slug: "green-tech-sustainability",
        author: "Dr. Sarah Green",
        date: "2025-07-01",
        category: "Sustainability",
        excerpt: "Technology is not just about profits; it's also about purpose. This article explores the rise of green tech and how businesses are using sustainable technology to reduce their environmental impact, create new revenue streams, and build a better future for all.",
        illustration: <GreenTechIllustration />
    },
    {
        title: "The Rise of No-Code/Low-Code: Empowering Citizen Developers to Build the Future",
        slug: "no-code-low-code-platforms",
        author: "Chris Johnson",
        date: "2025-06-24",
        category: "Software Development",
        excerpt: "No-code and low-code platforms are democratizing software development, enabling anyone to build applications without writing a single line of code. This article explores the impact of this trend on business, IT, and the future of work.",
        illustration: <NoCodeIllustration />
    },
    {
        title: "Building a High-Performance Team: Lessons from Silicon Valley",
        slug: "high-performance-teams",
        author: "Jessica Miller",
        date: "2025-06-17",
        category: "Team Building",
        excerpt: "What makes a team truly high-performing? This article distills key lessons from Silicon Valley's most successful companies, covering everything from psychological safety and radical candor to effective goal-setting and continuous feedback.",
        illustration: <Group />
    },
];

export const homePageFaqs = [
  {
    question: 'What kind of technologies do you specialize in?',
    answer: 'We specialize in a wide range of modern technologies, including AI/ML with Python and TensorFlow, web development with React and Next.js, mobile development for iOS and Android, and cloud infrastructure on AWS and Google Cloud. Our goal is to choose the best tech stack for your specific project needs.'
  },
  {
    question: 'How do you ensure the quality of the software you deliver?',
    answer: 'Quality is at the core of our process. We employ a multi-faceted approach that includes rigorous code reviews, comprehensive testing (unit, integration, and end-to-end), continuous integration and deployment (CI/CD) pipelines, and a dedicated QA team to ensure your project is robust, scalable, and bug-free.'
  },
  {
    question: 'What is your development process like?',
    answer: 'We follow an agile development methodology, which means we work in iterative cycles called sprints. This approach allows for flexibility, transparency, and continuous feedback. You’ll be involved at every stage, from planning and design to development and deployment, ensuring the final product meets your expectations.'
  },
  {
    question: 'How do you handle project management and communication?',
    answer: 'We believe in clear and constant communication. You’ll have a dedicated project manager as your single point of contact. We use tools like Jira for tracking progress, Slack for daily communication, and schedule regular check-in meetings to ensure everyone is aligned and the project stays on track.'
  },
  {
    question: 'Can you work with an existing codebase or legacy system?',
    answer: 'Absolutely. We have extensive experience in modernizing legacy systems and working with existing codebases. Our team can conduct a thorough audit of your current system, identify areas for improvement, and develop a phased plan to refactor, migrate, or integrate it with modern technologies.'
  },
];
