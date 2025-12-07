import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { mockTasks, serviceTypeLabels, statusLabels } from '@/lib/mock-data';
import { Task, TaskStatus } from '@/types';
import { cn } from '@/lib/utils';
import { Search, Upload, Check, Clock, Eye } from 'lucide-react';

const statusVariants: Record<TaskStatus, 'default' | 'secondary' | 'destructive' | 'outline'> = {
  pending: 'destructive',
  'in-progress': 'default',
  completed: 'secondary',
  'on-hold': 'outline',
};

interface TaskListProps {
  showAllColumns?: boolean;
  filterByEmployee?: string;
  filterByStatus?: TaskStatus;
}

export function TaskList({ showAllColumns = true, filterByStatus }: TaskListProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>(filterByStatus || 'all');
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [pendingReason, setPendingReason] = useState('');
  const { toast } = useToast();

  let filteredTasks = mockTasks;
  if (statusFilter !== 'all') {
    filteredTasks = filteredTasks.filter((task) => task.status === statusFilter);
  }
  if (searchQuery) {
    filteredTasks = filteredTasks.filter(
      (task) =>
        task.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        task.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  const handleMarkComplete = (task: Task) => {
    toast({
      title: 'Task Completed',
      description: `Work for ${task.customerName} has been marked as complete.`,
    });
  };

  const handleMarkPending = () => {
    if (selectedTask && pendingReason) {
      toast({
        title: 'Task Marked as Pending',
        description: `Reason: ${pendingReason}`,
      });
      setSelectedTask(null);
      setPendingReason('');
    }
  };

  return (
    <div className="space-y-4">
      {/* Filters */}
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search by customer or description..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="in-progress">In Progress</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
            <SelectItem value="on-hold">On Hold</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Table */}
      <div className="rounded-lg border border-border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Customer</TableHead>
              <TableHead>Service</TableHead>
              {showAllColumns && <TableHead>Employee</TableHead>}
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredTasks.map((task) => (
              <TableRow key={task.id}>
                <TableCell>
                  <div>
                    <p className="font-medium text-foreground">{task.customerName}</p>
                    <p className="text-sm text-muted-foreground">{task.description}</p>
                  </div>
                </TableCell>
                <TableCell>{serviceTypeLabels[task.serviceType]}</TableCell>
                {showAllColumns && <TableCell>{task.employeeName}</TableCell>}
                <TableCell className="font-medium">₹{task.amount}</TableCell>
                <TableCell>
                  <Badge variant={statusVariants[task.status]}>{statusLabels[task.status]}</Badge>
                </TableCell>
                <TableCell>
                  <div className="flex justify-end gap-2">
                    {task.status !== 'completed' && (
                      <>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleMarkComplete(task)}
                        >
                          <Check className="mr-1 h-4 w-4" />
                          Complete
                        </Button>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => setSelectedTask(task)}
                            >
                              <Clock className="mr-1 h-4 w-4" />
                              Pending
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Mark as Pending</DialogTitle>
                              <DialogDescription>
                                Please provide a reason for marking this task as pending.
                              </DialogDescription>
                            </DialogHeader>
                            <div className="space-y-4 pt-4">
                              <div>
                                <Label>Reason</Label>
                                <Textarea
                                  placeholder="e.g., Website is down, Customer will return later"
                                  value={pendingReason}
                                  onChange={(e) => setPendingReason(e.target.value)}
                                />
                              </div>
                              <div className="flex justify-end gap-2">
                                <Button variant="outline" onClick={() => setSelectedTask(null)}>
                                  Cancel
                                </Button>
                                <Button onClick={handleMarkPending}>Confirm</Button>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </>
                    )}
                    {task.status === 'completed' && !task.proofUrl && (
                      <Button size="sm" variant="outline">
                        <Upload className="mr-1 h-4 w-4" />
                        Upload Proof
                      </Button>
                    )}
                    <Button size="sm" variant="ghost">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
