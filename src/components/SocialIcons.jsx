import { motion } from 'framer-motion';
import { FaGithub, FaTwitter, FaEnvelope, FaLinkedin, FaFileDownload } from 'react-icons/fa';

export default function SocialIcons() {
  const socialIcons = [
    { Icon: FaGithub, link: 'https://github.com/Ritesh-Thorve', label: 'GitHub', delay: 0.6 },
    { Icon: FaLinkedin, link: 'https://www.linkedin.com/in/ritesh-thorve/', label: 'LinkedIn', delay: 0.9 },
    { Icon: FaEnvelope, link: 'mailto:ritesh@example.com', label: 'Email', delay: 1.2 }, 
  ];

  return (
    <motion.div
      className="flex justify-center md:justify-start space-x-6 mt-8"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
      }}
    >
      {socialIcons.map(({ Icon, link, label, delay }, index) => (
        <motion.a
          key={index}
          href={link}
          className="text-2xl text-gray-400 hover:text-primary transition-colors"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          whileHover={{ y: -5 }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <Icon />
        </motion.a>
      ))}
    </motion.div>
  );
}
