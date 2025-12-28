export default function ExitInsight({ reason }) {
  if (!reason) return null;

  const text = reason.toLowerCase();

  let mood = "Neutral";
  let confidence = "Medium";

  if (text.includes("medical") || text.includes("emergency")) {
    mood = "Stressed";
    confidence = "Low";
  } else if (text.includes("library") || text.includes("study")) {
    mood = "Focused";
    confidence = "High";
  } else if (text.includes("home")) {
    mood = "Calm";
    confidence = "Medium";
  }

  return (
    <div
      style={{
        marginTop: "14px",
        padding: "12px 16px",
        borderRadius: "14px",
        background: "rgba(255,255,255,0.45)",
        color: "#6b4a00",
        fontSize: "14px",
      }}
    >
      <strong>AI Mood:</strong> {mood} <br />
      <strong>Confidence:</strong> {confidence}
    </div>
  );
}
