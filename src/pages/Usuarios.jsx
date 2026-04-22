import { useEffect, useState } from "react"
import { getClientes } from "../services/api/cliente"
import { useNavigate } from "react-router-dom"

export default function Usuarios() {
  const [clientes, setClientes] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    getClientes().then(setClientes)
  }, [])

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>👥 Clientes</h2>

      <div style={styles.table}>
        {/* HEADER */}
        <div style={styles.header}>
          <span>Número</span>
          <span>Nombre</span>
          <span>Cédula</span>
          <span>Universidad</span>
          <span>Acción</span>
        </div>

        {/* FILAS */}
        {clientes.map((c, i) => (
          <div key={i} style={styles.row}>
            <span>{c.numero}</span>
            <span>{c.Nombre || "—"}</span>
            <span>{c.Cedula || "—"}</span>
            <span>{c.Universidad || "—"}</span>

            <button
              style={styles.btn}
              onClick={() => navigate(`/cliente/${c.numero}`, { state: c })}
            >
              Gestión
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}


const styles = {
  container: {
    padding: "30px",
    background: "#f4f6f9",
    minHeight: "100vh"
  },

  title: {
    marginBottom: "20px"
  },

  table: {
    background: "#fff",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 4px 10px rgba(0,0,0,0.05)"
  },

  header: {
    display: "grid",
    gridTemplateColumns: "2fr 2fr 2fr 2fr 1fr",
    background: "#111827",
    color: "#fff",
    padding: "15px",
    fontWeight: "bold"
  },

  row: {
    display: "grid",
    gridTemplateColumns: "2fr 2fr 2fr 2fr 1fr",
    padding: "15px",
    borderBottom: "1px solid #eee",
    alignItems: "center"
  },

  btn: {
    padding: "6px 10px",
    border: "none",
    borderRadius: "6px",
    background: "#6366f1",
    color: "#fff",
    cursor: "pointer"
  }
}