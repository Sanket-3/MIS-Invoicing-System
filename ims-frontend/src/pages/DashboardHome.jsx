import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";

export default function DashboardHome() {
  const navigate = useNavigate();

  return (
    <>
      <h1>Dashboard</h1>
      <p className="subtitle">
        Overview of your MIS & Invoicing System
      </p>

      {/* Quick Actions */}
      <div className="quick-actions">
        <button onClick={() => navigate("/dashboard/groups")}>
          + Create Group
        </button>
        <button disabled>Create Invoice</button>
        <button onClick={() => navigate("/dashboard/groups")}>
          View Groups
        </button>
      </div>

      {/* Stats */}
      <div className="stats-grid">
        <div className="stat-card">
          <h4>Total Groups</h4>
          <span>5</span>
        </div>
        <div className="stat-card">
          <h4>Customers</h4>
          <span>120</span>
        </div>
        <div className="stat-card">
          <h4>Invoices</h4>
          <span>56</span>
        </div>
        <div className="stat-card">
          <h4>Total Revenue</h4>
          <span>₹1,25,000</span>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="activity-card">
        <h3>Recent Activity</h3>
        <ul>
          <li>Group <b>ABC Pvt Ltd</b> created</li>
          <li>Invoice <b>#INV-1023</b> generated</li>
          <li>Payment received <b>₹25,000</b></li>
        </ul>
      </div>
    </>
  );
}
