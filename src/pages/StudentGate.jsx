import { useState } from "react";
import GateCamera from "../components/GateCamera";
import VoiceInput from "../components/VoiceInput";
import { addGateLog } from "../firebase/firestore";
import ExitInsight from "../components/ExitInsight";

export default function StudentGate() {
  const [studentId, setStudentId] = useState("");
  const [reason, setReason] = useState("");

  const handleSubmit = async () => {
    if (!studentId.trim()) {
      alert("Please enter Student ID");
      return;
    }

    //  BTID format validation
    if (!/^BTID[A-Za-z0-9]{4,}$/.test(studentId)) {
      alert("Student ID must be in format: BTIDXXXXXXXX");
      return;
    }

    if (!reason.trim()) {
      alert("Please provide a reason");
      return;
    }

    const log = {
      studentId,
      reason,
      gate: "Main Gate",
      type: "EXIT",
      status: "AUTO-LOGGED",
      timestamp: new Date(),
    };

    try {
      await addGateLog(log);
      alert("Exit logged successfully");
      setReason("");
      setStudentId("");
    } catch (err) {
      alert("Failed to log exit");
      console.error(err);
    }
  };

  return (
    <div className="center-container">
      <div className="glass ai-glow">
        <h2>Smart Gate AI</h2>

        <GateCamera />

        {/* 🔹 Student ID Input */}
        <input
          value={studentId}
          onChange={(e) => setStudentId(e.target.value.toUpperCase())}
          placeholder="BTIDXXXXXXXX"
          style={{ marginBottom: "15px" }}
        />

        <VoiceInput onVoice={(text) => setReason(text)} />

        <input
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          placeholder="Eg: Library, Medical, Home"
          style={{ marginTop: "10px" }}
        />

        {/* ✅ ONLY NEW LINE ADDED */}
        <ExitInsight reason={reason} />

        <button className="btn" onClick={handleSubmit}>
          Submit & Auto Log
        </button>
      </div>
    </div>
  );
}
