import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function Portfolio() {
  const navigate = useNavigate();

  const portfolioItems = [
    {
      title: 'Eventura',
      category: 'Web Development: MERN Stack',
      image: '/Eventura-img.png',
      path: 'https://github.com/Ritesh-Thorve/Eventura',
      path2: 'https://eventura-official.vercel.app',
    },
    {
      title: 'To-Do App',
      category: 'Web Development: MERN Stack',
      image: '/Screenshot 2025-01-26 174142.png',
      path: 'https://github.com/Ritesh-Thorve/To-Do',
      path2: '#',
    },
    {
      title: 'LinkTree',
      category: 'Web Development: Next.js',
      image: '/Screenshot 2025-01-26 174721.png',
      path: 'https://github.com/Ritesh-Thorve/LinkTree',
      path2: '#',
    },
    {
      title: 'Portfolio Website',
      category: 'Web Development: React.js',
      image: '/portfolio.png',
      path: 'https://github.com/Ritesh-Thorve/My-Portfolio',
      path2: '#',
    },
  ];

  const handleNavigate = (path) => {
    // For internal links, use navigate; for external links, use window.open
    if (path.startsWith('http')) {
      window.open(path, '_blank');
    } else {
      navigate(path);
    }
  };

  return (
    <section id="portfolio" className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-12">
            My <span className="text-primary">Projects</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <PortfolioCard key={index} item={item} onNavigate={handleNavigate} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function PortfolioCard({ item, onNavigate }) {
  const isPath2Disabled = item.path2 === '#';

  return (
    <motion.div
      className="group relative overflow-hidden rounded-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
    >
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-blue-400/90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
        <p className="text-sm">{item.category}</p>

        <div className="flex gap-4 mt-4">
          <button
            className="px-6 py-2 border-2 border-white rounded-full hover:bg-white hover:text-primary transition-colors"
            onClick={() => onNavigate(item.path)}
          >
            Source Code
          </button>

          <button
            className={`px-6 py-2 border-2 rounded-full transition-colors ${
              isPath2Disabled
                ? 'border-gray-300 text-gray-300 cursor-not-allowed'
                : 'border-white hover:bg-white hover:text-primary'
            }`}
            onClick={() => !isPath2Disabled && onNavigate(item.path2)}
            disabled={isPath2Disabled}
          >
            {isPath2Disabled ? 'Coming Soon' : 'View Project'}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
