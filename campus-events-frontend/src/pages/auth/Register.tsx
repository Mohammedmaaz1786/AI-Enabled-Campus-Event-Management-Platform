import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Input } from '@/components/ui';

export const Register: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-2xl mb-4">
            <span className="text-white font-bold text-2xl">CE</span>
          </div>
          <h1 className="text-display-sm text-neutral-900 mb-2">Create Account</h1>
          <p className="text-body-md text-neutral-600">Join the Campus Events community</p>
        </div>

        {/* Register Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-neutral-200 p-8">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                type="text"
                label="First Name"
                placeholder="John"
                autoComplete="given-name"
              />
              
              <Input
                type="text"
                label="Last Name"
                placeholder="Doe"
                autoComplete="family-name"
              />
            </div>

            <Input
              type="email"
              label="University Email"
              placeholder="student@university.edu"
              autoComplete="email"
              helperText="Use your official university email address"
            />

            <Input
              type="text"
              label="Student/Employee ID"
              placeholder="Enter your ID number"
            />

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1">
                Role
              </label>
              <select className="input">
                <option value="">Select your role</option>
                <option value="student">Student</option>
                <option value="organizer">Event Organizer</option>
                <option value="faculty">Faculty Member</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                type="password"
                label="Password"
                placeholder="Create a password"
                autoComplete="new-password"
              />
              
              <Input
                type="password"
                label="Confirm Password"
                placeholder="Confirm your password"
                autoComplete="new-password"
              />
            </div>

            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                id="terms"
                className="mt-1 w-4 h-4 rounded border-neutral-300 text-primary-600 focus:ring-primary-500"
              />
              <label htmlFor="terms" className="text-sm text-neutral-700">
                I agree to the <a href="#" className="text-primary-600 hover:text-primary-700 font-medium">Terms of Service</a> and <a href="#" className="text-primary-600 hover:text-primary-700 font-medium">Privacy Policy</a>
              </label>
            </div>

            <Button type="submit" variant="primary" size="lg" fullWidth>
              Create Account
            </Button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-neutral-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-neutral-500">Already have an account?</span>
            </div>
          </div>

          {/* Login Link */}
          <Link to="/login">
            <Button variant="outline" size="lg" fullWidth>
              Sign In
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
