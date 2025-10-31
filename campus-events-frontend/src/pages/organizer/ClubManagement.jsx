import React, { useState } from 'react';
import { PageLayout } from '@/components/layout';
import { Card, CardHeader, CardBody, Button, Badge } from '@/components/ui';
import { Users, Search, Plus, Edit, Trash2, Crown, Mail, UserCheck } from 'lucide-react';

export const ClubManagement = () => {
  const [activeTab, setActiveTab] = useState('clubs');

  const clubs = [
    {
      id: 1,
      name: 'Tech Club',
      description: 'Exploring the latest in technology',
      members: 145,
      events: 12,
      status: 'active',
      role: 'admin'
    },
    {
      id: 2,
      name: 'Coding Society',
      description: 'Learn, code, and compete together',
      members: 98,
      events: 8,
      status: 'active',
      role: 'moderator'
    },
    {
      id: 3,
      name: 'AI Research Group',
      description: 'Advancing AI and ML research',
      members: 67,
      events: 5,
      status: 'active',
      role: 'admin'
    },
  ];

  const members = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', joinDate: 'Jan 2024', events: 15 },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Moderator', joinDate: 'Feb 2024', events: 12 },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', role: 'Member', joinDate: 'Mar 2024', events: 8 },
    { id: 4, name: 'Sarah Wilson', email: 'sarah@example.com', role: 'Member', joinDate: 'Mar 2024', events: 6 },
  ];

  const requests = [
    { id: 1, name: 'Alex Brown', email: 'alex@example.com', requestDate: '2 days ago', message: 'Interested in joining the tech events' },
    { id: 2, name: 'Emily Davis', email: 'emily@example.com', requestDate: '3 days ago', message: 'Want to learn more about AI' },
    { id: 3, name: 'Chris Lee', email: 'chris@example.com', requestDate: '5 days ago', message: 'Passionate about coding' },
  ];

  return (
    <PageLayout role="organizer">
      <div className="page-header">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="page-title">Club Management</h1>
            <p className="page-subtitle">Manage your clubs, members, and requests</p>
          </div>
          <Button variant="primary">
            <Plus className="w-4 h-4 mr-2" />
            Create Club
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <Card>
          <CardBody>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-1">3</div>
              <div className="text-sm text-neutral-600">Active Clubs</div>
            </div>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-600 mb-1">310</div>
              <div className="text-sm text-neutral-600">Total Members</div>
            </div>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary-600 mb-1">25</div>
              <div className="text-sm text-neutral-600">Events Organized</div>
            </div>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <div className="text-center">
              <div className="text-3xl font-bold text-warning-600 mb-1">3</div>
              <div className="text-sm text-neutral-600">Pending Requests</div>
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
                variant={activeTab === 'clubs' ? 'primary' : 'outline'}
                onClick={() => setActiveTab('clubs')}
              >
                Clubs
              </Button>
              <Button
                variant={activeTab === 'members' ? 'primary' : 'outline'}
                onClick={() => setActiveTab('members')}
              >
                Members
              </Button>
              <Button
                variant={activeTab === 'requests' ? 'primary' : 'outline'}
                onClick={() => setActiveTab('requests')}
              >
                Requests
                {requests.length > 0 && (
                  <span className="ml-2 px-2 py-0.5 bg-red-500 text-white text-xs rounded-full">
                    {requests.length}
                  </span>
                )}
              </Button>
            </div>

            <div className="relative flex-1 lg:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-400" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
          </div>
        </CardHeader>

        <CardBody>
          {/* Clubs Tab */}
          {activeTab === 'clubs' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {clubs.map((club) => (
                <Card key={club.id}>
                  <CardBody>
                    <div className="flex items-start justify-between mb-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <Badge variant="success">{club.status}</Badge>
                    </div>

                    <h3 className="text-lg font-semibold text-neutral-900 mb-2">{club.name}</h3>
                    <p className="text-sm text-neutral-600 mb-4">{club.description}</p>

                    <div className="flex items-center justify-between mb-4 pb-4 border-b border-neutral-200">
                      <div className="text-center">
                        <div className="text-xl font-bold text-neutral-900">{club.members}</div>
                        <div className="text-xs text-neutral-600">Members</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-neutral-900">{club.events}</div>
                        <div className="text-xs text-neutral-600">Events</div>
                      </div>
                      <div className="text-center">
                        <Badge variant="primary">{club.role}</Badge>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="primary" size="sm" className="flex-1">
                        Manage
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>
          )}

          {/* Members Tab */}
          {activeTab === 'members' && (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-neutral-200">
                    <th className="text-left py-3 px-4 text-sm font-semibold text-neutral-700">Member</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-neutral-700">Role</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-neutral-700">Join Date</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-neutral-700">Events Attended</th>
                    <th className="text-right py-3 px-4 text-sm font-semibold text-neutral-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {members.map((member) => (
                    <tr key={member.id} className="border-b border-neutral-100 hover:bg-neutral-50">
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full flex items-center justify-center text-white font-semibold">
                            {member.name.charAt(0)}
                          </div>
                          <div>
                            <div className="font-medium text-neutral-900">{member.name}</div>
                            <div className="text-sm text-neutral-500">{member.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2">
                          {member.role === 'Admin' && <Crown className="w-4 h-4 text-warning-600" />}
                          <span className={`text-sm font-medium ${
                            member.role === 'Admin' ? 'text-warning-600' :
                            member.role === 'Moderator' ? 'text-primary-600' :
                            'text-neutral-700'
                          }`}>
                            {member.role}
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <span className="text-sm text-neutral-700">{member.joinDate}</span>
                      </td>
                      <td className="py-4 px-4">
                        <span className="text-sm font-medium text-neutral-900">{member.events}</span>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center justify-end gap-2">
                          <button className="p-2 hover:bg-neutral-100 rounded-lg">
                            <Mail className="w-4 h-4 text-neutral-600" />
                          </button>
                          <button className="p-2 hover:bg-neutral-100 rounded-lg">
                            <Edit className="w-4 h-4 text-neutral-600" />
                          </button>
                          <button className="p-2 hover:bg-red-50 rounded-lg">
                            <Trash2 className="w-4 h-4 text-red-600" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Requests Tab */}
          {activeTab === 'requests' && (
            <div className="space-y-4">
              {requests.map((request) => (
                <Card key={request.id}>
                  <CardBody>
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0">
                          {request.name.charAt(0)}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-semibold text-neutral-900">{request.name}</h3>
                            <span className="text-sm text-neutral-500">• {request.requestDate}</span>
                          </div>
                          <p className="text-sm text-neutral-600 mb-1">{request.email}</p>
                          <p className="text-sm text-neutral-700 italic">"{request.message}"</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="primary" size="sm">
                          <UserCheck className="w-4 h-4 mr-1" />
                          Accept
                        </Button>
                        <Button variant="outline" size="sm">
                          Reject
                        </Button>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              ))}

              {requests.length === 0 && (
                <div className="text-center py-12">
                  <UserCheck className="w-12 h-12 text-neutral-300 mx-auto mb-3" />
                  <p className="text-neutral-600 font-medium">No pending requests</p>
                  <p className="text-sm text-neutral-500 mt-1">All caught up!</p>
                </div>
              )}
            </div>
          )}
        </CardBody>
      </Card>
    </PageLayout>
  );
};

