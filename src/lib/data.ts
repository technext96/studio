
import { type NavLink } from './types';

export const services = [
    {
        slug: "custom-software",
        title: "Custom Software Development",
        description: "We build tailored software solutions to meet your unique business needs, ensuring scalability and performance.",
        longDescription: "Our custom software development service provides end-to-end solutions, from conceptualization and UI/UX design to development, deployment, and ongoing support. We specialize in creating robust, scalable, and secure applications that are perfectly aligned with your business objectives.",
        icon: "customSoftware",
        illustration: "customSoftware",
        subServices: ["Web Application Development", "Enterprise Software", "API Development", "System Integration", "Cloud-Native Applications"]
    },
    {
        slug: "ai-ml",
        title: "AI and Machine Learning",
        description: "Leverage the power of AI to automate processes, gain insights from data, and create intelligent products.",
        longDescription: "We help you harness the transformative power of Artificial Intelligence and Machine Learning. Our expertise includes developing intelligent automation systems, predictive analytics models, natural language processing (NLP) applications, and computer vision solutions to drive efficiency and innovation.",
        icon: "aiMl",
        illustration: "aiMl",
        subServices: ["Intelligent Automation (RPA)", "Predictive Analytics", "Natural Language Processing", "Computer Vision", "AI Chatbots & Virtual Assistants"]
    },
    {
        slug: "intelligent-automation",
        title: "Intelligent Automation",
        description: "Streamline your business operations with our intelligent automation solutions that improve efficiency and reduce costs.",
        longDescription: "Our Intelligent Automation services combine RPA, AI, and machine learning to automate complex business processes. We help you eliminate manual tasks, reduce human error, and free up your team to focus on high-value activities, leading to significant improvements in productivity and cost savings.",
        icon: "automation",
        illustration: "automation",
        subServices: ["Robotic Process Automation (RPA)", "Business Process Automation (BPA)", "Workflow Automation", "Automated Data Entry & Processing"]
    },
    {
        slug: "offshore-development",
        title: "Offshore Development",
        description: "Access a global talent pool and reduce development costs with our reliable offshore development services.",
        longDescription: "Our Offshore Development services provide you with access to a dedicated team of highly skilled developers, designers, and project managers. We offer a flexible and cost-effective way to scale your development capabilities without compromising on quality, communication, or transparency.",
        icon: "offshore",
        illustration: "offshore",
        subServices: ["Dedicated Development Teams", "Staff Augmentation", "Full-Cycle Product Development", "QA & Testing Services"]
    },
    {
        slug: "devops",
        title: "DevOps",
        description: "Accelerate your software delivery lifecycle with our comprehensive DevOps services, from CI/CD to cloud management.",
        longDescription: "We provide end-to-end DevOps solutions to help you build, test, and release software faster and more reliably. Our services include setting up CI/CD pipelines, automating infrastructure with IaC, and managing cloud environments to ensure high availability and scalability.",
        icon: "devops",
        illustration: "devops",
        subServices: ["CI/CD Pipeline Implementation", "Infrastructure as Code (IaC)", "Cloud Migration & Management", "Containerization (Docker & Kubernetes)"]
    },
    {
        slug: "digital-marketing",
        title: "Digital Marketing & SEO",
        description: "Enhance your online presence, attract more customers, and grow your business with our data-driven marketing strategies.",
        longDescription: "Our digital marketing services are designed to increase your visibility, engagement, and conversions. We offer a full suite of services including SEO, content marketing, and social media management, all tailored to your specific business goals and target audience.",
        icon: "marketing",
        illustration: "marketing",
        subServices: ["Search Engine Optimization (SEO)", "App Store Optimization (ASO)", "Content Marketing", "Social Media Management", "GEO-fencing"]
    }
];

