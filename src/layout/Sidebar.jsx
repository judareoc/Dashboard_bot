import { Link } from "react-router-dom"

function Sidebar() {
  return (
    <div style={{
      width: "220px",
      background: "#1e293b",
      color: "white",
      padding: "20px"
    }}>
      <h2>Mi CRM</h2>

      <nav style={{ marginTop: "20px" }}>
        <p><Link to="/" style={{ color: "white" }}>Dashboard</Link></p>
        <p><Link to="/usuarios" style={{ color: "white" }}>Clientes</Link></p>
        <p><Link to="/estados" style={{ color: "white" }}>Estados</Link></p>
        <p><Link to="/metricas" style={{ color: "white" }}>Métricas</Link></p>
        <p><Link to="/embudo" style={{ color: "white" }}>Embudo</Link></p>
        <p><Link to="/reportes" style={{ color: "white" }}>Reportes</Link></p>
      </nav>
    </div>
  )
}

export default Sidebar