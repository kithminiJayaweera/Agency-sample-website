import React, { useState, useEffect } from 'react';
import Button from './Button';

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About us" },
  { id: "services", label: "Services" },
  { id: "blog", label: "Blog" },
];

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrollEnabled, setScrollEnabled] = useState(true);

  useEffect(() => {
    let scrollTimeout = null;
    const handleScroll = () => {
      if (!scrollEnabled) return;
      if (scrollTimeout) clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        let active = "";
        for (const section of sections) {
          const el = document.getElementById(section.id);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 170 && rect.bottom > 96) {
              active = section.id;
            }
            if (section.id === "blog" && (rect.bottom <= window.innerHeight && rect.bottom > 96)) {
              active = "blog";
            }
          }
        }
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 2) {
          active = "blog";
        }
        setActiveSection(active);
      }, 80);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [scrollEnabled]);

  const handleNavClick = (sectionId) => {
    setScrollEnabled(false);
    setActiveSection(sectionId);
    setIsOpen(false);
    const el = document.getElementById(sectionId);
    if (el) {
      let yOffset = -96;
      if (sectionId === "services") {
        yOffset -= 48;
      }
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setTimeout(() => {
        setScrollEnabled(true);
      }, 400);
    } else {
      setScrollEnabled(true);
    }
  };

  return (
  <div className="md:hidden">
      {/* Hamburger Icon */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="text-[#1090CB] focus:outline-none"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-lg z-50 py-4 px-6 flex flex-col space-y-4 animate-fadeIn">
          {sections.map((section) => (
            <button
              key={section.id}
              className={`text-lg py-2 border-b border-gray-100 text-left ${activeSection === section.id ? "text-[#2596be] font-semibold" : "hover:text-[#2596be]"}`}
              onClick={() => handleNavClick(section.id)}
            >
              {section.label}
            </button>
          ))}
          <Button variant="primary" size="medium" className="w-full mt-4">Contact us</Button>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;