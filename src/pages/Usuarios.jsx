import { useEffect, useState } from "react"
import { getClientes } from "../services/api"

function Usuarios() {
  const [clientes, setClientes] = useState([])

  useEffect(() => {
    getClientes().then(data => setClientes(data))
  }, [])

  return (
    <div>
      <h2>Clientes</h2>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Cédula</th>
            <th>Celular</th>
            <th>Valor</th>
          </tr>
        </thead>

        <tbody>
          {clientes.map(c => (
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>{c.nombre}</td>
              <td>{c.cedula}</td>
              <td>{c.numero}</td>
              <td>{c.valor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Usuarios