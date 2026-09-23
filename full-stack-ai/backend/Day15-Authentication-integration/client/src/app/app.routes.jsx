import { createBrowserRouter } from "react-router";
import Profile from "../modules/auth/pages/Profile";
import Register from "../modules/auth/pages/Register";
import Login from "../modules/auth/pages/Login";
import ProtectedRoute from "../modules/auth/components/ProtectedRoute";

const router = createBrowserRouter([
    { path: "/register", element: <Register /> },
    { path: "/login", element: <Login /> },
    {
        path: "/profile",
        element: (
            <ProtectedRoute>
                <Profile />
            </ProtectedRoute>
        )
    },
])

export default router;