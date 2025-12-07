export type UserRole = 'admin' | 'employee';

export type ServiceType = 
  | 'form-filling'
  | 'dtp'
  | 'xerox'
  | 'printing'
  | 'scanning'
  | 'passport-photo'
  | 'other';

export type TaskStatus = 'pending' | 'in-progress' | 'completed' | 'on-hold';

export type TaskPriority = 'low' | 'medium' | 'high';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

export interface Customer {
  id: string;
  name: string;
  phone: string;
  email?: string;
  age?: number;
  qualification?: string;
  createdAt: Date;
  lastVisit?: Date;
}

export interface Task {
  id: string;
  customerId: string;
  customerName: string;
  employeeId: string;
  employeeName: string;
  serviceType: ServiceType;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  amount: number;
  proofUrl?: string;
  pendingReason?: string;
  createdAt: Date;
  completedAt?: Date;
}

export interface Employee {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar?: string;
  tasksCompleted: number;
  pendingTasks: number;
  totalRevenue: number;
  joinedAt: Date;
}

export interface DashboardStats {
  totalCustomersToday: number;
  totalApplications: number;
  pendingWorks: number;
  totalRevenue: number;
  revenueChange: number;
  customerChange: number;
}

export interface ServiceCategory {
  type: ServiceType;
  label: string;
  icon: string;
  count: number;
  revenue: number;
}
