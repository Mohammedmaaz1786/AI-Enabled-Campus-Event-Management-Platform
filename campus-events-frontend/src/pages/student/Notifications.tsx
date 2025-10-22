import React from 'react';
import { PageLayout } from '@/components/layout';
import { Card, CardBody, Badge } from '@/components/ui';
import { Bell, Calendar, Users, Info } from 'lucide-react';

export const Notifications: React.FC = () => {
  return (
    <PageLayout role="student">
      {/* Page Header */}
      <div className="page-header">
        <h1 className="page-title">Notifications</h1>
        <p className="page-subtitle">Stay updated with your events and activities</p>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-4 mb-6 border-b border-neutral-200">
        <button className="px-4 py-2 font-medium text-primary-600 border-b-2 border-primary-600">
          All
        </button>
        <button className="px-4 py-2 font-medium text-neutral-600 hover:text-neutral-900">
          Events
        </button>
        <button className="px-4 py-2 font-medium text-neutral-600 hover:text-neutral-900">
          Clubs
        </button>
        <button className="px-4 py-2 font-medium text-neutral-600 hover:text-neutral-900">
          System
        </button>
      </div>

      {/* Notifications List */}
      <div className="space-y-4">
        {[
          { icon: Calendar, type: 'event', title: 'Event Reminder', message: 'Tech Workshop starts in 2 hours', time: '2h ago', variant: 'primary' },
          { icon: Users, type: 'club', title: 'New Club Event', message: 'Computer Science Club posted a new event', time: '5h ago', variant: 'success' },
          { icon: Bell, type: 'event', title: 'Registration Confirmed', message: 'You are registered for Annual Tech Fest', time: '1d ago', variant: 'primary' },
          { icon: Info, type: 'system', title: 'Profile Update', message: 'Your profile has been successfully updated', time: '2d ago', variant: 'warning' },
          { icon: Calendar, type: 'event', title: 'Event Cancelled', message: 'Sports Day has been rescheduled', time: '3d ago', variant: 'danger' },
        ].map((notification, i) => {
          const Icon = notification.icon;
          return (
            <Card key={i} hover>
              <CardBody>
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 bg-${notification.variant}-100 rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-6 h-6 text-${notification.variant}-600`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-1">
                      <h3 className="font-semibold text-neutral-900">{notification.title}</h3>
                      <span className="text-sm text-neutral-500 flex-shrink-0 ml-2">{notification.time}</span>
                    </div>
                    <p className="text-sm text-neutral-600 mb-2">{notification.message}</p>
                    <div className="flex items-center gap-2">
                      <Badge variant={notification.variant as any}>{notification.type}</Badge>
                      <button className="text-sm text-primary-600 hover:text-primary-700">View Details</button>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          );
        })}
      </div>

      {/* Load More */}
      <div className="text-center mt-6">
        <button className="btn btn-outline btn-md">Load More Notifications</button>
      </div>
    </PageLayout>
  );
};
