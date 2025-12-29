import { Link } from "react-router-dom";
import "./home.css"; 
import video3 from '../media/olas.mp4'

function Home() {
  return (
    <section id="casa" className="home-section">
      <div className="videoDiv">
          <video src={video3} loop autoPlay muted typeof="video/mp4"></video>
        </div>

      <div className="home-container">
        <h1 className="home-title">Explora el Turismo Sensorial</h1>
        <p className="home-subtitle">
          Selecciona un destino para comenzar tu viaje sensorial.
        </p>

        <div className="home-options">
          <Link to="/destinos" className="home-btn">
            Comenzar
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;