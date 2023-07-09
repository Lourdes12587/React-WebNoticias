import React from 'react';
import './App.css';
import { Routes, Route, Navigate} from 'react-router-dom';
import  Secciones from './Componentes/pages/Secciones';
import { Contacto } from './Componentes/pages/Contacto';
import Layout from './Componentes/pages/Layout';
import NavNuevo from './Componentes/comunes/NavBar/NavNuevo';
import Footer from './Componentes/comunes/Footer/Footer';
import News from './Componentes/pages/News';
import { Login1 } from './Componentes/pages/Login1';
import Fetch from './Componentes/pages/Fetch';



function App() {

  return (
    <>
    
        <NavNuevo/>
          <Routes>
            <Route path="/" element={<Layout/>}/>
            <Route index element={<Secciones/>}/>
            <Route path="contacto" element={<Contacto/>}/>
            <Route path="login1" element={<Login1/>}/>
            <Route path="fetch" element={<Fetch/>}/>
            {/* <Router path="*" element={<div>404-Found</div>}/>*/}
            <Route path="*" element={<Navigate replace to="/"/>}/>
          </Routes>
        <Footer/>

    </>
  ) 
}

export default App;
