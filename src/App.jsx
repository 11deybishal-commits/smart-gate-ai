import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import StudentGate from "./pages/StudentGate.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import Login from "./pages/Login.jsx";
import Logs from "./pages/Logs.jsx";
import GuardPanel from "./pages/GuardPanel.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gate" element={<StudentGate />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logs" element={<Logs />} />
        <Route path="/guard" element={<GuardPanel />} />
      </Routes>
    </BrowserRouter>
  );
}
