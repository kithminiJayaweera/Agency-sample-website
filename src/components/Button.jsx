import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', // primary, secondary, black
  size = 'medium', // small, medium, large
  className = '',
  onClick
}) => {
  const baseClasses = "rounded-lg font-medium transition-colors";
  
  const variantClasses = {
    primary: "bg-[#1090CB] text-white hover:bg-[#1e7a9b]",
    secondary: "border-2 border-[#1090CB] bg-white text-[#1090CB] hover:bg-[#1090CB] hover:text-white",
    white: "bg-white text-[#1090CB] hover:bg-blue-100",
    black: "bg-black text-white hover:bg-gray-800 hover:bg-gray-800",
  };
  
  const sizeClasses = {
    small: "px-4 py-2 text-sm",
    medium: "px-6 py-3 text-base",
    mediumRare: "px-8 py-3 text-base",
    large: "md:w-[193px] md:h-[51px] sm:w-[140px] sm:h-[45px] px-10 py-3 text-lg",
    largeRare: "md:w-[193px] md:h-[51px] sm:w-[140px] sm:h-[45px] px-10 py-3 md:text-lg sm:text-base sm:text-center sm:flex sm:items-center sm:justify-center"
  };
  
  return (
    <button
      onClick={onClick}
  className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} whitespace-nowrap  ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
