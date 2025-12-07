import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { TaskList } from '@/components/tasks/TaskList';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';

export default function EmployeeTasks() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">My Tasks</h1>
            <p className="text-muted-foreground">View and manage your assigned work</p>
          </div>
          <Link to="/employee/new-task">
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              New Task
            </Button>
          </Link>
        </div>

        {/* Task List */}
        <TaskList showAllColumns={false} />
      </div>
    </DashboardLayout>
  );
}