export const industries = [
    { slug: "fintech", title: "Fintech", description: "Secure and scalable financial technology solutions.", icon: "fintech", illustration: "fintech" },
    { slug: "logistics", title: "Logistics", description: "Optimizing supply chain and delivery operations.", icon: "logistics", illustration: "logistics" },
    { slug: "automotive", title: "Automotive", description: "Connected car and fleet management systems.", icon: "automotive", illustration: "automotive" },
    { slug: "healthcare", title: "Healthcare", description: "HIPAA-compliant software for patient care.", icon: "healthcare", illustration: "healthcare" },
    { slug: "manufacturing", title: "Manufacturing", description: "IIoT and smart factory automation solutions.", icon: "manufacturing", illustration: "manufacturing" },
    { slug: "oil-gas", title: "Oil & Gas", description: "Digital solutions for energy sector efficiency.", icon: "oilGas", illustration: "oilGas" },
    { slug: "insurance", title: "Insurance", description: "Modernizing policy and claims management.", icon: "insurance", illustration: "insurance" },
    { slug: "travel", title: "Travel & Hospitality", description: "Booking platforms and guest management.", icon: "travel", illustration: "travel" },
    { slug: "cybersecurity", title: "Cybersecurity", description: "Building robust defense and threat detection systems.", icon: "cybersecurity", illustration: "cybersecurity" },
    { slug: "ecommerce", title: "E-commerce", description: "Scalable online stores and marketplaces.", icon: "ecommerce", illustration: "ecommerce" },
    { slug: "education", title: "Education", description: "E-learning platforms and student information systems.", icon: "education", illustration: "education" },
    { slug: "media", title: "Media & Entertainment", description: "Streaming solutions and content delivery networks.", icon: "media", illustration: "media" },
    { slug: "real-estate", title: "Real Estate", description: "Property management and virtual tour software.", icon: "realEstate", illustration: "realEstate" },
    { slug: "telecom", title: "Telecom", description: "Network management and customer service platforms.", icon: "telecom", illustration: "telecom" },
    { slug: "government", title: "Government", description: "Secure portals and digital services for citizens.", icon: "government", illustration: "government" },
];

