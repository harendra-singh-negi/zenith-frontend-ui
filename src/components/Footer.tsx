import React from "react";
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Mail } from "lucide-react";
import { footerData } from "../utils/footerData";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const { logo, socialLinks, navigation, contact, mapLocation } = footerData;

  // Icon Mapping
  const iconMap: { [key: string]: JSX.Element } = {
    facebook: <Facebook size={18} />,
    twitter: <Twitter size={18} />,
    linkedin: <Linkedin size={18} />,
    instagram: <Instagram size={18} />,
    youtube: <Youtube size={18} />,
  };

  return (
    <footer className="relative bg-black text-white">
      {/* Curved Gradient Section */}
      <div className="relative w-full h-24 md:h-32 overflow-hidden">
        <svg
          className="absolute top-0 left-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="url(#footer-gradient)"
            fillOpacity="1"
            d="M0,256L80,229.3C160,203,320,149,480,128C640,107,800,117,960,149.3C1120,181,1280,235,1360,261.3L1440,288L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
          <defs>
            <linearGradient id="footer-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: "#FF0000", stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: "#FF8000", stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: "#FFD700", stopOpacity: 1 }} />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10 items-center">
        {/* Left Section - Logo & Social */}
        <div>
          <h2 className="text-xl font-bold flex items-center space-x-2">
            <Mail size={22} />
            <span>{logo}</span>
          </h2>
          <p className="mt-4 text-sm">Join Us</p>
          <div className="flex space-x-3 mt-3">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-gray-600 transition"
              >
                {iconMap[social.icon]}
              </a>
            ))}
          </div>
        </div>

        {/* Center Navigation Links */}
        <div className="text-center">
          <ul className="flex flex-wrap justify-center gap-2 md:space-y-2 md:flex-col">
            {navigation.map((item, index) => (
              <li key={index} className="hover:text-red-500 cursor-pointer flex">
                <Link to={item.link} className="hover:text-red-500">{item.title}</Link>
                {index < navigation.length - 1 && (
                  <span className="mx-2 block md:hidden">|</span>
                )}
              </li>
            ))}
          </ul>
        </div>
        {/* Right Section - Contact & Map */}
        <div className="text-right">
          <div className="mt-4 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src={mapLocation}
              width="100%"
              height="150"
              className="rounded-lg shadow-md border-2 border-white"
              style={{ borderRadius: "16px" }}
              loading="lazy"
            ></iframe>
          </div>
          <h3 className="font-bold">Contact</h3>
          <p className="text-sm">Email: {contact.email}</p>
          <p className="text-sm">Phone: {contact.phone}</p>
          <p className="text-sm">Address: {contact.address}</p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
