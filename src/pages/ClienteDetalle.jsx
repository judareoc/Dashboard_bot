import { useParams } from "react-router-dom"
import { useState } from "react"

function ClienteDetalle() {
  const { id } = useParams()

  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    universidad: "",
    carrera: "",
    estado: ""
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const guardar = () => {
    console.log("Enviar al backend:", id, form)
  }

  return (
    <div>
      <h2>Gestionar Cliente #{id}</h2>

      <div className="card-pro">

        <input name="nombre" placeholder="Nombre" onChange={handleChange} />
        <input name="telefono" placeholder="Teléfono" onChange={handleChange} />
        <input name="universidad" placeholder="Universidad" onChange={handleChange} />
        <input name="carrera" placeholder="Carrera" onChange={handleChange} />

        <select name="estado" onChange={handleChange}>
          <option value="">Estado</option>
          <option value="pendiente">Pendiente</option>
          <option value="aprobado">Aprobado</option>
        </select>

        <br /><br />

        <button onClick={guardar}>
          Guardar
        </button>

      </div>
    </div>
  )
}

export default ClienteDetalle