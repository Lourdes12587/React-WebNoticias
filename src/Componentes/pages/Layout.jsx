import React from 'react'
import { Link, Outlet } from 'react-router-dom'


const Layout = () => {
  return (
    <main>
        <section>
            <Outlet/>
        </section>
        <nav>
            <Link to="/FetchData">Noticias de Hoy</Link>
            <Link to="/Secciones">Secciones</Link>
            <Link to="/Contacto">Contacto</Link>
            <Link to="/Login1">Login</Link>
            
        </nav> 
    </main>
  )
}

export default Layout