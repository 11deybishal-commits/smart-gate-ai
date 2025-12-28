import { HashRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import StudentGate from "./pages/StudentGate";
import AdminDashboard from "./pages/AdminDashboard";
import Login from "./pages/Login";
import Logs from "./pages/Logs";
import GuardPanel from "./pages/GuardPanel";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gate" element={<StudentGate />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logs" element={<Logs />} />
        <Route path="/guard" element={<GuardPanel />} />
      </Routes>
    </HashRouter>
  );
}
