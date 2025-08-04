

import { Code, Smartphone, Cloud, Bot, BrainCircuit, PencilRuler, Zap, Users, ShieldCheck, ShoppingCart, BookOpen, Building, HeartPulse, Factory, Fuel, Shield, Plane, GraduationCap, Clapperboard, Home, Phone, Briefcase, Handshake, Cog, Group, Newspaper, Lightbulb, Rocket, Video, Car, QrCode, MessageSquare, BookUser } from 'lucide-react';

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
    </svg>
);

export const navLinks = [
    {
        title: "Services",
        href: "/services",
        description: "Explore our comprehensive technology solutions.",
        items: [
            { title: "AI/ML Services", href: "/services/ai-ml", icon: <BrainCircuit />, description: "Unlock the power of Artificial Intelligence." },
            { title: "Intelligent Automation", href: "/services/automation", icon: <Cog />, description: "Streamline your business processes." },
            { title: "Offshore Software Development", href: "/services/offshore", icon: <Group />, description: "Build your dream team with us." },
            { title: "Custom Software Development", href: "/services/custom-software", icon: <Code />, description: "Tailored solutions for your unique needs." },
            { title: "Web Development Training", href: "/solutions/training-program", icon: <BookUser />, description: "A 6-month program to become a web developer." },
            { title: "Marketing Services", href: "/services/marketing", icon: <Zap />, description: "Grow your business with our expertise." },
        ]
    },
    {
        title: "Industries",
        href: "/industries",
        description: "Driving success across various sectors.",
        items: [
            { title: "Fintech", href: "/industries/fintech", icon: <ShieldCheck />, description: "Secure and innovative financial solutions." },
            { title: "Logistics", href: "/industries/logistics", icon: <ShoppingCart />, description: "Optimizing supply chain management." },
            { title: "Healthcare", href: "/industries/healthcare", icon: <HeartPulse />, description: "Transforming patient care with technology." },
            { title: "Manufacturing", href: "/industries/manufacturing", icon: <Factory />, description: "Automating and optimizing production lines." },
            { title: "Education", href: "/industries/education", icon: <BookOpen />, description: "Innovative solutions for modern learning." },
            { title: "Real Estate", href: "/industries/real-estate", icon: <Home />, description: "Digital tools for property management." },
        ]
    },
     {
        title: "Our Work",
        href: "/portfolio",
        description: "Explore our portfolio of successful projects and white-label solutions.",
        items: [
            { title: "Case Studies", href: "/portfolio", icon: <Briefcase />, description: "See how we've helped businesses succeed." },
            { title: "Carpooling App", href: "/solutions/carpooling-app", icon: <Car />, description: "A white-label solution to launch your ride-sharing startup." },
            { title: "QR Attendance System", href: "/solutions/qr-attendance", icon: <QrCode />, description: "A proxy-proof attendance system for modern workplaces." },
            { title: "CampiX.AI", href: "/solutions/campix", icon: <Bot />, description: "An autonomous AI platform for ad campaigns." },
        ]
    },
    {
        title: "Company",
        href: "/about",
        description: "Learn more about our mission and team.",
        items: [
            { title: "About Us", href: "/about", icon: <Users />, description: "Our mission, vision, and values." },
            { title: "Careers", href: "/careers", icon: <Briefcase />, description: "Join our team of innovators." },
            { title: "Contact Us", href: "/contact", icon: <Mail />, description: "Get in touch with our experts." },
        ]
    },
     {
        title: "Blog",
        href: "/blog",
    }
];

