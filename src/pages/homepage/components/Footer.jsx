import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const Footer = () => {
  const currentYear = new Date()?.getFullYear();

  const footerLinks = {
    platform: [
      { name: 'Alumni Dashboard', path: '/alumni-dashboard' },
      { name: 'Directory', path: '/alumni-directory' },
      { name: 'Mentorship', path: '/mentorship-center' },
      { name: 'Profile Setup', path: '/profile-setup' }
    ],
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Careers', path: '/careers' },
      { name: 'Press', path: '/press' },
      { name: 'Contact', path: '/contact' }
    ],
    resources: [
      { name: 'Help Center', path: '/help' },
      { name: 'Community Guidelines', path: '/guidelines' },
      { name: 'Success Stories', path: '/stories' },
      { name: 'Blog', path: '/blog' }
    ],
    legal: [
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Terms of Service', path: '/terms' },
      { name: 'Cookie Policy', path: '/cookies' },
      { name: 'GDPR', path: '/gdpr' }
    ]
  };

  const socialLinks = [
    { name: 'LinkedIn', icon: 'Linkedin', url: 'https://linkedin.com/company/alumniconnect' },
    { name: 'Twitter', icon: 'Twitter', url: 'https://twitter.com/alumniconnect' },
    { name: 'Facebook', icon: 'Facebook', url: 'https://facebook.com/alumniconnect' },
    { name: 'Instagram', icon: 'Instagram', url: 'https://instagram.com/alumniconnect' }
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <Link to="/homepage" className="flex items-center space-x-3 mb-6">
                <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
                  <Icon name="GraduationCap" size={24} color="white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-background font-accent">AlumniConnect</span>
                  <span className="text-xs text-background/70">Professional Network</span>
                </div>
              </Link>
              
              <p className="text-background/80 mb-6 max-w-md leading-relaxed">
                The premium destination where alumni transform from individual graduates into a powerful professional network. Your network is your net worth.
              </p>
              
              <div className="flex items-center space-x-4">
                {socialLinks?.map((social) => (
                  <a
                    key={social?.name}
                    href={social?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 bg-background/10 rounded-lg hover:bg-primary transition-academic"
                  >
                    <Icon name={social?.icon} size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Platform Links */}
            <div>
              <h3 className="font-semibold text-background mb-4">Platform</h3>
              <ul className="space-y-3">
                {footerLinks?.platform?.map((link) => (
                  <li key={link?.name}>
                    <Link
                      to={link?.path}
                      className="text-background/70 hover:text-background transition-academic text-sm"
                    >
                      {link?.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="font-semibold text-background mb-4">Company</h3>
              <ul className="space-y-3">
                {footerLinks?.company?.map((link) => (
                  <li key={link?.name}>
                    <Link
                      to={link?.path}
                      className="text-background/70 hover:text-background transition-academic text-sm"
                    >
                      {link?.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h3 className="font-semibold text-background mb-4">Resources</h3>
              <ul className="space-y-3">
                {footerLinks?.resources?.map((link) => (
                  <li key={link?.name}>
                    <Link
                      to={link?.path}
                      className="text-background/70 hover:text-background transition-academic text-sm"
                    >
                      {link?.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-background/20 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-semibold text-background mb-2">Stay Connected</h3>
              <p className="text-background/70 text-sm">
                Get the latest updates on networking opportunities, success stories, and platform features.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-background/10 border border-background/20 rounded-lg text-background placeholder-background/50 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-academic font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-background/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-background/70 text-sm">
              © {currentYear} AlumniConnect. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6">
              {footerLinks?.legal?.map((link) => (
                <Link
                  key={link?.name}
                  to={link?.path}
                  className="text-background/70 hover:text-background transition-academic text-sm"
                >
                  {link?.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="border-t border-background/20 py-6">
          <div className="flex flex-wrap justify-center items-center gap-8 text-background/60">
            <div className="flex items-center gap-2">
              <Icon name="Shield" size={16} />
              <span className="text-xs">SSL Secured</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Award" size={16} />
              <span className="text-xs">ISO 27001 Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="CheckCircle" size={16} />
              <span className="text-xs">GDPR Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Globe" size={16} />
              <span className="text-xs">Global Network</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;