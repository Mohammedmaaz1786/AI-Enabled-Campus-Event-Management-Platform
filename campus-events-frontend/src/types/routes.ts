import { RouteConfig } from './index';

export const routes: RouteConfig[] = [
  // Authentication Routes
  {
    path: '/login',
    label: 'Login',
    roles: ['student', 'organizer', 'faculty'],
  },
  {
    path: '/register',
    label: 'Register',
    roles: ['student', 'organizer', 'faculty'],
  },
  {
    path: '/forgot-password',
    label: 'Forgot Password',
    roles: ['student', 'organizer', 'faculty'],
  },
  
  // Student Portal Routes
  {
    path: '/student',
    label: 'Student Portal',
    roles: ['student'],
    children: [
      {
        path: '/student/dashboard',
        label: 'Dashboard',
        icon: 'LayoutDashboard',
        roles: ['student'],
      },
      {
        path: '/student/events',
        label: 'Browse Events',
        icon: 'Calendar',
        roles: ['student'],
      },
      {
        path: '/student/my-events',
        label: 'My Events',
        icon: 'BookmarkCheck',
        roles: ['student'],
      },
      {
        path: '/student/clubs',
        label: 'Clubs',
        icon: 'Users',
        roles: ['student'],
      },
      {
        path: '/student/notifications',
        label: 'Notifications',
        icon: 'Bell',
        roles: ['student'],
      },
      {
        path: '/student/profile',
        label: 'Profile',
        icon: 'User',
        roles: ['student'],
      },
    ],
  },
  
  // Organizer Portal Routes
  {
    path: '/organizer',
    label: 'Organizer Portal',
    roles: ['organizer'],
    children: [
      {
        path: '/organizer/dashboard',
        label: 'Dashboard',
        icon: 'LayoutDashboard',
        roles: ['organizer'],
      },
      {
        path: '/organizer/create-event',
        label: 'Create Event',
        icon: 'Plus',
        roles: ['organizer'],
      },
      {
        path: '/organizer/manage-events',
        label: 'Manage Events',
        icon: 'Settings',
        roles: ['organizer'],
      },
      {
        path: '/organizer/club-management',
        label: 'Club Management',
        icon: 'Users',
        roles: ['organizer'],
      },
      {
        path: '/organizer/analytics',
        label: 'Analytics',
        icon: 'BarChart3',
        roles: ['organizer'],
      },
      {
        path: '/organizer/templates',
        label: 'Templates',
        icon: 'FileText',
        roles: ['organizer'],
      },
    ],
  },
  
  // Faculty Portal Routes
  {
    path: '/faculty',
    label: 'Faculty Portal',
    roles: ['faculty'],
    children: [
      {
        path: '/faculty/dashboard',
        label: 'Dashboard',
        icon: 'LayoutDashboard',
        roles: ['faculty'],
      },
      {
        path: '/faculty/verify-attendance',
        label: 'Verify Attendance',
        icon: 'CheckCircle',
        roles: ['faculty'],
      },
      {
        path: '/faculty/reports',
        label: 'Reports',
        icon: 'FileBarChart',
        roles: ['faculty'],
      },
    ],
  },
];
