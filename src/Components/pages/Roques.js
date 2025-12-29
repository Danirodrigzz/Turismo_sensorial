function Roques() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Cayo de Agua - Los Roques</h1>
        <p className="subtitle">
          Un paraíso caribeño con aguas cristalinas y arenas blancas.
        </p>

        {/* Imagen */}
        <img src="/assets/roques1.jpg" alt="La playa" />

        <img src="/assets/roques2.jpg" alt="La playa" />

        <img src="/assets/roques3.jpg" alt="La playa" />

        <img src="/assets/roques4.jpg" alt="La playa" />

        {/* Video */}
        <video controls width="100%" style={{ marginTop: "20px", borderRadius: "12px" }}>
          <source src="/assets/roques-video.mp4" type="video/mp4" />
          Tu navegador no soporta video.
        </video>

        {/* Audio */}
        <audio controls style={{ marginTop: "20px" }}>
          <source src="/assets/roques-sonido.mp3" type="audio/mpeg" />
          Tu navegador no soporta audio.
        </audio>
      </div>
    </section>
  );
}

export default Roques;