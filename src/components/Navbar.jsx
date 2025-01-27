import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Resume', path: 'https://drive.google.com/file/d/1li1oy701M_yOM7SLojq0teJsFJ0pMgvl/view' },
    { name: 'About', path: '/about' },
    { name: 'Service', path: '/services' },
    { name: 'Project', path: '/portfolio' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <motion.nav 
      className="fixed flex items-center font-bold justify-center w-full z-50 bg-secondary/90 backdrop-blur-2xl h-20"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto ">
        <div className="flex  justify-between items-center font-bold">
          <motion.div 
            className="text-3xl font-bold"
            whileHover={{ scale: 1.05 }}
          >
             
            <NavLink to="/">
              <span className='ml-14 text-2xl'>Pleasure to</span> 
              <span className="bg-gradient-to-r text-2xl from-primary to-blue-400 text-transparent bg-clip-text font-bold pl-2">connect! 
              </span>     
            </NavLink> 
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 font-bold pr-36 ">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) => 
                  `nav-link cursor-pointer relative group ${isActive ? 'text-primary' : ''}`
                }
              >
                {item.name} 
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
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
          className="md:hidden bg-secondary/95 backdrop-blur-sm"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="container mx-auto px-4 py-4">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) => 
                  `block py-2 nav-link hover:pl-4 transition-all ${isActive ? 'text-primary' : ''}`
                }
                onClick={() => setIsMenuOpen(false)}
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