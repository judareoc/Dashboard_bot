function Reportes() {

  const exportarCSV = () => {
    const data = [
      ["Nombre", "Teléfono"],
      ["Juan", "3001234567"],
      ["Ana", "3019876543"],
    ]

    const csv = data.map(row => row.join(",")).join("\n")

    const blob = new Blob([csv], { type: "text/csv" })
    const url = window.URL.createObjectURL(blob)

    const a = document.createElement("a")
    a.href = url
    a.download = "reporte.csv"
    a.click()
  }

  return (
    <div>
      <h2>Reportes</h2>

      <div className="card-pro">
        <button onClick={exportarCSV}>
          Exportar a CSV
        </button>
      </div>
    </div>
  )
}

export default Reportes