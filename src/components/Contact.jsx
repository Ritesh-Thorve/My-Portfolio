import { motion } from 'framer-motion'; 
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
      content: '+91 7507232224',
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
    <section id="contact" className="py-20 px-4 bg-secondary/10">
      <div className="container mx-auto max-w-5xl">
        {/* Section Title */}
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
            Feel free to reach out for any collaboration, questions, or opportunities!
          </p>
        </motion.div>

        {/* Contact Info & Social Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-secondary/20 p-8 rounded-2xl space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link || '#'}
                target={info.link ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="flex items-center gap-6 p-4 rounded-lg hover:bg-secondary/30 transition-all group"
                whileHover={{ x: 10 }}
              >
                {/* Icon box */}
                <div className="min-w-[60px] min-h-[60px] bg-primary/20 rounded-xl flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <info.icon className="text-2xl text-primary" />
                </div>
                
                {/* Text section */}
                <div className="flex flex-col justify-center">
                  <h3 className="text-lg font-semibold text-gray-200">{info.title}</h3>
                  <p className="text-sm text-gray-400">{info.content}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-secondary/20 p-8 rounded-2xl flex flex-col justify-between"
          >
            <h3 className="text-xl font-bold mb-6 text-center">Connect with Me</h3>
            <div className="flex justify-center gap-6">
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
