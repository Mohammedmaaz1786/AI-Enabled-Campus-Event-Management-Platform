import React from 'react';
import { PageLayout } from '@/components/layout';
import { Card, CardBody, Badge } from '@/components/ui';
import { FileBarChart, TrendingUp, Users, Calendar } from 'lucide-react';

export const FacultyDashboard = () => {
  return (
    <PageLayout role="faculty">
      <div className="page-header">
        <h1 className="page-title">Faculty Dashboard</h1>
        <p className="page-subtitle">Verify attendance and view reports</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { label: 'Pending Verifications', value: '15', icon: Calendar, color: 'primary' },
          { label: 'Verified Events', value: '42', icon: TrendingUp, color: 'accent' },
          { label: 'Total Students', value: '320', icon: Users, color: 'secondary' },
          { label: 'Reports Generated', value: '8', icon: FileBarChart, color: 'warning' },
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
            <h2 className="text-xl font-semibold text-neutral-900 mb-4">Pending Attendance</h2>
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center justify-between p-3 border border-neutral-200 rounded-lg">
                  <div>
                    <h3 className="font-medium text-neutral-900">Event {i}</h3>
                    <p className="text-sm text-neutral-600">25 students pending</p>
                  </div>
                  <Badge variant="warning">Pending</Badge>
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
                Verify Attendance
              </button>
              <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-primary-50 transition-colors text-neutral-700">
                Generate Report
              </button>
              <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-primary-50 transition-colors text-neutral-700">
                View All Events
              </button>
            </div>
          </div>
        </Card>
      </div>
    </PageLayout>
  );
};

