function Embudo() {
  const pasos = [
    { nombre: "Leads", valor: 100 },
    { nombre: "Contactados", valor: 70 },
    { nombre: "Interesados", valor: 40 },
    { nombre: "Ventas", valor: 20 },
  ]

  return (
    <div>
      <h2>Embudo de Ventas</h2>

      <div className="card-pro">
        {pasos.map((p, i) => (
          <div key={i} style={{
            background: "#6366f1",
            color: "white",
            margin: "10px 0",
            padding: "10px",
            width: `${p.valor}%`
          }}>
            {p.nombre} ({p.valor}%)
          </div>
        ))}
      </div>
    </div>
  )
}

export default Embudo