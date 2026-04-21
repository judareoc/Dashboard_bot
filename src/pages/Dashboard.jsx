import ChartLine from "../components/ChartLine"
import ChartBar from "../components/ChartBar"
import ChartDoughnut from "../components/ChartDoughnut"

function Card({ title, value }) {
  return (
    <div className="card-pro">
      <p className="title">{title}</p>
      <h2>{value}</h2>
    </div>
  )
}

function Dashboard() {
  return (
    <div>
      <h2>Panel de Control</h2>

      {/* KPIs */}
      <div className="grid" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
        <Card title="Usuarios" value="120" />
        <Card title="Chats" value="340" />
        <Card title="Pendientes" value="25" />
        <Card title="Atendidos" value="315" />
      </div>

      {/* GRÁFICAS FILA 1 */}
      <div className="grid" style={{ gridTemplateColumns: "2fr 1fr", marginTop: "20px" }}>
        <div className="card-pro">
          <h4>Chats por día</h4>
          <ChartLine dataValues={[12, 19, 8, 15, 22, 30, 18]} title="Chats" />
        </div>

        <div className="card-pro">
          <h4>Estado de tickets</h4>
          <ChartDoughnut />
        </div>
      </div>

      {/* GRÁFICAS FILA 2 */}
      <div className="grid" style={{ gridTemplateColumns: "1fr", marginTop: "20px" }}>
        <div className="card-pro">
          <h4>Usuarios por mes</h4>
          <ChartBar />
        </div>
      </div>
    </div>
  )
}

export default Dashboard