import React from 'react';
import './App.css';
import { Routes, Route, Navigate} from 'react-router-dom';
import  Secciones from './Componentes/pages/Secciones';
import { Contacto } from './Componentes/pages/Contacto';
import Layout from './Componentes/pages/Layout';
import NavNuevo from './Componentes/comunes/NavBar/NavNuevo';
import Footer from './Componentes/comunes/Footer/Footer';
import Navbar1 from './Componentes/comunes/NavBar/Navbar1';


function App() {
  
  return (
    <>
      <Navbar1/>
      <NavNuevo/>
        <Routes>
          <Route path="/" element={<Layout/>}/>
          <Route index element={<Secciones/>}/>
          <Route path="Contacto" element={<Contacto/>}/>
          {/* <Router path="*" element={<div>404-Found</div>}/>*/}
          <Route path="*" element={<Navigate replace to="/"/>}/>
        </Routes>
      <Footer/>
    </>
  ) 
}

export default App;
