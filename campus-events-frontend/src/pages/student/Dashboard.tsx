import React from 'react';
import { PageLayout } from '@/components/layout';
import { Card, CardHeader, CardBody, Badge } from '@/components/ui';
import { Calendar, Users, TrendingUp, Clock } from 'lucide-react';

export const StudentDashboard: React.FC = () => {
  return (
    <PageLayout role="student">
      {/* Page Header */}
      <div className="page-header">
        <h1 className="page-title">Dashboard</h1>
        <p className="page-subtitle">Welcome back! Here's what's happening with your events.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardBody>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-600 mb-1">Upcoming Events</p>
                <h3 className="text-2xl font-bold text-neutral-900">12</h3>
              </div>
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                <Calendar className="w-6 h-6 text-primary-600" />
              </div>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardBody>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-600 mb-1">Registered Events</p>
                <h3 className="text-2xl font-bold text-neutral-900">8</h3>
              </div>
              <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-accent-600" />
              </div>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardBody>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-600 mb-1">Clubs Joined</p>
                <h3 className="text-2xl font-bold text-neutral-900">5</h3>
              </div>
              <div className="w-12 h-12 bg-secondary-100 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-secondary-600" />
              </div>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardBody>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-600 mb-1">Hours Attended</p>
                <h3 className="text-2xl font-bold text-neutral-900">24</h3>
              </div>
              <div className="w-12 h-12 bg-warning-100 rounded-xl flex items-center justify-center">
                <Clock className="w-6 h-6 text-warning-600" />
              </div>
            </div>
          </CardBody>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Upcoming Events */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <h2 className="text-xl font-semibold text-neutral-900">Upcoming Events</h2>
            </CardHeader>
            <CardBody className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-start gap-4 p-4 border border-neutral-200 rounded-lg hover:bg-neutral-50 transition-colors">
                  <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-8 h-8 text-primary-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-neutral-900 mb-1">Tech Workshop {i}</h3>
                    <p className="text-sm text-neutral-600 mb-2">Computer Science Club</p>
                    <div className="flex items-center gap-4 text-sm text-neutral-500">
                      <span>📅 Dec {15 + i}, 2024</span>
                      <span>🕐 2:00 PM</span>
                      <Badge variant="primary">Registered</Badge>
                    </div>
                  </div>
                </div>
              ))}
            </CardBody>
          </Card>
        </div>

        {/* Quick Actions & Recent Activity */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <h2 className="text-xl font-semibold text-neutral-900">Quick Actions</h2>
            </CardHeader>
            <CardBody className="space-y-2">
              <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-primary-50 transition-colors text-neutral-700">
                Browse Events
              </button>
              <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-primary-50 transition-colors text-neutral-700">
                Join a Club
              </button>
              <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-primary-50 transition-colors text-neutral-700">
                View My Events
              </button>
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              <h2 className="text-xl font-semibold text-neutral-900">Recent Activity</h2>
            </CardHeader>
            <CardBody className="space-y-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="text-sm">
                  <p className="text-neutral-900 font-medium">Event Registration</p>
                  <p className="text-neutral-600">{i} days ago</p>
                </div>
              ))}
            </CardBody>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
};
