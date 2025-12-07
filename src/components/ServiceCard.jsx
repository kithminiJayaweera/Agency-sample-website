import React from 'react';

const ServiceCard = ({ 
  icon, 
  title, 
  subtitle,
  iconBg = 'bg-[#efefff]'
}) => {
  return (
  <div className="flex items-center gap-4 rounded-lg hover:shadow-sm transition-shadow w-[280px] h-[83px]">
      {/* Icon with color-matched background */}
      <div className="flex-shrink-0 w-[83px] h-[83px] p-[5px]">
        <div className={`${iconBg} w-full h-full rounded-2xl flex items-center justify-center`}>
          <img 
            src={icon} 
            alt={title}
            className="object-contain max-w-[48px] max-h-[48px]" 
          />
        </div>
      </div>
      {/* Text content on the right */}
      <div className="flex-1 text-left">
        <h3 className="text-sm md:text-base lg:text-lg font-semibold mb-2 text-gray-800 whitespace-nowrap">{title === 'Mobile Applications' ? <span style={{whiteSpace: 'nowrap'}}>Mobile Applications</span> : title}</h3>
        <p className="text-gray-500 text-xs md:text-sm leading-tight">{subtitle}</p>
      </div>
    </div>
  );
};

export default ServiceCard;