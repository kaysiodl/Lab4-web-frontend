import { Navigate } from "react-router-dom";

export function ProtectedRoute({ children }) {
    const sessionId = sessionStorage.getItem("sessionId");

    if (!sessionId) {
        return <Navigate to="/sign-in" replace />;
    }

    return children;
}
