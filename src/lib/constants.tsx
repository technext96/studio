

import { Code, Smartphone, Cloud, Bot, BrainCircuit, PencilRuler, Zap, Users, ShieldCheck, ShoppingCart, BookOpen, Building, HeartPulse, Factory, Fuel, Shield, Plane, GraduationCap, Clapperboard, Home, Phone, Briefcase, Handshake, Cog, Group, Newspaper, Lightbulb, Rocket, Video, Car, QrCode, MessageSquare } from 'lucide-react';

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
            { title: "DevOps", href: "/services/devops", icon: <Cloud />, description: "Accelerate your development lifecycle." },
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
            { title: "Manufacturing", href: "/industries/manufacturing", icon: <Factory />, description: "Enhancing production and efficiency." },
            { title: "Retail & eCommerce", href: "/industries/ecommerce", icon: <ShoppingCart />, description: "Creating seamless shopping experiences." },
            { title: "Education", href: "/industries/education", icon: <GraduationCap />, description: "Empowering learning with AI." },
        ]
    },
    {
        title: "Our Work",
        href: "/portfolio",
        description: "Our success stories and client achievements.",
        items: [
             { title: "White-Label Carpooling App", href: "/solutions/carpooling-app", icon: <Car />, description: "Launch your own carpooling startup in a box. No coding needed." },
             { title: "QR Attendance System", href: "/solutions/qr-attendance", icon: <QrCode />, description: "A white-label QR code attendance system for events and businesses." },
             { title: "AI On-Demand Learning Platform", href: "/portfolio/ai-on-demand-learning-platform", icon: <GraduationCap />, description: "Overcoming Barriers to Traditional Coaching with AI-Powered On-Demand Learning." },
             { title: "Enatega Food Delivery", href: "/portfolio/enatega-food-delivery", icon: <ShoppingCart />, description: "The leading open-source food delivery solution for cafes and restaurants." },
             { title: "AI-Powered Shopping and Cooking", href: "/portfolio/ai-shopping-cooking", icon: <ShoppingCart />, description: "Enhancing grocery experiences with AI for personalized recommendations." },
             { title: "Medical Insights Chatbot", href: "/portfolio/medical-insights-chatbot", icon: <HeartPulse />, description: "Providing breast cancer patients with secure and evidence-based answers." },
        ]
    },
    {
        title: "Resources",
        href: "/blog",
        description: "Insights and knowledge from our experts.",
        items: [
             { title: "Blog", href: "/blog", icon: <Newspaper />, description: "Expert articles on AI, RPA, and custom software development." },
             { title: "Courses", href: "/blog", icon: <Video />, description: "Upskill your team with our hands-on tech courses and workshops." },
             { title: "Tech Insights", href: "/blog", icon: <Lightbulb />, description: "Gain expert analysis on AI trends and actionable strategies." },
             { title: "Startup Chronicles", href: "/blog", icon: <Rocket />, description: "Discover valuable ideas and tips for startup success." },
        ]
    },
    {
        title: "Company",
        href: "/about",
        description: "We’re More Than a Team, We’re a Family. Expertly crafting reliable, scalable solutions focused on your long-term success.",
        image: <TeamIllustration />,
        items: [
            { title: "About Us", href: "/about", icon: <Users />, description: "Solving business challenges through intelligent software solutions." },
            { title: "Careers", href: "/careers", icon: <Briefcase />, description: "Join a forward-thinking team that is building the future of software solutions." },
            { title: "Contact Us", href: "/contact", icon: <Phone />, description: "Have questions in your mind, we are just a click away! Get in touch now." },
            { title: "Photo Example", href: "/photo-example", icon: <Code />, description: "Learn how to add photos to your website." },
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
    illustration: <AiMlIllustration />,
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
    illustration: <AutomationIllustration />,
    subServices: ["RPA Consulting & Integration", "HubSpot Automation", "Zoho Automation", "UIpath Development", "Opensource RPA Solutions"]
  },
  {
    slug: 'offshore',
    title: 'Offshore Software Development',
    categoryFilter: 'Talent',
    description: 'Scale your team with our top-tier offshore developers and dedicated development teams.',
    longDescription: "Augment your team with our pre-vetted, elite tech professionals. We provide dedicated development teams and individual experts to help you accelerate your projects and scale your operations without the overhead of traditional hiring.",
    icon: <Group className="w-10 h-10" />,
    illustration: <OffshoreIllustration />,
    subServices: ["Hire Developers", "Offshore Development Services", "Dedicated Development Team"]
  },
  {
    slug: 'custom-software',
    title: 'Custom Software Development',
    categoryFilter: 'Web',
    description: 'Bespoke web, mobile, and MVP solutions built to meet your specific business objectives.',
    longDescription: "We build tailored software solutions from the ground up to meet your unique business challenges. From rapid MVP development to scalable enterprise applications, our custom solutions are designed for performance, scalability, and success.",
    icon: <Code className="w-10 h-10" />,
    illustration: <CustomSoftwareIllustration />,
    subServices: ["MVP Development & Consulting", "Custom Web App Development", "Mobile App Development", "Job Portal Development"]
  },
  {
    slug: 'devops',
    title: 'DevOps',
    categoryFilter: 'DevOps',
    description: 'Accelerate your software delivery lifecycle with our comprehensive DevOps services.',
    longDescription: "Our DevOps services bridge the gap between development and operations, enabling faster, more reliable software delivery. We implement CI/CD pipelines, containerization, and cloud automation to streamline your entire development lifecycle.",
    icon: <Cloud className="w-10 h-10" />,
    illustration: <DevOpsIllustration />,
    subServices: ["CI/CD Pipeline Implementation", "Infrastructure as Code (IaC)", "Containerization (Docker, Kubernetes)", "Cloud Automation", "Monitoring & Logging"]
  },
  {
    slug: 'marketing',
    title: 'Marketing Services',
    categoryFilter: 'Marketing',
    description: 'Data-driven digital marketing and automation services to fuel your growth.',
    longDescription: "Power your growth with our expert marketing services. We specialize in marketing automation, HubSpot services, and data-driven digital marketing campaigns to help you attract, engage, and delight your customers.",
    icon: <Zap className="w-10 h-10" />,
    illustration: <MarketingIllustration />,
    subServices: ["HubSpot Services", "Marketing Automation", "Digital Marketing Strategy"]
  },
];

