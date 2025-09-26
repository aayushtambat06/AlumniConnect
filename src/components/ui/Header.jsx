import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Dashboard', path: '/alumni-dashboard', icon: 'LayoutDashboard' },
    { name: 'Directory', path: '/alumni-directory', icon: 'Users' },
    { name: 'Mentorship', path: '/mentorship-center', icon: 'GraduationCap' },
    { name: 'Profile', path: '/profile-setup', icon: 'User' }
  ];

  const moreItems = [
    { name: 'Admin', path: '/admin-dashboard', icon: 'Settings' },
    { name: 'Help', path: '/help', icon: 'HelpCircle' },
    { name: 'Settings', path: '/settings', icon: 'Cog' }
  ];

  const isActivePath = (path) => location?.pathname === path;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border shadow-academic">
      <div className="flex items-center justify-between h-16 px-4 lg:px-6">
        {/* Logo Section */}
        <Link to="/homepage" className="flex items-center space-x-3 hover:opacity-80 transition-academic">
          <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
            <Icon name="GraduationCap" size={24} color="white" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-primary font-accent">AlumniConnect</span>
            <span className="text-xs text-muted-foreground hidden sm:block">Professional Network</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navigationItems?.map((item) => (
            <Link
              key={item?.path}
              to={item?.path}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-academic ${
                isActivePath(item?.path)
                  ? 'bg-primary text-primary-foreground'
                  : 'text-foreground hover:bg-muted hover:text-primary'
              }`}
            >
              <Icon name={item?.icon} size={18} />
              <span>{item?.name}</span>
            </Link>
          ))}
          
          {/* More Dropdown */}
          <div className="relative group">
            <button className="flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium text-foreground hover:bg-muted hover:text-primary transition-academic">
              <Icon name="MoreHorizontal" size={18} />
              <span>More</span>
            </button>
            
            <div className="absolute right-0 top-full mt-2 w-48 bg-popover border border-border rounded-lg shadow-academic-hover opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-academic">
              <div className="py-2">
                {moreItems?.map((item) => (
                  <Link
                    key={item?.path}
                    to={item?.path}
                    className={`flex items-center space-x-3 px-4 py-2 text-sm hover:bg-muted transition-academic ${
                      isActivePath(item?.path) ? 'text-primary font-medium' : 'text-foreground'
                    }`}
                  >
                    <Icon name={item?.icon} size={16} />
                    <span>{item?.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center space-x-3">
          <Button variant="ghost" size="sm" iconName="Bell" iconPosition="left">
            Notifications
          </Button>
          <Button variant="outline" size="sm" iconName="MessageSquare" iconPosition="left">
            Messages
          </Button>
          <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center cursor-pointer hover:bg-accent/80 transition-academic">
            <Icon name="User" size={18} color="var(--color-accent-foreground)" />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-muted transition-academic"
        >
          <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
        </button>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border shadow-academic">
          <div className="px-4 py-4 space-y-2">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-academic ${
                  isActivePath(item?.path)
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground hover:bg-muted'
                }`}
              >
                <Icon name={item?.icon} size={20} />
                <span>{item?.name}</span>
              </Link>
            ))}
            
            <div className="border-t border-border pt-2 mt-2">
              {moreItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-academic ${
                    isActivePath(item?.path)
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground hover:bg-muted'
                  }`}
                >
                  <Icon name={item?.icon} size={20} />
                  <span>{item?.name}</span>
                </Link>
              ))}
            </div>
            
            <div className="border-t border-border pt-4 mt-4 flex flex-col space-y-2">
              <Button variant="ghost" size="sm" iconName="Bell" iconPosition="left" fullWidth>
                Notifications
              </Button>
              <Button variant="outline" size="sm" iconName="MessageSquare" iconPosition="left" fullWidth>
                Messages
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;