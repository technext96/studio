
import { Code, Smartphone, Cloud, Bot, BrainCircuit, PencilRuler, Zap, Users, ShieldCheck, ShoppingCart, BookOpen, Building, HeartPulse, Factory, Fuel, Shield, Plane, GraduationCap, Clapperboard, Home, Phone, Briefcase, Handshake, Cog, Group, Newspaper, Lightbulb, Rocket, Video, Car, QrCode, MessageSquare, BookUser, Mail, ArrowRight, Database } from 'lucide-react';

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
            <linearGradient id="grad-automation-gears" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--primary))" />
                <stop offset="100%" stopColor="hsl(var(--secondary))" />
            </linearGradient>
        </defs>
        <g stroke="url(#grad-automation-gears)">
            <path fill="none" strokeWidth="12" d="M 201.2,126.9 C 192.5,129.5, 184.2,133.4, 176.7,138.4 L 145.4,116.5 C 149.3,108.5, 154.3,101.1, 160.1,94.4 L 189.4,112.5 C 193.3,116.6, 197.4,121.5, 201.2,126.9 Z">
                 <animateTransform attributeName="transform" type="rotate" from="0 256 256" to="360 256 256" dur="10s" repeatCount="indefinite" />
            </path>
            <path fill="hsl(var(--primary)/.1)" strokeWidth="8" d="M 334.6,396.9 C 326.2,402.2, 317.1,406.4, 307.5,409.3 L 297,372.4 C 304.5,369.9, 311.5,366.4, 317.8,362.1 L 334.6,396.9 Z">
                 <animateTransform attributeName="transform" type="rotate" from="0 256 256" to="-360 256 256" dur="8s" repeatCount="indefinite" />
            </path>
        </g>
        <g fill="hsl(var(--primary))" stroke="hsl(var(--foreground))" strokeWidth="2">
            <circle cx="256" cy="256" r="40" />
            <path d="m 256,296 v 40 l -20,10 v -40 z" />
            <path d="m 256,296 v 40 l 20,10 v -40 z" />
             <animateTransform attributeName="transform" type="rotate" from="0 256 256" to="360 256 256" dur="6s" repeatCount="indefinite" />
        </g>
    </svg>
);
  
const OffshoreIllustration = () => (
    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
            <linearGradient id="grad-offshore-world" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--primary))"/>
                <stop offset="100%" stopColor="hsl(var(--secondary))"/>
            </linearGradient>
        </defs>
        <circle cx="256" cy="256" r="160" fill="hsl(var(--primary)/.1)" stroke="hsl(var(--border))"/>
        <path d="M256,96 A160,160 0 0,1 256,416" fill="none" stroke="url(#grad-offshore-world)" strokeWidth="4"/>
        <path d="M256,96 A160,160 0 0,0 256,416" fill="none" stroke="url(#grad-offshore-world)" strokeWidth="4" strokeDasharray="8 8"/>
        <g fill="hsl(var(--primary))">
            <circle cx="180" cy="180" r="20"><animate attributeName="r" values="15;25;15" dur="5s" repeatCount="indefinite" /></circle>
            <circle cx="332" cy="332" r="20"><animate attributeName="r" values="15;25;15" dur="5s" repeatCount="indefinite" begin="2.5s" /></circle>
        </g>
    </svg>
);
  
const CustomSoftwareIllustration = () => (
   <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
            <linearGradient id="grad-custom-sw" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--primary))" />
                <stop offset="100%" stopColor="hsl(var(--secondary))" />
            </linearGradient>
        </defs>
        <rect x="100" y="100" width="312" height="312" rx="20" fill="hsl(var(--primary)/0.1)" stroke="hsl(var(--border))" />
        <path d="M164,164 h184 v184 h-184 z" fill="none" stroke="url(#grad-custom-sw)" strokeWidth="4" strokeDasharray="10 10">
           <animate attributeName="stroke-dashoffset" from="0" to="20" dur="2s" repeatCount="indefinite" />
        </path>
        <Cog className="lucide lucide-cog text-primary" x="224" y="224" width="64" height="64">
            <animateTransform attributeName="transform" type="rotate" from="0 256 256" to="360 256 256" dur="8s" repeatCount="indefinite" />
        </Cog>
    </svg>
);
  
