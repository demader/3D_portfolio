
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <header className="header">
      <NavLink
        to="/"
        className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
      >
        <p className="blue-gradient_text">AG</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
// import React, { useState, useEffect, useRef } from "react";
// import { NavLink } from "react-router-dom";

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isResumeDropdownOpen, setIsResumeDropdownOpen] = useState(false);
//   const mobileMenuRef = useRef(null);
//   const dropdownRef = useRef(null);

//   // Handle scroll effect
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Handle click outside mobile menu
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
//         setIsMobileMenuOpen(false);
//       }
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsResumeDropdownOpen(false);
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   // Handle escape key
//   useEffect(() => {
//     const handleEscape = (event) => {
//       if (event.key === 'Escape') {
//         setIsMobileMenuOpen(false);
//         setIsResumeDropdownOpen(false);
//       }
//     };
//     document.addEventListener('keydown', handleEscape);
//     return () => document.removeEventListener('keydown', handleEscape);
//   }, []);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   const closeMobileMenu = () => {
//     setIsMobileMenuOpen(false);
//     setIsResumeDropdownOpen(false);
//   };

//   const toggleResumeDropdown = () => {
//     setIsResumeDropdownOpen(!isResumeDropdownOpen);
//   };

//   const handleDownload = () => {
//     // Create a link element and trigger download
//     const link = document.createElement('a');
//     link.href = 'CV_Abhishek_Govind.pdf';
//     link.download = 'AG_Resume.pdf';
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//     setIsResumeDropdownOpen(false);
//     setIsMobileMenuOpen(false);
//   };

//   return (
//     <>
//       <header className={`fixed top-0 left-0 right-0 z-50 px-8 py-4 transition-all duration-300 ${
//         isScrolled 
//           ? 'bg-white/95 backdrop-blur-sm shadow-lg' 
//           : 'bg-transparent'
//       } flex justify-between items-center max-w-5xl mx-auto`}>
//         <NavLink
//           to="/"
//           className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
//           onClick={closeMobileMenu}
//         >
//           <p className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">AG</p>
//         </NavLink>
        
//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex text-lg gap-7 font-medium">
//           <NavLink
//             to="/about"
//             className={({ isActive }) =>
//               `transition-colors duration-200 hover:text-blue-500 ${
//                 isActive ? "text-blue-500" : "text-black"
//               }`
//             }
//             onClick={closeMobileMenu}
//           >
//             About
//           </NavLink>
//           <NavLink
//             to="/projects"
//             className={({ isActive }) =>
//               `transition-colors duration-200 hover:text-blue-500 ${
//                 isActive ? "text-blue-500" : "text-black"
//               }`
//             }
//             onClick={closeMobileMenu}
//           >
//             Projects
//           </NavLink>
//           <NavLink
//             to="/contact"
//             className={({ isActive }) =>
//               `transition-colors duration-200 hover:text-blue-500 ${
//                 isActive ? "text-blue-500" : "text-black"
//               }`
//             }
//             onClick={closeMobileMenu}
//           >
//             Contact
//           </NavLink>
          
//           {/* Resume Dropdown */}
//           <div className="relative" ref={dropdownRef}>
//             <button
//               onClick={toggleResumeDropdown}
//               onMouseEnter={() => setIsResumeDropdownOpen(true)}
//               className="flex items-center gap-1 text-lg font-medium text-black hover:text-blue-500 transition-colors duration-200 px-2 py-1 rounded"
//               aria-expanded={isResumeDropdownOpen}
//               aria-haspopup="true"
//             >
//               Resume
//               <span className={`text-xs transition-transform duration-200 ${
//                 isResumeDropdownOpen ? 'rotate-180' : ''
//               }`}>▼</span>
//             </button>
            
