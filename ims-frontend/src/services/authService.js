const API_BASE = "http://localhost:8080/api/auth";

export async function register(user) {
  const res = await fetch(`${API_BASE}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });

  const text = await res.text();
  if (!res.ok) throw new Error(text);
  return text;
}

export async function login(email, password) {
  const res = await fetch(`${API_BASE}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    const msg = await res.text();
    throw new Error(msg);
  }
  return res.json();
}

export async function getCurrentUser() {
  const res = await fetch(`${API_BASE}/me`, {
    credentials: "include",
  });
  if (!res.ok) return null;
  return res.json();
}

export async function logout() {
  await fetch(`${API_BASE}/logout`, {
    method: "POST",
    credentials: "include",
  });
}
