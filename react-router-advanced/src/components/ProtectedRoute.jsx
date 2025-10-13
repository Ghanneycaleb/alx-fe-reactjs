import { Navigate } from "react-router-dom";

// Simple mock authentication hook
function useAuth() {
  const user = localStorage.getItem("user"); // or your own logic
  return { user };
}

export default function ProtectedRoute({ children }) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
