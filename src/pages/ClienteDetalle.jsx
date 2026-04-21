import { useState } from "react"
import { crearCliente } from "../services/api"

function ClienteDetalle() {

  const [form, setForm] = useState({
    nombre: "",
    cedula: "",
    numero: ""
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const guardar = async () => {
    await crearCliente(form)
    alert("Cliente guardado")
  }

  return (
    <div>
      <h2>Crear Cliente</h2>

      <input name="nombre" placeholder="Nombre" onChange={handleChange} />
      <input name="cedula" placeholder="Cédula" onChange={handleChange} />
      <input name="numero" placeholder="Número" onChange={handleChange} />

      <button onClick={guardar}>Guardar</button>
    </div>
  )
}

export default ClienteDetalle