import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { CustomerList } from '@/components/customers/CustomerList';

export default function EmployeeCustomers() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-foreground">Customer Lookup</h1>
          <p className="text-muted-foreground">Search and view customer details</p>
        </div>

        {/* Customer List */}
        <CustomerList />
      </div>
    </DashboardLayout>
  );
}