export const portfolio = [
    {
        slug: "ai-powered-learning-platform",
        title: "AI-Powered Learning Platform",
        category: "Education Technology",
        excerpt: "An adaptive learning platform that personalizes educational content for students using AI, improving engagement and outcomes.",
        summary: "We developed a comprehensive e-learning platform that uses machine learning algorithms to create personalized learning paths for students. The system analyzes student performance in real-time and adjusts the curriculum to focus on areas needing improvement, while also providing advanced materials for students who are ahead. The platform includes interactive quizzes, video lessons, and collaborative projects, all managed through a user-friendly interface for students, teachers, and administrators.",
        illustration: "aiLearning",
        keyFeatures: [
            "Personalized learning paths",
            "Real-time performance analytics",
            "Interactive content modules",
            "Automated grading and feedback",
            "Collaborative learning tools",
            "Admin and teacher dashboards"
        ],
        techStack: ["Next.js", "Python (FastAPI)", "PostgreSQL", "Google Cloud", "Genkit", "Docker"],
        demoUrl: "/solutions/training-program",
    },
    {
        slug: "food-delivery-marketplace",
        title: "On-Demand Food Delivery Marketplace",
        category: "Food & Beverage",
        excerpt: "A scalable and feature-rich food delivery app connecting restaurants, delivery partners, and customers.",
        summary: "This project involved creating a full-featured food delivery marketplace similar to Uber Eats. We built a customer-facing mobile app for browsing restaurants and ordering food, a restaurant portal for managing menus and orders, and a delivery partner app for accepting and completing deliveries. The system includes real-time order tracking, secure payment integration, and a sophisticated logistics engine to optimize delivery routes.",
        illustration: "foodDelivery",
        keyFeatures: [
            "Real-time order tracking",
            "Secure payment gateway integration",
            "Restaurant and menu management",
            "Driver dispatch and tracking system",
            "Ratings and reviews system",
            "Promotions and discount engine"
        ],
        techStack: ["React Native", "Node.js (Express)", "MongoDB", "Socket.io", "Stripe", "Google Maps API"]
    },
    {
        slug: "ai-personal-shopper",
        title: "AI-Powered Personal Shopper for E-commerce",
        category: "E-commerce",
        excerpt: "An AI-driven chatbot that acts as a personal shopper, guiding users through product discovery and increasing conversion rates.",
        summary: "We integrated an intelligent chatbot into an existing e-commerce platform. Using Natural Language Processing (NLP) and Genkit, the chatbot understands user queries, asks clarifying questions, and provides personalized product recommendations based on style preferences, budget, and past behavior. The 'personal shopper' can also create complete outfits, find matching accessories, and notify users of sales on their favorite items, significantly enhancing the user experience and driving sales.",
        illustration: "aiShopping",
        keyFeatures: [
            "Natural Language Understanding (NLU)",
            "Personalized product recommendations",
            "Style and preference analysis",
            "Automated up-selling and cross-selling",
            "Seamless integration with e-commerce platform",
            "24/7 customer assistance"
        ],
        techStack: ["Genkit", "Dialogflow", "React", "Node.js", "Firebase"]
    },
    {
        slug: "medical-chatbot",
        title: "HIPAA-Compliant Medical Chatbot",
        category: "Healthcare",
        excerpt: "A secure, AI-powered chatbot for preliminary symptom checking and appointment scheduling, compliant with healthcare regulations.",
        summary: "We designed and built a HIPAA-compliant medical chatbot to help patients get instant answers to their health concerns and book appointments. The chatbot uses a carefully trained NLP model to understand medical terminology, assess symptoms based on established protocols, and provide information on potential conditions. It guides users to the right specialist and schedules appointments directly into the clinic's management system, all within a secure and encrypted environment to protect patient data.",
        illustration: "medicalChatbot",
        keyFeatures: [
            "HIPAA-compliant data handling",
            "AI-driven symptom assessment",
            "Automated appointment scheduling",
            "Integration with EHR/EMR systems",
            "Secure user authentication",
            "Triage to human support when needed"
        ],
        techStack: ["Genkit", "Python (FastAPI)", "PostgreSQL", "React", "AWS HIPAA-Eligible Services"]
    }
];

