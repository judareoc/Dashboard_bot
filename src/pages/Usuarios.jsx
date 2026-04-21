import { useMemo, useState } from "react"
import { useNavigate } from "react-router-dom"

function Usuarios() {
  const navigate = useNavigate()

  // 👉 Simula datos que vienen del bot / API
  const [data] = useState([
    { id: 1, cedula: "123", nombre: "Juan", celular: "3001234567", universidad: "U. Nacional", valor: 5000000, estado: "pendiente" },
    { id: 2, cedula: "456", nombre: "Ana", celular: "3019876543", universidad: "U. Andes", valor: 3000000, estado: "aprobado" },
    { id: 3, cedula: "789", nombre: "Luis", celular: "3025550000", universidad: "U. Valle", valor: 2000000, estado: "rechazado" },
  ])

  // 👉 estados de UI
  const [search, setSearch] = useState("")
  const [estado, setEstado] = useState("todos")

  // 👉 filtro combinado (rápido y eficiente)
  const filtrados = useMemo(() => {
    const s = search.toLowerCase()

    return data.filter((c) => {
      const matchSearch =
        c.nombre.toLowerCase().includes(s) ||
        c.cedula.includes(s) ||
        c.celular.includes(s)

      const matchEstado =
        estado === "todos" ? true : c.estado === estado

      return matchSearch && matchEstado
    })
  }, [data, search, estado])

  return (
    <div>
      <h2>Clientes</h2>

      {/* 🔎 BUSCADOR + FILTRO */}
      <div className="card-pro" style={{ marginBottom: 20 }}>
        <div className="toolbar">
          <input
            type="text"
            placeholder="Buscar por nombre, cédula o celular..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            value={estado}
            onChange={(e) => setEstado(e.target.value)}
          >
            <option value="todos">Todos</option>
            <option value="pendiente">Pendiente</option>
            <option value="aprobado">Aprobado</option>
            <option value="rechazado">Rechazado</option>
          </select>
        </div>
      </div>

      {/* 📋 TABLA */}
      <div className="card-pro">
        <table className="tabla-crm">
          <thead>
            <tr>
              <th>ID</th>
              <th>CÉDULA</th>
              <th>NOMBRE</th>
              <th>CELULAR</th>
              <th>UNIVERSIDAD</th>
              <th>VALOR</th>
              <th>ESTADO</th>
              <th>ACCIÓN</th>
            </tr>
          </thead>

          <tbody>
            {filtrados.map((c) => (
              <tr key={c.id}>
                <td>{c.id}</td>
                <td>{c.cedula}</td>
                <td>{c.nombre}</td>
                <td>{c.celular}</td>
                <td>{c.universidad}</td>
                <td>${c.valor.toLocaleString()}</td>

                <td>
                  <span className={`badge ${c.estado}`}>
                    {c.estado}
                  </span>
                </td>

                <td>
                  <button onClick={() => navigate(`/cliente/${c.id}`)}>
                    Gestionar
                  </button>
                </td>
              </tr>
            ))}

            {filtrados.length === 0 && (
              <tr>
                <td colSpan="8" style={{ textAlign: "center", padding: 20 }}>
                  No hay resultados
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Usuarios