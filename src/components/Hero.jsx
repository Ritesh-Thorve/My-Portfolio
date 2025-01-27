import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom'; 
import { useTypewriter } from '../hooks/useTypewriter';
import SocialIcons from './SocialIcons';
import { FaDownload } from 'react-icons/fa';  // Import the download icon

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
    <section id="home" className="pt-32 pb-16 px-4 min-h-screen flex items-center">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center">
        {/* Left Content */}
        <motion.div
          className="md:w-1/2 text-center md:text-left pl-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.p 
            className="text-xl font-bold mb-4 ml-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}>
              Hi,{' '}<span className="bg-gradient-to-r from-primary to-blue-400 text-transparent bg-clip-text">
              I am
            </span>
          </motion.p>
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-4"
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
            className="text-xl md:text-2xl min-h-[2rem] text-gray-400 mb-8"
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
             <div className="flex gap-5">
             <Link to="contact" smooth={true} duration={500}>
              <button className="btn-primary group font-bold">
                Get Connected
                <span className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform font-bold">
                  →
                </span>
              </button>
            </Link>
            
            <NavLink to="https://drive.google.com/file/d/1li1oy701M_yOM7SLojq0teJsFJ0pMgvl/view" smooth={true} duration={500}>
              <button className="btn-primary group flex items-center font-bold">
                 Resume
                <FaDownload className="ml-2" size={20} />  
              </button>
            </NavLink>
             </div>
          </motion.div>

          <SocialIcons />
        </motion.div>

        {/* Right Content - Profile Image */}
        <motion.div
          className="md:w-1/2 mb-8 md:mb-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative">
            <div className="w-64 h-64 md:w-96 md:h-96 rounded-full bg-gradient-to-r from-primary to-blue-400 mx-auto overflow-hidden p-1">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=768&h=768&q=80"
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <motion.div
              className="absolute -z-10 w-64 h-64 md:w-96 md:h-96 rounded-full bg-primary/30 mx-auto"
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
