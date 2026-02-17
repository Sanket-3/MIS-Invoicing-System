import { useNavigate } from "react-router-dom";
import "../styles/DashboardLayout.css";

export default function Topbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <header className="topbar">
      <h3>Management Information System</h3>

      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
    </header>
  );
}
