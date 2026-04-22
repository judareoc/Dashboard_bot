const API = "http://localhost:8080"

export const getClientes = async () => {
  const res = await fetch(`${API}/cliente`)
  return res.json()
}


export const getClienteByNumero = async (numero) => {
  const res = await fetch(`http://localhost:8080/cliente/${numero}`)
  return res.json()
}

export const updateCliente = async (numero, data) => {
  const res = await fetch(`http://localhost:8080/cliente/${numero}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })

  return res.json()
}