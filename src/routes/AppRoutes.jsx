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
import AdminLayout from "../pages/auth/admin/pages/AdminLayout";
import AdminDashboard from "../pages/auth/admin/pages/dashboard/AdminDashboard";
import AdminCompanyData from "../pages/auth/admin/pages/dataAnalytics/CompanyData";
import UserManagement from "../pages/auth/admin/pages/usermanagement/UserManagement";
import UserProfile from "../pages/auth/admin/pages/usermanagement/UserProfile";
import UserCourseView from "../pages/auth/admin/pages/usermanagement/UserCourseView";
import ManageDepartments from "../pages/auth/admin/pages/managedepartments/ManageDepartments";
import ChildDepartment from "../pages/auth/admin/pages/managedepartments/ChildDepartment";
import DepartmentUsers from "../pages/auth/admin/pages/managedepartments/DepartmentUsers";
import AdminAssestments from "../pages/auth/admin/pages/assestments/AdminAssestments";
import AssesstmentDetails from "../pages/auth/admin/pages/assestments/AssesstmentDetails";
import CourseComponent from "../pages/auth/admin/pages/courses/CoursesComponent";
import CourseDetail from "../pages/auth/admin/pages/courses/CourseDetail";
import ContactUs from "../pages/auth/admin/pages/contactus/ContactUs";
import SettingsLayout from "../pages/auth/admin/pages/settings/MainSetting";
import SuperAdminUserManagement from "../pages/auth/superAdmin/pages/user-management/SuperAdminUserManagement";
import CompanyEmployees from "../pages/auth/superAdmin/pages/user-management/CompanyEmployees";
import AddNewCompany from "../pages/auth/superAdmin/pages/user-management/AddNewCompany";
import ManagePayment from "../pages/auth/superAdmin/pages/user-management/ManagePayment";
import VirtualCourse from "../pages/auth/superAdmin/pages/virtualcourse/VirtualCourse";
import SubscrptionAndBiling from "../pages/auth/superAdmin/pages/subscriptionandbilling/SubscrptionAndBiling";
import SuperAdminReports from "../pages/auth/superAdmin/pages/reports/SuperAdminReports";
import DepartmentHeadLayout from "../pages/auth/departmenthead/pages/departmentHeadLayout";
import DepartmentDashboard from "../pages/auth/departmenthead/pages/dashboard/DepartmentDashboard";
import DepartmentHeadLogin from "../pages/auth/departmenthead/DepartmentHeadLogin";
import DepartmentHeadForgotPassword from "../pages/auth/departmenthead/DepartmentHeadForgotPassword";
import DepartmentHeadVerificationCode from "../pages/auth/departmenthead/DepartmentHeadVerificationCode";
import DepartmentHeadSetPassword from "../pages/auth/departmenthead/DepartmentHeadSetPassword";
import DepartmentDataAnalytics from "../pages/auth/departmenthead/pages/dataanalytics/DepartmentDataAnalytics";
import AssesstmentAllocation from "../pages/auth/departmenthead/pages/assessments/AssesstmentAllocation";
import CourseRecomendation from "../pages/auth/departmenthead/pages/courses/CourseRecomendation";
import CourseRecomendationDetail from "../pages/auth/departmenthead/pages/courses/CourseRecomendationDetail";
import DepartmentHeadManageDepartment from "../pages/auth/departmenthead/pages/managedepartment/DepartmentHeadManageDepartment";
import DepartmentHeadUsers from "../pages/auth/departmenthead/pages/managedepartment/DepartmentHeadUsers";
import EmployeeLayout from "../pages/auth/employee/pages/EmployeeLayout";
import EmployeeDashboard from "../pages/auth/employee/pages/dashboard/EmployeeDashboard";
import EmployeeLearning from "../pages/auth/employee/pages/learning/EmployeeLearning";
import AssesstmentLayout from "../pages/auth/employee/pages/assesstment/AssesstmentLayout";
import EmployeeCourseDetail from "../pages/auth/employee/pages/learning/EmployeeCourseDetail";
import Recommendations from "../pages/auth/employee/pages/recommendation/Recommendation";
import RecommendationDetail from "../pages/auth/employee/pages/recommendation/RecommendationDetail";
import EmployeeReports from "../pages/auth/employee/pages/reports/EmployeeReports";
import EmployeeReportDetail from "../pages/auth/employee/pages/reports/EmployeeReportDetail";
import CommunityDashboard from "../pages/auth/employee/pages/community/AllCommunities";
import CommunityChat from "../pages/auth/employee/pages/community/CommunityChats";
import AIInterface from "../pages/auth/employee/pages/aicoach/AiCoach";
import SuperAdminCourses from "../pages/auth/superAdmin/pages/courses/SuperAdminCourses";
import SuperAdminAssessment from "../pages/auth/superAdmin/pages/assesstments/SuperAdminAssessment";

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
      <Route path="/employee" element={<EmployeeLayout />}>
          <Route index element={<EmployeeDashboard/>} />
          <Route path="learning" element={<EmployeeLearning />} />
          <Route path="learning/course/:courseid" element={<EmployeeCourseDetail />} />
          <Route path="recommendation" element={<Recommendations/>} />
          <Route path="recommendation/course/:courseid" element={<RecommendationDetail/>} />
          <Route path="reports" element={<EmployeeReports/>} />
          <Route path="reports/detail" element={<EmployeeReportDetail/>} />
          <Route path="community" element={<CommunityDashboard/>} />
          <Route path="community/chats" element={<CommunityChat/>} />
          <Route path="settings" element={<SettingsLayout/>} />
          <Route path="ai-coach" element={<AIInterface/>} />
        </Route>
          <Route path="/employee/assestment" element={<AssesstmentLayout />} />
          <Route path="/employee/contact" element={<ContactUs/>} />




        <Route path="/auth/department-head">
          <Route path="login" element={<DepartmentHeadLogin />} />
          <Route path="forgot-password" element={<DepartmentHeadForgotPassword />} />
          <Route path="verification" element={<DepartmentHeadVerificationCode />} />
          <Route path="set-password" element={<DepartmentHeadSetPassword />} />
        </Route>
        <Route path="/department-head" element = {<DepartmentHeadLayout/>}>
          <Route index element={<DepartmentDashboard />} />
          <Route path="data-analytics" element={<DepartmentDataAnalytics />} />
          <Route path="assessments" element={<AssesstmentAllocation/>} />
          <Route path="manage-departments" element={<DepartmentHeadManageDepartment/>} />
          <Route path="manage-departments/:name" element={<DepartmentHeadUsers/>} />
          <Route path="courses" element={<CourseRecomendation/>} />
          <Route path="courses/details/:id" element={<CourseRecomendationDetail/>} />
          <Route path="settings" element={<SettingsLayout/>} />

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
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="data-analytics" element={<AdminCompanyData />} />
          <Route path="user-management" element={<UserManagement />} />
          <Route path="user-management/user/:id" element={<UserProfile />} />
          <Route path="user-management/user/:id/course/:id" element={<UserCourseView />} />
          <Route path="manage-departments" element={<ManageDepartments />} />
          <Route path="manage-departments/:name" element={<ChildDepartment/>} />
          <Route path="manage-departments/:name/:name" element={<DepartmentUsers/>} />
          <Route path="assessments" element={<AdminAssestments/>} />
          <Route path="assessments/details/:assessmentid" element={<AssesstmentDetails/>} />
          <Route path="courses" element={<CourseComponent/>} />
          <Route path="courses/details/:id" element={<CourseDetail/>} />
          <Route path="settings" element={<SettingsLayout/>} />
        </Route>
          <Route path="admin/contact" element={<ContactUs/>} />

        {/* NESTED Super Admin AUTH ROUTES */}
          <Route path="/auth/super-admin/login" element={<SuperAdminLogin />} />
          <Route path="/auth/super-admin/forgot-password" element={<SuperAdminForgotPassword />} />
          <Route path="/auth/super-admin/verification" element={<SuperAdminVerficationCode />} />
          <Route path="/auth/super-admin/set-password" element={<SuperAdminResetPassword />} />
        <Route path="/super-admin" element={<SuperAdminLayout />}>
          <Route index element={<SuperAdminDashboard />} />
          <Route path="data-analytics" element={<DataAnalytics />} />
          <Route path="data-analytics/company/:companyid" element={<CompanyData />} />
          <Route path="data-analytics/company/:companyid/course/:courseid" element={<UserCourseView />} />
          <Route path="courses" element={<SuperAdminCourses />} />
          <Route path="assessments" element={<SuperAdminAssessment />} />
          <Route path="user-management" element={<SuperAdminUserManagement />} />
          <Route path="user-management/employees/company/:companyid" element={<CompanyEmployees />} />
          <Route path="user-management/add-company" element={< AddNewCompany/>} />
          <Route path="user-management/manage-payment/:companyid" element={< ManagePayment/>} />
          <Route path="virtual-course" element={< VirtualCourse/>} />
          <Route path="subscription-biling" element={<SubscrptionAndBiling/>} />
          <Route path="reports" element={<SuperAdminReports/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
