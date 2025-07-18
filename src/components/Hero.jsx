import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom'; 
import { useTypewriter } from '../hooks/useTypewriter';
import SocialIcons from './SocialIcons';
import { FaDownload } from 'react-icons/fa';   

export default function Hero() {
  const roles = useTypewriter({
    words: [
      'Software Engineer',
      'Full Stack Developer',
      'UI/UX Explorer',
      'MERN Stack Developer'
    ]
  });

  return (
    <section id="home" className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
      <div className="container mx-auto max-w-7xl flex flex-col-reverse md:flex-row items-center">
        {/* Left Content */}
        <motion.div
          className="md:w-1/2 text-center md:text-left md:pl-10 px-2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.p 
            className="text-lg sm:text-xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}>
              Hi,{' '}
              <span className="bg-gradient-to-r from-primary to-blue-400 text-transparent bg-clip-text">
                I am
              </span>
          </motion.p>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Ritesh{' '}
            <span className="bg-gradient-to-r from-primary to-blue-400 text-transparent bg-clip-text">
              Thorve
            </span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl min-h-[2rem] text-gray-400 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
           {roles}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center md:justify-start items-center">
              <Link to="contact" smooth={true} duration={500}>
                <button className="btn-primary group font-bold w-full sm:w-auto">
                  Get Connected
                  <span className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform font-bold">
                    →
                  </span>
                </button>
              </Link>

              <NavLink 
                to="https://drive.google.com/file/d/1aMnMuQcQL-NkEBWUNAeWaGJ034hSkRES/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <button className="btn-primary group flex items-center justify-center font-bold w-full sm:w-auto">
                  Resume
                  <FaDownload className="ml-2" size={20} />  
                </button>
              </NavLink>
            </div>
          </motion.div>

          <div className="mt-8">
            <SocialIcons />
          </div>
        </motion.div>

        {/* Right Content - Profile Image */}
        <motion.div
          className="md:w-1/2 mb-12 md:mb-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative flex justify-center">
            <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-r from-primary to-blue-400 overflow-hidden p-1">
              <img
                src="ritesh2.jpg"
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <motion.div
              className="absolute -z-10 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-primary/30"
              style={{ filter: 'blur(40px)' }}
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 90, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