export const services = [
    { 
      slug: 'ai-ml', 
      title: 'AI/ML Services', 
      description: 'Leverage the power of Artificial Intelligence and Machine Learning to build intelligent applications.', 
      longDescription: 'Our AI/ML services help you integrate cutting-edge artificial intelligence into your business operations. From predictive analytics and natural language processing to computer vision, we build custom models and solutions that drive efficiency, personalization, and innovation.',
      icon: <BrainCircuit className="h-10 w-10"/>, 
      illustration: <AiMlIllustration />,
      subServices: ["Natural Language Processing", "Predictive Analytics", "Computer Vision", "Recommendation Engines", "Custom AI Model Development", "Generative AI"]
    },
    { 
      slug: 'automation', 
      title: 'Intelligent Automation', 
      description: 'Streamline your business processes and reduce manual effort with our automation solutions.', 
      longDescription: 'We design and implement intelligent automation systems that streamline your workflows, reduce operational costs, and minimize human error. Our solutions range from robotic process automation (RPA) to complex, AI-driven workflow orchestration, freeing up your team to focus on high-value tasks.',
      icon: <Cog className="h-10 w-10"/>, 
      illustration: <AutomationIllustration />,
      subServices: ["Robotic Process Automation (RPA)", "Business Process Automation (BPA)", "AI-Powered Workflow Orchestration", "Automated Data Entry & Processing", "Chatbot & Virtual Assistant Integration"]
    },
    { 
      slug: 'offshore', 
      title: 'Offshore Software Development', 
      description: 'Build a dedicated, high-performing development team with our offshore services.', 
      longDescription: "Expand your development capacity with our flexible offshore team model. We provide access to a pool of highly skilled, vetted engineers who integrate seamlessly with your existing team. Whether you need to scale for a specific project or build a long-term dedicated team, we offer a cost-effective and efficient solution.",
      icon: <Users className="h-10 w-10"/>, 
      illustration: <OffshoreIllustration />,
      subServices: ["Dedicated Development Teams", "Staff Augmentation", "Project-Based Outsourcing", "Offshore QA & Testing", "Long-term Technical Partnerships"]
    },
    { 
      slug: 'custom-software', 
      title: 'Custom Software Development', 
      description: 'Get tailor-made software solutions designed specifically for your unique business needs.', 
      longDescription: 'We specialize in building bespoke software solutions from the ground up. Our team works closely with you to understand your unique challenges and opportunities, delivering a product that is perfectly aligned with your vision. We handle the full lifecycle, from ideation and design to development, deployment, and support.',
      icon: <Code className="h-10 w-10"/>, 
      illustration: <CustomSoftwareIllustration />,
      subServices: ["Enterprise Software Development", "SaaS Application Development", "API & Systems Integration", "Product Prototyping & MVP", "Cloud-Native Applications"]
    },
    { 
      slug: 'devops', 
      title: 'DevOps & Cloud Solutions', 
      description: 'Accelerate your development lifecycle and improve application reliability with our DevOps expertise.', 
      longDescription: 'Our DevOps services help you build a culture of collaboration and automation, accelerating your development pipeline while improving security and reliability. We implement CI/CD, containerization, and infrastructure-as-code to ensure you can deliver high-quality software faster and more consistently.',
      icon: <Cloud className="h-10 w-10"/>, 
      illustration: <DevOpsIllustration />,
      subServices: ["CI/CD Pipeline Implementation", "Infrastructure as Code (IaC)", "Cloud Migration & Management", "Containerization (Docker, Kubernetes)", "Performance Monitoring & Optimization"]
    },
    { 
      slug: 'marketing', 
      title: 'Digital Marketing Services', 
      description: 'Grow your online presence and reach your target audience with our data-driven marketing strategies.', 
      longDescription: 'Our digital marketing services are designed to enhance your online visibility and drive measurable growth. We combine technical SEO, content marketing, and performance advertising to create a holistic strategy that attracts, engages, and converts your target audience, maximizing your return on investment.',
      icon: <Zap className="h-10 w-10"/>, 
      illustration: <MarketingIllustration />,
      subServices: ["Search Engine Optimization (SEO)", "Content Marketing", "Pay-Per-Click (PPC) Advertising", "Social Media Management", "Conversion Rate Optimization (CRO)"]
    }
];

