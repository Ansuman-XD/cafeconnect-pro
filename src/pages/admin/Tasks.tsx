import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { TaskList } from '@/components/tasks/TaskList';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

export default function AdminTasks() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">All Tasks</h1>
            <p className="text-muted-foreground">View and manage all work across employees</p>
          </div>
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Export Report
          </Button>
        </div>

        {/* Task List */}
        <TaskList showAllColumns />
      </div>
    </DashboardLayout>
  );
}
