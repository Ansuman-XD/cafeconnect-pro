import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User, UserRole } from '@/types';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string, role: UserRole) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Demo users for testing
const demoUsers: Record<string, User> = {
  'admin@cybercafe.com': { id: 'admin-1', name: 'Admin User', email: 'admin@cybercafe.com', role: 'admin' },
  'employee@cybercafe.com': { id: 'emp-1', name: 'Rahul Kumar', email: 'employee@cybercafe.com', role: 'employee' },
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string, role: UserRole): Promise<boolean> => {
    // Demo login - in production, this would call an API
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const demoUser = demoUsers[email];
    if (demoUser && password === 'demo123') {
      setUser({ ...demoUser, role });
      return true;
    }
    
    // Allow any email/password for demo with specified role
    if (email && password === 'demo123') {
      setUser({
        id: `user-${Date.now()}`,
        name: email.split('@')[0],
        email,
        role,
      });
      return true;
    }
    
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
