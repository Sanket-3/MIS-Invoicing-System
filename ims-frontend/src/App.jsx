import { Routes, Route, Navigate } from "react-router-dom";

import AuthLayout from "./layout/AuthLayout";
import DashboardLayout from "./layout/DashboardLayout";

import Login from "./pages/login";
import Register from "./pages/Register";
import DashboardHome from "./pages/DashboardHome";

import Groups from "./pages/Groups";
import Chains from "./pages/Chains";
import Brands from "./pages/Brands";
import Zones from "./pages/Zones";

import Estimates from "./pages/Estimates";
import Invoices from "./pages/Invoices";
import CreateInvoice from "./pages/CreateInvoice";

export default function App() {

  return (
    <Routes>

      {/* Default Route */}
      <Route path="/" element={<Navigate to="/login" />} />

      {/* AUTH ROUTES */}

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

        {/* Core Modules */}
        <Route path="groups" element={<Groups />} />
        <Route path="chains" element={<Chains />} />
        <Route path="brands" element={<Brands />} />
        <Route path="zones" element={<Zones />} />

        {/* Estimate Module */}
        <Route path="estimates" element={<Estimates />} />

        {/* Invoice Modules */}
        <Route path="invoices" element={<Invoices />} />
        <Route path="create-invoice/:id" element={<CreateInvoice />} />

      </Route>

    </Routes>
  );
}