const DevOpsIllustration = () => (
    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
            <linearGradient id="grad-devops-flow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--primary))" />
                <stop offset="100%" stopColor="hsl(var(--secondary))" />
            </linearGradient>
        </defs>
        <path d="M128,256 a128,128 0 1,0 256,0 a128,128 0 1,0 -256,0" fill="none" stroke="hsl(var(--border))" strokeWidth="2" />
        <g fill="hsl(var(--primary))">
            <circle cx="128" cy="256" r="24">
                 <animateMotion path="M0,0 a128,128 0 1,0 256,0 a128,128 0 1,0 -256,0" dur="8s" repeatCount="indefinite" rotate="auto" />
            </circle>
            <circle cx="128" cy="256" r="24">
                 <animateMotion path="M0,0 a128,128 0 1,0 256,0 a128,128 0 1,0 -256,0" dur="8s" begin="4s" repeatCount="indefinite" rotate="auto" />
            </circle>
        </g>
        <Rocket className="lucide lucide-rocket text-primary" x="224" y="224" width="64" height="64" />
    </svg>
);
  
const MarketingIllustration = () => (
    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path d="M 128 384 L 256 128 L 384 384 Z" fill="hsl(var(--primary)/.1)" stroke="hsl(var(--border))" strokeWidth="2" />
        <line x1="128" y1="384" x2="384" y2="384" stroke="hsl(var(--primary))" strokeWidth="4"/>
        <g fill="hsl(var(--primary))">
            <circle cx="256" cy="256" r="32">
               <animate attributeName="r" values="32;40;32" dur="3s" repeatCount="indefinite" />
            </circle>
             <path d="M256,224 L256,128">
                <animateTransform attributeName="transform" type="rotate" from="0 256 256" to="360 256 256" dur="6s" repeatCount="indefinite" />
            </path>
        </g>
        <Lightbulb className="lucide lucide-lightbulb text-primary-foreground" x="232" y="232" width="48" height="48" />
    </svg>
);

const EcommerceIllustration = () => (
    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
            <linearGradient id="grad-ecommerce-cart" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--primary))" />
                <stop offset="100%" stopColor="hsl(var(--secondary))" />
            </linearGradient>
        </defs>
        <path d="M128,128 L160,320 L384,320 L416,128 Z" fill="hsl(var(--primary)/.1)" stroke="hsl(var(--border))" />
        <line x1="128" y1="128" x2="160" y2="320" stroke="url(#grad-ecommerce-cart)" strokeWidth="4"/>
        <line x1="160" y1="320" x2="384" y2="320" stroke="url(#grad-ecommerce-cart)" strokeWidth="4"/>
        <ShoppingCart className="lucide lucide-shopping-cart text-primary" x="224" y="192" width="64" height="64" >
             <animateTransform attributeName="transform" type="translate" values="0 0; 5 0; 0 0; -5 0; 0 0" dur="3s" repeatCount="indefinite" />
        </ShoppingCart>
        <circle cx="192" cy="352" r="16" fill="hsl(var(--primary))" />
        <circle cx="352" cy="352" r="16" fill="hsl(var(--primary))" />
    </svg>
);

const CybersecurityIllustration = () => (
     <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
            <linearGradient id="grad-cyber-shield" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--primary))" />
                <stop offset="100%" stopColor="hsl(var(--secondary))" />
            </linearGradient>
        </defs>
        <path d="M256,128 C256,128 128,160 128,256 L128,384 L256,448 L384,384 L384,256 C384,160 256,128 256,128 Z" fill="hsl(var(--primary)/.1)" stroke="hsl(var(--border))" />
        <path d="M256,128 C256,128 128,160 128,256 L128,384 L256,448 L384,384 L384,256 C384,160 256,128 256,128 Z" fill="none" stroke="url(#grad-cyber-shield)" strokeWidth="4" >
             <animate attributeName="stroke-dasharray" values="0 1000; 500 500; 1000 0" dur="4s" repeatCount="indefinite" />
        </path>
        <ShieldCheck className="lucide lucide-shield-check text-primary" x="224" y="240" width="64" height="64" />
    </svg>
);

const FintechIllustration = () => (
    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
         <defs>
            <linearGradient id="grad-fintech-chart" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--primary))" />
                <stop offset="100%" stopColor="hsl(var(--secondary))" />
            </linearGradient>
        </defs>
        <path d="M128,384 L192,320 L256,352 L320,288 L384,320" fill="none" stroke="url(#grad-fintech-chart)" strokeWidth="4">
            <animate attributeName="d" values="M128,384 L192,320 L256,352 L320,288 L384,320; M128,384 L192,352 L256,320 L320,352 L384,288; M128,384 L192,320 L256,352 L320,288 L384,320" dur="4s" repeatCount="indefinite" />
        </path>
        <rect x="100" y="100" width="312" height="312" rx="20" fill="none" stroke="hsl(var(--border))" />
        <circle cx="128" cy="128" r="8" fill="hsl(var(--primary))" />
        <circle cx="384" cy="128" r="8" fill="hsl(var(--primary))" />
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