export const industries = [
    { slug: "fintech", title: "Fintech", icon: <ShieldCheck/>, illustration: <FintechIllustration/>, description: "We deliver secure, compliant, and innovative digital solutions for the financial industry. Our expertise in blockchain, AI, and mobile banking helps clients navigate the complex world of finance, from payment gateways to algorithmic trading platforms, ensuring robust security and a seamless user experience." },
    { slug: "logistics", title: "Logistics", icon: <ShoppingCart/>, illustration: <LogisticsIllustration/>, description: "Our solutions optimize supply chains with real-time tracking, warehouse management systems, and predictive analytics for demand forecasting. We help logistics companies enhance efficiency, reduce costs, and improve delivery times through intelligent automation and data-driven insights." },
    { slug: "automotive", title: "Automotive", icon: <Building/>, illustration: <AutomotiveIllustration/>, description: "We develop connected car platforms, fleet management software, and dealership management systems that drive the automotive industry forward. Our expertise in IoT, telematics, and data analytics enables us to build solutions that enhance vehicle performance, safety, and the driver experience." },
    { slug: "healthcare", title: "Healthcare", icon: <HeartPulse/>, illustration: <HealthcareIllustration/>, description: "We create HIPAA-compliant software, telemedicine platforms, and AI-powered diagnostic tools to revolutionize patient care. Our solutions improve clinical workflows, secure patient data, and facilitate remote consultations, making healthcare more accessible and efficient." },
    { slug: "manufacturing", title: "Manufacturing", icon: <Factory/>, illustration: <ManufacturingIllustration/>, description: "We build IIoT solutions, process automation software, and smart factory management systems to optimize production. By leveraging data analytics and machine learning, we help manufacturers implement predictive maintenance, improve quality control, and streamline their operations for Industry 4.0." },
    { slug: "oil-gas", title: "Oil and Gas", icon: <Fuel/>, illustration: <OilGasIllustration/>, description: "Our digital solutions for the oil and gas sector include digital twin technology, predictive maintenance platforms, and energy trading systems. We help companies optimize asset performance, enhance safety, and make data-driven decisions in a volatile market." },
    { slug: "insurance", title: "Insurance", icon: <Shield/>, illustration: <InsuranceIllustration/>, description: "We build modern insurtech platforms, policy management systems, and AI-powered claims processing applications. Our solutions help insurers automate underwriting, detect fraud, and deliver personalized customer experiences in a competitive digital landscape." },
    { slug: "travel", title: "Travel", icon: <Plane/>, illustration: <TravelIllustration/>, description: "We create custom booking engines, travel management software, and personalized itinerary planners for the travel industry. Our solutions leverage AI to offer tailored recommendations, streamline reservations, and enhance the overall travel experience for customers." },
    { slug: "cybersecurity", title: "Cybersecurity", icon: <ShieldCheck/>, illustration: <CybersecurityIllustration/>, description: "We develop advanced threat detection platforms, security automation tools, and secure software solutions to protect businesses from cyber threats. Our expertise in encryption, threat intelligence, and secure coding practices ensures the integrity and resilience of your digital assets." },
    { slug: "ecommerce", title: "Retail & eCommerce", icon: <ShoppingCart/>, illustration: <EcommerceIllustration/>, description: "We build custom e-commerce platforms, AI-driven recommendation engines, and personalized shopping experiences that boost sales. Our solutions integrate seamlessly with inventory management, payment gateways, and CRM systems to create a unified and engaging retail ecosystem." },
    { slug: "education", title: "Education", icon: <BookOpen/>, illustration: <EducationIllustration/>, description: "We design e-learning platforms, student information systems, and AI-powered tutoring applications to transform the educational landscape. Our technology fosters personalized learning, simplifies administration, and makes education more accessible and engaging for students of all ages." },
    { slug: "media-entertainment", title: "Media & Entertainment", icon: <Clapperboard/>, illustration: <MediaIllustration/>, description: "We build robust streaming platforms, content management systems (CMS), and royalty management software for the media industry. Our solutions support high-quality content delivery, digital rights management, and audience engagement analytics to help creators and distributors thrive." },
    { slug: "real-estate", title: "Real Estate", icon: <Home/>, illustration: <RealEstateIllustration/>, description: "We develop property management software, VR property tours, and real estate analytics platforms that are changing the way people buy and sell property. Our technology provides immersive experiences, simplifies transactions, and offers data-driven insights for agents, buyers, and sellers." },
    { slug: "telecom", title: "Telecommunication", icon: <Phone/>, illustration: <TelecomIllustration/>, description: "Our solutions for the telecommunications industry include OSS/BSS systems, network management tools, and customer self-service portals. We help telecom companies automate operations, manage network infrastructure, and improve the customer experience in a rapidly evolving sector." },
    { slug: "government", title: "Government", icon: <Building/>, illustration: <GovernmentIllustration/>, description: "We drive digital transformation for public services with secure data management solutions, citizen engagement platforms, and streamlined administrative systems. Our technology helps government agencies improve efficiency, transparency, and the delivery of services to the public." },
];

