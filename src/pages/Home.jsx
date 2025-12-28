import { useNavigate } from "react-router-dom";
import "../styles/home.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-theme">
      <div className="home-card">
        <h1 className="home-title">
          INDIAN INSTITUTE OF INFORMATION TECHNOLOGY, NAGPUR
        </h1>

        <p className="home-subtitle">
          <em>An Institute of National Importance by Act of Parliament</em>
        </p>

        <p className="home-desc">
          AI Powered Smart Gate & Hostel Exit System
        </p>

        <div className="home-actions">
          <button onClick={() => navigate("/gate")} className="gold-btn">
            Student / Gate Access
          </button>

          <button onClick={() => navigate("/admin")} className="gold-btn outline">
            Admin Board
          </button>
        </div>
      </div>
    </div>
  );
}