const EthicalAiIllustration = () => (
     <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
            <linearGradient id="grad-ethical-ai" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--primary))" />
                <stop offset="100%" stopColor="hsl(var(--secondary))" />
            </linearGradient>
        </defs>
        <Handshake className="lucide lucide-handshake text-primary" x="192" y="192" width="128" height="128" strokeWidth="1.5"/>
        <path d="M192,192 a160,160 0 0,1 128,128" fill="none" stroke="url(#grad-ethical-ai)" strokeWidth="4">
             <animate attributeName="stroke-dasharray" values="0 500; 500 0" dur="5s" repeatCount="indefinite" />
        </path>
         <path d="M320,192 a160,160 0 0,0 -128,128" fill="none" stroke="url(#grad-ethical-ai)" strokeWidth="4">
              <animate attributeName="stroke-dasharray" values="0 500; 500 0" dur="5s" begin="2.5s" repeatCount="indefinite" />
        </path>
    </svg>
);

const DataPrivacyIllustration = () => (
    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <Shield className="text-primary/20" x="96" y="96" width="320" height="320" strokeWidth="1"/>
        <g>
            <line x1="256" y1="160" x2="256" y2="352" stroke="hsl(var(--primary))" strokeWidth="4"/>
            <line x1="224" y1="192" x2="288" y2="192" stroke="hsl(var(--primary))" strokeWidth="4"/>
            <circle cx="256" cy="224" r="24" fill="none" stroke="hsl(var(--primary))" strokeWidth="4"/>
            <path d="M224,288 a32,32 0 1,1 64,0" fill="none" stroke="hsl(var(--primary))" strokeWidth="4"/>
             <animateTransform attributeName="transform" type="translate" values="0 0; 0 -10; 0 0" dur="3s" repeatCount="indefinite" />
        </g>
    </svg>
);

const SaasScaleIllustration = () => (
    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path d="M128,384 h256" stroke="hsl(var(--border))" strokeWidth="2"/>
        <path d="M160,384 v-64 h64 v64" fill="hsl(var(--primary)/.2)" stroke="hsl(var(--primary))"/>
        <path d="M224,320 v-128 h64 v128" fill="hsl(var(--primary)/.5)" stroke="hsl(var(--primary))"/>
        <path d="M288,192 v-64 h64 v64" fill="hsl(var(--primary))" stroke="hsl(var(--primary))"/>
        <g>
            <circle cx="192" cy="288" r="8" fill="hsl(var(--foreground))" opacity="0.5">
                <animate attributeName="cy" values="288;128;288" dur="4s" repeatCount="indefinite" />
            </circle>
             <circle cx="256" cy="160" r="8" fill="hsl(var(--foreground))" opacity="0.5">
                <animate attributeName="cy" values="160;352;160" dur="5s" begin="1s" repeatCount="indefinite" />
            </circle>
             <circle cx="320" cy="128" r="8" fill="hsl(var(--foreground))" opacity="0.5">
                <animate attributeName="cy" values="128;288;128" dur="3s" begin="2s" repeatCount="indefinite" />
            </circle>
        </g>
    </svg>
);

const QrAttendanceIllustration = () => (
    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-contain">
        <defs>
            <linearGradient id="grad-qr-screen" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: 'hsl(var(--primary))', stopOpacity: 0.1}} />
                <stop offset="100%" style={{stopColor: 'hsl(var(--secondary))', stopOpacity: 0.2}} />
            </linearGradient>
            <filter id="glow-qr" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="10" result="coloredBlur"/>
                <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                </feMerge>
            </filter>
        </defs>
        
        <g transform="translate(106, 0) scale(1)">
            {/* Phone Body */}
            <rect x="50" y="10" width="300" height="492" rx="40" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="2"/>
            <rect x="65" y="25" width="270" height="462" rx="25" fill="url(#grad-qr-screen)" />
            
            {/* Notch */}
            <rect x="150" y="25" width="100" height="20" rx="10" fill="hsl(var(--card))" />
            
            {/* QR Code */}
            <g transform="translate(125, 125)" filter="url(#glow-qr)">
                <rect width="150" height="150" fill="hsl(var(--primary))" rx="10"/>
                <g fill="hsl(var(--primary-foreground))">
                    <rect x="10" y="10" width="40" height="40" rx="5"/>
                    <rect x="100" y="10" width="40" height="40" rx="5"/>
                    <rect x="10" y="100" width="40" height="40" rx="5"/>
                    
                    <rect x="25" y="25" width="10" height="10" fill="hsl(var(--primary))"/>
                    <rect x="115" y="25" width="10" height="10" fill="hsl(var(--primary))"/>
                    <rect x="25" y="115" width="10" height="10" fill="hsl(var(--primary))"/>

                    <rect x="60" y="60" width="10" height="10" />
                    <rect x="80" y="60" width="10" height="10" />
                    <rect x="60" y="80" width="10" height="10" />
                    <rect x="80" y="80" width="10" height="10" />
                    
                    <rect x="100" y="70" width="10" height="10" />
                    <rect x="70" y="100" width="10" height="10" />
                    <rect x="120" y="90" width="10" height="10" />
                    <rect x="90" y="120" width="10" height="10" />
                    <rect x="60" y="130" width="10" height="10" />
                </g>
                <animateTransform 
                    attributeName="transform"
                    type="scale"
                    values="1; 1.05; 1"
                    begin="0s"
                    dur="4s"
                    repeatCount="indefinite"
                />
            </g>
            
            {/* Text on Screen */}
            <text x="200" y="320" textAnchor="middle" fontFamily="var(--font-space-grotesk)" fontSize="24" fill="hsl(var(--foreground))" fontWeight="bold">Scan to Check-In</text>
            <text x="200" y="350" textAnchor="middle" fontFamily="var(--font-inter)" fontSize="16" fill="hsl(var(--muted-foreground))">Point camera at QR code</text>
        </g>
    </svg>
);