export const portfolio = [
  {
    slug: 'ai-on-demand-learning-platform',
    title: 'AI-Powered On-Demand Learning Platform',
    category: 'On-demand eLearning & AI',
    excerpt: 'Overcoming Barriers to Traditional Coaching with AI-Powered On-Demand Learning.',
    illustration: <AiLearningIllustration/>,
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
    illustration: <FoodDeliveryIllustration/>,
    demoUrl: '#',
    purchaseUrl: '#',
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
    ],
    faq: [
        { question: "Is your solution completely open-source?", answer: "Enatega’s frontend is fully open-source. Our backend, though proprietary, is shared with you during every new release, ensuring your system remains updated." },
        { question: "What is Enatega and how does it work?", answer: "Enatega is a full-fledged food delivery solution that includes a customer app, rider app, restaurant app, and a powerful admin dashboard to manage the entire ecosystem." },
        { question: "Does your solution offer customization?", answer: "Yes, absolutely. With full source code ownership, you can customize the platform to fit your specific business needs. We also partner with Ninjas Code for expert customization services." },
        { question: "Where can I find tutorials & demo guides?", answer: "We provide live demos and thorough documentation to give you a complete overview of how Enatega works, ensuring you can set up with confidence." },
        { question: "Can the software be used for any location?", answer: "Yes, Enatega is location-agnostic and supports multiple currencies, making it suitable for businesses anywhere in the world." },
        { question: "Does the software support cash payments? What payment methods are supported?", answer: "Yes, it supports cash on delivery. It also integrates with major payment gateways like Stripe and PayPal for credit/debit card payments." },
        { question: "Can I make changes to the app myself?", answer: "Yes, you receive the full source code, allowing you or your development team to make any changes you need." },
        { question: "What kind of support do you offer after the purchase?", answer: "We offer 2 hours of free technical consultation for deployment or configuration. For further support, we have dedicated plans and also offer assistance through our partners." },
        { question: "Are there any ongoing updates or maintenance plans available?", answer: "You get free lifetime updates with your purchase. We continually roll out new features and security patches to keep your platform modern and secure." },
        { question: "Once I purchase the backend license, does Enatega have any claims to the ownership?", answer: "No. Once you purchase, you have complete ownership of the code and the platform. There are no recurring fees or claims from our side." },
    ]
  },
  {
    slug: 'ai-shopping-cooking',
    title: 'AI-Powered Shopping and Cooking',
    category: 'Retail & AI',
    excerpt: 'Enhancing grocery shopping experiences with an AI assistant for personalized recommendations and recipe generation.',
    illustration: <AiShoppingIllustration/>,
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
    slug: 'medical-insights-chatbot',
    title: 'Instant Medical Insights via AI Chatbot',
    category: 'Healthcare & AI',
    excerpt: 'Providing breast cancer patients with secure and evidence-based answers to their most pressing questions.',
    illustration: <MedicalChatbotIllustration/>,
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
    slug: 'floating-whatsapp-fab',
    title: 'How to Add a Floating WhatsApp FAB to Your Website or App',
    category: 'Tutorial',
    author: 'TechNext Team',
    date: '2025-08-04',
    excerpt: 'Boost your conversions by adding a floating WhatsApp button with a pre-filled greeting to your website or mobile app. Learn how in just 5 minutes.',
    illustration: <WhatsAppFabIllustration/>,
  },
  {
    slug: 'quantum-computing-explained',
    title: 'Quantum Computing: The Next Frontier',
    category: 'Future Tech',
    author: 'Dr. Evelyn Reed',
    date: '2024-07-22',
    excerpt: 'A beginner-friendly dive into the mind-bending world of quantum computing and its potential to revolutionize industries.',
    illustration: <QuantumIllustration/>,
  },
  {
    slug: 'building-with-gen-ai',
    title: 'Practical Generative AI: From Prompts to Products',
    category: 'AI/ML',
    author: 'Jian Li',
    date: '2024-07-15',
    excerpt: 'Learn how to leverage large language models to build real-world applications that are both smart and scalable.',
    illustration: <GenAiIllustration/>,
  },
  {
    slug: 'the-rise-of-spatial-computing',
    title: 'The Rise of Spatial Computing',
    category: 'Web Development',
    author: 'Alex Chen',
    date: '2024-07-05',
    excerpt: 'Exploring how WebXR and new hardware are merging the digital and physical worlds, creating new immersive experiences.',
    illustration: <SpatialIllustration/>,
  },
];

