import React, { useState } from 'react';
import { Header } from './Header';
import { Sidebar } from './Sidebar';

export const PageLayout = ({ role, children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 transition-colors duration-200">
      <Header role={role} onMenuClick={toggleMobileMenu} isMobileMenuOpen={isMobileMenuOpen} />
      <div className="flex">
        <Sidebar role={role} isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
        <main className="flex-1 p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">{children}</div>
        </main>
      </div>
    </div>
  );
};

