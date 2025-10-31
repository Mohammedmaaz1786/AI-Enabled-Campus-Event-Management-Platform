import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Input } from '@/components/ui';
import { ArrowLeft } from 'lucide-react';

export const ForgotPassword = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-2xl mb-4">
            <span className="text-white font-bold text-2xl">CE</span>
          </div>
          <h1 className="text-display-sm text-neutral-900 mb-2">Forgot Password?</h1>
          <p className="text-body-md text-neutral-600">No worries, we'll send you reset instructions</p>
        </div>

        {/* Forgot Password Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-neutral-200 p-8">
          <form className="space-y-6">
            <Input
              type="email"
              label="Email Address"
              placeholder="student@university.edu"
              autoComplete="email"
              helperText="Enter the email associated with your account"
            />

            <Button type="submit" variant="primary" size="lg" fullWidth>
              Send Reset Link
            </Button>
          </form>

          {/* Back to Login */}
          <div className="mt-6">
            <Link
              to="/login"
              className="flex items-center justify-center gap-2 text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to login</span>
            </Link>
          </div>
        </div>

        {/* Help Text */}
        <div className="mt-6 text-center">
          <p className="text-sm text-neutral-600">
            Need help? <a href="#" className="text-primary-600 hover:text-primary-700 font-medium">Contact Support</a>
          </p>
        </div>
      </div>
    </div>
  );
};

