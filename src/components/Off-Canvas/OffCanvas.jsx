import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const OffCanvas = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activePage, setActivePage] = useState("Home");
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const navigate = useNavigate();

  const pages = {
    Home: "/",
    Doctor: "/doctor",
    "Our Services": "/our-services",
    "About-Us": "/about-us",
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        !buttonRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const handleNavigation = (page) => {
    setActivePage(page);
    setIsOpen(false);
    navigate(pages[page]);
  };

  return (
    <>
      <div className="flex items-center p-4 bg-gray-100 fixed w-full z-50">
        <button
          ref={buttonRef}
          onClick={() => setIsOpen(!isOpen)}
          className={`text-2xl mr-4 ${isOpen ? "text-black" : "text-gray-800"}`}
        >
          {isOpen ? "🗙" : "☰"}
        </button>
        <div className="ml-6 text-lg font-semibold">{activePage.replace("-", " ")}</div>
      </div>

      <div
        ref={menuRef}
        className={`fixed top-26 left-0 h-full w-60 bg-white shadow-lg transform transition-transform duration-300 z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="p-6 space-y-4 mt-4">
          {Object.keys(pages).map((page) => (
            <li key={page}>
              <button
                onClick={() => handleNavigation(page)}
                className={`w-full text-left px-2 py-2 rounded relative transition-colors duration-200 ${
                  activePage === page
                    ? "bg-[#D9F5F3] text-black font-semibold"
                    : "hover:bg-blue-100"
                }`}
              >
                <span className="ml-3">{page.replace("-", " ")}</span>
                {activePage === page && (
                  <span className="absolute right-0 top-0 h-full w-1 bg-[#00A99D] rounded-l"></span>
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default OffCanvas;
