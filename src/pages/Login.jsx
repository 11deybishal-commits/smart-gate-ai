import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="center-container">
      <div className="glass ai-glow">
        <h1>
          INDIAN INSTITUTE OF INFORMATION TECHNOLOGY, NAGPUR
        </h1>

        <p style={{ fontStyle: "italic", opacity: 0.8, marginTop: "10px" }}>
          An Institute of National Importance by Act of Parliament
        </p>

        <p style={{ marginTop: "30px", opacity: 0.85 }}>
          AI Powered Smart Gate & Hostel Exit System
        </p>

        <button className="btn" onClick={() => navigate("/gate")}>
          Student / Gate Access
        </button>

        <br />

        <button className="btn" onClick={() => navigate("/admin")}>
          Admin Board
        </button>
      </div>
    </div>
  );
}
