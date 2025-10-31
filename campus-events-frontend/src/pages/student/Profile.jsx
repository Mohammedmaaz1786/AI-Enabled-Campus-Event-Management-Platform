import React from 'react';
import { PageLayout } from '@/components/layout';
import { Card, CardHeader, CardBody, Input, Button } from '@/components/ui';
import { User } from 'lucide-react';

export const Profile = () => {
  return (
    <PageLayout role="student">
      {/* Page Header */}
      <div className="page-header">
        <h1 className="page-title">My Profile</h1>
        <p className="page-subtitle">Manage your account information and preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <Card>
          <CardBody className="text-center">
            <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="w-12 h-12 text-primary-600" />
            </div>
            <h2 className="text-xl font-semibold text-neutral-900 mb-1">John Doe</h2>
            <p className="text-sm text-neutral-600 mb-4">Student</p>
            <Button variant="outline" size="sm" fullWidth>
              Change Avatar
            </Button>
          </CardBody>
        </Card>

        {/* Information Form */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <h2 className="text-xl font-semibold text-neutral-900">Personal Information</h2>
            </CardHeader>
            <CardBody className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="First Name"
                  type="text"
                  defaultValue="John"
                />
                <Input
                  label="Last Name"
                  type="text"
                  defaultValue="Doe"
                />
              </div>
              
              <Input
                label="Email Address"
                type="email"
                defaultValue="john.doe@university.edu"
              />
              
              <Input
                label="Phone Number"
                type="tel"
                defaultValue="+1 (555) 123-4567"
              />
              
              <Input
                label="Student ID"
                type="text"
                defaultValue="STU2024001"
                disabled
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">
                    Department
                  </label>
                  <select className="input">
                    <option>Computer Science</option>
                    <option>Engineering</option>
                    <option>Business</option>
                    <option>Arts</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">
                    Year
                  </label>
                  <select className="input">
                    <option>Freshman</option>
                    <option>Sophomore</option>
                    <option>Junior</option>
                    <option>Senior</option>
                  </select>
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <Button variant="primary" size="md">
                  Save Changes
                </Button>
                <Button variant="ghost" size="md">
                  Cancel
                </Button>
              </div>
            </CardBody>
          </Card>

          {/* Statistics */}
          <Card>
            <CardHeader>
              <h2 className="text-xl font-semibold text-neutral-900">Activity Summary</h2>
            </CardHeader>
            <CardBody>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-neutral-50 rounded-lg">
                  <p className="text-2xl font-bold text-primary-600">24</p>
                  <p className="text-sm text-neutral-600">Events Attended</p>
                </div>
                <div className="text-center p-4 bg-neutral-50 rounded-lg">
                  <p className="text-2xl font-bold text-secondary-600">5</p>
                  <p className="text-sm text-neutral-600">Clubs Joined</p>
                </div>
                <div className="text-center p-4 bg-neutral-50 rounded-lg">
                  <p className="text-2xl font-bold text-accent-600">48</p>
                  <p className="text-sm text-neutral-600">Hours</p>
                </div>
                <div className="text-center p-4 bg-neutral-50 rounded-lg">
                  <p className="text-2xl font-bold text-warning-600">12</p>
                  <p className="text-sm text-neutral-600">Certificates</p>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
};

