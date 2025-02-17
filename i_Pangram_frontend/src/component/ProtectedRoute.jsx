// src/components/ProtectedRoute.js

import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
    const isAuthenticated = !!localStorage.getItem('token');

    return isAuthenticated && true ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
