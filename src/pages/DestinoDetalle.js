import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./DestinoDetalle.scss";
import video4 from '../media/r.mp4'

function DestinoDetalle() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const options = [
    { label: "Experiencia Visual", value: "visual", className: "visual" },
    { label: "Experiencia Auditiva", value: "auditiva", className: "auditiva" },
  ];

  // 🔊 Función para hablar
  const speak = (text) => {
    const synth = window.speechSynthesis;
    if (synth.speaking) synth.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    synth.speak(utter);
  };

  // 📢 Mensaje inicial
  useEffect(() => {
  speak(`Destino seleccionado: ${id}. Elige una experiencia: visual o auditiva.`);
  }, [id]);

  // ⌨ Navegación con teclado
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        setSelectedIndex((prev) => (prev + 1) % options.length);
      } else if (e.key === "ArrowLeft") {
        setSelectedIndex((prev) => (prev - 1 + options.length) % options.length);
      } else if (e.key === "Enter") {
  navigate(`/${options[selectedIndex].value}/${id}`);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [navigate, options, selectedIndex, id]);

  return (
    <div className="destino-detalle">
      <div className="videoDiv">
                <video src={video4} loop autoPlay muted typeof="video/mp4"></video>
              </div>
      <h2>Destino seleccionado: {id.toUpperCase()}</h2>
      <p>Elige una experiencia:</p>

      <div className="options">
        {options.map((opt, index) => (
          <button
            key={opt.value}
            className={opt.className}
            style={{
              outline: index === selectedIndex ? "3px solid transparent" : "none",
            }}
            onClick={() => navigate(`/${opt.value}/${id}`)}
          >
            {opt.label}
          </button>
        ))}
      </div>

      
      <p className="instrucciones">
        Usa las flechas ← → para moverte, Enter para seleccionar. <br />
        O simplemente di en voz alta: <b>"visual"</b> o <b>"auditiva"</b>.
      </p>
    </div>
  );
}

export default DestinoDetalle;