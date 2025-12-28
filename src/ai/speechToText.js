export function startVoiceRecognition(onResult) {
  if (!("webkitSpeechRecognition" in window)) {
    alert("Speech Recognition not supported in this browser");
    return;
  }

  const recognition = new window.webkitSpeechRecognition();
  recognition.lang = "en-IN";
  recognition.continuous = false;
  recognition.interimResults = false;

  recognition.onresult = (event) => {
    const text = event.results[0][0].transcript;
    onResult(text);
  };

  recognition.start();
}
