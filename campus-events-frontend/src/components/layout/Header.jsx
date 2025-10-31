import React from 'react';
import { Link } from 'react-router-dom';
import { Bell, User, Menu, X } from 'lucide-react';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

export const Header = ({ role, onMenuClick, isMobileMenuOpen }) => {
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 shadow-sm transition-colors duration-200">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Mobile Menu Button */}
          <div className="flex items-center gap-4">
            {role && (
              <button
                onClick={onMenuClick}
                className="lg:hidden p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            )}
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-xl">CE</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-neutral-900 dark:text-neutral-50">Campus Events</h1>
                <p className="text-xs text-neutral-600 dark:text-neutral-400">Event Management Platform</p>
              </div>
            </Link>
          </div>

          {/* Right Section */}
          {role && (
            <div className="flex items-center gap-2">
              {/* Theme Toggle */}
              <ThemeToggle />
              
              {/* Notifications */}
              <Link
                to={`/${role}/notifications`}
                className="relative p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              >
                <Bell className="w-5 h-5 text-neutral-600 dark:text-neutral-400" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-error-500 rounded-full shadow-glow-primary"></span>
              </Link>

              {/* User Profile */}
              <Link
                to={`/${role}/profile`}
                className="flex items-center gap-2 p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              >
                <div className="w-8 h-8 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                </div>
                <span className="hidden md:block text-sm font-medium text-neutral-900 dark:text-neutral-50">Profile</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

