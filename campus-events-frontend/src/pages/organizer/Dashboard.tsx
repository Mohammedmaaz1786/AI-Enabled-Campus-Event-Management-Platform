import React from 'react';
import { PageLayout } from '@/components/layout';
import { Card, CardBody, Badge } from '@/components/ui';
import { Calendar, Users, TrendingUp, Eye } from 'lucide-react';

export const OrganizerDashboard: React.FC = () => {
  return (
    <PageLayout role="organizer">
      <div className="page-header">
        <h1 className="page-title">Organizer Dashboard</h1>
        <p className="page-subtitle">Manage your events and track performance</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { label: 'Total Events', value: '24', icon: Calendar, color: 'primary' },
          { label: 'Active Events', value: '8', icon: TrendingUp, color: 'accent' },
          { label: 'Total Registrations', value: '450', icon: Users, color: 'secondary' },
          { label: 'Total Views', value: '1.2K', icon: Eye, color: 'warning' },
        ].map((stat, i) => {
          const Icon = stat.icon;
          return (
            <Card key={i}>
              <CardBody>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-neutral-600 mb-1">{stat.label}</p>
                    <h3 className="text-2xl font-bold text-neutral-900">{stat.value}</h3>
                  </div>
                  <div className={`w-12 h-12 bg-${stat.color}-100 rounded-xl flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 text-${stat.color}-600`} />
                  </div>
                </div>
              </CardBody>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <div className="p-6">
            <h2 className="text-xl font-semibold text-neutral-900 mb-4">Recent Events</h2>
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center justify-between p-3 border border-neutral-200 rounded-lg">
                  <div>
                    <h3 className="font-medium text-neutral-900">Event {i}</h3>
                    <p className="text-sm text-neutral-600">Dec {15 + i}, 2024</p>
                  </div>
                  <Badge variant="primary">Active</Badge>
                </div>
              ))}
            </div>
          </div>
        </Card>

        <Card>
          <div className="p-6">
            <h2 className="text-xl font-semibold text-neutral-900 mb-4">Quick Actions</h2>
            <div className="space-y-2">
              <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-primary-50 transition-colors text-neutral-700">
                Create New Event
              </button>
              <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-primary-50 transition-colors text-neutral-700">
                View Analytics
              </button>
              <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-primary-50 transition-colors text-neutral-700">
                Manage Templates
              </button>
            </div>
          </div>
        </Card>
      </div>
    </PageLayout>
  );
};
