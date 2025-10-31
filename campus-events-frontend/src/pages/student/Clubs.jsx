import React from 'react';
import { PageLayout } from '@/components/layout';
import { Card, CardBody, Badge, Button } from '@/components/ui';
import { Users, Calendar } from 'lucide-react';

export const Clubs = () => {
  return (
    <PageLayout role="student">
      {/* Page Header */}
      <div className="page-header">
        <h1 className="page-title">Campus Clubs</h1>
        <p className="page-subtitle">Explore and join student clubs and organizations</p>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-wrap gap-4 mb-6">
        <select className="input max-w-xs">
          <option>All Categories</option>
          <option>Academic</option>
          <option>Sports</option>
          <option>Cultural</option>
          <option>Technical</option>
        </select>
        <input type="search" placeholder="Search clubs..." className="input flex-1 max-w-md" />
      </div>

      {/* Clubs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <Card key={i} hover>
            {/* Club Banner */}
            <div className="h-32 bg-gradient-to-br from-primary-400 to-secondary-400 relative">
              <div className="absolute -bottom-8 left-6">
                <div className="w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center border-2 border-white">
                  <Users className="w-8 h-8 text-primary-600" />
                </div>
              </div>
            </div>
            
            <CardBody className="pt-12">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl font-semibold text-neutral-900">
                  Campus Club {i}
                </h3>
                <Badge variant="success">Active</Badge>
              </div>
              
              <p className="text-sm text-neutral-600 mb-4 line-clamp-2">
                A vibrant community of students passionate about learning and growth.
              </p>

              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-neutral-600">
                  <Users className="w-4 h-4" />
                  <span>250 Members</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-neutral-600">
                  <Calendar className="w-4 h-4" />
                  <span>15 Events This Month</span>
                </div>
              </div>

              <Button variant="primary" size="md" fullWidth>
                Join Club
              </Button>
            </CardBody>
          </Card>
        ))}
      </div>
    </PageLayout>
  );
};

