import { useEffect, useState } from "react"

export default function Estados() {
  const [clientes, setClientes] = useState([])

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080/ws")

    ws.onopen = () => {
      console.log("🟢 Conectado al WS")
    }

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data)

      setClientes((prev) => {
        const existe = prev.find(c => c.numero === data.numero)

        if (existe) {
          return prev.map(c =>
            c.numero === data.numero ? { ...c, Estado: data.Estado } : c
          )
        }

        return [...prev, data]
      })
    }

    ws.onerror = (err) => console.error("❌ WS error:", err)
    ws.onclose = () => console.log("🔴 WS cerrado")

    return () => ws.close()
  }, [])

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>📡 Estados en tiempo real</h2>

      <div style={styles.table}>
        {/* HEADER */}
        <div style={styles.header}>
          <span>Número</span>
          <span>Nombre</span>
          <span>Cédula</span>
          <span>Universidad</span>
          <span>Estado</span>
        </div>

        {/* FILAS */}
        {clientes.map((c, i) => (
          <div key={i} style={styles.row}>
            <span>{c.numero}</span>
            <span>{c.Nombre || "—"}</span>
            <span>{c.Cedula || "—"}</span>
            <span>{c.Universidad || "—"}</span>

            <span style={{
              fontWeight: "bold",
              color:
                c.Estado === "aprobado" ? "#16a34a" :
                c.Estado === "rechazado" ? "#dc2626" :
                "#f59e0b"
            }}>
              {c.Estado || "pendiente"}
            </span>
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
  }
}