//             <div 
//               className={`absolute top-full right-0 mt-2 bg-white shadow-xl rounded-lg min-w-[180px] transition-all duration-200 z-50 ${
//                 isResumeDropdownOpen 
//                   ? 'opacity-100 visible translate-y-0' 
//                   : 'opacity-0 invisible -translate-y-2'
//               }`}
//               onMouseEnter={() => setIsResumeDropdownOpen(true)}
//               onMouseLeave={() => setIsResumeDropdownOpen(false)}
//             >
//               <NavLink
//                 to="/resume"
//                 className="flex items-center gap-2 px-4 py-3 text-black hover:bg-gray-50 hover:text-blue-500 transition-all duration-200 font-medium first:rounded-t-lg"
//                 onClick={closeMobileMenu}
//               >
//                 <span className="text-base">👁️</span>
//                 View Resume
//               </NavLink>
//               <button
//                 onClick={handleDownload}
//                 className="w-full flex items-center gap-2 px-4 py-3 text-black hover:bg-gray-50 hover:text-blue-500 transition-all duration-200 font-medium text-left last:rounded-b-lg border-none bg-transparent cursor-pointer"
//               >
//                 <span className="text-base">📄</span>
//                 Download PDF
//               </button>
//             </div>
//           </div>
//         </nav>

//         {/* Mobile Menu Toggle Button */}
//         <button
//           className="md:hidden flex flex-col justify-around w-6 h-6 bg-transparent border-none cursor-pointer p-0 z-[1001]"
//           onClick={toggleMobileMenu}
//           aria-label="Toggle mobile menu"
//           aria-expanded={isMobileMenuOpen}
//         >
//           <span className={`w-6 h-0.5 bg-black transition-all duration-300 origin-[1px] ${
//             isMobileMenuOpen ? 'rotate-45' : ''
//           }`}></span>
//           <span className={`w-6 h-0.5 bg-black transition-all duration-300 origin-[1px] ${
//             isMobileMenuOpen ? 'opacity-0' : ''
//           }`}></span>
//           <span className={`w-6 h-0.5 bg-black transition-all duration-300 origin-[1px] ${
//             isMobileMenuOpen ? '-rotate-45' : ''
//           }`}></span>
//         </button>
//       </header>

//       {/* Mobile Navigation Menu */}
//       <nav 
//         ref={mobileMenuRef}
//         className={`fixed top-0 w-70 h-screen bg-white shadow-2xl transition-all duration-300 z-[1000] pt-20 ${
//           isMobileMenuOpen ? 'right-0' : '-right-full'
//         } md:hidden`}
//         aria-hidden={!isMobileMenuOpen}
//       >
//         <div className="p-8">
//           <NavLink
//             to="/about"
//             className={({ isActive }) =>
//               `block py-4 text-lg font-medium border-b border-gray-100 transition-colors duration-200 hover:text-blue-500 ${
//                 isActive ? "text-blue-500" : "text-black"
//               }`
//             }
//             onClick={closeMobileMenu}
//           >
//             About
//           </NavLink>
//           <NavLink
//             to="/projects"
//             className={({ isActive }) =>
//               `block py-4 text-lg font-medium border-b border-gray-100 transition-colors duration-200 hover:text-blue-500 ${
//                 isActive ? "text-blue-500" : "text-black"
//               }`
//             }
//             onClick={closeMobileMenu}
//           >
//             Projects
//           </NavLink>
//           <NavLink
//             to="/contact"
//             className={({ isActive }) =>
//               `block py-4 text-lg font-medium border-b border-gray-100 transition-colors duration-200 hover:text-blue-500 ${
//                 isActive ? "text-blue-500" : "text-black"
//               }`
//             }
//             onClick={closeMobileMenu}
//           >
//             Contact
//           </NavLink>
          
//           {/* Mobile Resume Options */}
//           <div className="border-t border-gray-100 mt-4 pt-4">
//             <NavLink
//               to="/resume"
//               className={({ isActive }) =>
//                 `flex items-center gap-3 py-4 text-lg font-medium border-b border-gray-100 transition-colors duration-200 hover:text-blue-500 ${
//                   isActive ? "text-blue-500" : "text-black"
//                 }`
//               }
//               onClick={closeMobileMenu}
//             >
//               <span className="text-base">👁️</span>
//               View Resume
//             </NavLink>
//             <button
//               onClick={handleDownload}
//               className="w-full flex items-center gap-3 py-4 text-lg font-medium text-black hover:text-blue-500 transition-colors duration-200 text-left border-none bg-transparent cursor-pointer font-inherit"
//             >
//               <span className="text-base">📄</span>
//               Download Resume
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* Mobile Menu Overlay */}
//       {isMobileMenuOpen && (
//         <div 
//           className="fixed top-0 left-0 w-screen h-screen bg-black/50 z-[999] md:hidden"
//           onClick={closeMobileMenu}
//         />
//       )}
//     </>
//   );
// };

// export default Navbar;