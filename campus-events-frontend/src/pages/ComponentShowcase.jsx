import React from 'react';
import { Button, Card, CardHeader, CardBody, CardFooter, Badge, Input } from '@/components/ui';
import { Calendar, Users, Bell } from 'lucide-react';

/**
 * Component Showcase Page
 * 
 * This page demonstrates all available UI components with their variants.
 * Use this as a reference when building new pages.
 * 
 * To view: Add route in App.tsx: <Route path="/showcase" element={<ComponentShowcase />} />
 */

export const ComponentShowcase = () => {
  return (
    <div className="min-h-screen bg-neutral-50 p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-display-md text-neutral-900 mb-4">Component Showcase</h1>
          <p className="text-body-lg text-neutral-600">
            All available UI components with their variants and usage examples
          </p>
        </div>

        {/* Buttons Section */}
        <section>
          <h2 className="text-heading-lg text-neutral-900 mb-6">Buttons</h2>
          <div className="space-y-6">
            {/* Variants */}
            <div>
              <h3 className="text-heading-sm text-neutral-700 mb-4">Variants</h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary">Primary Button</Button>
                <Button variant="secondary">Secondary Button</Button>
                <Button variant="outline">Outline Button</Button>
                <Button variant="ghost">Ghost Button</Button>
              </div>
            </div>

            {/* Sizes */}
            <div>
              <h3 className="text-heading-sm text-neutral-700 mb-4">Sizes</h3>
              <div className="flex flex-wrap items-center gap-4">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
              </div>
            </div>

            {/* With Icons */}
            <div>
              <h3 className="text-heading-sm text-neutral-700 mb-4">With Icons</h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Event
                </Button>
                <Button variant="secondary">
                  <Users className="w-4 h-4 mr-2" />
                  Invite Members
                </Button>
                <Button variant="outline">
                  <Bell className="w-4 h-4 mr-2" />
                  Notifications
                </Button>
              </div>
            </div>

            {/* States */}
            <div>
              <h3 className="text-heading-sm text-neutral-700 mb-4">States</h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" disabled>
                  Disabled Button
                </Button>
                <Button variant="primary" fullWidth>
                  Full Width Button
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Cards Section */}
        <section>
          <h2 className="text-heading-lg text-neutral-900 mb-6">Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Basic Card */}
            <Card>
              <CardBody>
                <h3 className="text-heading-md text-neutral-900 mb-2">Basic Card</h3>
                <p className="text-body-sm text-neutral-600">
                  A simple card with just a body section.
                </p>
              </CardBody>
            </Card>

            {/* Card with Header */}
            <Card>
              <CardHeader>
                <h3 className="text-heading-md text-neutral-900">Card with Header</h3>
              </CardHeader>
              <CardBody>
                <p className="text-body-sm text-neutral-600">
                  This card has a header section with a border.
                </p>
              </CardBody>
            </Card>

            {/* Full Card */}
            <Card>
              <CardHeader>
                <h3 className="text-heading-md text-neutral-900">Complete Card</h3>
              </CardHeader>
              <CardBody>
                <p className="text-body-sm text-neutral-600 mb-4">
                  This card has all three sections: header, body, and footer.
                </p>
              </CardBody>
              <CardFooter>
                <Button variant="primary" size="sm" fullWidth>
                  Action Button
                </Button>
              </CardFooter>
            </Card>

            {/* Hover Card */}
            <Card hover>
              <CardBody>
                <h3 className="text-heading-md text-neutral-900 mb-2">Hover Card</h3>
                <p className="text-body-sm text-neutral-600">
                  This card has hover effects with shadow transition.
                </p>
              </CardBody>
            </Card>

            {/* Card with Icon */}
            <Card>
              <CardBody>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-heading-md text-neutral-900 mb-1">With Icon</h3>
                    <p className="text-body-sm text-neutral-600">
                      Card with an icon element.
                    </p>
                  </div>
                </div>
              </CardBody>
            </Card>

            {/* Card with Badge */}
            <Card>
              <CardBody>
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-heading-md text-neutral-900">Event Card</h3>
                  <Badge variant="success">Active</Badge>
                </div>
                <p className="text-body-sm text-neutral-600">
                  Card with a badge indicator.
                </p>
              </CardBody>
            </Card>
          </div>
        </section>

        {/* Badges Section */}
        <section>
          <h2 className="text-heading-lg text-neutral-900 mb-6">Badges</h2>
          <div className="flex flex-wrap gap-4">
            <Badge variant="primary">Primary</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="danger">Danger</Badge>
          </div>
        </section>

        {/* Inputs Section */}
        <section>
          <h2 className="text-heading-lg text-neutral-900 mb-6">Input Fields</h2>
          <div className="max-w-2xl space-y-6">
            <Input
              label="Email Address"
              type="email"
              placeholder="Enter your email"
              helperText="We'll never share your email with anyone else."
            />

            <Input
              label="Password"
              type="password"
              placeholder="Enter your password"
            />

            <Input
              label="With Error"
              type="text"
              error="This field is required"
            />

            <Input
              label="Disabled Input"
              type="text"
              value="Read-only value"
              disabled
            />

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1">
                Select Field
              </label>
              <select className="input">
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1">
                Textarea
              </label>
              <textarea
                className="input"
                rows={4}
                placeholder="Enter your message..."
              />
            </div>
          </div>
        </section>

        {/* Typography Section */}
        <section>
          <h2 className="text-heading-lg text-neutral-900 mb-6">Typography</h2>
          <div className="space-y-4">
            <div>
              <p className="text-xs text-neutral-500 mb-1">Display XL (72px)</p>
              <h1 className="text-display-xl text-neutral-900">The quick brown fox</h1>
            </div>
            <div>
              <p className="text-xs text-neutral-500 mb-1">Display LG (60px)</p>
              <h1 className="text-display-lg text-neutral-900">The quick brown fox</h1>
            </div>
            <div>
              <p className="text-xs text-neutral-500 mb-1">Display MD (48px)</p>
              <h1 className="text-display-md text-neutral-900">The quick brown fox</h1>
            </div>
            <div>
              <p className="text-xs text-neutral-500 mb-1">Display SM (36px)</p>
              <h1 className="text-display-sm text-neutral-900">The quick brown fox</h1>
            </div>
            <div>
              <p className="text-xs text-neutral-500 mb-1">Heading XL (30px)</p>
              <h2 className="text-heading-xl text-neutral-900">The quick brown fox</h2>
            </div>
            <div>
              <p className="text-xs text-neutral-500 mb-1">Heading LG (24px)</p>
              <h2 className="text-heading-lg text-neutral-900">The quick brown fox</h2>
            </div>
            <div>
              <p className="text-xs text-neutral-500 mb-1">Body LG (18px)</p>
              <p className="text-body-lg text-neutral-600">
                The quick brown fox jumps over the lazy dog. This is body large text.
              </p>
            </div>
            <div>
              <p className="text-xs text-neutral-500 mb-1">Body MD (16px)</p>
              <p className="text-body-md text-neutral-600">
                The quick brown fox jumps over the lazy dog. This is body medium text.
              </p>
            </div>
            <div>
              <p className="text-xs text-neutral-500 mb-1">Body SM (14px)</p>
              <p className="text-body-sm text-neutral-600">
                The quick brown fox jumps over the lazy dog. This is body small text.
              </p>
            </div>
          </div>
        </section>

        {/* Colors Section */}
        <section>
          <h2 className="text-heading-lg text-neutral-900 mb-6">Color Palette</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {/* Primary */}
            <div>
              <h3 className="text-heading-sm text-neutral-700 mb-3">Primary</h3>
              <div className="space-y-2">
                {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => (
                  <div key={shade} className="flex items-center gap-2">
                    <div className={`w-12 h-8 rounded bg-primary-${shade}`} />
                    <span className="text-sm text-neutral-600">{shade}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Secondary */}
            <div>
              <h3 className="text-heading-sm text-neutral-700 mb-3">Secondary</h3>
              <div className="space-y-2">
                {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => (
                  <div key={shade} className="flex items-center gap-2">
                    <div className={`w-12 h-8 rounded bg-secondary-${shade}`} />
                    <span className="text-sm text-neutral-600">{shade}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Accent */}
            <div>
              <h3 className="text-heading-sm text-neutral-700 mb-3">Accent</h3>
              <div className="space-y-2">
                {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => (
                  <div key={shade} className="flex items-center gap-2">
                    <div className={`w-12 h-8 rounded bg-accent-${shade}`} />
                    <span className="text-sm text-neutral-600">{shade}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Warning */}
            <div>
              <h3 className="text-heading-sm text-neutral-700 mb-3">Warning</h3>
              <div className="space-y-2">
                {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => (
                  <div key={shade} className="flex items-center gap-2">
                    <div className={`w-12 h-8 rounded bg-warning-${shade}`} />
                    <span className="text-sm text-neutral-600">{shade}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Danger */}
            <div>
              <h3 className="text-heading-sm text-neutral-700 mb-3">Danger</h3>
              <div className="space-y-2">
                {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => (
                  <div key={shade} className="flex items-center gap-2">
                    <div className={`w-12 h-8 rounded bg-danger-${shade}`} />
                    <span className="text-sm text-neutral-600">{shade}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

