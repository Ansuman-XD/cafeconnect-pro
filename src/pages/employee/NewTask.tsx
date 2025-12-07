import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { TaskForm } from '@/components/tasks/TaskForm';

export default function EmployeeNewTask() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-foreground">New Task</h1>
          <p className="text-muted-foreground">Register a new customer work</p>
        </div>

        {/* Task Form */}
        <TaskForm />
      </div>
    </DashboardLayout>
  );
}
