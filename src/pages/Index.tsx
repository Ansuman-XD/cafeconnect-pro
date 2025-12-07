import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Users,
  ClipboardList,
  BarChart3,
  Bell,
  Shield,
  Zap,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Customer Management',
    description: 'Track all customers with complete history of services and job applications.',
  },
  {
    icon: ClipboardList,
    title: 'Task Tracking',
    description: 'Manage form filling, DTP, xerox and all services with status updates.',
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    description: 'Real-time insights on revenue, employee performance and service trends.',
  },
  {
    icon: Bell,
    title: 'Smart Notifications',
    description: 'Automated job alerts via SMS, Email & WhatsApp to bring customers back.',
  },
  {
    icon: Shield,
    title: 'Pending Work System',
    description: 'Never lose track of incomplete work due to website issues or customer delays.',
  },
  {
    icon: Zap,
    title: 'Employee Performance',
    description: 'Monitor individual contributions, completed tasks and revenue generated.',
  },
];

const benefits = [
  'Register customers with complete profile',
  'Track all services: Form Filling, DTP, Xerox, Printing',
  'Upload proof screenshots for completed work',
  'Automatic government job recommendations',
  'Daily, weekly and monthly revenue reports',
  'Employee-wise performance tracking',
];

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
              <span className="text-sm font-bold text-primary-foreground">CC</span>
            </div>
            <span className="text-xl font-bold text-foreground">CyberCafe Pro</span>
          </div>
          <nav className="flex items-center gap-4">
            <Link to="/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link to="/login">
              <Button>Get Started</Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-transparent to-accent/20" />
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
              <Zap className="mr-2 h-4 w-4" />
              Complete Cyber Café Management Solution
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Manage Your Cyber Café{' '}
              <span className="text-primary">Like a Pro</span>
            </h1>
            <p className="mb-8 text-lg text-muted-foreground lg:text-xl">
              Complete solution for customer tracking, employee management, government job
              recommendations, and automated notifications to grow your business.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link to="/login">
                <Button size="lg" className="gap-2">
                  Start Managing Now
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Button size="lg" variant="outline">
                View Demo
              </Button>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Demo credentials: any email + password <code className="rounded bg-muted px-1.5 py-0.5">demo123</code>
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="border-y border-border bg-card/50 py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground">
              Everything You Need to Run Your Business
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              From customer registration to revenue analytics, we've got every aspect covered.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg"
              >
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-foreground lg:text-4xl">
                Built Specifically for{' '}
                <span className="text-primary">Indian Cyber Cafés</span>
              </h2>
              <p className="mb-8 text-lg text-muted-foreground">
                We understand the unique challenges of running a cyber café in India. From handling
                SSC, Railway, and Banking applications to managing daily operations.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-gradient-to-br from-primary/5 to-accent/10 p-8">
              <div className="space-y-6">
                <div className="rounded-xl bg-card p-4 shadow-sm">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-medium text-muted-foreground">Today's Revenue</span>
                    <span className="text-sm text-green-600">+12.5%</span>
                  </div>
                  <span className="text-3xl font-bold text-foreground">₹12,450</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl bg-card p-4 shadow-sm">
                    <span className="text-sm text-muted-foreground">Customers</span>
                    <p className="text-2xl font-bold text-foreground">47</p>
                  </div>
                  <div className="rounded-xl bg-card p-4 shadow-sm">
                    <span className="text-sm text-muted-foreground">Pending</span>
                    <p className="text-2xl font-bold text-foreground">8</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border bg-primary/5 py-20">
        <div className="container text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground">
            Ready to Transform Your Cyber Café?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-muted-foreground">
            Join hundreds of cyber café owners who are already using CyberCafe Pro to manage their
            business efficiently.
          </p>
          <Link to="/login">
            <Button size="lg" className="gap-2">
              Get Started for Free
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <span className="text-xs font-bold text-primary-foreground">CC</span>
            </div>
            <span className="font-semibold text-foreground">CyberCafe Pro</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 CyberCafe Pro. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
