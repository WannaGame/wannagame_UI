import React from 'react';
import Discord from '../components/Discord/discord';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { useAuth } from '../utils/hooks/useAuth';

export const PrivateRouter: React.FC = () => {
  const location = useLocation();
  const { loading, user } = useAuth();

  if (loading) {
    return <div>loading</div>;
  }
  if (Object.keys(user).length)
    return (
      <Routes>
        <Route path="/auth/discord" element={<Discord />} />
      </Routes>
    );
  return <Navigate to={'/'} state={{ from: location }} replace />;
};
