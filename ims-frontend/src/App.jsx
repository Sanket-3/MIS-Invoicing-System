import { Routes, Route, Navigate } from "react-router-dom";

import AuthLayout from "./layout/AuthLayout";
import DashboardLayout from "./layout/DashboardLayout";

import Login from "./pages/login";
import Register from "./pages/Register";
import DashboardHome from "./pages/DashboardHome";
import Groups from "./pages/Groups";
import Chains from "./pages/Chains";
import Brands from "./pages/Brands.jsx";

export default function App() {
  return (
    <Routes>

      {/* Default */}
      <Route path="/" element={<Navigate to="/login" />} />

      {/* AUTH */}
      <Route
        path="/login"
        element={
          <AuthLayout
            title="Welcome Back"
            subtitle="Sign in to continue"
          >
            <Login />
          </AuthLayout>
        }
      />

      <Route
        path="/register"
        element={
          <AuthLayout
            title="Create Account"
            subtitle="Start managing invoices and business data"
          >
            <Register />
          </AuthLayout>
        }
      />

      {/* DASHBOARD */}
      <Route path="/dashboard" element={<DashboardLayout />}>

        {/* Dashboard Home */}
        <Route index element={<DashboardHome />} />

        {/* Groups Module */}
        <Route path="groups" element={<Groups />} />

        {/* Chains Module */}
        <Route path="chains" element={<Chains />} />

        {/* Brands Module */}
        <Route path="brands" element={<Brands />} />

      </Route>

    </Routes>
  );
}