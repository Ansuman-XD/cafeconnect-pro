import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";

// Pages
import Index from "./pages/Index";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

// Admin Pages
import AdminDashboard from "./pages/admin/Dashboard";
import AdminEmployees from "./pages/admin/Employees";
import AdminCustomers from "./pages/admin/Customers";
import AdminTasks from "./pages/admin/Tasks";
import AdminPendingWorks from "./pages/admin/PendingWorks";
import AdminAnalytics from "./pages/admin/Analytics";
import AdminSettings from "./pages/admin/Settings";

// Employee Pages
import EmployeeDashboard from "./pages/employee/Dashboard";
import EmployeeNewTask from "./pages/employee/NewTask";
import EmployeeTasks from "./pages/employee/Tasks";
import EmployeePending from "./pages/employee/Pending";
import EmployeeCustomers from "./pages/employee/Customers";

const queryClient = new QueryClient();

function ProtectedRoute({ children, allowedRoles }: { children: React.ReactNode; allowedRoles?: string[] }) {
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && user && !allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}

function AppRoutes() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Index />} />
      <Route path="/login" element={<Login />} />

      {/* Admin Routes */}
      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/employees"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <AdminEmployees />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/customers"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <AdminCustomers />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/tasks"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <AdminTasks />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/pending"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <AdminPendingWorks />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/analytics"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <AdminAnalytics />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/settings"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <AdminSettings />
          </ProtectedRoute>
        }
      />

      {/* Employee Routes */}
      <Route
        path="/employee/dashboard"
        element={
          <ProtectedRoute allowedRoles={["employee"]}>
            <EmployeeDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/employee/new-task"
        element={
          <ProtectedRoute allowedRoles={["employee"]}>
            <EmployeeNewTask />
          </ProtectedRoute>
        }
      />
      <Route
        path="/employee/tasks"
        element={
          <ProtectedRoute allowedRoles={["employee"]}>
            <EmployeeTasks />
          </ProtectedRoute>
        }
      />
      <Route
        path="/employee/pending"
        element={
          <ProtectedRoute allowedRoles={["employee"]}>
            <EmployeePending />
          </ProtectedRoute>
        }
      />
      <Route
        path="/employee/customers"
        element={
          <ProtectedRoute allowedRoles={["employee"]}>
            <EmployeeCustomers />
          </ProtectedRoute>
        }
      />

      {/* Catch-all */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
