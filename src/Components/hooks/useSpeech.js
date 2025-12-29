import { useEffect } from "react";

function useSpeech(text) {
  useEffect(() => {
    if (text) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "es-ES"; // español
      utterance.rate = 1; // velocidad normal
      speechSynthesis.speak(utterance);
    }
  }, [text]);
}

export default useSpeech;