function Amazonas() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">El Amazonas</h1>
        <p className="subtitle">
          El pulmón del planeta, hogar de una increíble biodiversidad.
        </p>

        {/* Imagen */}
        <img src="/assets/ama1.jpg" alt="Amazonas" />

        <img src="/assets/ama2.jpg" alt="Amazonas" />

        <img src="/assets/ama3.jpg" alt="Amazonas" />

        <img src="/assets/ama4.jpg" alt="Amazonas" />

         <img src="/assets/ama5.jpg" alt="Amazonas" />

        {/* Video */}
        <video controls width="100%" style={{ marginTop: "20px", borderRadius: "12px" }}>
          <source src="/assets/amazonas-video.mp4" type="video/mp4" />
          Tu navegador no soporta video.
        </video>

        {/* Audio */}
        <audio controls style={{ marginTop: "20px" }}>
          <source src="/assets/amazonas-sonido.mp3" type="audio/mpeg" />
          Tu navegador no soporta audio.
        </audio>
      </div>
    </section>
  );
}

export default Amazonas;