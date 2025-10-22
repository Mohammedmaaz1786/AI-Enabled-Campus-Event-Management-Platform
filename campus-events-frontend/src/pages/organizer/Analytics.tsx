import React from 'react';
import { PageLayout } from '@/components/layout';
import { Card, CardHeader, CardBody, Badge } from '@/components/ui';
import { TrendingUp, Users, Calendar, Eye, BarChart3, PieChart, Activity } from 'lucide-react';

export const Analytics: React.FC = () => {
  return (
    <PageLayout role="organizer">
      <div className="page-header">
        <h1 className="page-title">Analytics & Insights</h1>
        <p className="page-subtitle">Track performance and engagement metrics</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <Card>
          <CardBody>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-neutral-600">Total Events</span>
              <Calendar className="w-5 h-5 text-primary-600" />
            </div>
            <div className="text-3xl font-bold text-neutral-900 mb-1">24</div>
            <div className="flex items-center gap-1 text-sm">
              <TrendingUp className="w-4 h-4 text-accent-600" />
              <span className="text-accent-600 font-medium">+12%</span>
              <span className="text-neutral-500">from last month</span>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardBody>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-neutral-600">Total Registrations</span>
              <Users className="w-5 h-5 text-secondary-600" />
            </div>
            <div className="text-3xl font-bold text-neutral-900 mb-1">1,245</div>
            <div className="flex items-center gap-1 text-sm">
              <TrendingUp className="w-4 h-4 text-accent-600" />
              <span className="text-accent-600 font-medium">+25%</span>
              <span className="text-neutral-500">from last month</span>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardBody>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-neutral-600">Total Views</span>
              <Eye className="w-5 h-5 text-warning-600" />
            </div>
            <div className="text-3xl font-bold text-neutral-900 mb-1">8,450</div>
            <div className="flex items-center gap-1 text-sm">
              <TrendingUp className="w-4 h-4 text-accent-600" />
              <span className="text-accent-600 font-medium">+18%</span>
              <span className="text-neutral-500">from last month</span>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardBody>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-neutral-600">Avg. Attendance</span>
              <Activity className="w-5 h-5 text-accent-600" />
            </div>
            <div className="text-3xl font-bold text-neutral-900 mb-1">78%</div>
            <div className="flex items-center gap-1 text-sm">
              <TrendingUp className="w-4 h-4 text-accent-600" />
              <span className="text-accent-600 font-medium">+5%</span>
              <span className="text-neutral-500">from last month</span>
            </div>
          </CardBody>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Event Performance */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-neutral-900">Event Performance</h2>
              <BarChart3 className="w-5 h-5 text-neutral-400" />
            </div>
          </CardHeader>
          <CardBody>
            <div className="space-y-4">
              {[
                { name: 'Web Dev Workshop', registrations: 85, capacity: 100, views: 320 },
                { name: 'AI Seminar', registrations: 142, capacity: 150, views: 580 },
                { name: 'Tech Fest 2024', registrations: 478, capacity: 500, views: 1240 },
                { name: 'React Masterclass', registrations: 62, capacity: 80, views: 210 },
              ].map((event, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-neutral-900">{event.name}</span>
                    <span className="text-sm text-neutral-600">
                      {event.registrations}/{event.capacity}
                    </span>
                  </div>
                  <div className="w-full bg-neutral-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-primary-600 to-secondary-600 h-2 rounded-full"
                      style={{ width: `${(event.registrations / event.capacity) * 100}%` }}
                    />
                  </div>
                  <div className="flex items-center gap-4 text-xs text-neutral-500">
                    <span className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      {event.views} views
                    </span>
                    <span>
                      {Math.round((event.registrations / event.capacity) * 100)}% filled
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>

        {/* Category Distribution */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-neutral-900">Event Categories</h2>
              <PieChart className="w-5 h-5 text-neutral-400" />
            </div>
          </CardHeader>
          <CardBody>
            <div className="space-y-3">
              {[
                { category: 'Technical', count: 10, color: 'primary', percentage: 42 },
                { category: 'Cultural', count: 6, color: 'secondary', percentage: 25 },
                { category: 'Sports', count: 4, color: 'accent', percentage: 17 },
                { category: 'Academic', count: 4, color: 'warning', percentage: 16 },
              ].map((item, i) => (
                <div key={i}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full bg-${item.color}-600`} />
                      <span className="text-sm font-medium text-neutral-900">{item.category}</span>
                    </div>
                    <div className="text-sm text-neutral-600">
                      {item.count} events ({item.percentage}%)
                    </div>
                  </div>
                  <div className="w-full bg-neutral-200 rounded-full h-2">
                    <div
                      className={`bg-${item.color}-600 h-2 rounded-full`}
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>
      </div>

      {/* Top Performing Events */}
      <Card>
        <CardHeader>
          <h2 className="text-lg font-semibold text-neutral-900">Top Performing Events</h2>
        </CardHeader>
        <CardBody>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-neutral-200">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-neutral-700">Rank</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-neutral-700">Event</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-neutral-700">Views</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-neutral-700">Registrations</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-neutral-700">Attendance Rate</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-neutral-700">Rating</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { rank: 1, name: 'Tech Fest 2024', views: 1240, registrations: 478, attendance: 92, rating: 4.8 },
                  { rank: 2, name: 'AI Seminar', views: 580, registrations: 142, attendance: 88, rating: 4.6 },
                  { rank: 3, name: 'Web Dev Workshop', views: 320, registrations: 85, attendance: 75, rating: 4.5 },
                  { rank: 4, name: 'React Masterclass', views: 210, registrations: 62, attendance: 82, rating: 4.7 },
                  { rank: 5, name: 'Hackathon 2024', views: 195, registrations: 48, attendance: 95, rating: 4.9 },
                ].map((event) => (
                  <tr key={event.rank} className="border-b border-neutral-100 hover:bg-neutral-50">
                    <td className="py-4 px-4">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 text-primary-600 font-bold text-sm">
                        {event.rank}
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className="font-medium text-neutral-900">{event.name}</span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-1 text-sm text-neutral-700">
                        <Eye className="w-4 h-4 text-neutral-400" />
                        {event.views}
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-1 text-sm text-neutral-700">
                        <Users className="w-4 h-4 text-neutral-400" />
                        {event.registrations}
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 max-w-[100px] bg-neutral-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${
                              event.attendance >= 90 ? 'bg-accent-600' :
                              event.attendance >= 75 ? 'bg-warning-600' :
                              'bg-danger-600'
                            }`}
                            style={{ width: `${event.attendance}%` }}
                          />
                        </div>
                        <span className="text-sm font-medium text-neutral-900 min-w-[40px]">
                          {event.attendance}%
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <Badge variant={event.rating >= 4.5 ? 'success' : 'warning'}>
                        ⭐ {event.rating}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardBody>
      </Card>

      {/* Engagement Trends */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <Card>
          <CardBody>
            <h3 className="text-sm font-semibold text-neutral-700 mb-4">Best Performing Day</h3>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600 mb-1">Saturday</div>
              <p className="text-sm text-neutral-600">Most registrations</p>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardBody>
            <h3 className="text-sm font-semibold text-neutral-700 mb-4">Peak Registration Time</h3>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary-600 mb-1">2:00 PM - 4:00 PM</div>
              <p className="text-sm text-neutral-600">Highest activity</p>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardBody>
            <h3 className="text-sm font-semibold text-neutral-700 mb-4">Avg. Event Duration</h3>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent-600 mb-1">2.5 hours</div>
              <p className="text-sm text-neutral-600">Optimal engagement</p>
            </div>
          </CardBody>
        </Card>
      </div>
    </PageLayout>
  );
};
