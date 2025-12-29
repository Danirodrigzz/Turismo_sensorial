import React, {useState} from 'react'
import './navbar.scss'
import {GiBigWave} from 'react-icons/gi'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'



const Navbar = () => {
     const [active, setActive] = useState('navBar')
     const showNav = ()=>{
      setActive('navBar activeNavbar')
     } 


     const removeNavbar = ()=>{
      setActive('navBar')
     } 

     const scrollToContacto = () => {
  const section = document.getElementById("contacto");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const scrollToDestinos = () => {
  const section = document.getElementById("destinos");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const scrollToInicio = () => {
  const section = document.getElementById("inicio");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};



     return (
       <section className='navBarSection'>
        <header className="header flex">
         <div className="logoDiv">
          <a href="#" className="logo flex">
           <h1><GiBigWave className="icon"/>Viva.</h1>
          </a>
         </div>

            <div className={active}>
              <ul className="navLists flex">


                <li className="navItem">
                  <a href="#" className="navLink">Inicio</a>
                </li>

                 <li className="navItem">
                  <a href="#" onClick={scrollToDestinos} className="navLink">Destinos</a>
                </li>

                 <li className="navItem">
                  <a href="#" className="navLink">Experiencias</a>
                </li>

                 <li className="navItem">
                  <a href="#" className="navLink">Nosotros</a>
                </li>


                 <li className="navItem">
                  <a href="#" onClick={scrollToContacto} className="navLink">Contacto</a>
                </li>

                 <button className='btn'>
                   <a href="#" onClick={scrollToInicio}>Iniciar Sesión</a>
                 </button>
               </ul>

               <div onClick={removeNavbar} className="closeNavbar">
                <AiFillCloseCircle className="icon"/>
               </div>

            </div>
           
             <div onClick={showNav} className="toggleNavbar">
              <TbGridDots className="icon"/>
             </div>

        </header>
       </section>
     )
}

export default Navbar