function Iguazu() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Cataratas del Iguazú</h1>
        <p className="subtitle">
          Una de las maravillas naturales del mundo, ubicada entre Argentina y Brasil.
        </p>

        {/* Imagen */}
       <img src="/assets/cat1.jpg" alt="Cataratas" />

        <img src="/assets/cat2.jpg" alt="Cataratas" />

         <img src="/assets/cat3.jpg" alt="Cataratas" />

          <img src="/assets/cat4.jpg" alt="Cataratas" />

        {/* Video */}
        <video controls width="100%" style={{ marginTop: "20px", borderRadius: "12px" }}>
          <source src="/assets/vidcat1.mp4" type="video/mp4" />
          Tu navegador no soporta video.
        </video>

        <video controls width="100%" style={{ marginTop: "20px", borderRadius: "12px" }}>
          <source src="/assets/vidcat2.mp4" type="video/mp4" />
          Tu navegador no soporta video.
        </video>

        <video controls width="100%" style={{ marginTop: "20px", borderRadius: "12px" }}>
          <source src="/assets/vidcat3.mp4" type="video/mp4" />
          Tu navegador no soporta video.
        </video>

        {/* Audio */}
        <audio controls style={{ marginTop: "20px" }}>
          <source src="/assets/iguazu-sonido.mp3" type="audio/mpeg" />
          Tu navegador no soporta audio.
        </audio>
      </div>
    </section>
  );
}

export default Iguazu;