import { useLocation, useParams } from "react-router-dom"
import { useState } from "react"

export default function ClienteDetalle() {
  const { numero } = useParams()
  const location = useLocation()

  // 👇 Cliente recibido (o vacío si no viene nada)
  const clienteInicial = location.state || {}

  console.log("📥 Cliente recibido:", clienteInicial)

  // 👇 NORMALIZAMOS nombres (porque tu backend mezcla mayúsculas)
  const data = {
    numero: clienteInicial.numero || "",
    nombre: clienteInicial.nombre || clienteInicial.Nombre || "",
    cedula: clienteInicial.cedula || clienteInicial.Cedula || "",
    universidad: clienteInicial.universidad || clienteInicial.Universidad || "",
    celular: clienteInicial.celular || clienteInicial.numero || "",
  }

  const [form, setForm] = useState({
    numero: numero || data.numero,
    nombre: data.nombre,
    cedula: data.cedula,
    celular: data.celular,
    universidad: data.universidad,
    semestre: "",
    carrera: "",
    estado: "",
    costo: "",
    fecha: "",
    vencimiento: "",
    codeudor_nombre: "",
    codeudor_cedula: "",
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("📦 Datos del cliente:", form)
    alert("Datos listos")
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Gestión de Cliente</h2>

        <form style={styles.form} onSubmit={handleSubmit}>
          
          <input style={styles.input} value={form.numero} disabled />

          <input
            style={styles.input}
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            placeholder="Nombre"
          />

          <input
            style={styles.input}
            name="cedula"
            value={form.cedula}
            onChange={handleChange}
            placeholder="Cédula"
          />

          <input
            style={styles.input}
            name="celular"
            value={form.celular}
            onChange={handleChange}
            placeholder="Celular"
          />

          <input
            style={styles.input}
            name="universidad"
            value={form.universidad}
            onChange={handleChange}
            placeholder="Universidad"
          />

          <input style={styles.input} name="semestre" onChange={handleChange} placeholder="Semestre" />
          <input style={styles.input} name="carrera" onChange={handleChange} placeholder="Carrera" />

          <select style={styles.input} name="estado" onChange={handleChange}>
            <option value="">Estado</option>
            <option value="pendiente">Pendiente</option>
            <option value="aprobado">Aprobado</option>
            <option value="rechazado">Rechazado</option>
          </select>

          <input style={styles.input} name="costo" placeholder="Costo matrícula" onChange={handleChange} />

          <div style={styles.field}>
            <label style={styles.label}>📅 Fecha de registro</label>
            <input
                style={styles.input}
                type="date"
                name="fecha"
                value={form.fecha}
                onChange={handleChange}
            />
            </div>

            <div style={styles.field}>
            <label style={styles.label}>⏰ Fecha de vencimiento</label>
            <input
                style={styles.input}
                type="date"
                name="vencimiento"
                value={form.vencimiento}
                onChange={handleChange}
            />
            </div>

          <input
            style={{ ...styles.input, ...styles.full }}
            name="codeudor_nombre"
            placeholder="Nombre codeudor"
            onChange={handleChange}
          />

          <input
            style={{ ...styles.input, ...styles.full }}
            name="codeudor_cedula"
            placeholder="Cédula codeudor"
            onChange={handleChange}
          />

          <button type="submit" style={{ ...styles.button, ...styles.full }}>
            💾 Guardar
          </button>
        </form>
      </div>
    </div>
  )
}

const styles = {
  container: {
    padding: "30px",
    maxWidth: "900px",
    margin: "0 auto",
  },
  card: {
    background: "#fff",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
  title: {
    marginBottom: "20px",
    fontSize: "22px",
    fontWeight: "bold",
  },
  form: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "15px",
  },
  input: {
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },
  full: {
    gridColumn: "1 / -1",
  },
  button: {
    marginTop: "20px",
    padding: "12px",
    background: "#4f46e5",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
  field: {
  display: "flex",
  flexDirection: "column",
  gap: "4px"
},

label: {
  fontSize: "12px",
  color: "#6b7280",
  fontWeight: "500"
},
}