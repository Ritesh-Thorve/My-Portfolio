import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Resume', path: 'https://drive.google.com/file/d/108kXE4Kx_NnhK3jGLpFYobX3toKAkpCk/view?usp=sharing' },
    { name: 'About', path: '/about' },
    { name: 'Service', path: '/services' },
    { name: 'Projects', path: '/portfolio' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <motion.nav 
      className="fixed flex items-center font-bold justify-center w-full z-50 bg-secondary/90 backdrop-blur-2xl h-20"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center font-bold">
          <motion.div 
            className="text-3xl font-bold"
            whileHover={{ scale: 1.05 }}
          >
            <NavLink to="/" className="flex items-center">
              <span className='text-lg sm:text-xl md:text-2xl'>Pleasure to</span> 
              <span className="bg-gradient-to-r text-lg sm:text-xl md:text-2xl from-primary to-blue-400 text-transparent bg-clip-text font-bold pl-2">
                connect! 
              </span>     
            </NavLink> 
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8 font-bold">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) => 
                  `nav-link px-2 py-1 rounded-md transition-colors duration-200 cursor-pointer relative group text-sm lg:text-base ${
                    isActive ? 'text-primary' : 'hover:text-primary/80'
                  }`
                }
                target={item.path.startsWith('http') ? '_blank' : undefined}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary p-2 rounded-md hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary/50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div 
          className="md:hidden bg-secondary/95 backdrop-blur-sm w-full fixed top-20 left-0 right-0 shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <div className="container mx-auto px-4 py-2">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) => 
                  `block py-3 px-4 nav-link hover:bg-primary/10 rounded-md transition-all ${
                    isActive ? 'text-primary font-semibold' : 'text-current'
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
                target={item.path.startsWith('http') ? '_blank' : undefined}
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
