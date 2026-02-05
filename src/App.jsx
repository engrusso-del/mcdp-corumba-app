import Sidebar from "./components/Sidebar";
import { Routes, Route, Navigate } from "react-router-dom";

export default function App() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />

      <main style={{ flex: 1, padding: 16 }}>
        <Routes>
          <Route path="/" element={<h1>Home funcionando</h1>} />
          <Route path="/calendario" element={<h1>Calendário</h1>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </div>
  );
}