export const blogPosts = [
    {
        slug: 'quantum-computing-explained',
        title: 'Quantum Computing: The Next Leap in Technology',
        author: 'Jane Doe',
        date: '2024-05-15',
        category: 'Emerging Tech',
        excerpt: 'An introduction to the mind-bending world of quantum computing and its potential to revolutionize industries.',
        illustration: "quantum"
    },
    {
        slug: 'generative-ai-in-business',
        title: 'How Generative AI is Transforming Business Operations',
        author: 'John Smith',
        date: '2024-05-20',
        category: 'Artificial Intelligence',
        excerpt: 'Explore the practical applications of generative AI, from content creation to product design, and how it can drive efficiency.',
        illustration: "genAi"
    },
    {
        slug: 'the-rise-of-spatial-computing',
        title: 'The Rise of Spatial Computing and the Metaverse',
        author: 'Emily White',
        date: '2024-05-25',
        category: 'Future of UX',
        excerpt: 'A look into how spatial computing is blurring the lines between the digital and physical worlds, creating new immersive experiences.',
        illustration: "spatial"
    },
    {
        slug: 'whatsapp-fab-best-practices',
        title: 'Why a WhatsApp FAB is a Must-Have for Your Website',
        author: 'Alex Green',
        date: '2024-06-01',
        category: 'User Engagement',
        excerpt: 'Discover how a simple floating action button for WhatsApp can dramatically improve customer engagement and lead generation.',
        illustration: "whatsappFab"
    },
    {
        slug: 'devops-culture-and-tools',
        title: 'More Than Just Tools: The Real Meaning of DevOps Culture',
        author: 'Samantha Blue',
        date: '2024-06-05',
        category: 'DevOps',
        excerpt: 'Explore the collaborative principles and cultural shifts that are essential for a successful DevOps transformation.',
        illustration: "devopsCulture"
    },
    {
        slug: 'microservices-vs-monoliths',
        title: 'Microservices vs. Monolith: Choosing the Right Architecture',
        author: 'David Chen',
        date: '2024-06-10',
        category: 'Software Architecture',
        excerpt: 'A detailed comparison of microservices and monolithic architectures to help you decide which is best for your next project.',
        illustration: "microservices"
    },
    {
        slug: 'introduction-to-serverless',
        title: 'Serverless Computing: The Future of Cloud Infrastructure',
        author: 'Maria Garcia',
        date: '2024-06-15',
        category: 'Cloud Computing',
        excerpt: 'An introduction to serverless architecture, its benefits, and how it can help you reduce costs and scale more efficiently.',
        illustration: "serverless"
    },
    {
        slug: 'web3-and-decentralization',
        title: 'Understanding Web3: A Beginner\'s Guide to the Decentralized Web',
        author: 'Chris Lee',
        date: '2024-06-20',
        category: 'Web3 & Blockchain',
        excerpt: 'Demystifying the concepts behind Web3, from blockchain and smart contracts to dApps and DAOs.',
        illustration: "web3"
    },
    {
        slug: 'green-tech-sustainability',
        title: 'The Role of Green Tech in a Sustainable Future',
        author: 'Olivia Brown',
        date: '2024-06-25',
        category: 'Tech Insights',
        excerpt: 'How technology is being used to address environmental challenges, from renewable energy to sustainable agriculture.',
        illustration: "greenTech"
    },
    {
        slug: 'no-code-low-code-revolution',
        title: 'The No-Code/Low-Code Revolution: Empowering Citizen Developers',
        author: 'Ben Carter',
        date: '2024-07-01',
        category: 'Startup Chronicles',
        excerpt: 'An analysis of how no-code and low-code platforms are democratizing software development and accelerating innovation.',
        illustration: "noCode"
    },
    {
        slug: 'ethics-of-ai',
        title: 'Navigating the Gray: The Ethics of Artificial Intelligence',
        author: 'Dr. Evelyn Reed',
        date: '2024-07-05',
        category: 'Tech Insights',
        excerpt: 'A deep dive into the ethical considerations of AI, including bias, transparency, and accountability in algorithmic decision-making.',
        illustration: "ethicalAi"
    },
    {
        slug: 'data-privacy-in-digital-age',
        title: 'Data Privacy in the Digital Age: Why It Matters More Than Ever',
        author: 'Mark Johnson',
        date: '2024-07-10',
        category: 'Cybersecurity',
        excerpt: 'Exploring the importance of data privacy, the impact of regulations like GDPR, and how businesses can build trust with their users.',
        illustration: "dataPrivacy"
    },
    {
        slug: 'bootstrapping-vs-vc-funding',
        title: 'Bootstrapping vs. VC Funding: Which Path Is Right for Your Startup?',
        author: 'Jessica Williams',
        date: '2024-07-15',
        category: 'Startup Chronicles',
        excerpt: 'A founder\'s guide to the pros and cons of bootstrapping versus raising venture capital to fund your new business.',
        illustration: "funding"
    },
    {
        slug: 'scaling-saas-product',
        title: 'From 10 to 10,000 Users: Key Strategies for Scaling a SaaS Product',
        author: 'Tom Davis',
        date: '2024-07-20',
        category: 'Startup Chronicles',
        excerpt: 'Learn about the technical and business strategies required to scale a SaaS application from a small user base to a large enterprise.',
        illustration: "saasScale"
    },
    {
        slug: 'future-of-hybrid-work',
        title: 'The Future of Work is Hybrid: Tools and Strategies for Success',
        author: 'Laura Martinez',
        date: '2024-07-25',
        category: 'Tech Insights',
        excerpt: 'How technology is enabling effective hybrid work models and the tools your business needs to thrive in this new environment.',
        illustration: "hybridWork"
    }
];

