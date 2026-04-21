import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainLayout from "./layout/MainLayout"

import Dashboard from "./pages/Dashboard"
import Usuarios from "./pages/Usuarios"
import Estados from "./pages/Estados"
import Metricas from "./pages/Metricas"
import Embudo from "./pages/Embudo"
import Reportes from "./pages/Reportes"
import ClienteDetalle from "./pages/ClienteDetalle"
import Conexion from "./pages/Conexion"

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/estados" element={<Estados />} />
          <Route path="/metricas" element={<Metricas />} />
          <Route path="/embudo" element={<Embudo />} />
          <Route path="/reportes" element={<Reportes />} />
          <Route path="/cliente/:id" element={<ClienteDetalle />} />
          <Route path="/conexion" element={<Conexion />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  )
}

export default App