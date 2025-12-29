import React, {useEffect} from 'react'
import './footer.scss'
import video2 from '../../Assets/selva.mp4'
import {FiSend} from 'react-icons/fi'
import {GiBigWave} from 'react-icons/gi'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import {FaTripadvisor} from 'react-icons/fa'
import {FiChevronRight} from 'react-icons/fi'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {

     useEffect(()=>{
          Aos.init({duration: 2000})
        }, [])

  
     return (
       <section id="contacto" className='footer'>
        <div className="videoDiv">
          <video src={video2} loop autoPlay muted typeof="video/mp4"></video>
        </div>


        <div className="secContent container">
          <div className="contactDiv flex">
            <div data-aos="fade-up" className="text">
              <small>Conecta con Nosotros</small>
              <h2>Sumérgete en una experiencia única</h2>
            </div>

            <div className="inputDiv flex">
              <input data-aos="fade-up" type="text" placeholder='Gmail'/>
              <button data-aos="fade-up" className='btn flex' type='submit'>
               ENVIAR <FiSend className="icon"/>
              </button>
            </div>
          </div>

           <div className="footerCard flex">
            <div className="footerIntro flex">
              <div className="logoDiv">
                <a href="#" className='logo flex'>
                 <GiBigWave className="icon"/> Viva.
                </a>
              </div>

                <div data-aos="fade-up" className="footerParagraph">
                  En Viva creemos que viajar no es solo moverse de un lugar a otro, sino conectar profundamente con cada 
                  destino a través de experiencias que despiertan emociones, recuerdos y sentidos. Nuestro compromiso es 
                  crear espacios accesibles, inclusivos y pensados para que cada persona sin importar sus capacidades 
                  pueda explorar el mundo con confianza y plenitud. 
                  <div>
                    <br />
                    Te invitamos a descubrir rutas que se sienten, se escuchan 
                  y se viven con el corazón. Porque el turismo sensorial no se trata solo de ver, sino de sentir que perteneces.
                  </div>
                </div>

                <div data-aos="fade-up" className="footerSocials flex">
                  <AiOutlineTwitter className="icon"/>
                  <AiFillYoutube className="icon"/>
                  <AiOutlineInstagram className="icon"/>
                  <FaTripadvisor className="icon"/>
                </div>

            </div>

            {/*Grupo 1*/}
            <div className="footerLinks grid">
              <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
              <span className="groupTitle">
                ALIANZAS
              </span>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                 ONCE
              </li>

               <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Voiceitt
              </li>

               <li className="footerList flex">
                <FiChevronRight className="icon"/>
                TourCert
              </li>
               

                <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Travolution
              </li>

             </div>

               
            {/*Grupo 2*/}
             <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
              <span className="groupTitle">
                EVENTOS
              </span>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Ruta urbana
              </li>

               <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Recorrido local
              </li>

               <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Talleres
              </li>
               

                <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Escapada
              </li>


             </div>
            {/*Grupo 3*/}
             <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
              <span className="groupTitle">
                OTROS DESTINOS
              </span>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Mérida
              </li>

               <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Cartagena
              </li>

               <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Lisboa
              </li>
               

                <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Valparaíso
              </li>

             </div>
            </div>


             <div className="footerDiv flex">
               <small></small>
               <small>COPYRIGHTS RESERVED - 2025</small>
             </div>

           </div>
        </div>
       </section>
     )
}

export default Footer