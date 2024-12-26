import React, { useState, useEffect } from "react";
import "../NavigationHeader.css";

const NavigationHeader = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showHeader, setShowHeader] = useState(true);

  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    let timeout;
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (currentScrollPos > prevScrollPos) {
        setShowHeader(false);
      } else {
        clearTimeout(timeout);
        timeout = setTimeout(() => setShowHeader(true), 100);
      }
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {!isMobile && showHeader && (
        <div className="floating-header">
          <ul className="nav-links-horizontal">
            <li onClick={() => scrollToSection("#project")}>Projects</li>
            <li onClick={() => scrollToSection("#experience")}>Experience</li>
            <li onClick={() => scrollToSection("#contact")}>Contact</li>
            <li
              className="resume-link"
              onClick={() => window.open("https://drive.google.com/file/d/1zUHHHA36VFsLrUCvcm3WWgn42X7Id27x/view?usp=sharing", "_blank")}
            >
              Resume
            </li>
          </ul>
        </div>
      )}

      {isMobile && (
        <div className="navigation-container">
          <div
            className={`navigation-button ${isDropdownOpen ? "close" : ""}`}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
          </div>

          {isDropdownOpen && (
            <div className="navigation-dropdown">
              <ul className="navigation-links">
                <li onClick={() => scrollToSection("#project")}>Projects</li>
                <li onClick={() => scrollToSection("#experience")}>Experience</li>
                <li onClick={() => scrollToSection("#contact")}>Contact</li>
                <li
                  className="resume-link"
                  onClick={() => window.open("https://drive.google.com/file/d/1zUHHHA36VFsLrUCvcm3WWgn42X7Id27x/view?usp=sharing", "_blank")}
                >
                  Resume
                </li>
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default NavigationHeader;