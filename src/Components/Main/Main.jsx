import React, {useEffect} from 'react'
import './main.scss'
import img from '../../Assets/3c.jpg'
import img2 from '../../Assets/3.jpg'
import img3 from '../../Assets/3a.jpg'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiOutlineClipboardCheck} from 'react-icons/hi'


import Aos from 'aos'
import 'aos/dist/aos.css'


const Data = [

   {
   id:1,
   imgSrc: img,
   destTitle: 'Cataratas de Iguazú',
   location: 'Argentina - Brasil',
   grade: 'BELLEZA NATURAL',
   fees: '',
   description: 'Ubicadas en la frontera entre Argentina y Brasil, las Cataratas del Iguazú son uno de los sistemas de cascadas más grandes del mundo. Rodeadas por una selva subtropical, el rugido y la inmensidad de sus 275 saltos crean un espectáculo natural impresionante. Se puede apreciar su majestuosidad desde ambos lados, con pasarelas que te acercan a la Garganta del Diablo, el salto más imponente. '
   },


   {
   id:2,
   imgSrc: img2,
   destTitle: 'Cayo de Agua - Los Roques:',
   location: 'Venezuela',
   grade: 'BELLEZA PARADISÍACA',
   fees: '',
   description: 'Parte del Parque Nacional Archipiélago de Los Roques en Venezuela, Cayo de Agua es conocido por su belleza paradisíaca. Es famoso por la franja de arena blanca que une dos pequeñas islas, con aguas cristalinas y poco profundas que varían en tonos de azul y verde. Es un lugar ideal para el buceo, el snorkel y simplemente relajarse en un entorno de paz y tranquilidad con una vista increíble.  '
   },


   {
   id:3,
   imgSrc: img3,
   destTitle: 'El Amazonas',
   location: 'América del Sur',
   grade: 'BELLEZA INMERSIVA',
   fees: '',
   description: 'El Amazonas es la selva tropical más grande del mundo y un tesoro de biodiversidad, que se extiende por varios países de América del Sur (Brasil, Perú y Colombia). Es hogar de una increíble variedad de flora y fauna. Un viaje por el Amazonas ofrece una experiencia inmersiva en la naturaleza, con actividades como paseos en bote por el río, avistamiento de animales y caminatas por la selva. '
   },

  
]











const Main = () => {

   useEffect(()=>{
        Aos.init({duration: 2000})
      }, [])
  

     return (
      <section id="destinos" className='main container section'>
        <div className="secTitle">
          <h3 data-aos="fade-right" className="title">
            Destinos que despiertan emociones
          </h3>
        </div>

         <div className="secContent grid">

          {
            Data.map(({id, imgSrc, destTitle, location, grade, fees, description })=>{
               return(
                <div key={id} data-aos="fade-up" className="singleDestination">
                  
                  <div className="imageDiv">
                    <img src={imgSrc} alt={destTitle} />
                  </div>

                   <div className="cardInfo">
                      <h4 className="destTitle">{destTitle}</h4>
                      <span className="continent flex">
                      <HiOutlineLocationMarker className='icon'/>
                      <span className="name">{location}</span>
                      </span>

                       <div className="fees flex">
                        <div className="grade">
                          <span>{grade}<small>+1</small></span>
                        </div>
                        <div className="price">
                          <h5>{fees}</h5>
                        </div>
                       </div>

                     <div className="desc">
                      <p>{description}</p>
                     </div>
                       
                       <button className='btn flex'>
                         EXPLORAR <HiOutlineClipboardCheck className="icon" />
                       </button>

                       <section id="inicio"></section>
                   </div> 
                </div>
               )
            })
          }



         </div>

      </section>
     )
}

export default Main