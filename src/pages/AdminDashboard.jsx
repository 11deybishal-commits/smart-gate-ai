import { useEffect, useState } from "react";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "../firebase/config";

export default function AdminDashboard() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, "gateLogs"),
      orderBy("timestamp", "desc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setLogs(data);
    });

    return () => unsubscribe();
  }, []);

  const getRiskColor = (risk) => {
    if (risk === "UNUSUAL") return "#8b0000";
    if (risk === "WATCH") return "#a46b00";
    return "#4b3a00";
  };

  return (
    <div className="center-container">
      <div className="glass ai-glow" style={{ maxWidth: "900px" }}>
        <h2>Admin Dashboard</h2>

        {logs.length === 0 && (
          <p style={{ marginTop: "20px", opacity: 0.7 }}>
            No gate activity yet
          </p>
        )}

        {logs.map((log) => (
          <div
            key={log.id}
            style={{
              marginTop: "15px",
              padding: "15px",
              borderRadius: "10px",
              background: "rgba(255,255,255,0.25)",
              textAlign: "left",
              color: "#5a3d00",
            }}
          >
            <strong>Student:</strong> {log.studentId} <br />
            <strong>Reason:</strong> {log.reason} <br />
            <strong>Gate:</strong> {log.gate} <br />
            <strong>Status:</strong> {log.status} <br />
            <strong>AI Insight:</strong> {log.aiInsight} <br />
            <strong>
              Risk Level:
              <span style={{ color: getRiskColor(log.riskLevel) }}>
                {" "}{log.riskLevel}
              </span>
            </strong>
          </div>
        ))}
      </div>
    </div>
  );
}
