/** Central API boundary. Configure VITE_API_BASE when a backend is available. */
const API_BASE = import.meta.env.VITE_API_BASE ?? '';
export async function apiRequest<T>(path: string, init: RequestInit = {}): Promise<T> {
  if (!API_BASE) throw new Error('API is not configured. Set VITE_API_BASE before enabling backend features.');
  const response = await fetch(`${API_BASE}${path}`, { ...init, headers: { 'Content-Type': 'application/json', ...init.headers } });
  if (!response.ok) throw new Error(`Request failed (${response.status}).`);
  return response.json() as Promise<T>;
}