export const industries = [
    { slug: 'fintech', title: 'Fintech', description: 'Secure, scalable, and compliant solutions for the financial industry.', icon: <ShieldCheck className="w-10 h-10"/>, illustration: <FintechIllustration />},
    { slug: 'logistics', title: 'Logistics', description: 'Optimizing supply chains with real-time tracking and automation.', icon: <ShoppingCart className="w-10 h-10"/>, illustration: <LogisticsIllustration /> },
    { slug: 'automotive', title: 'Automotive', description: 'Connected car platforms and dealership management systems.', icon: <Building className="w-10 h-10"/>, illustration: <AutomotiveIllustration /> },
    { slug: 'healthcare', title: 'Healthcare', description: 'HIPAA-compliant software for telehealth and patient management.', icon: <HeartPulse className="w-10 h-10"/>, illustration: <HealthcareIllustration /> },
    { slug: 'manufacturing', title: 'Manufacturing', description: 'IIoT solutions for smart factories and predictive maintenance.', icon: <Factory className="w-10 h-10"/>, illustration: <ManufacturingIllustration /> },
    { slug: 'oil-gas', title: 'Oil & Gas', description: 'Data analytics and automation for exploration and production.', icon: <Fuel className="w-10 h-10"/>, illustration: <OilGasIllustration /> },
    { slug: 'insurance', title: 'Insurance', description: 'AI-powered claims processing and policy management systems.', icon: <Shield className="w-10 h-10"/>, illustration: <InsuranceIllustration /> },
    { slug: 'travel', title: 'Travel & Hospitality', description: 'Booking engines, and guest management platforms.', icon: <Plane className="w-10 h-10"/>, illustration: <TravelIllustration /> },
    { slug: 'cybersecurity', title: 'Cybersecurity', description: 'Advanced threat detection and security automation tools.', icon: <ShieldCheck className="w-10 h-10"/>, illustration: <CybersecurityIllustration /> },
    { slug: 'ecommerce', title: 'E-commerce', description: 'Scalable online stores and AI-powered recommendation engines.', icon: <ShoppingCart className="w-10 h-10"/>, illustration: <EcommerceIllustration /> },
    { slug: 'education', title: 'Education', description: 'E-learning platforms and student information systems.', icon: <BookOpen className="w-10 h-10"/>, illustration: <EducationIllustration /> },
    { slug: 'media', title: 'Media & Entertainment', description: 'Content management systems and streaming platforms.', icon: <Clapperboard className="w-10 h-10"/>, illustration: <MediaIllustration /> },
    { slug: 'real-estate', title: 'Real Estate', description: 'Property management software and virtual tour solutions.', icon: <Home className="w-10 h-10"/>, illustration: <RealEstateIllustration /> },
    { slug: 'telecom', title: 'Telecommunications', description: 'Network management and customer support automation.', icon: <Phone className="w-10 h-10"/>, illustration: <TelecomIllustration /> },
    { slug: 'government', title: 'Government', description: 'Secure and efficient digital services for public sector agencies.', icon: <Building className="w-10 h-10"/>, illustration: <GovernmentIllustration /> }
];

