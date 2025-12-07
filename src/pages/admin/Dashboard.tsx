import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { StatCard } from '@/components/dashboard/StatCard';
import { RevenueChart } from '@/components/dashboard/RevenueChart';
import { ServicesPieChart } from '@/components/dashboard/ServicesPieChart';
import { RecentTasks } from '@/components/dashboard/RecentTasks';
import { EmployeePerformance } from '@/components/dashboard/EmployeePerformance';
import { mockDashboardStats } from '@/lib/mock-data';
import { Users, FileText, Clock, IndianRupee } from 'lucide-react';

export default function AdminDashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-2xl font-bold text-foreground lg:text-3xl">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's what's happening today.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Today's Customers"
            value={mockDashboardStats.totalCustomersToday}
            icon={Users}
            change={mockDashboardStats.customerChange}
            changeLabel="vs yesterday"
          />
          <StatCard
            title="Applications Filled"
            value={mockDashboardStats.totalApplications}
            icon={FileText}
          />
          <StatCard
            title="Pending Works"
            value={mockDashboardStats.pendingWorks}
            icon={Clock}
          />
          <StatCard
            title="Today's Revenue"
            value={`₹${mockDashboardStats.totalRevenue.toLocaleString()}`}
            icon={IndianRupee}
            change={mockDashboardStats.revenueChange}
            changeLabel="vs yesterday"
          />
        </div>

        {/* Charts Row */}
        <div className="grid gap-6 lg:grid-cols-2">
          <RevenueChart />
          <ServicesPieChart />
        </div>

        {/* Bottom Row */}
        <div className="grid gap-6 lg:grid-cols-2">
          <RecentTasks />
          <EmployeePerformance />
        </div>
      </div>
    </DashboardLayout>
  );
}
