import React, { useEffect, useState } from "react";
import socket from "../services/socket";

const Estados = () => {
  const [clientes, setClientes] = useState([]);

  const getClientes = async () => {
    try {
      const res = await fetch("http://localhost:8080/clientes_estado");

      const data = await res.json();

      console.log("🔥 DATA BACKEND:", data);

      // 🔥 VALIDACIÓN CLAVE
      if (Array.isArray(data)) {
        setClientes(data);
      } else {
        console.error("❌ NO ES ARRAY:", data);
        setClientes([]);
      }

    } catch (error) {
      console.error("❌ ERROR FETCH:", error);
      setClientes([]);
    }
  };

  useEffect(() => {
    getClientes();

    // 🔥 WEBSOCKET
    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);

      console.log("📩 WS:", data);

      setClientes((prev) =>
        prev.map((c) =>
          String(c.numero) === String(data.numero)
            ? { ...c, estado: data.estado }
            : c
        )
      );
    };

  }, []);

  return (
    <div className="container mt-4">
      <h3>Estados en tiempo real</h3>

      <table className="table table-striped mt-3">
        <thead>
          <tr>
            <th>Número</th>
            <th>Cédula</th>
            <th>Nombre</th>
            <th>Universidad</th>
            <th>Estado</th>
          </tr>
        </thead>

        <tbody>
          {clientes.length === 0 ? (
            <tr>
              <td colSpan="5">No hay datos</td>
            </tr>
          ) : (
            clientes.map((c, i) => (
              <tr key={c.numero || i}>
                <td>{c.numero}</td>
                <td>{c.cedula || "SIN CÉDULA"}</td>
                <td>{c.nombre || "SIN NOMBRE"}</td>
                <td>{c.universidad || "SIN UNI"}</td>
                <td>{c.estado || "sin estado"}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Estados;