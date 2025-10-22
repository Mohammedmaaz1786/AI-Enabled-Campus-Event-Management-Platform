import React, { useState } from 'react';
import { PageLayout } from '@/components/layout';
import { Card, CardHeader, CardBody, Button, Badge } from '@/components/ui';
import { Download, FileText, Calendar, Users, TrendingUp, Eye, BarChart3, Filter } from 'lucide-react';

export const Reports: React.FC = () => {
  const [reportType, setReportType] = useState<'attendance' | 'performance' | 'engagement'>('attendance');

  const reports = [
    {
      id: 1,
      name: 'Monthly Attendance Report',
      period: 'December 2024',
      generated: 'Dec 18, 2024',
      events: 12,
      students: 145,
      avgAttendance: 82
    },
    {
      id: 2,
      name: 'Event Performance Analysis',
      period: 'Q4 2024',
      generated: 'Dec 15, 2024',
      events: 38,
      students: 450,
      avgAttendance: 78
    },
    {
      id: 3,
      name: 'Student Engagement Report',
      period: 'Nov 2024',
      generated: 'Dec 1, 2024',
      events: 15,
      students: 210,
      avgAttendance: 85
    },
  ];

  const eventStats = [
    {
      event: 'Web Development Workshop',
      date: 'Dec 20, 2024',
      registered: 85,
      attended: 72,
      percentage: 85,
      rating: 4.5
    },
    {
      event: 'AI Seminar',
      date: 'Dec 18, 2024',
      registered: 120,
      attended: 98,
      percentage: 82,
      rating: 4.6
    },
    {
      event: 'Tech Fest 2024',
      date: 'Dec 15, 2024',
      registered: 450,
      attended: 420,
      percentage: 93,
      rating: 4.8
    },
    {
      event: 'React Masterclass',
      date: 'Dec 12, 2024',
      registered: 62,
      attended: 45,
      percentage: 73,
      rating: 4.3
    },
  ];

  const topStudents = [
    { rank: 1, name: 'Sarah Wilson', events: 18, attendance: 100, points: 450 },
    { rank: 2, name: 'John Doe', events: 15, attendance: 93, points: 398 },
    { rank: 3, name: 'Jane Smith', events: 16, attendance: 88, points: 375 },
    { rank: 4, name: 'Mike Johnson', events: 12, attendance: 92, points: 320 },
    { rank: 5, name: 'Alex Brown', events: 14, attendance: 86, points: 310 },
  ];

  return (
    <PageLayout role="faculty">
      <div className="page-header">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="page-title">Reports & Analytics</h1>
            <p className="page-subtitle">View detailed reports and analytics</p>
          </div>
          <Button variant="primary">
            <FileText className="w-4 h-4 mr-2" />
            Generate Report
          </Button>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <Card>
          <CardBody>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-neutral-600">Total Events</span>
              <Calendar className="w-5 h-5 text-primary-600" />
            </div>
            <div className="text-3xl font-bold text-neutral-900 mb-1">38</div>
            <div className="flex items-center gap-1 text-sm text-accent-600">
              <TrendingUp className="w-4 h-4" />
              <span>+12% this month</span>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardBody>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-neutral-600">Total Students</span>
              <Users className="w-5 h-5 text-secondary-600" />
            </div>
            <div className="text-3xl font-bold text-neutral-900 mb-1">1,245</div>
            <div className="flex items-center gap-1 text-sm text-accent-600">
              <TrendingUp className="w-4 h-4" />
              <span>+8% this month</span>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardBody>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-neutral-600">Avg. Attendance</span>
              <BarChart3 className="w-5 h-5 text-accent-600" />
            </div>
            <div className="text-3xl font-bold text-neutral-900 mb-1">82%</div>
            <div className="flex items-center gap-1 text-sm text-accent-600">
              <TrendingUp className="w-4 h-4" />
              <span>+5% this month</span>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardBody>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-neutral-600">Reports Generated</span>
              <FileText className="w-5 h-5 text-warning-600" />
            </div>
            <div className="text-3xl font-bold text-neutral-900 mb-1">24</div>
            <div className="flex items-center gap-1 text-sm text-accent-600">
              <TrendingUp className="w-4 h-4" />
              <span>+3 this month</span>
            </div>
          </CardBody>
        </Card>
      </div>

      {/* Report Type Selector */}
      <Card className="mb-6">
        <CardHeader>
          <div className="flex items-center gap-3">
            <Button
              variant={reportType === 'attendance' ? 'primary' : 'outline'}
              onClick={() => setReportType('attendance')}
            >
              Attendance
            </Button>
            <Button
              variant={reportType === 'performance' ? 'primary' : 'outline'}
              onClick={() => setReportType('performance')}
            >
              Performance
            </Button>
            <Button
              variant={reportType === 'engagement' ? 'primary' : 'outline'}
              onClick={() => setReportType('engagement')}
            >
              Engagement
            </Button>
            <div className="flex-1" />
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
          </div>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Generated Reports */}
          <Card>
            <CardHeader>
              <h2 className="text-lg font-semibold text-neutral-900">Generated Reports</h2>
            </CardHeader>
            <CardBody>
              <div className="space-y-3">
                {reports.map((report) => (
                  <div
                    key={report.id}
                    className="flex items-center justify-between p-4 border border-neutral-200 rounded-lg hover:border-primary-300 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                        <FileText className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-neutral-900 mb-1">{report.name}</h3>
                        <div className="flex items-center gap-3 text-sm text-neutral-600">
                          <span>{report.period}</span>
                          <span>•</span>
                          <span>Generated: {report.generated}</span>
                        </div>
                        <div className="flex items-center gap-3 mt-1">
                          <span className="text-xs text-neutral-500">{report.events} events</span>
                          <span className="text-xs text-neutral-500">{report.students} students</span>
                          <Badge variant={report.avgAttendance >= 80 ? 'success' : 'warning'}>
                            {report.avgAttendance}% attendance
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="primary" size="sm">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>

          {/* Event Statistics */}
          <Card>
            <CardHeader>
              <h2 className="text-lg font-semibold text-neutral-900">Event Statistics</h2>
            </CardHeader>
            <CardBody>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-neutral-200">
                      <th className="text-left py-3 px-4 text-sm font-semibold text-neutral-700">Event</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-neutral-700">Date</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-neutral-700">Attendance</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-neutral-700">Rate</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-neutral-700">Rating</th>
                    </tr>
                  </thead>
                  <tbody>
                    {eventStats.map((stat, i) => (
                      <tr key={i} className="border-b border-neutral-100 hover:bg-neutral-50">
                        <td className="py-4 px-4">
                          <span className="font-medium text-neutral-900">{stat.event}</span>
                        </td>
                        <td className="py-4 px-4">
                          <span className="text-sm text-neutral-700">{stat.date}</span>
                        </td>
                        <td className="py-4 px-4">
                          <span className="text-sm text-neutral-700">
                            {stat.attended}/{stat.registered}
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-2">
                            <div className="flex-1 max-w-[80px] bg-neutral-200 rounded-full h-2">
                              <div
                                className={`h-2 rounded-full ${
                                  stat.percentage >= 85 ? 'bg-accent-600' :
                                  stat.percentage >= 70 ? 'bg-warning-600' :
                                  'bg-danger-600'
                                }`}
                                style={{ width: `${stat.percentage}%` }}
                              />
                            </div>
                            <span className="text-sm font-medium text-neutral-900">
                              {stat.percentage}%
                            </span>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <Badge variant={stat.rating >= 4.5 ? 'success' : 'warning'}>
                            ⭐ {stat.rating}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardBody>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Top Performing Students */}
          <Card>
            <CardHeader>
              <h2 className="text-lg font-semibold text-neutral-900">Top Students</h2>
            </CardHeader>
            <CardBody>
              <div className="space-y-3">
                {topStudents.map((student) => (
                  <div key={student.rank} className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                      student.rank === 1 ? 'bg-warning-100 text-warning-600' :
                      student.rank === 2 ? 'bg-neutral-200 text-neutral-600' :
                      student.rank === 3 ? 'bg-amber-100 text-amber-600' :
                      'bg-neutral-100 text-neutral-500'
                    }`}>
                      {student.rank}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-neutral-900 text-sm">{student.name}</h4>
                      <div className="flex items-center gap-2 text-xs text-neutral-600">
                        <span>{student.events} events</span>
                        <span>•</span>
                        <span>{student.attendance}% attendance</span>
                      </div>
                    </div>
                    <Badge variant="primary">{student.points}</Badge>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <h2 className="text-lg font-semibold text-neutral-900">Quick Actions</h2>
            </CardHeader>
            <CardBody>
              <div className="space-y-2">
                <Button variant="primary" className="w-full justify-start">
                  <FileText className="w-4 h-4 mr-2" />
                  Export as PDF
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Download className="w-4 h-4 mr-2" />
                  Export as Excel
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Report
                </Button>
              </div>
            </CardBody>
          </Card>

          {/* Insights */}
          <Card>
            <CardBody>
              <div className="flex gap-3">
                <BarChart3 className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-semibold text-neutral-900 mb-2">Key Insights</h3>
                  <ul className="space-y-1 text-xs text-neutral-600">
                    <li>• Attendance rate increased by 5% this month</li>
                    <li>• Weekend events have 12% higher attendance</li>
                    <li>• Technical workshops are most popular</li>
                    <li>• Peak registration time: 2-4 PM</li>
                  </ul>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
};
