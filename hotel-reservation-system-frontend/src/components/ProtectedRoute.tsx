// src/components/ProtectedRoute.tsx
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

interface ProtectedRouteProps {
  element: React.ReactElement;
  path: string;
  exact?: boolean; // Puedes agregar esta propiedad si lo necesitas
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element, path }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? (
    <Route path={path} element={element} />
  ) : (
    <Navigate to="/admin/login" />
  );
};

export default ProtectedRoute;