import { motion } from 'framer-motion';
import {
  FaCode,
  FaPalette,
  FaMobile,
  FaServer,
  FaDatabase,
  FaChartLine,
  FaShieldAlt,
} from 'react-icons/fa';

export default function Services() {
  const services = [
    {
      icon: FaCode,
      title: 'Web Development',
      description: 'Creating responsive and dynamic websites using modern technologies.',
    },
    {
      icon: FaPalette,
      title: 'UI/UX Design',
      description: 'Designing beautiful and intuitive user interfaces.',
    },
    {
      icon: FaDatabase,
      title: 'Database Management',
      description: 'Creating and optimizing database schemas for efficient data storage.',
    },
    {
      icon: FaServer,
      title: 'API Development',
      description: 'Designing RESTful APIs for seamless communication between services.',
    },
    {
      icon: FaChartLine,
      title: 'Performance Optimization',
      description: 'Ensuring fast response times with efficient queries and caching.',
    },
    {
      icon: FaShieldAlt,
      title: 'Security and Compliance',
      description: 'Building secure login systems with OAuth, JWT, or SSO.',
    },
  ];

  return (
    <section id="service" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/10">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-14">
            My <span className="text-primary">Services</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-xl text-center bg-secondary/20 hover:bg-secondary/30 transition-colors shadow-md group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="w-16 h-16 mx-auto mb-5 bg-primary/20 group-hover:bg-primary/30 rounded-full flex items-center justify-center transition-colors">
                  <service.icon className="text-3xl text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