export const homePageFaqs = [
    {
        question: "What is your development process like?",
        answer: "We follow an agile development methodology that allows for flexibility, transparency, and collaboration. Our process is divided into sprints, typically lasting two weeks, which include planning, design, development, testing, and a client review. This iterative approach ensures your project stays on track and you are involved at every stage."
    },
    {
        question: "How long will it take to build my application?",
        answer: "The timeline for a project varies greatly depending on its complexity, features, and the technologies involved. A simple MVP (Minimum Viable Product) might take 2-3 months, while a more complex enterprise-level application could take 6-12 months or more. After our initial discovery call, we can provide you with a detailed project roadmap and a more accurate timeline."
    },
    {
        question: "How much will my project cost?",
        answer: "Project costs are determined by the scope of work, the technology stack, and the team size required. We offer flexible engagement models, including fixed-price contracts for well-defined projects and time-and-materials for more dynamic requirements. We provide a detailed, transparent proposal after our initial consultation so you know exactly what to expect."
    },
    {
        question: "What kind of technologies do you specialize in?",
        answer: "We are a full-stack development agency with expertise in a wide range of modern technologies. Our core strengths are in building web and mobile applications using frameworks like Next.js and React, and we are specialists in integrating AI and Machine Learning using toolkits like Genkit. We always choose the best technology to fit the unique needs of your project."
    },
    {
        question: "Do you provide support and maintenance after the project is launched?",
        answer: "Yes, our partnership doesn't end at launch. We offer comprehensive support and maintenance packages to ensure your application remains secure, up-to-date, and performs optimally. We can provide ongoing technical support, bug fixes, performance monitoring, and help you plan and develop new features as your business grows."
    }
];
