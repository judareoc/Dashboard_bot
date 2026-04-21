import ChartLine from "../components/ChartLine"

function Metricas() {
  return (
    <div>
      <h2>Métricas</h2>

      <div className="grid" style={{ gridTemplateColumns: "repeat(3,1fr)" }}>
        <div className="card-pro">
          <h4>Conversión</h4>
          <h2>32%</h2>
        </div>

        <div className="card-pro">
          <h4>Tiempo respuesta</h4>
          <h2>2.4 min</h2>
        </div>

        <div className="card-pro">
          <h4>Leads</h4>
          <h2>540</h2>
        </div>
      </div>

      <div className="card-pro" style={{ marginTop: "20px" }}>
        <ChartLine dataValues={[5, 10, 8, 15, 20, 18, 25]} title="Conversión" />
      </div>
    </div>
  )
}

export default Metricas