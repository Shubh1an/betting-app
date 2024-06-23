import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = () => {
    const auth = localStorage.getItem("AuthToken");
    return auth ? <Outlet /> : <Navigate to="/login" replace />;
}