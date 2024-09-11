import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { login as loginService, logout as logoutService, isAuthenticated as checkIsAuthenticated } from '../services/authService';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(checkIsAuthenticated());
  
  useEffect(() => {
    setIsAuthenticated(checkIsAuthenticated());
  }, []);

  const login = async (username: string, password: string) => {
    await loginService(username, password);
    setIsAuthenticated(true);
  };

  const logout = () => {
    logoutService();
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
