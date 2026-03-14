import { NavLink } from "react-router-dom";
import "../styles/Sidebar.css";

export default function Sidebar() {

  return (

    <aside className="sidebar">

      {/* LOGO */}

      <div className="logo">

        <div className="logo-icon">
          <span className="logo-i">I</span>
        </div>

        <div className="logo-text">
          <span className="brand">IMS</span>
          <small>Management & Invoicing</small>
        </div>

      </div>

      {/* MENU */}

      <nav className="menu">

        <NavLink to="/dashboard">
          📊 Dashboard
        </NavLink>

        <NavLink to="/dashboard/groups">
          👥 Groups
        </NavLink>

        <NavLink to="/dashboard/chains">
          🏢 Chains
        </NavLink>

        <NavLink to="/dashboard/brands">
          🏷 Brands
        </NavLink>

        <NavLink to="/dashboard/zones">
          📍 Zones
        </NavLink>

        <NavLink to="/dashboard/estimates">
          📑 Estimates
        </NavLink>

        <NavLink to="/dashboard/invoices">
          🧾 Invoices
        </NavLink>

        {/* Future Modules */}

        <span className="menu-disabled">
          👤 Customers
        </span>

        <span className="menu-disabled">
          📈 Reports
        </span>

        <span className="menu-disabled">
          ⚙ Settings
        </span>

      </nav>

    </aside>
  );
}