import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaHome, FaChalkboardTeacher, FaUserGraduate, FaBook, FaGraduationCap, FaFlask } from 'react-icons/fa';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { path: '/', label: 'Home', icon: <FaHome /> },
    { path: '/teachers', label: 'Teachers', icon: <FaChalkboardTeacher /> },
    { path: '/students', label: 'Students', icon: <FaUserGraduate /> },
    { path: '/library', label: 'Library', icon: <FaBook /> },
    { path: '/programs', label: 'Programs', icon: <FaGraduationCap /> },
    { path: '/research', label: 'Research', icon: <FaFlask /> }
  ];

  return (
    <>
      <header 
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/90 backdrop-blur-lg shadow-sm'
            : 'bg-gradient-to-r from-emerald-900/80 to-teal-800/80 backdrop-blur-sm'
        }`}
      >
        <div className="container mx-auto px-6 py-2">
          <div className="flex justify-between items-center">
            {/* Logo/Title */}
            <NavLink 
              to="/" 
              className="relative group"
            >
              <h1 className={`text-2xl font-bold ${
                isScrolled
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-500'
                  : 'bg-gradient-to-r from-emerald-300 to-teal-200'
                } bg-clip-text text-transparent transition-all duration-300`}
              >
                CSE, GUET
              </h1>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-300 group-hover:w-full transition-all duration-300"></span>
            </NavLink>

            {/* Desktop Navigation */}
            <nav className="hidden lg:block">
              <ul className="flex items-center space-x-8">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `flex items-center space-x-2 py-2 text-sm font-medium transition-colors duration-300 ${
                          isScrolled
                            ? isActive
                              ? 'text-emerald-600'
                              : 'text-gray-600 hover:text-emerald-600'
                            : isActive
                              ? 'text-emerald-300'
                              : 'text-gray-100 hover:text-emerald-300'
                        }`
                      }
                    >
                      <span className="text-lg">{item.icon}</span>
                      <span>{item.label}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className={`lg:hidden p-2 transition-colors duration-300 ${
                isScrolled
                  ? 'text-emerald-600 hover:text-emerald-700'
                  : 'text-white hover:text-emerald-300'
              }`}
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <div className="w-6 h-6 relative">
                <span className={`absolute h-0.5 w-full bg-current transform transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 top-3' : 'top-1'
                }`}></span>
                <span className={`absolute h-0.5 w-full bg-current top-3 transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}></span>
                <span className={`absolute h-0.5 w-full bg-current transform transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 top-3' : 'top-5'
                }`}></span>
              </div>
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? 'max-h-[32rem] mt-2' : 'max-h-0'
          }`}>
            <nav className={`rounded-xl ${
              isScrolled
                ? 'bg-white shadow-lg'
                : 'bg-white/10 backdrop-blur-lg'
            }`}>
              <ul className="py-2">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <NavLink
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center space-x-3 px-4 py-3 text-sm transition-colors duration-300 ${
                          isScrolled
                            ? isActive
                              ? 'text-emerald-600 bg-emerald-50'
                              : 'text-gray-600 hover:text-emerald-600 hover:bg-gray-50'
                            : isActive
                              ? 'text-emerald-300 bg-white/10'
                              : 'text-gray-100 hover:text-emerald-300 hover:bg-white/5'
                        }`
                      }
                    >
                      <span className="text-lg">{item.icon}</span>
                      <span>{item.label}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Active Page Indicator - Thin Line */}
        <div className="h-px bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent"></div>
      </header>

      {/* Spacer to prevent content from going under header */}
      <div className="h-16"></div>
    </>
  );
}

export default Header;