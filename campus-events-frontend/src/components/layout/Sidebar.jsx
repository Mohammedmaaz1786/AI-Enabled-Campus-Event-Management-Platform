import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Calendar,
  BookmarkCheck,
  Users,
  Bell,
  User,
  Plus,
  Settings,
  BarChart3,
  FileText,
  CheckCircle,
  FileBarChart,
} from 'lucide-react';

const iconMap = {
  LayoutDashboard,
  Calendar,
  BookmarkCheck,
  Users,
  Bell,
  User,
  Plus,
  Settings,
  BarChart3,
  FileText,
  CheckCircle,
  FileBarChart,
};

const navigationItems = {
  student: [
    { path: '/student/dashboard', label: 'Dashboard', icon: 'LayoutDashboard' },
    { path: '/student/events', label: 'Browse Events', icon: 'Calendar' },
    { path: '/student/my-events', label: 'My Events', icon: 'BookmarkCheck' },
    { path: '/student/clubs', label: 'Clubs', icon: 'Users' },
    { path: '/student/notifications', label: 'Notifications', icon: 'Bell' },
    { path: '/student/profile', label: 'Profile', icon: 'User' },
  ],
  organizer: [
    { path: '/organizer/dashboard', label: 'Dashboard', icon: 'LayoutDashboard' },
    { path: '/organizer/create-event', label: 'Create Event', icon: 'Plus' },
    { path: '/organizer/manage-events', label: 'Manage Events', icon: 'Settings' },
    { path: '/organizer/club-management', label: 'Club Management', icon: 'Users' },
    { path: '/organizer/analytics', label: 'Analytics', icon: 'BarChart3' },
    { path: '/organizer/templates', label: 'Templates', icon: 'FileText' },
  ],
  faculty: [
    { path: '/faculty/dashboard', label: 'Dashboard', icon: 'LayoutDashboard' },
    { path: '/faculty/verify-attendance', label: 'Verify Attendance', icon: 'CheckCircle' },
    { path: '/faculty/reports', label: 'Reports', icon: 'FileBarChart' },
  ],
};

export const Sidebar = ({ role, isOpen = true, onClose }) => {
  const items = navigationItems[role] || [];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-neutral-900/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:sticky top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-white border-r border-neutral-200 z-40 transition-transform duration-300 overflow-y-auto ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <nav className="p-4 space-y-2">
          {items.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={onClose}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-primary-50 text-primary-700 font-medium shadow-sm'
                      : 'text-neutral-700 hover:bg-neutral-50'
                  }`
                }
              >
                {Icon && <Icon className="w-5 h-5" />}
                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </nav>
      </aside>
    </>
  );
};

