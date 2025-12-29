import { Link } from "react-router-dom";
import React, {useEffect} from 'react'
import "./Destinos.scss";
import {HiOutlineLocationMarker} from 'react-icons/hi'


import Aos from 'aos'
import 'aos/dist/aos.css'




function Destinos() {

  
   useEffect(()=>{
        Aos.init({duration: 2000})
      }, [])


  return (
    <section className="destinos-section">
      <div className="container">
        <h1 data-aos="fade-right" className="title">Destinos disponibles</h1>
        <p className="subtitle">Elige a dónde quieres viajar:</p>

        <div data-aos="fade-up" className="destinos-grid">
          {/* Los Roques */}
          <Link to="/destino/roques" className="card">
            <img src="/assets/roques1.jpg" alt="Los Roques" />
            <h2>Cayo de Agua - Los Roques</h2>
            <div className="continent flex">
              <p><HiOutlineLocationMarker className='icon'/> Venezuela</p>     
                      </div>
          </Link>

          {/* Cataratas del Iguazú */}
          <Link to="/destino/iguazu" className="card">
            <img src="/assets/cat1.jpg" alt="Cataratas del Iguazú" />
            <h2>Cataratas del Iguazú</h2>
            <div className="continent flex">
              <p><HiOutlineLocationMarker className='icon'/> Argentina - Brasil</p>     
                      </div>
            
          </Link>

          {/* Amazonas */}
          <Link to="/destino/amazonas" className="card">
            <img src="/assets/ama2.jpg" alt="Amazonas" />
            <h2>El Amazonas</h2>
            <div className="continent flex">
              <p><HiOutlineLocationMarker className='icon'/> América del Sur</p>     
                      </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Destinos;