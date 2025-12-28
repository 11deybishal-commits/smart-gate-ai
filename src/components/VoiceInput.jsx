import { useEffect, useRef, useState } from "react";

export default function VoiceInput({ onVoice }) {
  const recognitionRef = useRef(null);
  const timerRef = useRef(null);

  const [isListening, setIsListening] = useState(false);
  const [seconds, setSeconds] = useState(0);

  // ✅ DEFINE FUNCTIONS FIRST
  const stopListening = () => {
    setIsListening(false);
    clearInterval(timerRef.current);
  };

  const startListening = () => {
    if (!recognitionRef.current) return;

    setIsListening(true);
    setSeconds(0);

    recognitionRef.current.start();

    timerRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
  };

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech Recognition not supported");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-IN";

    recognition.onresult = (event) => {
      const text = event.results[0][0].transcript;
      onVoice(text);
    };

    recognition.onend = () => {
      stopListening(); // ✅ NOW JS KNOWS THIS FUNCTION
    };

    recognitionRef.current = recognition;

    return () => stopListening();
  }, [onVoice]);

  return (
    <div
      onClick={startListening}
      style={{
        marginTop: "20px",
        cursor: "pointer",
        color: "#6b4a00",
        fontWeight: "500",
        userSelect: "none",
      }}
    >
      {isListening ? (
        <>🎙️ Recording... <strong>{seconds}s</strong></>
      ) : (
        <>🎤 Click to Speak (Voice AI)</>
      )}
    </div>
  );
}
