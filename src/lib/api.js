const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:5000/api";

export async function fetchAPI(endpoint, options = {}) {
  const headers = { "Content-Type": "application/json", ...(options.headers || {}) };
  // Add admin token if present and method is POST
  if (options.method === 'POST') {
    const token = localStorage.getItem('admin_token');
    if (token) headers['x-admin-token'] = token;
  }
  const res = await fetch(`${API_BASE}${endpoint}`, {
    ...options,
    headers,
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}
