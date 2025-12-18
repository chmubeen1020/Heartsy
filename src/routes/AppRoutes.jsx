import { BrowserRouter, Routes, Route } from "react-router-dom";

import EmployeeLogin from "../pages/auth/employee/Login";
import ForgotPassword from "../pages/auth/employee/ForgotPassword";
import VerificationCode from "../pages/auth/employee/VerificationCode";
import SetPassword from "../pages/auth/employee/setPassword";
import SuperAdminLogin from "../pages/auth/superAdmin/Login";
import SuperAdminForgotPassword from "../pages/auth/superAdmin/ForgotPassword";
import SuperAdminVerficationCode from "../pages/auth/superAdmin/VerificationCode";
import SuperAdminResetPassword from "../pages/auth/superAdmin/ResetPassword";
import SuperAdminLayout from "../pages/auth/superAdmin/pages/SuperAdminLayout";
import SuperAdminDashboard from "../pages/auth/superAdmin/pages/dashboard/SuperAdminDashboard";
import DataAnalytics from "../pages/auth/superAdmin/pages/dataAnalytics/DataAnalytics";
import CompanyData from "../pages/auth/superAdmin/pages/dataAnalytics/CompanyData";
import AdminLogin from "../pages/auth/admin/Login";
import AdminForgotPassword from "../pages/auth/admin/ForgotPassword";
import AdminVerificationCode from "../pages/auth/admin/VerificationCode";
import AdminSetPassword from "../pages/auth/admin/setPassword";
import AdminSignup from "../pages/auth/admin/AdminSignup";
import AdminSetupAccount from "../pages/auth/admin/AdminSetupAccount";
import ScrollToTop from "../GlobalComponent/ScrollTop";
import ChoosingPricingPlan from "../pages/auth/admin/ChoosingPricingPlan";

export default function AppRoutes() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Routes>
        {/* NESTED EMPLOYEE AUTH ROUTES */}
        <Route path="/auth/employee">
          <Route path="login" element={<EmployeeLogin />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="verification" element={<VerificationCode />} />
          <Route path="set-password" element={<SetPassword />} />
        </Route>

        {/* NESTEd Admin AUTH ROUTES */}
        <Route path="/auth/admin">
          <Route path="signup" element={<AdminSignup />} />
          <Route path="account-setup" element={<AdminSetupAccount/>} />
          <Route path="choose-plan" element={<ChoosingPricingPlan/>} />
          <Route path="login" element={<AdminLogin />} />
          <Route path="forgot-password" element={<AdminForgotPassword />} />
          <Route path="verification" element={<AdminVerificationCode />} />
          <Route path="set-password" element={<AdminSetPassword />} />
        </Route>

        {/* NESTED Super Admin AUTH ROUTES */}
          <Route path="/auth/super-admin/login" element={<SuperAdminLogin />} />
          <Route path="/auth/super-admin/forgot-password" element={<SuperAdminForgotPassword />} />
          <Route path="/auth/super-admin/verification" element={<SuperAdminVerficationCode />} />
          <Route path="/auth/super-admin/set-password" element={<SuperAdminResetPassword />} />
        <Route path="/super-admin" element={<SuperAdminLayout />}>
          <Route index element={<SuperAdminDashboard />} />
          <Route path="data-analytics" element={<DataAnalytics />} />
          <Route path="data-analytics/company/:id" element={<CompanyData />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