export const portfolio = [
    { 
        slug: 'ai-learning-platform', 
        title: 'AI-Powered Adaptive Learning Platform', 
        category: 'Education Technology',
        excerpt: 'A platform that uses AI to create personalized learning paths for students, adapting to their pace and style for improved outcomes.',
        illustration: <AiLearningIllustration/>,
        details: {
            useCase: "AI Tutor & Course Builder",
            industry: "Education",
            headquarters: "San Francisco, USA",
            product: "Web & Mobile Platform",
            results: "40% increase in student engagement",
            timeline: "8 months",
        },
        summary: "We partnered with an EdTech visionary to build a platform that revolutionizes online learning. The system uses machine learning algorithms to analyze student performance in real-time, identifying strengths and weaknesses to dynamically adjust the curriculum. This ensures that every student receives a truly personalized education.",
        solutions: {
            forStudents: [
                { title: "Personalized Learning Paths", description: "The AI creates a unique learning journey for each student, focusing on areas that need improvement." },
                { title: "Interactive Content", description: "Engaging video lessons, quizzes, and assignments to make learning fun and effective." },
                { title: "Real-time Feedback", description: "Instant feedback on assignments helps students understand their mistakes and learn faster." },
            ],
            forAdmins: [
                 { title: "Automated Course Creation", description: "AI assists instructors in creating and structuring course content, saving time and effort." },
                 { title: "Performance Analytics", description: "A comprehensive dashboard provides deep insights into student performance and engagement." },
                 { title: "Secure & Scalable", description: "The platform is built on a modern, scalable architecture to handle a growing user base." },
            ]
        },
        usps: [
            { title: "Truly Adaptive Learning", description: "Unlike static courses, our platform continuously adapts to each student's needs, creating a more effective learning experience." },
            { title: "AI-Powered Content Curation", description: "The AI can suggest relevant articles, videos, and exercises from around the web to supplement the core curriculum." },
            { title: "Predictive Analytics", description: "The system can predict which students are at risk of falling behind, allowing instructors to intervene proactively." }
        ],
        techStack: ["Next.js", "React Native", "Python (Django)", "PostgreSQL", "TensorFlow", "AWS"],
        impacts: [
            { title: "Increased Engagement", description: "Gamified elements and personalized content led to a 40% increase in daily active users." },
            { title: "Improved Outcomes", description: "Students using the platform showed a 25% improvement in test scores compared to traditional online courses." }
        ],
        faq: [
            { question: "Is the platform mobile-friendly?", answer: "Yes, we developed both a responsive web application and native mobile apps for iOS and Android." },
            { question: "How does the AI personalization work?", answer: "It uses a combination of collaborative filtering and content-based models to recommend the most relevant learning materials for each student." }
        ],
        demoUrl: "https://www.youtube.com/@technext-096",
        purchaseUrl: "https://codecanyon.net/user/technext-96/portfolio"
    },
    { 
        slug: 'food-delivery-super-app', 
        title: 'Scalable Food Delivery Super App', 
        category: 'Logistics & E-commerce',
        excerpt: 'A comprehensive food delivery platform with separate apps for customers, restaurants, and drivers, all managed by a powerful admin panel.',
        illustration: <FoodDeliveryIllustration/>,
        summary: "This project involved creating a full-featured food delivery ecosystem. We built a customer-facing app for ordering, a restaurant app for managing menus and orders, a driver app for handling deliveries, and a central admin panel to oversee the entire operation. The system is designed for high scalability and performance.",
        keyFeatures: [
            "Real-time order tracking",
            "Multi-language and currency support",
            "Stripe and PayPal integration",
            "Push notifications for order status",
            "Driver location tracking",
            "Commission and payout management"
        ],
        demoUrl: "https://www.youtube.com/@technext-096",
    },
    { 
        slug: 'ai-powered-shopping-assistant', 
        title: 'AI-Powered Personal Shopping Assistant', 
        category: 'E-commerce & AI',
        excerpt: 'An AI chatbot that helps users find the perfect product through conversational search, offering personalized recommendations and style advice.',
        illustration: <AiShoppingIllustration/>,
        summary: "We developed an AI-driven chatbot for a major e-commerce platform to enhance the user shopping experience. The chatbot understands natural language queries, asks clarifying questions, and provides personalized product recommendations based on user preferences, browsing history, and current trends.",
        keyFeatures: [
            "Natural Language Understanding (NLU)",
            "Conversational product search",
            "Personalized recommendations",
            "Integration with e-commerce backend",
            "Style and fit advice",
            "Order tracking via chat"
        ]
    },
    { 
        slug: 'telehealth-chatbot', 
        title: 'HIPAA-Compliant Medical Chatbot', 
        category: 'Healthcare & AI',
        excerpt: 'An intelligent chatbot that provides initial patient screening, answers common medical questions, and schedules appointments, all within a secure, HIPAA-compliant environment.',
        illustration: <MedicalChatbotIllustration/>,
        summary: "Our team built a sophisticated medical chatbot for a healthcare provider to improve patient engagement and reduce the load on support staff. The chatbot is trained on a vast medical knowledge base and can handle a wide range of queries, from symptom checking to appointment booking, while ensuring patient data is always secure.",
        keyFeatures: [
            "HIPAA-compliant data handling",
            "AI-driven symptom checker",
            "Appointment scheduling",
            "Medication reminder notifications",
            "Integration with EHR systems",
            "24/7 patient support"
        ]
    }
];

