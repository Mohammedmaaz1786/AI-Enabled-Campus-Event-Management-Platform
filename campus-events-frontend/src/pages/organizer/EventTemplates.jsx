import React from 'react';
import { PageLayout } from '@/components/layout';
import { Card, CardHeader, CardBody, Button, Badge } from '@/components/ui';
import { FileText, Calendar, Users, MapPin, Clock, Copy, Edit, Trash2, Star } from 'lucide-react';

export const Templates = () => {
  const templates = [
    {
      id: 1,
      name: 'Technical Workshop',
      description: 'Standard template for technical workshops and coding sessions',
      category: 'Technical',
      duration: '2-3 hours',
      capacity: '50-100',
      usageCount: 15,
      rating: 4.8,
      tags: ['Workshop', 'Technical', 'Hands-on']
    },
    {
      id: 2,
      name: 'Guest Lecture',
      description: 'Template for guest speaker events and seminars',
      category: 'Academic',
      duration: '1-2 hours',
      capacity: '100-200',
      usageCount: 12,
      rating: 4.6,
      tags: ['Seminar', 'Academic', 'Guest Speaker']
    },
    {
      id: 3,
      name: 'Hackathon',
      description: 'Complete template for organizing hackathons with team registrations',
      category: 'Competition',
      duration: '24-48 hours',
      capacity: '50-150',
      usageCount: 8,
      rating: 4.9,
      tags: ['Hackathon', 'Competition', 'Team Event']
    },
    {
      id: 4,
      name: 'Cultural Event',
      description: 'Template for cultural festivals and performances',
      category: 'Cultural',
      duration: '3-5 hours',
      capacity: '200-500',
      usageCount: 10,
      rating: 4.7,
      tags: ['Cultural', 'Performance', 'Festival']
    },
    {
      id: 5,
      name: 'Sports Tournament',
      description: 'Organize sports competitions with match schedules',
      category: 'Sports',
      duration: '1-3 days',
      capacity: '100-300',
      usageCount: 6,
      rating: 4.5,
      tags: ['Sports', 'Tournament', 'Competition']
    },
    {
      id: 6,
      name: 'Online Webinar',
      description: 'Virtual event template with video conferencing setup',
      category: 'Online',
      duration: '1-2 hours',
      capacity: 'Unlimited',
      usageCount: 20,
      rating: 4.7,
      tags: ['Online', 'Webinar', 'Virtual']
    },
  ];

  const getCategoryColor = (category) => {
    const colors = {
      'Technical': 'primary',
      'Academic': 'secondary',
      'Competition': 'accent',
      'Cultural': 'warning',
      'Sports': 'success',
      'Online': 'primary',
    };
    return colors[category] || 'primary';
  };

  return (
    <PageLayout role="organizer">
      <div className="page-header">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="page-title">Event Templates</h1>
            <p className="page-subtitle">Quick-start templates for different event types</p>
          </div>
          <Button variant="primary">
            <FileText className="w-4 h-4 mr-2" />
            Create Template
          </Button>
        </div>
      </div>

      {/* Template Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <Card>
          <CardBody>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-1">6</div>
              <div className="text-sm text-neutral-600">Total Templates</div>
            </div>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-600 mb-1">71</div>
              <div className="text-sm text-neutral-600">Times Used</div>
            </div>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary-600 mb-1">4.7</div>
              <div className="text-sm text-neutral-600">Avg. Rating</div>
            </div>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <div className="text-center">
              <div className="text-3xl font-bold text-warning-600 mb-1">3</div>
              <div className="text-sm text-neutral-600">Favorites</div>
            </div>
          </CardBody>
        </Card>
      </div>

      {/* Templates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((template) => (
          <Card key={template.id}>
            <CardBody>
              {/* Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <Badge variant={getCategoryColor(template.category)}>
                  {template.category}
                </Badge>
              </div>

              {/* Template Info */}
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                {template.name}
              </h3>
              <p className="text-sm text-neutral-600 mb-4 line-clamp-2">
                {template.description}
              </p>

              {/* Details */}
              <div className="space-y-2 mb-4 pb-4 border-b border-neutral-200">
                <div className="flex items-center gap-2 text-sm text-neutral-700">
                  <Clock className="w-4 h-4 text-neutral-400" />
                  <span>{template.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-neutral-700">
                  <Users className="w-4 h-4 text-neutral-400" />
                  <span>{template.capacity} participants</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-neutral-700">
                  <Copy className="w-4 h-4 text-neutral-400" />
                  <span>Used {template.usageCount} times</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {template.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-neutral-100 text-neutral-700 text-xs rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(template.rating)
                          ? 'fill-warning-400 text-warning-400'
                          : 'text-neutral-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm font-medium text-neutral-700">
                  {template.rating}
                </span>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <Button variant="primary" size="sm" className="flex-1">
                  Use Template
                </Button>
                <Button variant="outline" size="sm">
                  <Edit className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>

      {/* Template Categories Guide */}
      <Card className="mt-6">
        <CardHeader>
          <h2 className="text-lg font-semibold text-neutral-900">Template Guidelines</h2>
        </CardHeader>
        <CardBody>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-neutral-900 mb-2 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary-600" />
                Technical Workshops
              </h3>
              <p className="text-sm text-neutral-600">
                Ideal for coding sessions, software training, and hands-on technical learning experiences
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-neutral-900 mb-2 flex items-center gap-2">
                <Users className="w-5 h-5 text-secondary-600" />
                Academic Events
              </h3>
              <p className="text-sm text-neutral-600">
                Perfect for seminars, lectures, conferences, and academic discussions
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-neutral-900 mb-2 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-accent-600" />
                Competitions
              </h3>
              <p className="text-sm text-neutral-600">
                Best for hackathons, contests, tournaments, and competitive events
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-neutral-900 mb-2 flex items-center gap-2">
                <Star className="w-5 h-5 text-warning-600" />
                Cultural Events
              </h3>
              <p className="text-sm text-neutral-600">
                Great for festivals, performances, cultural celebrations, and entertainment
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-neutral-900 mb-2 flex items-center gap-2">
                <Clock className="w-5 h-5 text-success-600" />
                Sports Events
              </h3>
              <p className="text-sm text-neutral-600">
                Designed for sports tournaments, matches, athletic competitions, and fitness events
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-neutral-900 mb-2 flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary-600" />
                Online Events
              </h3>
              <p className="text-sm text-neutral-600">
                Optimized for webinars, virtual meetings, online workshops, and remote sessions
              </p>
            </div>
          </div>
        </CardBody>
      </Card>

      {/* Pro Tips */}
      <Card className="mt-6">
        <CardBody>
          <div className="flex gap-4">
            <FileText className="w-6 h-6 text-primary-600 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-neutral-900 mb-2">Tips for Using Templates</h3>
              <ul className="space-y-1 text-sm text-neutral-600">
                <li>• Customize templates to match your specific event requirements</li>
                <li>• Save time by reusing successful event configurations</li>
                <li>• Templates include pre-set fields, settings, and best practices</li>
                <li>• Create custom templates from your most successful events</li>
                <li>• Share templates with other organizers in your team</li>
              </ul>
            </div>
          </div>
        </CardBody>
      </Card>
    </PageLayout>
  );
};

