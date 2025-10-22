import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Auth Pages
import { Login, Register, ForgotPassword } from './pages/auth';

// Student Pages
import * as Student from './pages/student';

// Organizer Pages
import * as Organizer from './pages/organizer';

// Faculty Pages
import * as Faculty from './pages/faculty';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default Route */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Authentication Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Student Portal Routes */}
        <Route path="/student/dashboard" element={<Student.Dashboard />} />
        <Route path="/student/events" element={<Student.Events />} />
        <Route path="/student/my-events" element={<Student.MyEvents />} />
        <Route path="/student/clubs" element={<Student.Clubs />} />
        <Route path="/student/notifications" element={<Student.Notifications />} />
        <Route path="/student/profile" element={<Student.Profile />} />

        {/* Organizer Portal Routes */}
        <Route path="/organizer/dashboard" element={<Organizer.Dashboard />} />
        <Route path="/organizer/create-event" element={<Organizer.CreateEvent />} />
        <Route path="/organizer/manage-events" element={<Organizer.ManageEvents />} />
        <Route path="/organizer/club-management" element={<Organizer.ClubManagement />} />
        <Route path="/organizer/analytics" element={<Organizer.Analytics />} />
        <Route path="/organizer/templates" element={<Organizer.Templates />} />

        {/* Faculty Portal Routes */}
        <Route path="/faculty/dashboard" element={<Faculty.Dashboard />} />
        <Route path="/faculty/verify-attendance" element={<Faculty.VerifyAttendance />} />
        <Route path="/faculty/reports" element={<Faculty.Reports />} />

        {/* Catch-all Route */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
