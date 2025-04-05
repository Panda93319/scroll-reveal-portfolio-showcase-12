
import { ArrowRight, Phone, Mail, MapPin, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-28 lg:py-40 overflow-hidden relative"
      style={{
        backgroundImage: "url('/lovable-uploads/f55efce3-be0e-49fa-9ca7-bc5d963b39cb.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 to-purple-900/40 backdrop-blur-sm"></div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-6 md:px-10 lg:px-16 relative z-10"
      >
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="bg-blue-900/30 w-20 h-20 rounded-full flex items-center justify-center mb-8 shadow-lg shadow-blue-900/20">
            <motion.img
              initial={{ rotate: -10 }}
              animate={{ rotate: 10 }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
              src="/lovable-uploads/3eab83e0-8688-401f-ae62-d1290223066f.png"
              alt="AS Logo"
              className="w-12 h-12 object-contain"
            />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold">
            FROM CONCEPT TO <span className="text-white font-bold">CREATION</span>
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mt-4">
            LET's MAKE IT <span className="text-white font-bold">HAPPEN!</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20 w-full max-w-5xl">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center p-8 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-xl shadow-purple-900/10"
            >
              <Phone size={28} className="mb-4 text-blue-400" />
              <h4 className="font-medium text-lg mb-3">Phone</h4>
              <p className="text-gray-300">+380963598237</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center p-8 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-xl shadow-purple-900/10"
            >
              <Mail size={28} className="mb-4 text-blue-400" />
              <h4 className="font-medium text-lg mb-3">Email</h4>
              <p className="text-gray-300">suroviahinartem@gmail.com</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center p-8 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-xl shadow-purple-900/10"
            >
              <MapPin size={28} className="mb-4 text-blue-400" />
              <h4 className="font-medium text-lg mb-3">Location</h4>
              <p className="text-gray-300">Kyiv City, Ukraine</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center p-8 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-xl shadow-purple-900/10"
            >
              <Calendar size={28} className="mb-4 text-blue-400" />
              <h4 className="font-medium text-lg mb-3">Availability</h4>
              <p className="text-gray-300">Ready for new projects</p>
            </motion.div>
          </div>

          <div className="mt-16">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="mailto:suroviahinartem@gmail.com"
              className="flex items-center gap-3 bg-white/10 hover:bg-white/20 px-8 py-4 rounded-full border border-white/20 transition-all group shadow-lg shadow-purple-900/10"
            >
              Get In Touch
              <span className="bg-white rounded-full p-1.5 text-black group-hover:translate-x-1 transition-transform">
                <ArrowRight size={18} />
              </span>
            </motion.a>
          </div>

          <div className="mt-20 max-w-3xl text-center">
            <p className="text-2xl">I'm available for full-time roles & freelance projects.</p>
            <p className="text-gray-400 mt-6 text-lg">
              I specialize in building scalable web applications, blockchain solutions, and delivering seamless user experiences.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
