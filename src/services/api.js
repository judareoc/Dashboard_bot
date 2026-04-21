const API_URL = "http://localhost:8080"

// 👉 GET clientes
export const getClientes = async () => {
  const res = await fetch(`${API_URL}/clientes`)
  return await res.json()
}

// 👉 POST crear cliente
export const crearCliente = async (data) => {
  const res = await fetch(`${API_URL}/crear-cliente`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })

  return await res.json()
}