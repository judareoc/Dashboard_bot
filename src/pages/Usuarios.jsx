import { useNavigate } from "react-router-dom"

function Usuarios() {
  const navigate = useNavigate()

  const data = [
    { id: 1, nombre: "Juan", valor: 5000000 },
    { id: 2, nombre: "Ana", valor: 3000000 },
  ]

  return (
    <div>
      <h2>Clientes</h2>

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
                <th>ACCIÓN</th>
            </tr>
            </thead>

            <tbody>
            {data.map(c => (
                <tr key={c.id}>
                <td>{c.id}</td>
                <td>{c.cedula}</td>
                <td>{c.nombre}</td>
                <td>{c.celular}</td>
                <td>{c.universidad || "-"}</td>
                <td>${c.valor}</td>

                <td>
                    <button onClick={() => navigate(`/cliente/${c.id}`)}>
                    Gestionar
                    </button>
                </td>
                </tr>
            ))}
            </tbody>
        </table>
      </div>
    </div>
  )
}

export default Usuarios