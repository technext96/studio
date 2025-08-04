
import { Code, Smartphone, Cloud, Bot, BrainCircuit, PencilRuler, Zap, Users, ShieldCheck, ShoppingCart, BookOpen, Building, HeartPulse, Factory, Fuel, Shield, Plane, GraduationCap, Clapperboard, Home, Phone, Briefcase, Handshake, Cog, Group, Newspaper, Lightbulb, Rocket, Video, Car, QrCode, MessageSquare, BookUser, Mail, Database, BarChart, Server, Palette, Search, CodeXml, Component } from 'lucide-react';

export const AiMlIllustration = () => (
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
  
  export const AutomationIllustration = () => (
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
  
  export const OffshoreIllustration = () => (
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
  
  export const CustomSoftwareIllustration = () => (
    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path d="M128 128 L384 128 L384 384 L128 384 Z" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" rx="10"/>
        <polyline points="160,224 192,256 160,288" stroke="hsl(var(--primary))" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="224" y1="208" x2="256" y2="304" stroke="hsl(var(--primary))" strokeWidth="2"/>
        <animate attributeName="opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite" />
    </svg>
  );
  
  export const DevOpsIllustration = () => (
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
  
  export const MarketingIllustration = () => (
    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path d="M 128 384 L 256 128 L 384 384 Z" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" />
        <line x1="128" y1="384" x2="384" y2="384" stroke="hsl(var(--primary))" strokeWidth="2"/>
        <circle cx="256" cy="256" r="32" fill="hsl(var(--primary) / 0.5)">
           <animate attributeName="r" values="32;40;32" dur="3s" repeatCount="indefinite" />
        </circle>
    </svg>
  );

  export const FintechIllustration = () => <ShieldCheck className="w-full h-full text-primary" strokeWidth="0.5"/>
  export const LogisticsIllustration = () => <ShoppingCart className="w-full h-full text-primary" strokeWidth="0.5"/>
  export const AutomotiveIllustration = () => <Building className="w-full h-full text-primary" strokeWidth="0.5"/>
  export const HealthcareIllustration = () => <HeartPulse className="w-full h-full text-primary" strokeWidth="0.5"/>
  export const ManufacturingIllustration = () => <Factory className="w-full h-full text-primary" strokeWidth="0.5"/>
  export const OilGasIllustration = () => <Fuel className="w-full h-full text-primary" strokeWidth="0.5"/>
  export const InsuranceIllustration = () => <Shield className="w-full h-full text-primary" strokeWidth="0.5"/>
  export const TravelIllustration = () => <Plane className="w-full h-full text-primary" strokeWidth="0.5"/>
  export const CybersecurityIllustration = () => <ShieldCheck className="w-full h-full text-primary" strokeWidth="0.5"/>
  export const EcommerceIllustration = () => <ShoppingCart className="w-full h-full text-primary" strokeWidth="0.5"/>
  export const EducationIllustration = () => <BookOpen className="w-full h-full text-primary" strokeWidth="0.5"/>
  export const MediaIllustration = () => <Clapperboard className="w-full h-full text-primary" strokeWidth="0.5"/>
  export const RealEstateIllustration = () => <Home className="w-full h-full text-primary" strokeWidth="0.5"/>
  export const TelecomIllustration = () => <Phone className="w-full h-full text-primary" strokeWidth="0.5"/>
  export const GovernmentIllustration = () => <Building className="w-full h-full text-primary" strokeWidth="0.5"/>

  export const AiLearningIllustration = () => <GraduationCap className="w-full h-full text-primary" strokeWidth="0.5"/>
  export const FoodDeliveryIllustration = () => <ShoppingCart className="w-full h-full text-primary" strokeWidth="0.5"/>
  export const AiShoppingIllustration = () => <ShoppingCart className="w-full h-full text-primary" strokeWidth="0.5"/>
  export const MedicalChatbotIllustration = () => <HeartPulse className="w-full h-full text-primary" strokeWidth="0.5"/>

  export const QuantumIllustration = () => <BrainCircuit className="w-full h-full text-primary" strokeWidth="0.5"/>
  export const GenAiIllustration = () => <Bot className="w-full h-full text-primary" strokeWidth="0.5"/>
  export const SpatialIllustration = () => <PencilRuler className="w-full h-full text-primary" strokeWidth="0.5"/>
  export const WhatsAppFabIllustration = () => <MessageSquare className="w-full h-full text-primary" strokeWidth="0.5"/>
  export const DevopsCultureIllustration = () => <Users className="w-full h-full text-primary" strokeWidth="0.5"/>
  export const MicroservicesIllustration = () => <Cog className="w-full h-full text-primary" strokeWidth="0.5"/>
  export const ServerlessIllustration = () => <Cloud className="w-full h-full text-primary" strokeWidth="0.5"/>
  export const Web3Illustration = () => <Shield className="w-full h-full text-primary" strokeWidth="0.5"/>
  export const GreenTechIllustration = () => <Zap className="w-full h-full text-primary" strokeWidth="0.5"/>
  export const NoCodeIllustration = () => <Code className="w-full h-full text-primary" strokeWidth="0.5"/>
  export const HybridWorkIllustration = () => <Home className="w-full h-full text-primary" strokeWidth="0.5"/>
  export const FundingIllustration = () => <Zap className="w-full h-full text-primary" strokeWidth="0.5"/>
  export const EthicalAiIllustration = () => <Shield className="w-full h-full text-primary" strokeWidth="0.5"/>
  export const DataPrivacyIllustration = () => <ShieldCheck className="w-full h-full text-primary" strokeWidth="0.5"/>
  export const SaaSScaleIllustration = () => <Rocket className="w-full h-full text-primary" strokeWidth="0.5"/>


export const TeamIllustration = () => (
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
