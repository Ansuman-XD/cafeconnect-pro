import { cn } from '@/lib/utils';
import { LucideIcon, TrendingUp, TrendingDown } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  change?: number;
  changeLabel?: string;
  className?: string;
}

export function StatCard({ title, value, icon: Icon, change, changeLabel, className }: StatCardProps) {
  const isPositive = change && change > 0;
  const isNegative = change && change < 0;

  return (
    <div className={cn('rounded-xl bg-card p-6 shadow-sm', className)}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="mt-2 text-3xl font-bold text-foreground">{value}</p>
          {change !== undefined && (
            <div className="mt-2 flex items-center gap-1">
              {isPositive && <TrendingUp className="h-4 w-4 text-green-600" />}
              {isNegative && <TrendingDown className="h-4 w-4 text-destructive" />}
              <span
                className={cn(
                  'text-sm font-medium',
                  isPositive && 'text-green-600',
                  isNegative && 'text-destructive',
                  !isPositive && !isNegative && 'text-muted-foreground'
                )}
              >
                {isPositive && '+'}
                {change}%
              </span>
              {changeLabel && (
                <span className="text-sm text-muted-foreground">{changeLabel}</span>
              )}
            </div>
          )}
        </div>
        <div className="rounded-lg bg-primary/10 p-3">
          <Icon className="h-6 w-6 text-primary" />
        </div>
      </div>
    </div>
  );
}
