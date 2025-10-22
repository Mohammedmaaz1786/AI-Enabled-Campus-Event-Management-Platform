import React, { useState } from 'react';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { UserRole } from '@/types';

interface PageLayoutProps {
  children: React.ReactNode;
  role: UserRole;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children, role }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-neutral-50">
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
