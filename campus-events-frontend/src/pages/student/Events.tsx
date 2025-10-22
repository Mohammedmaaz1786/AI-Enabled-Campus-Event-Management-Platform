import React from 'react';
import { PageLayout } from '@/components/layout';
import { Card, CardBody, Badge, Button } from '@/components/ui';
import { Calendar, MapPin, Users, Clock } from 'lucide-react';

export const Events: React.FC = () => {
  return (
    <PageLayout role="student">
      {/* Page Header */}
      <div className="page-header">
        <h1 className="page-title">Browse Events</h1>
        <p className="page-subtitle">Discover and register for upcoming campus events</p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        <select className="input max-w-xs">
          <option>All Categories</option>
          <option>Academic</option>
          <option>Sports</option>
          <option>Cultural</option>
          <option>Technical</option>
        </select>
        <select className="input max-w-xs">
          <option>All Dates</option>
          <option>This Week</option>
          <option>This Month</option>
          <option>Next Month</option>
        </select>
        <input type="search" placeholder="Search events..." className="input max-w-md" />
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <Card key={i} hover>
            <div className="h-48 bg-gradient-to-br from-primary-400 to-secondary-400 relative">
              <div className="absolute top-4 right-4">
                <Badge variant="success">Open</Badge>
              </div>
            </div>
            <CardBody>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                Campus Event {i}
              </h3>
              <p className="text-sm text-neutral-600 mb-4 line-clamp-2">
                Join us for an exciting event featuring workshops, networking, and more.
              </p>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-neutral-600">
                  <Calendar className="w-4 h-4" />
                  <span>December {15 + i}, 2024</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-neutral-600">
                  <Clock className="w-4 h-4" />
                  <span>2:00 PM - 5:00 PM</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-neutral-600">
                  <MapPin className="w-4 h-4" />
                  <span>Main Auditorium</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-neutral-600">
                  <Users className="w-4 h-4" />
                  <span>150 / 200 Registered</span>
                </div>
              </div>

              <Button variant="primary" size="md" fullWidth>
                Register Now
              </Button>
            </CardBody>
          </Card>
        ))}
      </div>
    </PageLayout>
  );
};
