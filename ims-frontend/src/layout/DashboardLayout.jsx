import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import "../styles/DashboardLayout.css";

export default function DashboardLayout() {
  return (
    <div className="dashboard-layout">
      <Sidebar />

      <div className="dashboard-main">
        <Topbar />
        <main className="dashboard-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
