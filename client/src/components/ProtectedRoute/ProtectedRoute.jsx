import React from "react";
import { Navigate } from "react-router-dom";
import useAuthStore from "../../store/store.js"; // Ensure this points to your Zustand store

const ProtectedRoute = ({ children }) => {
  const { user } = useAuthStore();

  if (!user) {
    // Redirect to the login page if user is not authenticated
    return <Navigate to="/login" replace />;
  }

  // Render the children components if authenticated
  return children;
};

export default ProtectedRoute;
