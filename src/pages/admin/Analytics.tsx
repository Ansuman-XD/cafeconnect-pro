import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { RevenueChart } from '@/components/dashboard/RevenueChart';
import { ServicesPieChart } from '@/components/dashboard/ServicesPieChart';
import { EmployeePerformance } from '@/components/dashboard/EmployeePerformance';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { mockServiceCategories } from '@/lib/mock-data';
import { TrendingUp, TrendingDown } from 'lucide-react';

export default function AdminAnalytics() {
  const totalRevenue = mockServiceCategories.reduce((acc, cat) => acc + cat.revenue, 0);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-foreground">Analytics</h1>
          <p className="text-muted-foreground">Detailed insights into your business performance</p>
        </div>

        {/* Period Tabs */}
        <Tabs defaultValue="weekly">
          <TabsList>
            <TabsTrigger value="daily">Daily</TabsTrigger>
            <TabsTrigger value="weekly">Weekly</TabsTrigger>
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
          </TabsList>

          <TabsContent value="weekly" className="mt-6 space-y-6">
            {/* Revenue Summary */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Total Revenue
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-foreground">
                    ₹{totalRevenue.toLocaleString()}
                  </p>
                  <div className="mt-1 flex items-center gap-1 text-sm text-green-600">
                    <TrendingUp className="h-4 w-4" />
                    +15.3% vs last week
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Avg. Per Customer
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-foreground">₹265</p>
                  <div className="mt-1 flex items-center gap-1 text-sm text-green-600">
                    <TrendingUp className="h-4 w-4" />
                    +8.2% vs last week
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Total Customers
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-foreground">237</p>
                  <div className="mt-1 flex items-center gap-1 text-sm text-green-600">
                    <TrendingUp className="h-4 w-4" />
                    +12.1% vs last week
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Completion Rate
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-foreground">94.2%</p>
                  <div className="mt-1 flex items-center gap-1 text-sm text-destructive">
                    <TrendingDown className="h-4 w-4" />
                    -2.1% vs last week
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Charts */}
            <div className="grid gap-6 lg:grid-cols-2">
              <RevenueChart />
              <ServicesPieChart />
            </div>

            {/* Service Breakdown */}
            <Card>
              <CardHeader>
                <CardTitle>Service Breakdown</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockServiceCategories.map((category) => (
                    <div
                      key={category.type}
                      className="flex items-center justify-between rounded-lg border border-border p-4"
                    >
                      <div>
                        <p className="font-medium text-foreground">{category.label}</p>
                        <p className="text-sm text-muted-foreground">{category.count} transactions</p>
                      </div>
                      <p className="text-lg font-semibold text-foreground">
                        ₹{category.revenue.toLocaleString()}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Employee Performance */}
            <EmployeePerformance />
          </TabsContent>

          <TabsContent value="daily">
            <div className="mt-6 text-center text-muted-foreground">
              Daily analytics coming soon...
            </div>
          </TabsContent>

          <TabsContent value="monthly">
            <div className="mt-6 text-center text-muted-foreground">
              Monthly analytics coming soon...
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
