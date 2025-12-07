import React from "react";
import MobileMenu from "./MobileMenu";
import Button from "./Button";



import { useState } from "react";
import { useEffect } from "react";

const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About us" },
    { id: "services", label: "Services" },
    { id: "blog", label: "Blog" },
];

const Navbar = () => {
    const [activeSection, setActiveSection] = useState("");
    const [scrollEnabled, setScrollEnabled] = useState(true);

    // Debounced scroll tracking: highlight section in view
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
                        // Section is active if its top is above navbar and its bottom is below navbar
                        if (rect.top <= 170 && rect.bottom > 96) {
                            active = section.id;
                        }
                        // Special logic for 'blog': highlight if its bottom is visible in viewport
                        if (section.id === "blog" && (rect.bottom <= window.innerHeight && rect.bottom > 96)) {
                            active = "blog";
                        }
                    }
                }
                // If at the bottom of the page, always highlight 'blog'
                if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 2) {
                    active = "blog";
                }
                setActiveSection(active);
            }, 80); // 80ms debounce
        };
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (scrollTimeout) clearTimeout(scrollTimeout);
        };
    }, [scrollEnabled]);

    // Click: scroll to section and highlight
    const handleNavClick = (sectionId) => {
        setScrollEnabled(false);
        setActiveSection(sectionId); // highlight immediately on click
        const el = document.getElementById(sectionId);
        if (el) {
            let yOffset = -96;
            // Add extra margin for 'services' section
            if (sectionId === "services") {
                yOffset -= 48; // 48px extra margin (adjust as needed)
            }
            const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
            // After scroll, re-enable scroll tracking and update highlight
            setTimeout(() => {
                setScrollEnabled(true);
            }, 400); // 400ms for smooth scroll
        } else {
            setScrollEnabled(true);
        }
    };

    return (
    <div className="w-full shadow-md/10 sticky top-0 bg-white z-50  md:px-8 sm:px-4 ">
            <div className="flex justify-between items-center md:h-24 sm:h-16 w-full text-black max-w-[1536px] mx-auto">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-poppins font-semibold text-[#1090CB]">LOGO</h1>
                {/* Mobile Menu */}
                <MobileMenu />
                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-4 lg:gap-8 list-none">
                    {sections.map((section) => (
                        <li
                            key={section.id}
                            className={`relative flex flex-col items-center px-2 py-1 text-sm lg:text-base cursor-pointer ${activeSection === section.id ? "text-[#2596be]" : "hover:text-[#2596be]"}`}
                            onClick={() => handleNavClick(section.id)}
                        >
                            {activeSection === section.id && (
                                <span className="w-2 h-2 rounded-full bg-[#08D3BB] absolute -top-0.5 left-0"></span>
                            )}
                            <span>{section.label}</span>
                        </li>
                    ))}
                    <li className="px-2 py-1"> 
                        <Button variant="primary" size="small">Contact us</Button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;