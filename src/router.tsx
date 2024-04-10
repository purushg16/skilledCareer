import { createBrowserRouter } from "react-router-dom";
import { AdminLayout } from "./Layout/AdminLayout";
import { AdminHomePage } from "./pages/Admin/AdminHomePage";
import { AdminAddJobPage } from "./pages/Admin/AdminAddJobPage";
import EditJobPage from "./pages/Admin/EditJobPage";
import LoginPage from "./pages/Admin/LoginPage";
import { LoginLayout } from "./Layout/LoginLayout";
import UserJobSearchLayout from "./Layout/UserJobSearchLayout";
import UserSingleJobPage from "./pages/User/UserSingleJobPage";
import LandingPage from "./pages/User/LandingPage";

const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "/jobs", element: <UserJobSearchLayout /> },
  { path: "/job/:id", element: <UserSingleJobPage /> },
  {
    path: "/login",
    element: <LoginLayout />,
    children: [{ index: true, element: <LoginPage /> }],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { index: true, element: <AdminHomePage /> },
      { path: "addjob", element: <AdminAddJobPage /> },
      { path: "editJob/:jobId", element: <EditJobPage /> },
    ],
  },
]);

export default router;
