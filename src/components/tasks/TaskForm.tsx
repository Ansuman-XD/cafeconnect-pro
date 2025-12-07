import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { ServiceType, TaskPriority } from '@/types';
import { serviceTypeLabels } from '@/lib/mock-data';
import { Search, UserPlus } from 'lucide-react';

export function TaskForm() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isNewCustomer, setIsNewCustomer] = useState(false);
  const [formData, setFormData] = useState({
    customerPhone: '',
    customerName: '',
    customerEmail: '',
    serviceType: '' as ServiceType,
    description: '',
    priority: 'medium' as TaskPriority,
    amount: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Task Created Successfully',
      description: `Work for ${formData.customerName} has been registered.`,
    });
    navigate('/employee/tasks');
  };

  const handlePhoneSearch = () => {
    // Simulate finding existing customer
    if (formData.customerPhone === '9988776655') {
      setFormData((prev) => ({
        ...prev,
        customerName: 'Suresh Verma',
        customerEmail: 'suresh@gmail.com',
      }));
      setIsNewCustomer(false);
      toast({
        title: 'Customer Found',
        description: 'Existing customer details loaded.',
      });
    } else if (formData.customerPhone.length === 10) {
      setIsNewCustomer(true);
      toast({
        title: 'New Customer',
        description: 'Please enter customer details.',
      });
    }
  };

  return (
    <Card className="max-w-2xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <UserPlus className="h-5 w-5 text-primary" />
          Register New Work
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Customer Search */}
          <div className="space-y-4 rounded-lg border border-border bg-background/50 p-4">
            <h4 className="font-medium text-foreground">Customer Details</h4>
            <div className="flex gap-2">
              <div className="flex-1">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  placeholder="Enter 10-digit phone number"
                  value={formData.customerPhone}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, customerPhone: e.target.value }))
                  }
                  maxLength={10}
                />
              </div>
              <div className="flex items-end">
                <Button type="button" variant="outline" onClick={handlePhoneSearch}>
                  <Search className="mr-2 h-4 w-4" />
                  Search
                </Button>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="name">Customer Name</Label>
                <Input
                  id="name"
                  placeholder="Full name"
                  value={formData.customerName}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, customerName: e.target.value }))
                  }
                  disabled={!isNewCustomer && formData.customerName !== ''}
                />
              </div>
              <div>
                <Label htmlFor="email">Email (Optional)</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="email@example.com"
                  value={formData.customerEmail}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, customerEmail: e.target.value }))
                  }
                />
              </div>
            </div>
          </div>

          {/* Service Details */}
          <div className="space-y-4 rounded-lg border border-border bg-background/50 p-4">
            <h4 className="font-medium text-foreground">Service Details</h4>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="service">Service Type</Label>
                <Select
                  value={formData.serviceType}
                  onValueChange={(value: ServiceType) =>
                    setFormData((prev) => ({ ...prev, serviceType: value }))
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select service" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(serviceTypeLabels).map(([value, label]) => (
                      <SelectItem key={value} value={value}>
                        {label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="priority">Priority</Label>
                <Select
                  value={formData.priority}
                  onValueChange={(value: TaskPriority) =>
                    setFormData((prev) => ({ ...prev, priority: value }))
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="description">Work Description</Label>
              <Textarea
                id="description"
                placeholder="e.g., Railway Level 3 Application - RRB Group D"
                value={formData.description}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, description: e.target.value }))
                }
                rows={3}
              />
            </div>

            <div>
              <Label htmlFor="amount">Amount (₹)</Label>
              <Input
                id="amount"
                type="number"
                placeholder="Enter amount"
                value={formData.amount}
                onChange={(e) => setFormData((prev) => ({ ...prev, amount: e.target.value }))}
              />
            </div>
          </div>

          <div className="flex justify-end gap-3">
            <Button type="button" variant="outline" onClick={() => navigate(-1)}>
              Cancel
            </Button>
            <Button type="submit">Create Task</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
