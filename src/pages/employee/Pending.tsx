import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { TaskList } from '@/components/tasks/TaskList';
import { Card, CardContent } from '@/components/ui/card';
import { AlertTriangle } from 'lucide-react';

export default function EmployeePending() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-foreground">Pending Works</h1>
          <p className="text-muted-foreground">Tasks waiting for completion</p>
        </div>

        {/* Alert Banner */}
        <Card className="border-destructive/50 bg-destructive/5">
          <CardContent className="flex items-center gap-4 p-4">
            <div className="rounded-lg bg-destructive/10 p-2">
              <AlertTriangle className="h-5 w-5 text-destructive" />
            </div>
            <div>
              <p className="font-medium text-foreground">You have pending tasks</p>
              <p className="text-sm text-muted-foreground">
                Complete these tasks as soon as possible or update their status
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Pending Tasks List */}
        <TaskList showAllColumns={false} filterByStatus="pending" />
      </div>
    </DashboardLayout>
  );
}
