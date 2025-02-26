import { Mail, MapPin, Phone } from 'lucide-react';
import { Element } from 'react-scroll';

const FooterCopy = () => {
  return (
    <Element name="contact">
      <footer className="relative">
        {/* Curved top border */}
        <div className="absolute top-0 left-0 right-0 h-20 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-r from-red-500 to-orange-500"
            style={{
              borderRadius: '50%/0 0 100% 100%',
              transform: 'scaleX(1.5)',
            }}
          />
        </div>

        {/* Main footer content */}
        <div className="bg-black text-white pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Logo and Social Links */}
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <Mail className="w-8 h-8" />
                  <span className="text-2xl font-bold">Logo</span>
                </div>
                <p className="text-gray-400 mb-6">Join Us</p>
                <div className="flex gap-4">
                  <a href="http://www.facebook.com/zenithhostel" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                    <img src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/facebook.svg" alt="Facebook" className="w-5 h-5 invert" />
                  </a>
                  {/* <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <img src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/x.svg" alt="X" className="w-5 h-5 invert" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <img src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/linkedin.svg" alt="LinkedIn" className="w-5 h-5 invert" />
                </a> */}
                  <a href="https://instagram.com/zenithyouthhostel" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                    <img src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/instagram.svg" alt="Instagram" className="w-5 h-5 invert" />
                  </a>
                  {/* <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <img src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/youtube.svg" alt="YouTube" className="w-5 h-5 invert" />
                </a> */}
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
                <ul className="space-y-4">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">Gallery</a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">Admission</a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a>
                  </li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="text-lg font-semibold mb-6">Contact</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-red-500" />
                    <a href="mailto:zenithyouthhostel.mg@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                      zenithyouthhostel.mg@gmail.com
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-red-500" />
                    <a href="tel:+919410922354" className="text-gray-400 hover:text-white transition-colors">
                      +91 94109 22354
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span className="text-gray-400">
                      Paundha Bidholi Road, Bidholi, Dehradun
                    </span>
                  </li>
                </ul>
              </div>

              {/* Map Preview */}
              <div>
                <div className="rounded-2xl overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6881.703807774134!2d77.9607352!3d30.4119434!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908d50069a381df%3A0x9a601001f97396fd!2sZenith%20Youth%20Luxury%20Hostel!5e0!3m2!1sen!2sin!4v1740334472357!5m2!1sen!2sin"
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Element>
  );
};

export default FooterCopy;