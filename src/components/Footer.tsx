
import { Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Wille Chen</h3>
            <p className="text-gray-400 mb-6">
              Help you create experiences where aesthetics & functionality seamlessly come together.
            </p>            
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-4">General</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-gray-400 hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#work" className="text-gray-400 hover:text-white transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#blog" className="text-gray-400 hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                    About
                  </a>
                </li>
              </ul>
            </div>            
          </div>

          <div>
            <h4 className="font-semibold mb-4">Get in touch</h4>
            <p className="text-gray-400 mb-4">
              Feel free to reach out to me for any inquiries or collaboration opportunities.
            </p>
            <a
              href="mailto:hello@aayushbharti.in"
              className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
            >
              <Mail size={18} className="mr-2" />
              venuswillie1216@gmail.com
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Willie Chen. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
