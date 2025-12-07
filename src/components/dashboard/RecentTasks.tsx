import { Badge } from '@/components/ui/badge';
import { mockTasks, serviceTypeLabels, statusLabels } from '@/lib/mock-data';
import { TaskStatus } from '@/types';
import { cn } from '@/lib/utils';
import { Clock, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const statusConfig: Record<TaskStatus, { variant: 'default' | 'secondary' | 'destructive' | 'outline'; icon: typeof Clock }> = {
  pending: { variant: 'destructive', icon: AlertCircle },
  'in-progress': { variant: 'default', icon: Loader2 },
  completed: { variant: 'secondary', icon: CheckCircle },
  'on-hold': { variant: 'outline', icon: Clock },
};

export function RecentTasks() {
  const recentTasks = mockTasks.slice(0, 5);

  return (
    <div className="rounded-xl bg-card p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Recent Tasks</h3>
          <p className="text-sm text-muted-foreground">Latest customer work updates</p>
        </div>
      </div>
      <div className="space-y-4">
        {recentTasks.map((task) => {
          const config = statusConfig[task.status];
          const StatusIcon = config.icon;
          return (
            <div
              key={task.id}
              className="flex items-center justify-between rounded-lg border border-border bg-background/50 p-4"
            >
              <div className="flex items-center gap-4">
                <div
                  className={cn(
                    'flex h-10 w-10 items-center justify-center rounded-lg',
                    task.status === 'completed' && 'bg-green-100 text-green-600',
                    task.status === 'pending' && 'bg-destructive/10 text-destructive',
                    task.status === 'in-progress' && 'bg-primary/10 text-primary',
                    task.status === 'on-hold' && 'bg-muted text-muted-foreground'
                  )}
                >
                  <StatusIcon className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium text-foreground">{task.customerName}</p>
                  <p className="text-sm text-muted-foreground">
                    {serviceTypeLabels[task.serviceType]} • {task.employeeName}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-semibold text-foreground">₹{task.amount}</span>
                <Badge variant={config.variant}>{statusLabels[task.status]}</Badge>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
