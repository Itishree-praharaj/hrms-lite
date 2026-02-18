import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import EmployeesPage from "../features/employees/EmployeesPage";
import EmployeeDetailsPage from "../features/employees/EmployeeDetailsPage";
import DashboardPage from "../features/dashboard/DashboardPage";
export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/" element={<EmployeesPage />} />
          <Route path="/employees/:id" element={<EmployeeDetailsPage />} />
          <Route path="/employees" element={<EmployeesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
