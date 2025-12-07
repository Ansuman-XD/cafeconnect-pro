import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { mockEmployees } from '@/lib/mock-data';

export function EmployeePerformance() {
  const maxRevenue = Math.max(...mockEmployees.map((e) => e.totalRevenue));

  return (
    <div className="rounded-xl bg-card p-6 shadow-sm">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground">Employee Performance</h3>
        <p className="text-sm text-muted-foreground">Top performers this month</p>
      </div>
      <div className="space-y-4">
        {mockEmployees.slice(0, 5).map((employee, index) => {
          const progress = (employee.totalRevenue / maxRevenue) * 100;
          return (
            <div key={employee.id} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-muted-foreground">#{index + 1}</span>
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-primary/10 text-primary text-xs">
                      {employee.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium text-foreground">{employee.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {employee.tasksCompleted} tasks completed
                    </p>
                  </div>
                </div>
                <span className="text-sm font-semibold text-foreground">
                  ₹{employee.totalRevenue.toLocaleString()}
                </span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
