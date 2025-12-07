import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { TaskList } from '@/components/tasks/TaskList';
import { Card, CardContent } from '@/components/ui/card';
import { AlertCircle, Clock, Server } from 'lucide-react';

const pendingReasons = [
  { reason: 'SSC Website Down', count: 3, icon: Server },
  { reason: 'Customer to Return', count: 4, icon: Clock },
  { reason: 'Document Pending', count: 1, icon: AlertCircle },
];

export default function AdminPendingWorks() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-foreground">Pending Works</h1>
          <p className="text-muted-foreground">Track and resolve incomplete tasks</p>
        </div>

        {/* Summary Cards */}
        <div className="grid gap-4 sm:grid-cols-3">
          {pendingReasons.map((item, index) => (
            <Card key={index}>
              <CardContent className="flex items-center gap-4 p-4">
                <div className="rounded-lg bg-destructive/10 p-3">
                  <item.icon className="h-5 w-5 text-destructive" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{item.count}</p>
                  <p className="text-sm text-muted-foreground">{item.reason}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pending Tasks List */}
        <div className="rounded-xl bg-card p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold text-foreground">Pending Tasks</h2>
          <TaskList showAllColumns filterByStatus="pending" />
        </div>
      </div>
    </DashboardLayout>
  );
}
