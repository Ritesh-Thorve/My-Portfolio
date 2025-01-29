import { motion } from 'framer-motion'; 
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

export default function Contact() {
 
  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      content: 'Jalgaon, Maharashtra, India',
    },
    {
      icon: FaPhone,
      title: 'Phone',
      content: '+91 9373564294',
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      content: 'riteshthorve387@gmail.com',
      link: 'mailto:riteshthorve387@gmail.com'
    }
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      name: 'GitHub',
      link: 'https://github.com/Ritesh-Thorve/',
      color: 'hover:text-gray-100'
    },
    {
      icon: FaLinkedin,
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/ritesh-thorve/',
      color: 'hover:text-blue-400'
    },
    {
      icon: FaEnvelope,
      name: 'Email',
      link: 'mailto:riteshthorve387@gmail.com',
      color: 'hover:text-red-400'
    }
  ];

  return (
    <section id="contact" className="h-screen flex items-center justify-center px-4 ">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Feel free to reach out to me for any questions or opportunities!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-12 justify-items-center max-w-full">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8 max-w-xs md:max-w-full"
          >
            <div className="bg-secondary/20 p-8 rounded-2xl ">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 mb-6 last:mb-0 hover:bg-secondary/30 p-4 rounded-lg transition-all group"
                  whileHover={{ x: 10 }}
                >
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <info.icon className="text-2xl text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-200">{info.title}</h3>
                    <p className="text-gray-400">{info.content}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="bg-secondary/20 p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-6">Connect with Me</h3>
              <div className="flex justify-center space-x-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-3xl text-gray-400 transition-all ${social.color}`}
                    whileHover={{ y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <social.icon />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
