import React, { useState } from 'react';
import { PageLayout } from '@/components/layout';
import { Card, CardHeader, CardBody, Input, Button, Badge } from '@/components/ui';
import { Calendar, MapPin, Users, Tag, Image, FileText, Save } from 'lucide-react';

export const CreateEvent: React.FC = () => {
  const [eventType, setEventType] = useState('workshop');

  return (
    <PageLayout role="organizer">
      <div className="page-header">
        <h1 className="page-title">Create New Event</h1>
        <p className="page-subtitle">Fill in the details to create a new campus event</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Form */}
        <div className="lg:col-span-2 space-y-6">
          {/* Basic Information */}
          <Card>
            <CardHeader>
              <h2 className="text-lg font-semibold text-neutral-900">Basic Information</h2>
            </CardHeader>
            <CardBody>
              <div className="space-y-4">
                <Input
                  label="Event Title"
                  placeholder="Enter event title"
                  id="title"
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Event Type
                    </label>
                    <select 
                      className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      value={eventType}
                      onChange={(e) => setEventType(e.target.value)}
                    >
                      <option value="workshop">Workshop</option>
                      <option value="seminar">Seminar</option>
                      <option value="conference">Conference</option>
                      <option value="competition">Competition</option>
                      <option value="cultural">Cultural Event</option>
                      <option value="sports">Sports Event</option>
                      <option value="hackathon">Hackathon</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Category
                    </label>
                    <select className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                      <option value="technical">Technical</option>
                      <option value="cultural">Cultural</option>
                      <option value="sports">Sports</option>
                      <option value="academic">Academic</option>
                      <option value="social">Social</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Description
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Describe your event..."
                  />
                </div>
              </div>
            </CardBody>
          </Card>

          {/* Date & Time */}
          <Card>
            <CardHeader>
              <h2 className="text-lg font-semibold text-neutral-900 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary-600" />
                Date & Time
              </h2>
            </CardHeader>
            <CardBody>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="Start Date"
                  type="date"
                  id="startDate"
                />
                <Input
                  label="Start Time"
                  type="time"
                  id="startTime"
                />
                <Input
                  label="End Date"
                  type="date"
                  id="endDate"
                />
                <Input
                  label="End Time"
                  type="time"
                  id="endTime"
                />
              </div>
            </CardBody>
          </Card>

          {/* Location */}
          <Card>
            <CardHeader>
              <h2 className="text-lg font-semibold text-neutral-900 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-accent-600" />
                Location Details
              </h2>
            </CardHeader>
            <CardBody>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Venue Type
                    </label>
                    <select className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                      <option value="offline">Offline</option>
                      <option value="online">Online</option>
                      <option value="hybrid">Hybrid</option>
                    </select>
                  </div>
                  <Input
                    label="Max Capacity"
                    type="number"
                    placeholder="e.g., 100"
                    id="capacity"
                  />
                </div>
                <Input
                  label="Venue Name"
                  placeholder="e.g., Auditorium Hall A"
                  id="venue"
                />
                <Input
                  label="Meeting Link (if online)"
                  placeholder="https://meet.google.com/..."
                  id="link"
                />
              </div>
            </CardBody>
          </Card>

          {/* Registration Settings */}
          <Card>
            <CardHeader>
              <h2 className="text-lg font-semibold text-neutral-900 flex items-center gap-2">
                <Users className="w-5 h-5 text-secondary-600" />
                Registration Settings
              </h2>
            </CardHeader>
            <CardBody>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    label="Registration Start"
                    type="date"
                    id="regStart"
                  />
                  <Input
                    label="Registration End"
                    type="date"
                    id="regEnd"
                  />
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="requireApproval"
                    className="w-4 h-4 text-primary-600 border-neutral-300 rounded focus:ring-primary-500"
                  />
                  <label htmlFor="requireApproval" className="text-sm font-medium text-neutral-700">
                    Require manual approval for registrations
                  </label>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="limitedSeats"
                    className="w-4 h-4 text-primary-600 border-neutral-300 rounded focus:ring-primary-500"
                  />
                  <label htmlFor="limitedSeats" className="text-sm font-medium text-neutral-700">
                    Enable waitlist when capacity is full
                  </label>
                </div>
              </div>
            </CardBody>
          </Card>

          {/* Event Banner */}
          <Card>
            <CardHeader>
              <h2 className="text-lg font-semibold text-neutral-900 flex items-center gap-2">
                <Image className="w-5 h-5 text-warning-600" />
                Event Banner
              </h2>
            </CardHeader>
            <CardBody>
              <div className="border-2 border-dashed border-neutral-300 rounded-lg p-8 text-center hover:border-primary-400 transition-colors cursor-pointer">
                <Image className="w-12 h-12 text-neutral-400 mx-auto mb-3" />
                <p className="text-sm font-medium text-neutral-700 mb-1">
                  Click to upload or drag and drop
                </p>
                <p className="text-xs text-neutral-500">
                  PNG, JPG up to 5MB (Recommended: 1200x600px)
                </p>
              </div>
            </CardBody>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <h2 className="text-lg font-semibold text-neutral-900">Actions</h2>
            </CardHeader>
            <CardBody>
              <div className="space-y-3">
                <Button variant="primary" className="w-full flex items-center justify-center gap-2">
                  <Save className="w-4 h-4" />
                  Save as Draft
                </Button>
                <Button variant="secondary" className="w-full">
                  Preview Event
                </Button>
                <Button variant="primary" className="w-full">
                  Publish Event
                </Button>
              </div>
            </CardBody>
          </Card>

          {/* Event Tags */}
          <Card>
            <CardHeader>
              <h2 className="text-lg font-semibold text-neutral-900 flex items-center gap-2">
                <Tag className="w-5 h-5" />
                Tags
              </h2>
            </CardHeader>
            <CardBody>
              <Input
                placeholder="Add tags (press Enter)"
                id="tags"
              />
              <div className="flex flex-wrap gap-2 mt-3">
                <Badge variant="primary">Technology</Badge>
                <Badge variant="success">Workshop</Badge>
                <Badge variant="warning">Free</Badge>
              </div>
            </CardBody>
          </Card>

          {/* Additional Settings */}
          <Card>
            <CardHeader>
              <h2 className="text-lg font-semibold text-neutral-900">Settings</h2>
            </CardHeader>
            <CardBody>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-neutral-700">Certificate Available</span>
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-primary-600 border-neutral-300 rounded focus:ring-primary-500"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-neutral-700">Send Reminders</span>
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-primary-600 border-neutral-300 rounded focus:ring-primary-500"
                    defaultChecked
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-neutral-700">Public Event</span>
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-primary-600 border-neutral-300 rounded focus:ring-primary-500"
                    defaultChecked
                  />
                </div>
              </div>
            </CardBody>
          </Card>

          {/* Tips */}
          <Card>
            <CardBody>
              <div className="flex gap-3">
                <FileText className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-semibold text-neutral-900 mb-1">Pro Tips</h3>
                  <ul className="text-xs text-neutral-600 space-y-1">
                    <li>• Use clear, descriptive titles</li>
                    <li>• Add high-quality images</li>
                    <li>• Set realistic capacity limits</li>
                    <li>• Enable reminders for better attendance</li>
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
