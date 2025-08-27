import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Team', href: '#team' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    'Business Mentorship',
    'Strategic Planning',
    'Policy Development',
    'Capacity Building',
    'Project Management'
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="container-max">
        {/* Main Footer Content */}
        <div className="py-16 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-4">
                Premier Strategic Consultants
              </h3>
              <p className="text-white/80 mb-6 leading-relaxed">
                Empowering institutions and advancing enterprises across Africa through 
                innovative, evidence-driven consulting solutions. Over 12 years of 
                strategic development expertise.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin size={18} className="text-accent" />
                  <span className="text-white/80">Nairobi, Kenya</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={18} className="text-accent" />
                  <span className="text-white/80">0700 422 973</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail size={18} className="text-accent" />
                  <span className="text-white/80">consultantsglobalke@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-white/80 hover:text-accent transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Our Services</h4>
              <ul className="space-y-2">
                {services.map((service, index) => (
                  <li key={index} className="text-white/80 text-sm">
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/20 py-6 px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <div className="text-white/80 text-sm mb-4 md:mb-0">
              © {currentYear} Premier Strategic Consultants. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/premier-strategic-consultants/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://www.instagram.com/premierstrategic_consultants/profilecard/?igsh=MWxrZTFjam45OTYyaQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.facebook.com/share/16cnWkgk9f/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;