export const homePageFaqs = [
    {
        question: "What kind of technologies do you specialize in?",
        answer: "We specialize in a wide range of modern technologies, including Next.js, React, and React Native for front-end development, and Python (FastAPI) and Node.js (Express) for back-end solutions. For AI and machine learning, we leverage Genkit, TensorFlow, and PyTorch. Our cloud expertise is primarily focused on Google Cloud and AWS."
    },
    {
        question: "How long does it take to build a custom software application?",
        answer: "The timeline for a custom software project can vary significantly based on its complexity, features, and the scope of the project. A simple application or MVP might take 2-3 months, while a more complex, enterprise-level system could take 6-12 months or longer. We provide a detailed project timeline after our initial discovery and planning phase."
    },
    {
        question: "What is your development process like?",
        answer: "We follow an agile development methodology, working in iterative sprints. Our process includes a thorough discovery phase, UI/UX design and prototyping, development, rigorous quality assurance, and finally, deployment. We maintain transparent communication throughout the entire lifecycle to ensure the final product aligns perfectly with your vision."
    },
    {
        question: "Do you offer support and maintenance after the project is launched?",
        answer: "Yes, we offer comprehensive support and maintenance packages to ensure your application remains up-to-date, secure, and performs optimally. Our services include bug fixes, performance monitoring, security updates, and feature enhancements as your business grows."
    },
    {
        question: "How do you ensure the quality of your software?",
        answer: "Quality is at the core of our process. We have a dedicated Quality Assurance (QA) team that conducts multiple levels of testing, including functional testing, integration testing, performance testing, and security audits. We also follow best practices in coding and conduct regular code reviews to maintain high standards."
    },
    {
        question: "How much does it cost to work with you?",
        answer: "The cost of a project depends on various factors, including the project's scope, complexity, and the technologies involved. We offer flexible engagement models, including fixed-price contracts for well-defined projects and time-and-materials for more dynamic requirements. We provide a detailed, transparent quote after an initial consultation."
    }
];

export const navLinks: NavLink[] = [
    {
        title: 'Services',
        href: '/services',
        description: "Explore our comprehensive technology solutions.",
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
        description: "Discover how we solve challenges across various sectors.",
        items: industries.map(i => ({
            title: i.title,
            href: `/industries/${i.slug}`,
            icon: i.icon,
            description: i.description
        }))
    },
    {
        title: 'Our Work',
        href: '/portfolio',
        description: 'See our success stories and client case studies.',
        items: [
            { title: "Portfolio", href: "/portfolio", icon: "briefcase", description: "Explore our featured case studies." },
            { title: "AI Marketing Solution", href: "/solutions/campix", icon: "rocket", description: "An autonomous AI-powered ad campaign platform." },
            { title: "Carpooling App", href: "/solutions/carpooling-app", icon: "car", description: "A white-label solution to launch your own carpooling service." },
            { title: "QR Attendance System", href: "/solutions/qr-attendance", icon: "qrCode", description: "A proxy-proof attendance system with device verification." },
            { title: "Training Programs", href: "/solutions/training-program", icon: "bookUser", description: "Become a job-ready professional with our expert-led programs." },
        ]
    },
    {
        title: 'Company',
        href: '/about',
        description: "Learn more about our mission, team, and values.",
        items: [
            { title: "About Us", href: "/about", icon: "users", description: "Our mission, vision, and values." },
            { title: "Careers", href: "/careers", icon: "briefcase", description: "Join our team of innovators." },
            { title: "Contact Us", href: "/contact", icon: "mail", description: "Get in touch with our experts." },
        ]
    },
     {
        title: 'Blog',
        href: '/blog',
    },
];
