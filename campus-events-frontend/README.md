# AI-Enabled Campus Event Management Platform - Frontend

A professional React.js frontend application for the Campus Events Management Platform, built with JavaScript, Vite, Tailwind CSS, and React Router.

## 🎨 Design System

This application implements a comprehensive design system with:

- **Professional Campus Color Palette**: Primary (Indigo), Secondary (Fuchsia), Accent (Emerald), Warning (Amber), Danger (Red)
- **Typography System**: Inter font family with defined heading and body text styles
- **Component Library**: Reusable UI components (Buttons, Cards, Badges, Inputs)
- **Responsive Layouts**: Mobile-first design with 12-column grid system
- **Role-Based Navigation**: Separate portals for Students, Organizers, and Faculty

## 📁 Project Structure

```
campus-events-frontend/
├── src/
│   ├── components/
│   │   ├── layout/           # Layout components (Header, Sidebar, PageLayout)
│   │   ├── navigation/       # Navigation components
│   │   └── ui/               # UI components (Button, Card, Badge, Input)
│   ├── pages/
│   │   ├── auth/             # Authentication pages (Login, Register, Forgot Password)
│   │   ├── student/          # Student portal pages (6 pages)
│   │   ├── organizer/        # Organizer portal pages (6 pages)
│   │   └── faculty/          # Faculty portal pages (3 pages)
│   ├── App.jsx               # Main application with routing
│   ├── main.jsx              # Application entry point
│   └── index.css             # Global styles and Tailwind configuration
├── public/                   # Static assets
├── index.html                # HTML entry point
├── tailwind.config.js        # Tailwind CSS configuration
├── jsconfig.json             # JavaScript configuration for VS Code IntelliSense
├── vite.config.js            # Vite configuration
└── package.json              # Project dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd campus-events-frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📋 Available Routes

### Authentication (3 pages)
- `/login` - Login page
- `/register` - Registration page
- `/forgot-password` - Password recovery page

### Student Portal (6 pages)
- `/student/dashboard` - Student dashboard with stats and upcoming events
- `/student/events` - Browse all available campus events
- `/student/my-events` - View registered events with QR codes
- `/student/clubs` - Explore and join campus clubs
- `/student/notifications` - View event and system notifications
- `/student/profile` - Manage profile and view activity summary

### Organizer Portal (6 pages)
- `/organizer/dashboard` - Organizer dashboard with analytics
- `/organizer/create-event` - Create new events
- `/organizer/manage-events` - Manage existing events
- `/organizer/club-management` - Manage club information
- `/organizer/analytics` - View event analytics and reports
- `/organizer/templates` - Manage event templates

### Faculty Portal (3 pages)
- `/faculty/dashboard` - Faculty dashboard
- `/faculty/verify-attendance` - Verify student attendance
- `/faculty/reports` - Generate and view reports

## 🎨 Design Features

### Color Palette
- **Primary**: Indigo (#6366f1) - Main brand color
- **Secondary**: Fuchsia (#d946ef) - Accent color
- **Accent**: Emerald (#10b981) - Success states
- **Warning**: Amber (#f59e0b) - Warning states
- **Danger**: Red (#ef4444) - Error states
- **Neutral**: Gray shades for text and backgrounds

### Typography
- **Font Family**: Inter (Google Fonts)
- **Display Sizes**: XL (72px), LG (60px), MD (48px), SM (36px)
- **Heading Sizes**: XL (30px), LG (24px), MD (20px), SM (18px)
- **Body Sizes**: LG (18px), MD (16px), SM (14px)

### Components
- **Buttons**: 4 variants (primary, secondary, outline, ghost) × 3 sizes (sm, md, lg)
- **Cards**: Hover effects, header/body/footer sections
- **Badges**: Status indicators with 4 color variants
- **Inputs**: Label, error states, helper text support

### Layout
- **Responsive Grid**: 12-column desktop, 8-column tablet, 4-column mobile
- **Navigation**: Sticky header with role-based sidebar
- **Animations**: Smooth transitions and hover effects

## 🛠️ Built With

- **React 18** - UI library
- **JavaScript (ES2020)** - Modern JavaScript
- **Vite 5** - Fast build tool and dev server
- **Tailwind CSS 3** - Utility-first CSS framework
- **React Router v6** - Client-side routing
- **Lucide React** - Icon library
- **PropTypes** - Runtime type checking

## 📦 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎯 Key Features

✅ **Complete Routing System** - All 18 pages with React Router navigation  
✅ **Role-Based Access** - Separate portals for Student, Organizer, and Faculty  
✅ **Professional Design** - Campus-themed color palette and typography  
✅ **Responsive Layout** - Mobile-first design with breakpoints  
✅ **Modern JavaScript** - ES2020 features with Vite fast refresh  
✅ **Reusable Components** - Modular UI component library with PropTypes  
✅ **No Mock Data** - Clean routing structure ready for API integration  
✅ **Accessibility** - Semantic HTML and ARIA labels  
✅ **Fast Development** - Vite HMR for instant updates  

## 🔄 Next Steps (Not Implemented)

This is a frontend-only application focused on routing and navigation. The following features are not implemented:

- ❌ API integration
- ❌ State management (Redux/Context)
- ❌ Form validation and submission
- ❌ Authentication logic
- ❌ Data fetching and caching
- ❌ Backend connectivity

## 📝 Notes

- The application uses path aliases (`@/*`) for clean imports
- Design specifications follow the attached Figma design guide
- Components are built with Tailwind CSS utility classes
- PropTypes are used for component prop validation
- All components are written in modern JavaScript (ES2020)

## 📄 License

This project is part of the AI-Enabled Campus Event Management Platform.

## 👥 Support

For questions or issues, please contact the development team.

---

**Built with ❤️ using React, JavaScript, Vite, and Tailwind CSS**
