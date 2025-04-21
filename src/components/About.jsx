import { motion } from 'framer-motion';

export default function About() {
  const skills = [
    { name: 'MERN', percentage: '70%' },
    { name: 'Web Development', percentage: '75%' },
    { name: 'React.js', percentage: '70%' },
    { name: 'Next.js', percentage: '60%' },
    { name: 'Node.js', percentage: '65%' },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/15">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            About <span className="text-primary">Me</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left Section */}
            <div className="space-y-6">
              <h3 className="text-xl sm:text-2xl font-semibold text-primary">
                Web Developer
              </h3>
              <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
                I'm passionate about web development and have experience creating beautiful and functional websites. I specialize in modern web technologies and user-centric design.
              </p>
              <ul className="space-y-3 text-gray-400 text-base sm:text-lg">
                <li className="flex items-center">
                  <span className="text-primary mr-2">→</span>
                  Fresher
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">→</span>
                  4+ Projects Completed
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">→</span>
                  Creative
                </li>
              </ul>
            </div>

            {/* Right Section */}
            <div className="space-y-6">
              <h3 className="text-xl sm:text-2xl font-semibold text-primary">
                Skills & Expertise
              </h3>

              <div className="space-y-5">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm sm:text-base">
                      <span className="text-gray-400">{skill.name}</span>
                      <span className="text-primary">{skill.percentage}</span>
                    </div>
                    <div className="h-2 bg-secondary/40 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary to-blue-400"
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.percentage }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
