import { NavLink } from "react-router-dom";
import "../styles/Sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="logo">
        <div className="logo-icon">
          <span className="logo-i">I</span>
        </div>

        <div className="logo-text">
          <span className="brand">IMS</span>
          <small>Management & Invoicing</small>
        </div>
      </div>

      <nav className="menu">

        <NavLink to="/dashboard">
          📊 Dashboard
        </NavLink>

        <NavLink to="/dashboard/groups">
          👥 Groups
        </NavLink>

        {/* NEW MODULE */}
        <NavLink to="/dashboard/chains">
          🏢 Chains
        </NavLink>

        {/* Future modules */}
        <span className="menu-disabled">🧾 Invoices</span>
        <span className="menu-disabled">👤 Customers</span>
        <span className="menu-disabled">📈 Reports</span>
        <span className="menu-disabled">⚙ Settings</span>

      </nav>

    </aside>
  );
}