import React from 'react';
import { PageLayout } from '@/components/layout';
import { Card, CardBody, Badge, Button } from '@/components/ui';
import { Calendar, MapPin, Clock, QrCode } from 'lucide-react';

export const MyEvents: React.FC = () => {
  return (
    <PageLayout role="student">
      {/* Page Header */}
      <div className="page-header">
        <h1 className="page-title">My Events</h1>
        <p className="page-subtitle">Events you've registered for and attended</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mb-6 border-b border-neutral-200">
        <button className="px-4 py-2 font-medium text-primary-600 border-b-2 border-primary-600">
          Upcoming
        </button>
        <button className="px-4 py-2 font-medium text-neutral-600 hover:text-neutral-900">
          Past
        </button>
        <button className="px-4 py-2 font-medium text-neutral-600 hover:text-neutral-900">
          Cancelled
        </button>
      </div>

      {/* Events List */}
      <div className="space-y-4">
        {[1, 2, 3, 4].map((i) => (
          <Card key={i}>
            <CardBody>
              <div className="flex flex-col md:flex-row gap-6">
                {/* Event Image */}
                <div className="w-full md:w-48 h-32 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-lg flex-shrink-0"></div>
                
                {/* Event Details */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-xl font-semibold text-neutral-900 mb-1">
                        Tech Workshop {i}
                      </h3>
                      <p className="text-sm text-neutral-600">Computer Science Club</p>
                    </div>
                    <Badge variant="primary">Registered</Badge>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
                    <div className="flex items-center gap-2 text-sm text-neutral-600">
                      <Calendar className="w-4 h-4" />
                      <span>Dec {15 + i}, 2024</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-neutral-600">
                      <Clock className="w-4 h-4" />
                      <span>2:00 PM - 5:00 PM</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-neutral-600">
                      <MapPin className="w-4 h-4" />
                      <span>Main Auditorium</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Button variant="primary" size="sm">
                      <QrCode className="w-4 h-4 mr-2" />
                      View QR Code
                    </Button>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                    <Button variant="ghost" size="sm">
                      Cancel Registration
                    </Button>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </PageLayout>
  );
};