const AiLearningIllustration = () => (
    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
            <linearGradient id="grad-ai-learning" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--primary))" />
                <stop offset="100%" stopColor="hsl(var(--secondary))" />
            </linearGradient>
        </defs>
        <path d="M128 400 V 200 L 256 128 L 384 200 V 400" fill="hsl(var(--primary)/.1)" stroke="hsl(var(--border))"/>
        <path d="M128 400 H 384" stroke="hsl(var(--border))" />
        <path d="M256 256 m -48,0 a 48,48 0 1,0 96,0 a 48,48 0 1,0 -96,0" fill="none" stroke="url(#grad-ai-learning)" strokeWidth="4">
            <animateTransform attributeName="transform" type="rotate" from="0 256 256" to="360 256 256" dur="10s" repeatCount="indefinite" />
        </path>
        <GraduationCap className="text-primary" x="224" y="224" width="64" height="64" strokeWidth="1.5" />
    </svg>
);

const FoodDeliveryIllustration = () => (
    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <circle cx="256" cy="256" r="128" fill="hsl(var(--primary)/.1)" stroke="hsl(var(--border))" />
        <path d="M 200 200 L 256 256 L 200 312" fill="none" stroke="hsl(var(--primary))" strokeWidth="4">
             <animateTransform attributeName="transform" type="translate" values="0 0; 32 0; 0 0" dur="2s" repeatCount="indefinite" />
        </path>
        <ShoppingCart className="text-primary" x="256" y="224" width="64" height="64" strokeWidth="1.5" />
    </svg>
);

const AiShoppingIllustration = () => (
    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect x="128" y="128" width="256" height="256" rx="20" fill="hsl(var(--primary)/.1)" stroke="hsl(var(--border))" />
        <g stroke="hsl(var(--primary))" strokeWidth="2">
            <line x1="192" y1="192" x2="320" y2="320">
                <animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite" />
            </line>
            <line x1="320" y1="192" x2="192" y2="320">
                 <animate attributeName="opacity" values="0;1;0" dur="3s" begin="1.5s" repeatCount="indefinite" />
            </line>
        </g>
        <ShoppingCart className="text-primary" x="224" y="224" width="64" height="64" strokeWidth="1.5" />
    </svg>
);

const MedicalChatbotIllustration = () => (
    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path d="M128 384 H 384 V 128 H 128 Z" fill="hsl(var(--primary)/.1)" stroke="hsl(var(--border))" rx="20" />
        <path d="M160 320 L 160 256 C 160 224 184 200 216 200 H 296 C 328 200 352 224 352 256 L 352 320" fill="none" stroke="hsl(var(--primary))" strokeWidth="4" />
        <path d="M192 352 h128" stroke="hsl(var(--primary))" strokeWidth="4" strokeDasharray="8 8">
            <animate attributeName="stroke-dashoffset" from="0" to="16" dur="2s" repeatCount="indefinite" />
        </path>
        <HeartPulse className="text-primary" x="224" y="224" width="64" height="64" strokeWidth="1.5" />
    </svg>
);

