import React from 'react';

const GradientBackground = ({ 
  color = 'yellow', // yellow, purple, green, blue, pink
  size = 'medium',
  position = 'center',
  opacity = '40',
  className = ''
}) => {
  // Map color names to actual gradient colors
  const colorMap = {
    yellow: 'radial-gradient(circle, #fcf3a9 0%, #faf3be 30%, transparent 70%)',
    purple: 'radial-gradient(circle, #895bfc 0%, #b497fc 30%, transparent 70%)',
    subtlePurple: 'radial-gradient(circle, #bba2fa 0%, #dbccff 30%, transparent 70%)',
    green: 'radial-gradient(circle, #c1fc3d 5%, #d3fc77 50%, transparent 70%)',
    blue: 'radial-gradient(circle, #496dfc 5%, #a89cff 30%, transparent 70%)',
    pink: 'radial-gradient(circle, #fa3492 5%, #faa5cd 30%, transparent 70%)'
  };
  
  // Map size names to actual sizes
  const sizeMap = {
    small: 'w-[200px] h-[200px] md:w-[300px] md:h-[300px]',
    medium: 'w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]',
    large: 'w-[400px] h-[400px] md:w-[600px] md:h-[600px]'
  };
  
  // Map position names to position classes
  const positionMap = {
    'top-left': 'top-0 left-0',
    'top-right': 'top-0 right-0',
    'bottom-left': 'bottom-0 left-0',
    'bottom-right': 'bottom-0 right-0',
    'center': 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
  };
  
  return (
    <div className={`absolute ${positionMap[position]} ${className}`}>
      <div 
        className={`${sizeMap[size]} rounded-full opacity-${opacity} blur-3xl`}
        style={{
          background: colorMap[color]
        }}
      />
    </div>
  );
};

export default GradientBackground;