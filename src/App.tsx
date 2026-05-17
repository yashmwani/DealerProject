import { Routes, Route, Navigate } from "react-router-dom";
import { PublicLayout } from "./components/PublicLayout";
import { DashboardLayout } from "./components/DashboardLayout";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Landing } from "./pages/Landing";
import { Services } from "./pages/Services";
import { Contact } from "./pages/Contact";
import { Login } from "./pages/Login";
import { DashboardOverview } from "./pages/dashboard/Overview";
import { RecordsPage } from "./pages/dashboard/Records";
import { ReportsPage } from "./pages/dashboard/Reports";
import { ActivityPage } from "./pages/dashboard/Activity";
import { UsersPage } from "./pages/dashboard/Users";

export default function App() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route index element={<Landing />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
      </Route>

      <Route path="login" element={<Login />} />

      <Route
        path="dashboard"
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<DashboardOverview />} />
        <Route path="records" element={<RecordsPage />} />
        <Route path="reports" element={<ReportsPage />} />
        <Route path="activity" element={<ActivityPage />} />
        <Route
          path="users"
          element={
            <ProtectedRoute roles={["admin", "staff"]}>
              <UsersPage />
            </ProtectedRoute>
          }
        />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
