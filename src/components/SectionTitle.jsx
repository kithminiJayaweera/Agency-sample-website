import React from 'react';

const SectionTitle = ({ 
  title,
  subtitle,
  align = 'center',
  className = '',
  highlightWord = null
}) => {
  const alignmentClasses = {
    center: 'text-center mx-auto',
    left: 'text-left',
    right: 'text-right'
  };
  
  // If there's a word to highlight, wrap it in a span with blue color
  const renderTitle = () => {
    if (!highlightWord || !title.includes(highlightWord)) {
      return title;
    }
    
    const parts = title.split(highlightWord);
    return (
      <>
        {parts[0]}<span className="text-[#2596be]">{highlightWord}</span>{parts[1]}
      </>
    );
  };
  
  return (
    <div className={`${alignmentClasses[align]} ${className}`}>
      <h2 className="sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
        {renderTitle()}
      </h2>
      {subtitle && (
        <p className="text-gray-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;