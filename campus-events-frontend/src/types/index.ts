export type UserRole = 'student' | 'organizer' | 'faculty';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

export interface RouteConfig {
  path: string;
  label: string;
  icon?: string;
  roles: UserRole[];
  children?: RouteConfig[];
}

export interface NavigationItem {
  label: string;
  path: string;
  icon?: string;
  active?: boolean;
  badge?: number;
}

export interface Breadcrumb {
  label: string;
  path?: string;
}
