import {type NavLink} from './types';

export const services = [
  {
    slug: 'custom-software',
    title: 'Custom Software Development',
    description: 'We build tailored software solutions to meet your unique business needs, ensuring scalability and performance.',
    longDescription: 'Our custom software development service provides end-to-end solutions, from conceptualization and UI/UX design to development, deployment, and ongoing support. Whether you need a secure QR attendance system or a comprehensive carpooling platform, we deliver robust applications tailored to your requirements.',
    icon: 'customSoftware',
    illustration: 'customSoftware',
    subServices: ['Web Application Development', 'Enterprise Software', 'API Development', 'System Integration', 'Cloud-Native Applications']
  },
  {
    slug: 'ai-ml',
    title: 'AI and Machine Learning',
    description: 'As a leading AI development company, we build custom machine learning solutions and AI-powered products.',
    longDescription: 'As an AI solutions development company, we provide custom machine learning solutions that harness the power of artificial intelligence to drive efficiency and innovation. Understanding the importance of responsible technology, we also publish insights on topics like the business case for ethical AI.',
    icon: 'aiMl',
    illustration: 'aiMl',
    subServices: ['Custom Machine Learning Solutions', 'Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'AI Chatbots & Virtual Assistants']
  },
  {
    slug: 'intelligent-automation',
    title: 'Intelligent Automation',
    description: 'We streamline operations with AI business process automation that improves efficiency and reduces costs.',
    longDescription: 'Our Intelligent Automation services combine RPA with AI technologies to automate complex business processes, freeing up your team to focus on high-value activities.',
    icon: 'automation',
    illustration: 'automation',
    subServices: ['Robotic Process Automation (RPA)', 'AI Business Process Automation', 'n8n & Zapier Workflows', 'Automated Data Entry & Processing']
  },
  {
    slug: 'offshore-development',
    title: 'Offshore Development',
    description: 'Access a global talent pool and reduce development costs with our reliable offshore development services.',
    longDescription: 'Our Offshore Development service provides a strategic advantage by giving you access to a dedicated team of highly skilled developers, QA engineers, and project managers. We handle the recruitment, infrastructure, and administrative overhead, allowing you to scale your engineering capacity quickly and cost-effectively. Whether you need to augment your existing team or build a new product from scratch, our offshore model ensures quality, seamless communication, and a faster time-to-market.',
    icon: 'offshore',
    illustration: 'offshore',
    subServices: ['Dedicated Development Teams', 'Staff Augmentation', 'Full-Cycle Product Development', 'QA & Testing Services']
  },
  {
    slug: 'devops',
    title: 'DevOps & MLOps Services | TechNext',
    description: 'Accelerate your delivery lifecycle with our DevOps services, including CI/CD pipeline automation and MLOps.',
    longDescription: 'We provide end-to-end DevOps solutions to help you build, test, and release software faster. We also specialize in MLOps to streamline machine learning lifecycles.',
    icon: 'devops',
    illustration: 'devops',
    subServices: ['CI/CD Pipeline Implementation', 'Infrastructure as Code (IaC)', 'DevOps for ML (MLOps)', 'Containerization (Docker & Kubernetes)']
  },
  {
    slug: 'digital-marketing',
    title: 'Digital Marketing & SEO',
    description: 'Boost your online presence with our data-driven digital marketing and SEO services. We enhance visibility, attract customers, and deliver measurable results.',
    longDescription: 'Our digital marketing services are designed to increase your visibility, engagement, and conversions. We offer a full suite of services including SEO, and ASO.',
    icon: 'marketing',
    illustration: 'marketing',
    subServices: ['Search Engine Optimization (SEO)', 'App Store Optimization (ASO)', 'Content Marketing', 'Social Media Management', 'GEO-fencing']
  }
];

export const industries = [
  {slug: 'fintech', title: 'Fintech', description: 'Secure and scalable financial technology solutions.', icon: 'fintech', illustration: 'fintech'},
  {slug: 'logistics', title: 'Logistics', description: 'Optimizing supply chain and delivery operations.', icon: 'logistics', illustration: 'logistics'},
  {slug: 'automotive', title: 'Automotive', description: 'Connected car and fleet management systems, including white-label carpooling app solutions.', icon: 'automotive', illustration: 'automotive'},
  {slug: 'healthcare', title: 'Healthcare', description: 'HIPAA-compliant software for patient care.', icon: 'healthcare', illustration: 'healthcare'},
  {slug: 'manufacturing', title: 'Manufacturing', description: 'IIoT and smart factory automation solutions.', icon: 'manufacturing', illustration: 'manufacturing'},
  {slug: 'oil-gas', title: 'Oil & Gas', description: 'Digital solutions for energy sector efficiency.', icon: 'oilGas', illustration: 'oilGas'},
  {slug: 'insurance', title: 'Insurance', description: 'Modernizing policy and claims management.', icon: 'insurance', illustration: 'insurance'},
  {
    slug: 'travel-hospitality',
    title: 'Travel & Hospitality',
    description: 'Custom booking platforms and management systems, including innovative solutions for modern travel like our carpooling app for shared mobility.',
    icon: 'travel',
    illustration: 'travel'
  },
  {slug: 'cybersecurity', title: 'Cybersecurity', description: 'Building robust defense and threat detection systems, guided by the principles of ethical AI to ensure fairness and transparency.', icon: 'cybersecurity', illustration: 'cybersecurity'},
  {slug: 'ecommerce', title: 'E-commerce', description: 'Scalable online stores and marketplaces.', icon: 'ecommerce', illustration: 'ecommerce'},
  {slug: 'education', title: 'Education', description: 'E-learning platforms and student information systems, including modern tools like a secure QR attendance system.', icon: 'education', illustration: 'education'},
  {
    slug: 'media-entertainment',
    title: 'Media & Entertainment',
    description: 'Streaming solutions and content delivery networks. Our digital marketing services can help you reach a wider audience.',
    icon: 'media',
    illustration: 'media'
  },
  {slug: 'real-estate', title: 'Real Estate', description: 'Property management and virtual tour software.', icon: 'realEstate', illustration: 'realEstate'},
  {slug: 'telecom', title: 'Telecom', description: 'Network management and customer service platforms.', icon: 'telecom', illustration: 'telecom'},
  {
    slug: 'government',
    title: 'Government',
    description: 'Secure portals and digital services for citizens, such as proxy-proof QR attendance systems and robust cybersecurity solutions.',
    icon: 'government',
    illustration: 'government'
  }
];

export const solutions = [
  {
    slug: 'campix',
    title: 'CampiX.AI: Autonomous Ad Campaigns',
    category: 'AI Marketing',
    excerpt: 'An autonomous AI platform that launches, manages, and optimizes ad campaigns across all major platforms with zero human intervention.',
    summary: 'CampiX.AI is a revolutionary platform that acts as an autonomous marketing department. By simply defining a goal and a budget, the AI handles everything else: creative generation, audience targeting, A/B testing, and performance optimization, delivering superior ROI.',
    illustration: 'marketing'
  },
  {
    slug: 'n8n-whatsapp-automation',
    title: 'n8n WhatsApp Automation',
    category: 'Automation Solutions',
    excerpt: 'A powerful, self-hosted automation solution to connect WhatsApp with any app, streamlining your business communication and workflows.',
    summary: 'We provide expert services to design, build, and deploy custom automation workflows using n8n, with a focus on WhatsApp integration. This solution allows businesses to automate notifications, create chatbots, and manage leads without relying on expensive per-message platforms.',
    illustration: 'n8nWhatsapp'
  },
  {
    slug: 'carpooling-app',
    title: 'White-Label Carpooling App',
    category: 'Mobility Solutions',
    excerpt: 'Launch your own carpooling service with our ready-made, white-label solution, including mobile apps and a full admin panel.',
    summary: 'Our white-label carpooling platform provides entrepreneurs and businesses with a turnkey solution to enter the mobility market. The package includes customizable, cross-platform mobile apps for drivers and riders, and a comprehensive web-based admin panel to manage the entire operation.',
    illustration: 'rideshare'
  },
  {
    slug: 'qr-attendance',
    title: 'Proxy-Proof QR Attendance System',
    category: 'Business Tools',
    excerpt: "A secure, modern attendance system that prevents 'buddy punching' by using device and Wi-Fi verification.",
    summary: 'We developed a secure QR-based attendance system designed to eliminate time theft. By binding each user to a specific device and validating their check-in against an authorized Wi-Fi network or geolocation, our solution ensures that employees are physically present when they mark their attendance.',
    illustration: 'qrAttendance'
  },
  {
    slug: 'ai-powered-learning-platform',
    title: 'AI-Powered Learning Platform',
    category: 'Education Technology',
    excerpt: 'An adaptive learning platform that personalizes educational content for students using AI, improving engagement and outcomes.',
    summary: 'We developed a comprehensive e-learning platform that uses machine learning algorithms to create personalized learning paths for students. The system analyzes student performance in real-time and adjusts the curriculum to focus on areas needing improvement, while also providing advanced materials for students who are ahead. The platform includes interactive quizzes, video lessons, and collaborative projects, all managed through a user-friendly interface for students, teachers, and administrators.',
    illustration: 'aiLearning',
    keyFeatures: ['Personalized learning paths', 'Real-time performance analytics', 'Interactive content modules', 'Automated grading and feedback', 'Collaborative learning tools', 'Admin and teacher dashboards'],
    techStack: ['Next.js', 'Python (FastAPI)', 'PostgreSQL', 'Google Cloud', 'Genkit', 'Docker'],
    demoUrl: '/solutions/training-program',
    details: {
      industry: 'Education'
    }
  },
  {
    slug: 'medical-chatbot',
    title: 'HIPAA-Compliant Medical Chatbot',
    category: 'Healthcare',
    excerpt: 'A secure, AI-powered chatbot for preliminary symptom checking and appointment scheduling, compliant with healthcare regulations.',
    summary: "We designed and built a HIPAA-compliant medical chatbot to help patients get instant answers to their health concerns and book appointments. The chatbot uses a carefully trained NLP model to understand medical terminology, assess symptoms based on established protocols, and provide information on potential conditions. It guides users to the right specialist and schedules appointments directly into the clinic's management system, all within a secure and encrypted environment to protect patient data.",
    illustration: 'medicalChatbot',
    keyFeatures: ['HIPAA-compliant data handling', 'AI-driven symptom assessment', 'Automated appointment scheduling', 'Integration with EHR/EMR systems', 'Secure user authentication', 'Triage to human support when needed'],
    techStack: ['Genkit', 'Python (FastAPI)', 'PostgreSQL', 'React', 'AWS HIPAA-Eligible Services'],
    details: {
      industry: 'Healthcare'
    }
  },
  {
    slug: 'ai-personal-shopper',
    title: 'AI-Powered Personal Shopper for E-commerce',
    category: 'E-commerce',
    excerpt: 'An AI-driven chatbot that acts as a personal shopper, guiding users through product discovery and increasing conversion rates.',
    summary: "We integrated an intelligent chatbot into an existing e-commerce platform. Using Natural Language Processing (NLP) and Genkit, the chatbot understands user queries, asks clarifying questions, and provides personalized product recommendations based on style preferences, budget, and past behavior. The 'personal shopper' can also create complete outfits, find matching accessories, and notify users of sales on their favorite items, significantly enhancing the user experience and driving sales.",
    illustration: 'aiShopping',
    keyFeatures: ['Natural Language Understanding (NLU)', 'Personalized product recommendations', 'Style and preference analysis', 'Automated up-selling and cross-selling', 'Seamless integration with e-commerce platform', '24/7 customer assistance'],
    techStack: ['Genkit', 'Dialogflow', 'React', 'Node.js', 'Firebase'],
    details: {
      industry: 'E-commerce'
    }
  },
  {
    slug: 'food-delivery-marketplace',
    title: 'On-Demand Food Delivery Marketplace',
    category: 'Food & Beverage',
    excerpt: 'A scalable and feature-rich food delivery app connecting restaurants, delivery partners, and customers.',
    summary: 'This project involved creating a full-featured food delivery marketplace similar to Uber Eats. We built a customer-facing mobile app for browsing restaurants and ordering food, a restaurant portal for managing menus and orders, and a delivery partner app for accepting and completing deliveries. The system includes real-time order tracking, secure payment integration, and a sophisticated logistics engine to optimize delivery routes.',
    illustration: 'foodDelivery',
    keyFeatures: ['Real-time order tracking', 'Secure payment gateway integration', 'Restaurant and menu management', 'Driver dispatch and tracking system', 'Ratings and reviews system', 'Promotions and discount engine'],
    techStack: ['React Native', 'Node.js (Express)', 'MongoDB', 'Socket.io', 'Stripe', 'Google Maps API']
  }
];

// This is now legacy data. New blog posts are fetched from the database.
export const blogPosts: any[] = [];


export const navLinks: NavLink[] = [
  {
    title: 'Services',
    href: '/services',
    description: 'Explore our comprehensive technology solutions.',
    items: services.map(s => ({
      title: s.title,
      href: `/services/${s.slug}`,
      icon: s.icon,
      description: s.description
    }))
  },
  {
    title: 'Industries',
    href: '/industries',
    description: 'Discover how we solve challenges across various sectors.',
    items: industries.map(i => ({
      title: i.title,
      href: `/industries/${i.slug}`,
      icon: i.icon,
      description: i.description
    }))
  },
  {
    title: 'Our Work',
    href: '/solutions',
    description: 'See our success stories and client case studies.',
    items: [
      {title: 'Our Solutions', href: '/solutions', icon: 'briefcase', description: 'Explore our featured case studies.'},
      {title: 'AI Marketing Solution', href: '/solutions/campix', icon: 'rocket', description: 'An autonomous AI-powered ad campaign platform.'},
      {title: 'Carpooling App', href: '/solutions/carpooling-app', icon: 'car', description: 'A white-label solution to launch your own carpooling service.'},
      {title: 'QR Attendance System', href: '/solutions/qr-attendance', icon: 'qrCode', description: 'A proxy-proof attendance system with device verification.'},
      {title: 'Training Programs', href: '/solutions/training-program', icon: 'bookUser', description: 'Become a job-ready professional with our expert-led programs.'}
    ]
  },
  {
    title: 'Company',
    href: '/about',
    description: 'Learn more about our mission, team, and values.',
    items: [
      {title: 'About Us', href: '/about', icon: 'users', description: 'Our mission, vision, and values.'},
      {title: 'Careers', href: '/careers', icon: 'briefcase', description: 'Join our team of innovators.'},
      {title: 'Contact Us', href: '/contact', icon: 'mail', description: 'Get in touch with our experts.'}
    ]
  },
  {
    title: 'Blog',
    href: '/blog'
  }
];
