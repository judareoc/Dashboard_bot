   function Estados() {
  const data = [
    { id: 1, numero: "3001234567", estado: "pendiente" },
    { id: 2, numero: "3019876543", estado: "atendido" },
  ]

  return (
    <div>
      <h2>Estados</h2>

      <div className="card-pro">
        <table style={{ width: "100%" }}>
          <thead>
            <tr>
              <th>Número</th>
              <th>Estado</th>
            </tr>
          </thead>

          <tbody>
            {data.map(e => (
              <tr key={e.id}>
                <td>{e.numero}</td>
                <td>{e.estado}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Estados