export const blogPosts = [
    { 
        slug: 'quantum-computing-future', 
        title: 'Is Quantum Computing the Future of Everything?',
        excerpt: 'Quantum computing promises to solve problems that are currently intractable for even the most powerful supercomputers. But what is it, and how close are we to a quantum future?',
        category: 'Emerging Tech',
        author: 'Jane Doe',
        date: '2024-07-28',
        illustration: <QuantumIllustration/>,
    },
    { 
        slug: 'generative-ai-disruption', 
        title: 'The Generative AI Revolution: Reshaping Industries',
        excerpt: 'From code generation to art creation, generative AI is disrupting every industry. We explore the latest advancements and what they mean for your business.',
        category: 'Artificial Intelligence',
        author: 'John Smith',
        date: '2024-07-25',
        illustration: <GenAiIllustration/>,
    },
    { 
        slug: 'spatial-computing-next-frontier', 
        title: 'Spatial Computing: The Next Frontier After Mobile',
        excerpt: 'With the launch of new mixed-reality headsets, spatial computing is poised to become the next major computing platform. What is it and how can you prepare?',
        category: 'Future of UX/UI',
        author: 'Emily White',
        date: '2024-07-22',
        illustration: <SpatialIllustration/>,
    },
     {
        slug: "floating-whatsapp-fab",
        title: "How to Add a Floating WhatsApp FAB to Your Website",
        excerpt: "Boost conversions by adding a floating WhatsApp button with a pre-filled greeting to your website or app. Learn how in just 5 minutes.",
        category: "Web Development",
        author: "TechNext Team",
        date: "2024-08-04",
        illustration: <WhatsAppFabIllustration />,
    },
    {
        slug: "devops-culture-not-tools",
        title: "Why DevOps is a Culture, Not Just a Set of Tools",
        excerpt: "Many companies adopt DevOps tools but fail to see results. The key is fostering a culture of collaboration and shared responsibility. Here's how.",
        category: "DevOps & Cloud",
        author: "Alex Johnson",
        date: "2024-08-01",
        illustration: <DevopsCultureIllustration />,
    },
    {
        slug: "microservices-architecture-guide",
        title: "A Pragmatist's Guide to Microservices Architecture",
        excerpt: "Microservices offer scalability and flexibility, but they come with complexity. Is this architecture right for your project? A balanced look at the pros and cons.",
        category: "Software Architecture",
        author: "Samantha Lee",
        date: "2024-07-29",
        illustration: <MicroservicesIllustration />,
    },
    {
        slug: "serverless-future-of-cloud",
        title: "Serverless Computing: The End of Server Management?",
        excerpt: "Serverless is changing how we build and deploy applications, promising lower costs and infinite scalability. We dive into the benefits and the pitfalls.",
        category: "DevOps & Cloud",
        author: "David Chen",
        date: "2024-07-26",
        illustration: <ServerlessIllustration />,
    },
    {
        slug: "web3-beyond-the-hype",
        title: "Web3 and Decentralization: Beyond the Hype",
        excerpt: "What is Web3 really about? A look at the core technologies like blockchain and smart contracts, and their potential to build a more decentralized internet.",
        category: "Emerging Tech",
        author: "Maria Garcia",
        date: "2024-07-23",
        illustration: <Web3Illustration />,
    },
    {
        slug: "green-tech-sustainable-software",
        title: "Green Tech: Building Sustainable and Efficient Software",
        excerpt: "The carbon footprint of the tech industry is growing. Learn about the principles of green software engineering and how to build more sustainable applications.",
        category: "Software Engineering",
        author: "Chris Williams",
        date: "2024-07-20",
        illustration: <GreenTechIllustration />,
    },
    {
        slug: "no-code-low-code-revolution",
        title: "The No-Code/Low-Code Revolution: Who is it For?",
        excerpt: "No-code platforms are empowering non-developers to build applications. What does this mean for the future of software development and professional developers?",
        category: "Industry Trends",
        author: "Jessica Brown",
        date: "2024-07-17",
        illustration: <NoCodeIllustration />,
    }
];

