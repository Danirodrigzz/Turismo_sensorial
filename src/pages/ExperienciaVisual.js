import React from "react";
import { useParams } from "react-router-dom";
import "./ExperienciaVisual.scss";

function ExperienciaVisual() {
  const { id } = useParams();

  // Galerías por destino (con las claves correctas)
  const destinos = {
    iguazu: [
      { src: "/assets/cat1.jpg", desc: "La majestuosa caída del Salto Ángel, la más alta del mundo." },
      { src: "/assets/cat2.jpg", desc: "El tepuy envuelto en niebla mística, con vegetación exuberante." },
      { src: "/assets/cat3.jpg", desc: "Vista cercana del agua cayendo a gran velocidad." },
      { src: "/assets/cat4.jpg", desc: "Río caudaloso en la base del salto, rodeado de selva." },
      { src: "/assets/cat5.jpg", desc: "Un arcoíris se forma con la bruma del agua en el aire." },
      { video: "/assets/videocat1.mp4", desc: "Video mostrando la caída del agua en todo su esplendor." },
      { video: "/assets/videocat2.mp4", desc: "Tomas del tepuy desde diferentes ángulos." }
    ],
    roques: [
      { src: "/assets/roques1.jpg", desc: "Vista aérea de los Roques: aguas turquesa y arena blanca." },
      { src: "/assets/roques2.jpg", desc: "Pequeñas embarcaciones flotando en aguas cristalinas." },
      { src: "/assets/roques3.jpg", desc: "Paisaje marino con contrastes azules intensos." },
      { src: "/assets/roques4.jpg", desc: "Orilla desierta rodeada de palmeras tropicales." },
      { src: "/assets/roques5.jpg", desc: "Atardecer dorado reflejado en las aguas tranquilas." },
    ],
    
      amazonas: [
      { src: "/assets/ama1.jpg", desc: "El río serpentea rodeado de una selva infinita." },
      { src: "/assets/ama2.jpg", desc: "Comunidades indígenas navegando en sus embarcaciones." },
      { src: "/assets/ama3.jpg", desc: "Atardecer en el Amazonas con reflejos dorados en el agua." },
      { src: "/assets/ama4.jpg", desc: "Una densa selva con árboles de gran altura." },
      { src: "/assets/ama5.jpg", desc: "Aves coloridas sobrevuelan la copa de los árboles amazónicos." }
    ]
  };

  const galeria = destinos[id];

  if (!galeria) {
    return <p className="no-data">⚠ No hay experiencia visual para este destino.</p>;
  }

  return (
    <div className="experiencia-visual">
      <h2>🌎 Experiencia Visual - {id.toUpperCase()}</h2>
      <div className="galeria">
        {galeria.map((item, i) => (
          <div key={i} className="card">
            {item.src && <img src={item.src} alt={item.desc} />}
            {item.video && (
              <video controls>
                <source src={item.video} type="video/mp4" />
              </video>
            )}
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExperienciaVisual;