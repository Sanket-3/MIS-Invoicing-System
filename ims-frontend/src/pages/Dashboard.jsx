import "../styles/Dashboard.css";

const Dashboard = () => {
  const stats = [
    { label: "Total Invoices", value: 128 },
    { label: "Total Revenue", value: "₹4,52,300" },
    { label: "Pending Payments", value: "₹68,400" },
    { label: "Active Customers", value: 42 },
  ];

  return (
    <div className="dashboard">
      {/* Page Header */}
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <span className="role-badge admin">Admin</span>
      </div>

      {/* KPI Cards */}
      <div className="kpi-grid">
        {stats.map((item, index) => (
          <div className="kpi-card" key={index}>
            <div className="kpi-accent"></div>
            <h3>{item.value}</h3>
            <p>{item.label}</p>
          </div>
        ))}
      </div>

      {/* Content Grid */}
      <div className="dashboard-grid">
        {/* Recent Invoices */}
        <div className="card">
          <h2>Recent Invoices</h2>

          <div className="empty-state">
            No invoices created yet.
            <br />
            <span>Start by creating your first invoice.</span>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="card">
          <h2>Quick Actions</h2>

          <div className="quick-actions">
            <button>Create Invoice</button>
            <button>Add Customer</button>
            <button>Generate Report</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
