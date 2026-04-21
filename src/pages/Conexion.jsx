import { useEffect, useState } from "react";
import "./conexion.css";

export default function Conexion() {
  const [devices] = useState([
    { id: "device1", nombre: "3023244980" },
    { id: "device2", nombre: "3017625764" },
  ]);

  const [status, setStatus] = useState({});
  const [qr, setQr] = useState({});
  const [loading, setLoading] = useState({});

  // 🔄 Obtener estado
  const getStatus = async (device) => {
    try {
      const res = await fetch(
        `http://localhost:8080/status?device=${device}`
      );
      const data = await res.json();

      setStatus((prev) => ({
        ...prev,
        [device]: data,
      }));
    } catch (err) {
      console.log("Error status:", err);
    }
  };

  // 🔄 Obtener QR
  const getQR = async (device) => {
    try {
      const res = await fetch(
        `http://localhost:8080/qr?device=${device}`
      );

      if (!res.ok) return;

      const data = await res.json();

      setQr((prev) => ({
        ...prev,
        [device]: data.qr,
      }));
    } catch (err) {
      console.log("Error QR:", err);
    }
  };

  // 🔌 Conectar
  const connect = async (device) => {
    setLoading((prev) => ({ ...prev, [device]: true }));

    await fetch(`http://localhost:8080/connect?device=${device}`);

    setTimeout(() => {
      setLoading((prev) => ({ ...prev, [device]: false }));
    }, 2000);
  };

  // ❌ Desconectar
  const desconectar = async (device) => {
  await fetch(`http://localhost:8080/disconnect?device=${device}`);
  window.location.reload()
};

  // 🔁 Auto refresh
  useEffect(() => {
    const interval = setInterval(() => {
      devices.forEach((d) => {
        getStatus(d.id);
        getQR(d.id);
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="conexion-container">
      <h2> Conexión WhatsApp</h2>

      <div className="cards">
        {devices.map((d) => {
          const isConnected = status[d.id]?.Connected;

          return (
            <div className="card" key={d.id}>
              <h3>{d.nombre}</h3>

              <p>
                Estado:
                <span className={isConnected ? "ok" : "off"}>
                  {isConnected ? " 🟢 Conectado" : " 🔴 Desconectado"}
                </span>
              </p>

              <p className="phone">
                📱 {status[d.id]?.Phone || "Sin número"}
              </p>

              {/* QR */}
              {!isConnected && qr[d.id] && (
                <img src={qr[d.id]} alt="QR" />
              )}

              {/* Botones */}
              <div className="buttons">
                {!isConnected ? (
                  <button
                    className="connect"
                    onClick={() => connect(d.id)}
                    disabled={loading[d.id]}
                  >
                    {loading[d.id] ? "Generando..." : "Conectar"}
                  </button>
                ) : (
                  <button
                    className="disconnect"
                    onClick={() => disconnect(d.id)}
                  >
                    Desconectar
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}