export const homePageFaqs = [
    {
        question: "What kind of technologies do you specialize in?",
        answer: "We specialize in a wide range of modern technologies, including AI/ML (TensorFlow, PyTorch), web development (Next.js, React, Node.js), mobile development (React Native), and cloud/DevOps (Docker, Kubernetes, AWS, Google Cloud). We are always adapting to the latest, most effective tools for the job."
    },
    {
        question: "How does the offshore development model work?",
        answer: "Our offshore model provides you with dedicated, highly skilled developers who work as an extension of your team. We handle all the administrative and logistical aspects, allowing you to focus on your project. You get the talent you need at a competitive price, with full transparency and control."
    },
    {
        question: "What is your project management process like?",
        answer: "We follow an agile development methodology, typically using Scrum. This involves breaking the project into two-week sprints, with regular stand-ups, sprint planning, and retrospectives. This ensures continuous feedback, adaptability, and transparency throughout the project lifecycle."
    },
    {
        question: "How do you ensure the quality of the software you deliver?",
        answer: "Quality is at the core of our process. We employ a multi-layered approach including automated testing (unit, integration, end-to-end), manual testing, peer code reviews, and continuous integration/continuous deployment (CI/CD) pipelines to catch issues early and ensure a robust, reliable final product."
    },
    {
        question: "Can you take over an existing project?",
        answer: "Absolutely. We have extensive experience in taking over, modernizing, and scaling existing software projects. Our process begins with a thorough code audit and discovery phase to understand the current state of the application, after which we create a detailed plan for improvement and future development."
    }
];

export const valuePropositions = [
    {
        title: "Deep Technical Expertise",
        description: "Our team consists of highly skilled engineers who are experts in their fields. We are committed to staying at the forefront of technology to deliver innovative and effective solutions.",
        icon: <Code className="w-8 h-8"/>
    },
    {
        title: "Client-Centric Approach",
        description: "We believe in building true partnerships. We listen to your needs, understand your goals, and work collaboratively to ensure your success is our success.",
        icon: <Handshake className="w-8 h-8"/>
    },
    {
        title: "Transparent Communication",
        description: "We maintain open and honest communication throughout the entire project lifecycle. You’ll always know the status of your project and have a direct line to our team.",
        icon: <Newspaper className="w-8 h-8"/>
    },
     {
        title: "Agile & Adaptive",
        description: "We embrace agile methodologies to remain flexible and responsive to changing requirements. This allows us to deliver high-quality software faster and more efficiently.",
        icon: <Zap className="w-8 h-8"/>
    },
     {
        title: "Focus on ROI",
        description: "We are not just a technology vendor; we are a strategic partner invested in your growth. We focus on delivering solutions that provide a tangible return on your investment.",
        icon: <Lightbulb className="w-8 h-8"/>
    },
      {
        title: "End-to-End Solutions",
        description: "From initial concept and strategy to deployment and ongoing support, we provide a comprehensive range of services to cover all your digital needs.",
        icon: <Rocket className="w-8 h-8"/>
    }
];
