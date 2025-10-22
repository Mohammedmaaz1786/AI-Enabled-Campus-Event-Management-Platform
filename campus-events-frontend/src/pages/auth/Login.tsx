import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Input } from '@/components/ui';

export const Login: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-2xl mb-4">
            <span className="text-white font-bold text-2xl">CE</span>
          </div>
          <h1 className="text-display-sm text-neutral-900 mb-2">Welcome Back</h1>
          <p className="text-body-md text-neutral-600">Sign in to your Campus Events account</p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-neutral-200 p-8">
          <form className="space-y-6">
            <Input
              type="email"
              label="Email Address"
              placeholder="student@university.edu"
              autoComplete="email"
            />
            
            <Input
              type="password"
              label="Password"
              placeholder="Enter your password"
              autoComplete="current-password"
            />

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-neutral-300 text-primary-600 focus:ring-primary-500"
                />
                <span className="text-sm text-neutral-700">Remember me</span>
              </label>
              <Link to="/forgot-password" className="text-sm text-primary-600 hover:text-primary-700 font-medium">
                Forgot password?
              </Link>
            </div>

            <Button type="submit" variant="primary" size="lg" fullWidth>
              Sign In
            </Button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-neutral-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-neutral-500">New to Campus Events?</span>
            </div>
          </div>

          {/* Register Link */}
          <Link to="/register">
            <Button variant="outline" size="lg" fullWidth>
              Create Account
            </Button>
          </Link>
        </div>

        {/* Role Selection Hint */}
        <div className="mt-6 text-center text-sm text-neutral-600">
          <p>Login as: <span className="text-primary-600 font-medium">Student</span> · <span className="text-secondary-600 font-medium">Organizer</span> · <span className="text-accent-600 font-medium">Faculty</span></p>
        </div>
      </div>
    </div>
  );
};