export const n8nWhatsappIllustration = () => (
    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
            <linearGradient id="grad-n8n" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--primary))" />
                <stop offset="100%" stopColor="hsl(var(--secondary))" />
            </linearGradient>
        </defs>
        
        {/* Central Node */}
        <circle cx="256" cy="256" r="60" fill="hsl(var(--primary)/.1)" stroke="hsl(var(--border))" />
        <text x="256" y="268" textAnchor="middle" fontSize="48" fontWeight="bold" fill="hsl(var(--primary))">n8n</text>

        {/* Outer Nodes (WhatsApp and others) */}
        <g id="nodes">
            <g transform="translate(100, 100)">
                <circle r="30" fill="hsl(var(--card))" stroke="hsl(var(--border))" />
                <MessageSquare className="text-primary" x="-16" y="-16" width="32" height="32" />
            </g>
            <g transform="translate(412, 100)">
                <circle r="30" fill="hsl(var(--card))" stroke="hsl(var(--border))" />
                <Mail className="text-primary" x="-16" y="-16" width="32" height="32" />
            </g>
            <g transform="translate(100, 412)">
                <circle r="30" fill="hsl(var(--card))" stroke="hsl(var(--border))" />
                <Users className="text-primary" x="-16" y="-16" width="32" height="32" />
            </g>
             <g transform="translate(412, 412)">
                <circle r="30" fill="hsl(var(--card))" stroke="hsl(var(--border))" />
                <Database className="text-primary" x="-16" y="-16" width="32" height="32" />
            </g>
        </g>
        
        {/* Animated Connecting Lines */}
        <g stroke="url(#grad-n8n)" strokeWidth="2" strokeDasharray="10 5" fill="none">
            <path d="M 220,220 L 130,130">
                <animate attributeName="stroke-dashoffset" from="15" to="0" dur="2s" repeatCount="indefinite" />
            </path>
            <path d="M 292,220 L 382,130">
                 <animate attributeName="stroke-dashoffset" from="15" to="0" dur="2s" begin="0.5s" repeatCount="indefinite" />
            </path>
            <path d="M 220,292 L 130,382">
                 <animate attributeName="stroke-dashoffset" from="15" to="0" dur="2s" begin="1s" repeatCount="indefinite" />
            </path>
             <path d="M 292,292 L 382,382">
                 <animate attributeName="stroke-dashoffset" from="15" to="0" dur="2s" begin="1.5s" repeatCount="indefinite" />
            </path>
        </g>
         <animateTransform attributeName="transform" attributeType="XML" type="rotate" from="0 256 256" to="360 256 256" dur="20s" repeatCount="indefinite"/>
    </svg>
);

export const illustrationMap: { [key: string]: React.FC } = {
    customSoftware: CustomSoftwareIllustration,
    aiMl: AiMlIllustration,
    automation: AutomationIllustration,
    offshore: OffshoreIllustration,
    devops: DevOpsIllustration,
    marketing: MarketingIllustration,
    fintech: FintechIllustration,
    logistics: () => <ShoppingCart className="w-full h-full text-primary" strokeWidth="0.5"/>,
    automotive: () => <Car className="w-full h-full text-primary" strokeWidth="0.5"/>,
    healthcare: () => <HeartPulse className="w-full h-full text-primary" strokeWidth="0.5"/>,
    manufacturing: () => <Factory className="w-full h-full text-primary" strokeWidth="0.5"/>,
    oilGas: () => <Fuel className="w-full h-full text-primary" strokeWidth="0.5"/>,
    insurance: () => <Shield className="w-full h-full text-primary" strokeWidth="0.5"/>,
    travel: () => <Plane className="w-full h-full text-primary" strokeWidth="0.5"/>,
    cybersecurity: CybersecurityIllustration,
    ecommerce: EcommerceIllustration,
    education: () => <BookOpen className="w-full h-full text-primary" strokeWidth="0.5"/>,
    media: () => <Clapperboard className="w-full h-full text-primary" strokeWidth="0.5"/>,
    realEstate: () => <Home className="w-full h-full text-primary" strokeWidth="0.5"/>,
    telecom: () => <Phone className="w-full h-full text-primary" strokeWidth="0.5"/>,
    government: () => <Building className="w-full h-full text-primary" strokeWidth="0.5"/>,
    aiLearning: AiLearningIllustration,
    foodDelivery: FoodDeliveryIllustration,
    aiShopping: AiShoppingIllustration,
    medicalChatbot: MedicalChatbotIllustration,
    rideshare: RideshareIllustration,
    ethicalAi: EthicalAiIllustration,
    dataPrivacy: DataPrivacyIllustration,
    saasScale: SaasScaleIllustration,
    qrAttendance: QrAttendanceIllustration,
    n8nWhatsapp: n8nWhatsappIllustration,
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


  




    