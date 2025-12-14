import { createHashRouter } from "react-router-dom";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import RootLayout from "../pages/layouts/RootLayout";
import NotFoundPage from "../pages/NotFound";

const AppRouter = createHashRouter([
    {
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/profile",
                element: <Profile />
            }
        ]
    },
    {
        path: "*",
        element: <NotFoundPage />
    }
])

export default AppRouter