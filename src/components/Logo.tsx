import Image from 'next/image';

const Logo = () => {
  return (
    <div className="flex items-center group">
      <Image 
        src="/logo.png" 
        alt="TechNext Logo" 
        width={150} 
        height={40} 
        priority 
      />
    </div>
  );
};

export default Logo;
