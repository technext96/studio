
import { Code, Smartphone, Cloud, Bot, BrainCircuit, PencilRuler, Zap, Users, ShieldCheck, ShoppingCart, BookOpen, Building, HeartPulse, Factory, Fuel, Shield, Plane, GraduationCap, Clapperboard, Home, Phone, Briefcase, Handshake, Cog, Group, Newspaper, Lightbulb, Rocket, Video, Car, QrCode, MessageSquare, BookUser, Mail, ArrowRight } from 'lucide-react';

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

const RideshareIllustration = () => (
    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path d="M 50 400 Q 256 300, 462 400" fill="none" stroke="hsl(var(--border))" strokeWidth="8" strokeDasharray="20 15" />
        <g>
            <path d="M 100 380 L 120 340 L 200 340 L 220 380 Z" fill="hsl(var(--primary))" />
            <rect x="110" y="380" width="100" height="20" rx="5" fill="hsl(var(--secondary))" />
            <circle cx="130" cy="400" r="12" fill="hsl(var(--foreground))" />
            <circle cx="190" cy="400" r="12" fill="hsl(var(--foreground))" />
            <animateTransform 
                attributeName="transform"
                type="translate"
                values="0,0; 250,0; 0,0; 0,0"
                dur="8s"
                repeatCount="indefinite" />
        </g>
        <g fill="hsl(var(--primary) / 0.7)">
            <path d="M 150 150 C 150 120, 200 120, 200 150 C 200 180, 175 220, 175 220 C 175 220, 150 180, 150 150 Z" />
            <circle cx="175" cy="150" r="10" />
        </g>
         <g fill="hsl(var(--primary) / 0.7)">
            <path d="M 350 180 C 350 150, 400 150, 400 180 C 400 210, 375 250, 375 250 C 375 250, 350 210, 350 180 Z" />
            <circle cx="375" cy="180" r="10" />
        </g>
    </svg>
);
const EthicalAiIllustration = () => <ShieldCheck className="w-full h-full text-primary" strokeWidth="0.5" />;
const DataPrivacyIllustration = () => <Shield className="w-full h-full text-primary" strokeWidth="0.5" />;
const SaasScaleIllustration = () => <Rocket className="w-full h-full text-primary" strokeWidth="0.5" />;

export const illustrationMap: { [key: string]: React.FC } = {
    customSoftware: CustomSoftwareIllustration,
    aiMl: AiMlIllustration,
    automation: AutomationIllustration,
    offshore: OffshoreIllustration,
    devops: DevOpsIllustration,
    marketing: MarketingIllustration,
    fintech: () => <ShieldCheck className="w-full h-full text-primary" strokeWidth="0.5"/>,
    logistics: () => <ShoppingCart className="w-full h-full text-primary" strokeWidth="0.5"/>,
    automotive: () => <Building className="w-full h-full text-primary" strokeWidth="0.5"/>,
    healthcare: () => <HeartPulse className="w-full h-full text-primary" strokeWidth="0.5"/>,
    manufacturing: () => <Factory className="w-full h-full text-primary" strokeWidth="0.5"/>,
    oilGas: () => <Fuel className="w-full h-full text-primary" strokeWidth="0.5"/>,
    insurance: () => <Shield className="w-full h-full text-primary" strokeWidth="0.5"/>,
    travel: () => <Plane className="w-full h-full text-primary" strokeWidth="0.5"/>,
    cybersecurity: () => <ShieldCheck className="w-full h-full text-primary" strokeWidth="0.5"/>,
    ecommerce: () => <ShoppingCart className="w-full h-full text-primary" strokeWidth="0.5"/>,
    education: () => <BookOpen className="w-full h-full text-primary" strokeWidth="0.5"/>,
    media: () => <Clapperboard className="w-full h-full text-primary" strokeWidth="0.5"/>,
    realEstate: () => <Home className="w-full h-full text-primary" strokeWidth="0.5"/>,
    telecom: () => <Phone className="w-full h-full text-primary" strokeWidth="0.5"/>,
    government: () => <Building className="w-full h-full text-primary" strokeWidth="0.5"/>,
    aiLearning: () => <GraduationCap className="w-full h-full text-primary" strokeWidth="0.5"/>,
    foodDelivery: () => <ShoppingCart className="w-full h-full text-primary" strokeWidth="0.5"/>,
    aiShopping: () => <ShoppingCart className="w-full h-full text-primary" strokeWidth="0.5"/>,
    medicalChatbot: () => <HeartPulse className="w-full h-full text-primary" strokeWidth="0.5"/>,
    rideshare: RideshareIllustration,
    ethicalAi: EthicalAiIllustration,
    dataPrivacy: DataPrivacyIllustration,
    saasScale: SaasScaleIllustration,
};

export const iconMap: { [key: string]: React.FC<{className?: string}> } = {
    customSoftware: (props) => <Code {...props} />,
    aiMl: (props) => <Bot {...props} />,
    automation: (props) => <BrainCircuit {...props} />,
    offshore: (props) => <Users {...props} />,
    devops: (props) => <Cloud {...props} />,
    marketing: (props) => <Zap {...props} />,
    fintech: (props) => <ShieldCheck {...props} />,
    logistics: (props) => <ShoppingCart {...props} />,
    automotive: (props) => <Building {...props} />,
    healthcare: (props) => <HeartPulse {...props} />,
    manufacturing: (props) => <Factory {...props} />,
    oilGas: (props) => <Fuel {...props} />,
    insurance: (props) => <Shield {...props} />,
    travel: (props) => <Plane {...props} />,
    cybersecurity: (props) => <ShieldCheck {...props} />,
    ecommerce: (props) => <ShoppingCart {...props} />,
    education: (props) => <BookOpen {...props} />,
    media: (props) => <Clapperboard {...props} />,
    realEstate: (props) => <Home {...props} />,
    telecom: (props) => <Phone {...props} />,
    government: (props) => <Building {...props} />,
    briefcase: (props) => <Briefcase {...props} />,
    rocket: (props) => <Rocket {...props} />,
    car: (props) => <Car {...props} />,
    qrCode: (props) => <QrCode {...props} />,
    bookUser: (props) => <BookUser {...props} />,
    users: (props) => <Users {...props} />,
    mail: (props) => <Mail {...props} />,
    arrowRight: (props) => <ArrowRight {...props} />,
};

export const valuePropositions = [
    {
        icon: BrainCircuit,
        title: "Innovation at the Core",
        description: "We are driven by a relentless curiosity to explore emerging technologies and find creative, cutting-edge solutions to complex problems. We don't just follow trends; we aim to set them."
    },
    {
        icon: ShieldCheck,
        title: "Unwavering Integrity",
        description: "We operate with transparency and honesty. Trust is the foundation of our relationships, and we build it with our clients and team members through every interaction."
    },
    {
        icon: Users,
        title: "Collaborative Partnership",
        description: "We believe that the most brilliant results are born from teamwork. We unite with our clients, combining diverse perspectives and expertise to achieve common goals and deliver exceptional value."
    }
];
