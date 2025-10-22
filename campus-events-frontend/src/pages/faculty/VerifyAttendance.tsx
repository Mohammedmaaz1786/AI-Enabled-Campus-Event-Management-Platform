import React, { useState } from 'react';
import { PageLayout } from '@/components/layout';
import { Card, CardHeader, CardBody, Button, Badge } from '@/components/ui';
import { Search, QrCode, CheckCircle, XCircle, Calendar, MapPin, Users, Clock, Filter } from 'lucide-react';

export const VerifyAttendance: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'scan' | 'manual' | 'pending'>('scan');

  const events = [
    {
      id: 1,
      title: 'Web Development Workshop',
      date: 'Dec 20, 2024',
      time: '10:00 AM',
      venue: 'Lab 301',
      registered: 45,
      verified: 38,
      pending: 7
    },
    {
      id: 2,
      title: 'AI & Machine Learning Seminar',
      date: 'Dec 22, 2024',
      time: '3:00 PM',
      venue: 'Auditorium A',
      registered: 120,
      verified: 0,
      pending: 120
    },
  ];

  const students = [
    { id: 1, name: 'John Doe', rollNo: 'CS2021001', email: 'john@example.com', status: 'pending' },
    { id: 2, name: 'Jane Smith', rollNo: 'CS2021002', email: 'jane@example.com', status: 'pending' },
    { id: 3, name: 'Mike Johnson', rollNo: 'CS2021003', email: 'mike@example.com', status: 'pending' },
    { id: 4, name: 'Sarah Wilson', rollNo: 'CS2021004', email: 'sarah@example.com', status: 'verified' },
    { id: 5, name: 'Alex Brown', rollNo: 'CS2021005', email: 'alex@example.com', status: 'verified' },
  ];

  const pendingStudents = students.filter(s => s.status === 'pending');

  return (
    <PageLayout role="faculty">
      <div className="page-header">
        <h1 className="page-title">Verify Attendance</h1>
        <p className="page-subtitle">Scan QR codes or manually verify student attendance</p>
      </div>

      {/* Active Events */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-neutral-900 mb-4">Active Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map((event) => (
            <Card key={event.id}>
              <CardBody>
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="font-semibold text-neutral-900 mb-1">{event.title}</h3>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-sm text-neutral-600">
                        <Calendar className="w-4 h-4 text-neutral-400" />
                        {event.date} • {event.time}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-neutral-600">
                        <MapPin className="w-4 h-4 text-neutral-400" />
                        {event.venue}
                      </div>
                    </div>
                  </div>
                  {event.pending > 0 ? (
                    <Badge variant="warning">In Progress</Badge>
                  ) : (
                    <Badge variant="success">Completed</Badge>
                  )}
                </div>

                <div className="grid grid-cols-3 gap-4 mb-4 p-3 bg-neutral-50 rounded-lg">
                  <div className="text-center">
                    <div className="text-xl font-bold text-neutral-900">{event.registered}</div>
                    <div className="text-xs text-neutral-600">Registered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-accent-600">{event.verified}</div>
                    <div className="text-xs text-neutral-600">Verified</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-warning-600">{event.pending}</div>
                    <div className="text-xs text-neutral-600">Pending</div>
                  </div>
                </div>

                <div className="w-full bg-neutral-200 rounded-full h-2 mb-3">
                  <div
                    className="bg-accent-600 h-2 rounded-full"
                    style={{ width: `${(event.verified / event.registered) * 100}%` }}
                  />
                </div>

                <Button variant="primary" className="w-full">
                  Start Verification
                </Button>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>

      {/* Verification Methods */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <Button
              variant={activeTab === 'scan' ? 'primary' : 'outline'}
              onClick={() => setActiveTab('scan')}
            >
              <QrCode className="w-4 h-4 mr-2" />
              QR Scan
            </Button>
            <Button
              variant={activeTab === 'manual' ? 'primary' : 'outline'}
              onClick={() => setActiveTab('manual')}
            >
              <Search className="w-4 h-4 mr-2" />
              Manual
            </Button>
            <Button
              variant={activeTab === 'pending' ? 'primary' : 'outline'}
              onClick={() => setActiveTab('pending')}
            >
              <Clock className="w-4 h-4 mr-2" />
              Pending ({pendingStudents.length})
            </Button>
          </div>
        </CardHeader>

        <CardBody>
          {/* QR Scan Tab */}
          {activeTab === 'scan' && (
            <div className="text-center py-12">
              <div className="w-64 h-64 mx-auto mb-6 border-4 border-dashed border-primary-300 rounded-2xl flex items-center justify-center bg-primary-50">
                <QrCode className="w-24 h-24 text-primary-400" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                Ready to Scan QR Codes
              </h3>
              <p className="text-sm text-neutral-600 mb-6">
                Ask students to show their event QR codes for instant verification
              </p>
              <Button variant="primary">
                <QrCode className="w-4 h-4 mr-2" />
                Start Camera
              </Button>
              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg inline-block">
                <p className="text-sm text-blue-800">
                  💡 Tip: Ensure good lighting for accurate QR code scanning
                </p>
              </div>
            </div>
          )}

          {/* Manual Verification Tab */}
          {activeTab === 'manual' && (
            <div>
              <div className="mb-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
                  <input
                    type="text"
                    placeholder="Search by name, roll number, or email..."
                    className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-lg"
                  />
                </div>
              </div>

              <div className="space-y-3">
                {students.map((student) => (
                  <div
                    key={student.id}
                    className={`flex items-center justify-between p-4 border rounded-lg ${
                      student.status === 'verified'
                        ? 'border-accent-200 bg-accent-50'
                        : 'border-neutral-200 hover:border-primary-300'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full flex items-center justify-center text-white font-semibold">
                        {student.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-semibold text-neutral-900">{student.name}</h4>
                        <div className="flex items-center gap-3 text-sm text-neutral-600">
                          <span>{student.rollNo}</span>
                          <span>•</span>
                          <span>{student.email}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      {student.status === 'verified' ? (
                        <Badge variant="success">
                          <CheckCircle className="w-4 h-4 mr-1" />
                          Verified
                        </Badge>
                      ) : (
                        <>
                          <Button variant="primary" size="sm">
                            <CheckCircle className="w-4 h-4 mr-1" />
                            Verify
                          </Button>
                          <Button variant="outline" size="sm">
                            <XCircle className="w-4 h-4" />
                          </Button>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Pending Tab */}
          {activeTab === 'pending' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-neutral-400" />
                  <span className="text-sm font-medium text-neutral-700">
                    {pendingStudents.length} students pending verification
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <Filter className="w-4 h-4" />
                  </Button>
                  <Button variant="primary" size="sm">
                    Verify All
                  </Button>
                </div>
              </div>

              <div className="space-y-3">
                {pendingStudents.map((student) => (
                  <div
                    key={student.id}
                    className="flex items-center justify-between p-4 border border-neutral-200 rounded-lg hover:border-primary-300 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full flex items-center justify-center text-white font-semibold">
                        {student.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-semibold text-neutral-900">{student.name}</h4>
                        <div className="flex items-center gap-3 text-sm text-neutral-600">
                          <span>{student.rollNo}</span>
                          <span>•</span>
                          <span>{student.email}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Button variant="primary" size="sm">
                        <CheckCircle className="w-4 h-4 mr-1" />
                        Mark Present
                      </Button>
                      <Button variant="outline" size="sm">
                        <XCircle className="w-4 h-4 mr-1" />
                        Mark Absent
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              {pendingStudents.length === 0 && (
                <div className="text-center py-12">
                  <CheckCircle className="w-12 h-12 text-accent-400 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                    All Verified!
                  </h3>
                  <p className="text-sm text-neutral-600">
                    No pending attendance verifications
                  </p>
                </div>
              )}
            </div>
          )}
        </CardBody>
      </Card>
    </PageLayout>
  );
};
