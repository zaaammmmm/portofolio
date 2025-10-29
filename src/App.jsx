import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import ContactForm from './components/ContactForm.jsx';
import Image, { listProyek, listTools } from './data.js';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });

    // Auto-scroll to hero section on page load
    const timer = setTimeout(() => {
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        heroSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 1000); // Delay to allow page to load

    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={Image.HeroImage}
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Ahmad Zamroni Trikarta
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl mb-8 text-blue-200">
              Full Stack Web Developer & Designer
            </p>
            <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Saya mempunyai ketertarikan dalam bidang Programming dan Designer, terutama pada pembuatan Website dan Desain seperti Poster, Pamflet serta Banner, ketertarikan pada bidang ini sudah berlangsung lebih dari 4 Tahun untuk semua Bidang.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('portfolio')}
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
              >
                View My Work
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold rounded-lg transition-all duration-200"
              >
                Get In Touch
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              data-aos="fade-up"
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                About Me
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            </motion.div>

            <motion.div
              data-aos="fade-up"
              data-aos-delay="200"
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8 md:p-12"
            >
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                Hi, perkenalkan saya Ahmad Zamroni Trikarta, seorang Full Stack Web Developer dan Designer untuk UI/UX Design maupun Product Digital, Saya percaya bahwa desain dan fungsionalitas harus berjalan beriringan, sehingga setiap proyek yang saya kembangkan tidak hanya terlihat menarik tetapi juga memberikan pengalaman pengguna yang optimal.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            data-aos="fade-up"
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Skills & Tools
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {listTools.map((tool, index) => (
              <motion.div
                key={tool.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={tool.gambar}
                  alt={tool.nama}
                  className="w-16 h-16 mx-auto mb-4 object-contain"
                />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {tool.nama}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {tool.ket}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            data-aos="fade-up"
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              My Portfolio
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {listProyek.map((project, index) => (
              <motion.div
                key={project.id}
                data-aos="fade-up"
                data-aos-delay={index * 150}
                whileHover={{ scale: 1.03 }}
                className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.gambar}
                    alt={project.nama}
                    className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.nama}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.desk}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, toolIndex) => (
                      <span
                        key={toolIndex}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            data-aos="fade-up"
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
