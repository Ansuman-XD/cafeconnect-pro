import { Link } from 'react-router-dom';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { StatCard } from '@/components/dashboard/StatCard';
import { RecentTasks } from '@/components/dashboard/RecentTasks';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';
import { ClipboardList, CheckCircle, Clock, IndianRupee, Plus } from 'lucide-react';

export default function EmployeeDashboard() {
  const { user } = useAuth();

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Welcome Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground lg:text-3xl">
              Welcome, {user?.name}!
            </h1>
            <p className="text-muted-foreground">Here's your work overview for today</p>
          </div>
          <Link to="/employee/new-task">
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              New Task
            </Button>
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard title="Today's Tasks" value={12} icon={ClipboardList} />
          <StatCard title="Completed" value={8} icon={CheckCircle} />
          <StatCard title="Pending" value={4} icon={Clock} />
          <StatCard title="Today's Earnings" value="₹2,450" icon={IndianRupee} />
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <Link to="/employee/new-task">
                <Button variant="outline" className="w-full justify-start gap-2">
                  <Plus className="h-4 w-4 text-primary" />
                  Register New Work
                </Button>
              </Link>
              <Link to="/employee/tasks">
                <Button variant="outline" className="w-full justify-start gap-2">
                  <ClipboardList className="h-4 w-4 text-primary" />
                  View My Tasks
                </Button>
              </Link>
              <Link to="/employee/pending">
                <Button variant="outline" className="w-full justify-start gap-2">
                  <Clock className="h-4 w-4 text-primary" />
                  Pending Works
                </Button>
              </Link>
              <Link to="/employee/customers">
                <Button variant="outline" className="w-full justify-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  Customer Lookup
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Recent Tasks */}
        <RecentTasks />
      </div>
    </DashboardLayout>
  );
}
