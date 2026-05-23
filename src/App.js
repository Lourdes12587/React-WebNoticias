import React from 'react';
import './App.css';
import { Routes, Route, Navigate} from 'react-router-dom';
import  Secciones from './Componentes/pages/Secciones';
import { Contacto } from './Componentes/pages/Contacto';
import NavNuevo from './Componentes/comunes/NavBar/NavNuevo';
import Footer from './Componentes/comunes/Footer/Footer';
import FetchData from './Componentes/pages/FetchData';



function App() {

  return (
    <>
        <NavNuevo/>
          <Routes>
            <Route path="/" element={<FetchData/>}/>
            <Route path="/secciones" element={<Secciones/>}/> 
            <Route path="/contacto" element={<Contacto/>}/>  
            <Route path="*" element={<Navigate replace to="/"/>}/>
          </Routes>
        <Footer/>
    </>
  ) 
}

export default App;
