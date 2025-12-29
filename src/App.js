import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Páginas
import Home from "./pages/Home";
import Destinos from "./pages/Destinos";
import DestinoDetalle from "./pages/DestinoDetalle";
import ExperienciaAuditiva from "./pages/ExperienciaAuditiva";
import ExperienciaVisual from "./pages/ExperienciaVisual";

// Login
import Auth from "./login/Auth";

// Estilos
import './app.css';

// Componentes
import Navbar from './Components/Navbar/Navbar';
import Main from './Components/Main/Main';
import HomeComponent from './Components/Home/HomeComponent';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <>
      
      <Navbar />
       <HomeComponent /> 
        <Main />
        <Auth />
      <Footer />
    </>
  );
};

export default App;