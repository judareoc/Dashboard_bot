import Sidebar from "./Sidebar"
import Header from "./Header"

function MainLayout({ children }) {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      
      <Sidebar />

      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Header />

        <div style={{ padding: "20px" }}>
          {children}
        </div>
      </div>

    </div>
  )
}

export default MainLayout