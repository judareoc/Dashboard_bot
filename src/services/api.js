const API = "http://localhost:8080"

export const getUsuarios = async () => {
  const res = await fetch(`${API}/usuarios`)
  return res.json()
}