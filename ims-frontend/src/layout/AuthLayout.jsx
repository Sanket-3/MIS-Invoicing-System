import "../styles/auth.css";

export default function AuthLayout({ title, subtitle, children }) {
  return (
    <div className="auth-root">
      <div className="auth-card animate-fade">
        <h1>{title}</h1>
        <p className="subtitle">{subtitle}</p>
        {children}
      </div>
    </div>
  );
}
