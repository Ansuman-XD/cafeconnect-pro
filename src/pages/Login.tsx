import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { UserRole } from '@/types';
import { Shield, Users, Loader2 } from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [role, setRole] = useState<UserRole>('employee');
  const { login } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const success = await login(email, password, role);

    if (success) {
      toast({
        title: 'Welcome back!',
        description: `Logged in as ${role === 'admin' ? 'Administrator' : 'Employee'}`,
      });
      navigate(role === 'admin' ? '/admin/dashboard' : '/employee/dashboard');
    } else {
      toast({
        title: 'Login Failed',
        description: 'Invalid credentials. Use password: demo123',
        variant: 'destructive',
      });
    }

    setIsLoading(false);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-background via-background to-primary/5 p-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <Link to="/" className="inline-flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <span className="text-sm font-bold text-primary-foreground">CC</span>
            </div>
            <span className="text-2xl font-bold text-foreground">CyberCafe Pro</span>
          </Link>
        </div>

        <Card className="border-border/50 shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Welcome Back</CardTitle>
            <CardDescription>Sign in to access your dashboard</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={role} onValueChange={(v) => setRole(v as UserRole)} className="mb-6">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="employee" className="gap-2">
                  <Users className="h-4 w-4" />
                  Employee
                </TabsTrigger>
                <TabsTrigger value="admin" className="gap-2">
                  <Shield className="h-4 w-4" />
                  Admin
                </TabsTrigger>
              </TabsList>
              <TabsContent value="employee">
                <p className="text-center text-sm text-muted-foreground">
                  Access your tasks, customers and daily work
                </p>
              </TabsContent>
              <TabsContent value="admin">
                <p className="text-center text-sm text-muted-foreground">
                  Full access to analytics, employees and settings
                </p>
              </TabsContent>
            </Tabs>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Button variant="link" className="h-auto p-0 text-xs">
                    Forgot password?
                  </Button>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Sign In
              </Button>
            </form>

            <div className="mt-6 rounded-lg bg-muted/50 p-4">
              <p className="text-center text-sm text-muted-foreground">
                <strong>Demo:</strong> Use any email with password{' '}
                <code className="rounded bg-background px-1.5 py-0.5 text-foreground">demo123</code>
              </p>
            </div>
          </CardContent>
        </Card>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary hover:underline">
            ← Back to Home
          </Link>
        </p>
      </div>
    </div>
  );
}
