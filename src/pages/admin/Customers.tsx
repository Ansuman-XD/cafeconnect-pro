import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { CustomerList } from '@/components/customers/CustomerList';
import { Button } from '@/components/ui/button';
import { Plus, Download } from 'lucide-react';

export default function AdminCustomers() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Customers</h1>
            <p className="text-muted-foreground">Complete customer database with service history</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2">
              <Download className="h-4 w-4" />
              Export
            </Button>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Add Customer
            </Button>
          </div>
        </div>

        {/* Customer List */}
        <CustomerList />
      </div>
    </DashboardLayout>
  );
}
