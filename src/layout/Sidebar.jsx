import { NavLink } from "react-router-dom"
import {
  FaChartBar,
  FaUsers,
  FaClipboardList,
  FaChartLine,
  FaFilter,
  FaFileAlt
} from "react-icons/fa"

import "./sidebar.css"

function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="logo">Mi CRM</h2>

      <nav>
        <NavLink to="/" className="link">
          <FaChartBar /> <span>Panel</span>
        </NavLink>

        <NavLink to="/usuarios" className="link">
          <FaUsers /> <span>Clientes</span>
        </NavLink>

        <NavLink to="/estados" className="link">
          <FaClipboardList /> <span>Estados</span>
        </NavLink>

        <NavLink to="/metricas" className="link">
          <FaChartLine /> <span>Métricas</span>
        </NavLink>

        <NavLink to="/embudo" className="link">
          <FaFilter /> <span>Embudo</span>
        </NavLink>

        <NavLink to="/reportes" className="link">
          <FaFileAlt /> <span>Informes</span>
        </NavLink>
      </nav>
    </div>
  )
}

export default Sidebar