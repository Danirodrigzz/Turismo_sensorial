import React, {useEffect} from 'react'
import './home.scss'
import video from '../../Assets/catarata.mp4'
import {GrLocation} from 'react-icons/gr'
import {IoMdSearch} from 'react-icons/io'
import {FiFacebook} from 'react-icons/fi'
import {AiOutlineInstagram} from 'react-icons/ai'
import {FaTripadvisor} from 'react-icons/fa'
import {BsListTask} from 'react-icons/bs'
import {TbApps} from 'react-icons/tb'

import Aos from 'aos'
import 'aos/dist/aos.css'



const Home = () => {
    
    useEffect(()=>{
      Aos.init({duration: 2000})
    }, [])

     return (
       <section className='home'>
         <div className="overlay"></div>
         <video src={video} muted autoPlay loop type="video/mp4"></video>

         <div className="homeContent container">
         <div className="textDiv">


          <span data-aos="fade-up" className="smallText">
            Descubre tu forma de sentir el mundo
          </span>


          <h1 data-aos="fade-up" className="homeTitle">
           Explorar experiencias
          </h1>

         </div>
        
          <div data-aos="fade-up" className="cardDiv grid">
           <div className="destinationInput">
            <label htmlFor="city">Busca tu destino:</label>
            <div className="input flex">
            <input type="text" placeholder='Enter name here...' />
            <GrLocation className="icon" />
            </div>
           </div>

           <div className="dateInput">
            <label htmlFor="date">Selecciona una fecha:</label>
            <div className="input flex">
            <input type="date"/>
            </div>
           </div>

            <div className="priceInput">
           <div className="label_total flex">
            <label htmlFor="prefencias">Preferencias:</label>
           </div>
              <div className="input flex">
               <select id="preferencias" className='border rounded px-2 py-1 ml-2'>
                <option value="teclado">Navegación por teclado</option>
                <option value="contraste">Alto contraste</option>
                <option value="voz">Navegación por voz</option>
               </select>
              </div>
           </div>

            <div className="searchOptions flex">
              <span>BUSCAR</span>
              <IoMdSearch className="icon"/>
              
            </div>

          </div>

          <div data-aos="fade-up" className="homeFooterIcons flex">
            <div className="rightIcons">
            <FiFacebook className="icon" />
            <AiOutlineInstagram className="icon"/>
            <FaTripadvisor className="icon" />
            </div>

            <div className="leftIcons">
              <BsListTask className="icon" />
              <TbApps className="icon" />
            </div>
          </div>

         </div>
        
 
       </section>
     )
}

export default Home