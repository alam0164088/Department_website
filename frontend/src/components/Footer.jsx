import { NavLink } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

function Footer() {
  const quickLinks = [
    { to: '/', label: 'Home' },
    { to: '/teachers', label: 'Teachers' },
    { to: '/students', label: 'Students' },
    { to: '/library', label: 'Library' },
    { to: '/programs', label: 'Programs' },
    { to: '/research', label: 'Research' }
  ];

  const contactInfo = [
    { icon: <FaMapMarkerAlt />, text: 'Gobra, Sadar, Gopalganj' },
    { icon: <FaPhone />, text: '+880-2-123456' },
    { icon: <FaEnvelope />, text: 'info@gstu.edu' }
  ];

  return (
    <footer className="relative">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>

      {/* Main Content */}
      <div className="relative pt-16 pb-10">
        <div className="container mx-auto px-6">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            {/* Logo & About */}
            <div className="space-y-6">
              <NavLink to="/" className="block">
                <h2 className="text-3xl font-extrabold bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  CSE, GUET
                </h2>
              </NavLink>
              <p className="text-gray-400 leading-relaxed">
                Empowering future tech leaders through excellence in education, innovation, and research.
              </p>
              <div className="flex gap-4">
                {[
                  { icon: <FaFacebookF />, href: 'https://facebook.com', label: 'Facebook' },
                  { icon: <FaLinkedinIn />, href: 'https://linkedin.com', label: 'LinkedIn' },
                  { icon: <FaEnvelope />, href: 'mailto:info@gstu.edu', label: 'Email' }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-gradient-to-r from-teal-500 to-blue-500 flex items-center justify-center text-white hover:from-blue-500 hover:to-purple-500 transform hover:scale-110 transition-all duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
              <div className="grid grid-cols-2 gap-4">
                {quickLinks.map((link, index) => (
                  <NavLink
                    key={index}
                    to={link.to}
                    className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center space-x-1"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-teal-400 to-blue-400"></span>
                    <span>{link.label}</span>
                  </NavLink>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Contact Us</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-3 text-gray-400">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-teal-500/10 to-blue-500/10 flex items-center justify-center text-teal-400">
                      {info.icon}
                    </div>
                    <span>{info.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>

          {/* Bottom Section */}
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} CSE, GSTU. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-500">
              <a href="#" className="hover:text-teal-400 transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-teal-400 transition-colors duration-300">Terms of Service</a>
              <a href="#" className="hover:text-teal-400 transition-colors duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-500 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
    </footer>
  );
}

export default Footer;