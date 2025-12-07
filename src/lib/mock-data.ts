import { Customer, Task, Employee, DashboardStats, ServiceCategory, ServiceType } from '@/types';

export const mockEmployees: Employee[] = [
  { id: '1', name: 'Rahul Kumar', email: 'rahul@cybercafe.com', phone: '9876543210', tasksCompleted: 156, pendingTasks: 3, totalRevenue: 45600, joinedAt: new Date('2023-01-15') },
  { id: '2', name: 'Priya Sharma', email: 'priya@cybercafe.com', phone: '9876543211', tasksCompleted: 142, pendingTasks: 5, totalRevenue: 42300, joinedAt: new Date('2023-02-20') },
  { id: '3', name: 'Amit Singh', email: 'amit@cybercafe.com', phone: '9876543212', tasksCompleted: 128, pendingTasks: 2, totalRevenue: 38900, joinedAt: new Date('2023-03-10') },
  { id: '4', name: 'Neha Patel', email: 'neha@cybercafe.com', phone: '9876543213', tasksCompleted: 134, pendingTasks: 4, totalRevenue: 41200, joinedAt: new Date('2023-04-05') },
  { id: '5', name: 'Vikram Yadav', email: 'vikram@cybercafe.com', phone: '9876543214', tasksCompleted: 118, pendingTasks: 6, totalRevenue: 35800, joinedAt: new Date('2023-05-12') },
];

export const mockCustomers: Customer[] = [
  { id: '1', name: 'Suresh Verma', phone: '9988776655', email: 'suresh@gmail.com', age: 28, qualification: '12th Pass', createdAt: new Date('2024-01-15'), lastVisit: new Date() },
  { id: '2', name: 'Meena Kumari', phone: '9988776656', email: 'meena@gmail.com', age: 25, qualification: 'Graduate', createdAt: new Date('2024-02-10'), lastVisit: new Date() },
  { id: '3', name: 'Rajesh Kumar', phone: '9988776657', age: 32, qualification: 'Graduate', createdAt: new Date('2024-02-20'), lastVisit: new Date() },
  { id: '4', name: 'Anita Devi', phone: '9988776658', email: 'anita@gmail.com', age: 22, qualification: '10th Pass', createdAt: new Date('2024-03-05') },
  { id: '5', name: 'Mohan Lal', phone: '9988776659', age: 35, createdAt: new Date('2024-03-15'), lastVisit: new Date() },
];

export const mockTasks: Task[] = [
  { id: '1', customerId: '1', customerName: 'Suresh Verma', employeeId: '1', employeeName: 'Rahul Kumar', serviceType: 'form-filling', description: 'Railway Level 3 Application - RRB Group D', status: 'completed', priority: 'high', amount: 350, createdAt: new Date(), completedAt: new Date() },
  { id: '2', customerId: '2', customerName: 'Meena Kumari', employeeId: '2', employeeName: 'Priya Sharma', serviceType: 'form-filling', description: 'SSC CGL 2024 Registration', status: 'pending', priority: 'high', amount: 400, pendingReason: 'SSC website down', createdAt: new Date() },
  { id: '3', customerId: '3', customerName: 'Rajesh Kumar', employeeId: '1', employeeName: 'Rahul Kumar', serviceType: 'dtp', description: 'Resume Design + Print', status: 'completed', priority: 'medium', amount: 200, createdAt: new Date(), completedAt: new Date() },
  { id: '4', customerId: '4', customerName: 'Anita Devi', employeeId: '3', employeeName: 'Amit Singh', serviceType: 'xerox', description: 'Document Xerox - 50 pages', status: 'completed', priority: 'low', amount: 100, createdAt: new Date(), completedAt: new Date() },
  { id: '5', customerId: '5', customerName: 'Mohan Lal', employeeId: '4', employeeName: 'Neha Patel', serviceType: 'form-filling', description: 'Bank PO Application - IBPS', status: 'in-progress', priority: 'high', amount: 450, createdAt: new Date() },
  { id: '6', customerId: '1', customerName: 'Suresh Verma', employeeId: '2', employeeName: 'Priya Sharma', serviceType: 'passport-photo', description: 'Passport Size Photos - 8 copies', status: 'completed', priority: 'low', amount: 80, createdAt: new Date(), completedAt: new Date() },
];

export const mockDashboardStats: DashboardStats = {
  totalCustomersToday: 47,
  totalApplications: 32,
  pendingWorks: 8,
  totalRevenue: 12450,
  revenueChange: 12.5,
  customerChange: 8.2,
};

export const mockServiceCategories: ServiceCategory[] = [
  { type: 'form-filling', label: 'Form Filling', icon: 'FileText', count: 156, revenue: 54600 },
  { type: 'dtp', label: 'DTP & Design', icon: 'Palette', count: 89, revenue: 17800 },
  { type: 'xerox', label: 'Xerox', icon: 'Copy', count: 234, revenue: 4680 },
  { type: 'printing', label: 'Printing', icon: 'Printer', count: 178, revenue: 8900 },
  { type: 'scanning', label: 'Scanning', icon: 'ScanLine', count: 145, revenue: 2900 },
  { type: 'passport-photo', label: 'Passport Photos', icon: 'Camera', count: 98, revenue: 7840 },
];

export const mockWeeklyRevenue = [
  { day: 'Mon', revenue: 3200, customers: 28 },
  { day: 'Tue', revenue: 4100, customers: 35 },
  { day: 'Wed', revenue: 2800, customers: 24 },
  { day: 'Thu', revenue: 3900, customers: 33 },
  { day: 'Fri', revenue: 5200, customers: 45 },
  { day: 'Sat', revenue: 6100, customers: 52 },
  { day: 'Sun', revenue: 2400, customers: 20 },
];

export const serviceTypeLabels: Record<ServiceType, string> = {
  'form-filling': 'Form Filling',
  'dtp': 'DTP & Design',
  'xerox': 'Xerox',
  'printing': 'Printing',
  'scanning': 'Scanning',
  'passport-photo': 'Passport Photos',
  'other': 'Other Services',
};

export const statusLabels: Record<string, string> = {
  'pending': 'Pending',
  'in-progress': 'In Progress',
  'completed': 'Completed',
  'on-hold': 'On Hold',
};
