import React, { useState } from 'react';
import { PageLayout } from '@/components/layout';
import { Card, CardHeader, CardBody, Button, Badge } from '@/components/ui';
import { Search, Filter, Calendar, MapPin, Users, Edit, Trash2, Eye, MoreVertical, Copy } from 'lucide-react';

export const ManageEvents: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'upcoming' | 'past' | 'draft'>('all');

  const events = [
    {
      id: 1,
      title: 'Web Development Workshop',
      date: 'Dec 20, 2024',
      time: '10:00 AM - 2:00 PM',
      venue: 'Lab 301',
      registrations: 45,
      capacity: 50,
      status: 'upcoming',
      type: 'Workshop'
    },
    {
      id: 2,
      title: 'AI & Machine Learning Seminar',
      date: 'Dec 22, 2024',
      time: '3:00 PM - 5:00 PM',
      venue: 'Auditorium A',
      registrations: 120,
      capacity: 150,
      status: 'upcoming',
      type: 'Seminar'
    },
    {
      id: 3,
      title: 'Annual Tech Fest 2024',
      date: 'Dec 15, 2024',
      time: '9:00 AM - 6:00 PM',
      venue: 'Main Campus',
      registrations: 450,
      capacity: 500,
      status: 'past',
      type: 'Festival'
    },
    {
      id: 4,
      title: 'React Masterclass',
      date: 'Jan 5, 2025',
      time: '11:00 AM - 1:00 PM',
      venue: 'Online',
      registrations: 0,
      capacity: 100,
      status: 'draft',
      type: 'Workshop'
    },
  ];

  const filteredEvents = events.filter(event => {
    if (activeTab === 'all') return true;
    return event.status === activeTab;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'upcoming':
        return <Badge variant="success">Upcoming</Badge>;
      case 'past':
        return <Badge variant="warning">Completed</Badge>;
      case 'draft':
        return <Badge variant="danger">Draft</Badge>;
      default:
        return <Badge variant="primary">Active</Badge>;
    }
  };

  return (
    <PageLayout role="organizer">
      <div className="page-header">
        <h1 className="page-title">Manage Events</h1>
        <p className="page-subtitle">View and manage all your events</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <Card>
          <CardBody>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-1">24</div>
              <div className="text-sm text-neutral-600">Total Events</div>
            </div>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-600 mb-1">8</div>
              <div className="text-sm text-neutral-600">Upcoming</div>
            </div>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary-600 mb-1">615</div>
              <div className="text-sm text-neutral-600">Total Registrations</div>
            </div>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <div className="text-center">
              <div className="text-3xl font-bold text-warning-600 mb-1">3</div>
              <div className="text-sm text-neutral-600">Drafts</div>
            </div>
          </CardBody>
        </Card>
      </div>

      {/* Main Content */}
      <Card>
        <CardHeader>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex items-center gap-3">
              <Button
                variant={activeTab === 'all' ? 'primary' : 'outline'}
                onClick={() => setActiveTab('all')}
              >
                All Events
              </Button>
              <Button
                variant={activeTab === 'upcoming' ? 'primary' : 'outline'}
                onClick={() => setActiveTab('upcoming')}
              >
                Upcoming
              </Button>
              <Button
                variant={activeTab === 'past' ? 'primary' : 'outline'}
                onClick={() => setActiveTab('past')}
              >
                Past
              </Button>
              <Button
                variant={activeTab === 'draft' ? 'primary' : 'outline'}
                onClick={() => setActiveTab('draft')}
              >
                Drafts
              </Button>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative flex-1 lg:w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-400" />
                <input
                  type="text"
                  placeholder="Search events..."
                  className="w-full pl-10 pr-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
              <Button variant="outline">
                <Filter className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardHeader>

        <CardBody>
          {/* Desktop Table View */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-neutral-200">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-neutral-700">Event</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-neutral-700">Date & Time</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-neutral-700">Venue</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-neutral-700">Registrations</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-neutral-700">Status</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-neutral-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredEvents.map((event) => (
                  <tr key={event.id} className="border-b border-neutral-100 hover:bg-neutral-50 transition-colors">
                    <td className="py-4 px-4">
                      <div>
                        <div className="font-medium text-neutral-900">{event.title}</div>
                        <div className="text-sm text-neutral-500">{event.type}</div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-start gap-2">
                        <Calendar className="w-4 h-4 text-neutral-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="text-sm text-neutral-900">{event.date}</div>
                          <div className="text-xs text-neutral-500">{event.time}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-neutral-400" />
                        <span className="text-sm text-neutral-700">{event.venue}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-neutral-400" />
                        <span className="text-sm text-neutral-900 font-medium">
                          {event.registrations}/{event.capacity}
                        </span>
                      </div>
                      <div className="w-full bg-neutral-200 rounded-full h-1.5 mt-2">
                        <div
                          className="bg-primary-600 h-1.5 rounded-full"
                          style={{ width: `${(event.registrations / event.capacity) * 100}%` }}
                        />
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      {getStatusBadge(event.status)}
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-2 hover:bg-neutral-100 rounded-lg transition-colors">
                          <Eye className="w-4 h-4 text-neutral-600" />
                        </button>
                        <button className="p-2 hover:bg-neutral-100 rounded-lg transition-colors">
                          <Edit className="w-4 h-4 text-neutral-600" />
                        </button>
                        <button className="p-2 hover:bg-neutral-100 rounded-lg transition-colors">
                          <Copy className="w-4 h-4 text-neutral-600" />
                        </button>
                        <button className="p-2 hover:bg-red-50 rounded-lg transition-colors">
                          <Trash2 className="w-4 h-4 text-red-600" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="lg:hidden space-y-4">
            {filteredEvents.map((event) => (
              <Card key={event.id}>
                <CardBody>
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="font-semibold text-neutral-900 mb-1">{event.title}</h3>
                      <p className="text-sm text-neutral-500">{event.type}</p>
                    </div>
                    <button className="p-2 hover:bg-neutral-100 rounded-lg">
                      <MoreVertical className="w-4 h-4 text-neutral-600" />
                    </button>
                  </div>

                  <div className="space-y-2 mb-3">
                    <div className="flex items-center gap-2 text-sm text-neutral-700">
                      <Calendar className="w-4 h-4 text-neutral-400" />
                      <span>{event.date} • {event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-neutral-700">
                      <MapPin className="w-4 h-4 text-neutral-400" />
                      <span>{event.venue}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-neutral-700">
                      <Users className="w-4 h-4 text-neutral-400" />
                      <span>{event.registrations}/{event.capacity} Registered</span>
                    </div>
                  </div>

                  <div className="w-full bg-neutral-200 rounded-full h-1.5 mb-3">
                    <div
                      className="bg-primary-600 h-1.5 rounded-full"
                      style={{ width: `${(event.registrations / event.capacity) * 100}%` }}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    {getStatusBadge(event.status)}
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Edit className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>

          {/* Empty State */}
          {filteredEvents.length === 0 && (
            <div className="text-center py-12">
              <Calendar className="w-12 h-12 text-neutral-300 mx-auto mb-3" />
              <p className="text-neutral-600 font-medium">No events found</p>
              <p className="text-sm text-neutral-500 mt-1">Try adjusting your filters</p>
            </div>
          )}
        </CardBody>
      </Card>
    </PageLayout>
  );
};
