import { useParams } from "react-router-dom";
import { useEffect } from "react";
import "./ExperienciaAuditiva.scss";

function ExperienciaAuditiva() {
  const { id } = useParams();

  // Diccionario de experiencias auditivas
  const experiencias = {
    amazonas: {
      narracion: "/assets/amazonasvoz.mp3",
      sonidos: [
        { src: "/assets/amason1.mp3", titulo: "Sonidos de la selva" },
        { src: "/assets/amason2.mp3", titulo: "Cantos de aves" },
        { src: "/assets/amason3.mp3", titulo: "Río Amazonas" },
      ],
    },
    roques: {
      narracion: "/assets/cayodeaguavoz.mp3",
      sonidos: [
        { src: "/assets/roqueson1.mp3", titulo: "Olas del mar" },
        { src: "/assets/roqueson2.mp3", titulo: "Viento costero" },
        { src: "/assets/roqueson3.mp3", titulo: "Gaviotas" },
        { src: "/assets/roqueson4.mp3", titulo: "Ambiente playero" },
      ],
    },
    iguazu: {
      narracion: "/assets/iguazuvoz.mp3",
      sonidos: [
        { src: "/assets/catson1.mp3", titulo: "Rugido de las cataratas" },
        { src: "/assets/catson2.mp3", titulo: "Agua golpeando las rocas" },
        { src: "/assets/catson3.mp3", titulo: "Ambiente selvático" },
      ],
    },
  };

  const experiencia = experiencias[id];

  // 🔊 Narración con voz sintetizada
  useEffect(() => {
    if (experiencia) {
      const mensaje = new SpeechSynthesisUtterance(
        `Bienvenido a la experiencia auditiva de ${id}. Puedes escuchar la narración principal o los sonidos disponibles.`
      );
      mensaje.lang = "es-ES";
      window.speechSynthesis.speak(mensaje);
    }
  }, [id, experiencia]);

  if (!experiencia) {
    return (
      <div className="error-box">
        <h2>Error</h2>
        <p>Destino no encontrado.</p>
      </div>
    );
  }

  return (
    <div className="experiencia-container">
      <h1 className="title">Experiencia Auditiva - {id.toUpperCase()}</h1>

      {/* Narración principal */}
      <section className="narracion">
        <h3>Narración principal</h3>
        <audio controls src={experiencia.narracion}></audio>
      </section>

      {/* Lista de sonidos */}
      <section className="sonidos">
        <h3>Sonidos disponibles</h3>
        {experiencia.sonidos.map((sonido, index) => (
          <div className="sonido-card" key={index}>
            <p>{sonido.titulo}</p>
            <audio controls src={sonido.src}></audio>
          </div>
        ))}
      </section>

      {/* Botón para repetir instrucciones */}
      <div className="acciones">
        <button
          onClick={() => {
            const mensaje = new SpeechSynthesisUtterance(
              `Recuerda que puedes reproducir la narración principal o cualquiera de los sonidos disponibles en ${id}.`
            );
            mensaje.lang = "es-ES";
            window.speechSynthesis.speak(mensaje);
          }}
        >
          🔊 Repetir Instrucciones
        </button>
      </div>
    </div>
  );
}

export default ExperienciaAuditiva;