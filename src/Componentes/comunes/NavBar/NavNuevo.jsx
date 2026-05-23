import React, {useEffect, useState} from 'react'
import { IconLogo, NavbarContainer, NavbarWrapper, Menu, 
MenuItem, IconLogoMobile} from './NavNuevoStyled'
import { GiBoltEye } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';
import { FaBars, FaMicrophoneAlt, FaRegCommentDots, FaTimes, FaUserCircle } from "react-icons/fa";

const NavNuevo = () => {

    const [click, setClick] = useState(false);

    const ChangeClick = () => setClick(!click);
    const closeMenu = () => setClick(false);

    useEffect(() => {
        document.body.classList.toggle('menu-open', click);
        return () => document.body.classList.remove('menu-open');
    }, [click]);

    return (
    <header>
        <NavbarContainer>
            <NavbarWrapper>
                <IconLogo to="/" onClick={closeMenu} aria-label="Ir al inicio de You Eyes">
                    <span className="brand-mark" aria-hidden="true">
                        <GiBoltEye />
                    </span>
                    <span className="brand-copy">
                        <span className="brand-name">YOU EYES<span>.NET</span></span>
                        <span className="brand-kicker">Diario digital</span>
                    </span>
                </IconLogo>

                <IconLogoMobile
                    type="button"
                    onClick={ChangeClick}
                    aria-label={click ? 'Cerrar menu' : 'Abrir menu'}
                    aria-expanded={click}
                    aria-controls="main-navigation"
                >
                    {click ? <FaTimes /> : <FaBars />}
                </IconLogoMobile>

                <Menu id="main-navigation" click={click}>
                    <MenuItem onClick={closeMenu}>    
                        <NavLink to="/">Inicio</NavLink>
                    </MenuItem>
                    <MenuItem onClick={closeMenu}>
                        <NavLink to="/secciones">Deportes</NavLink>
                    </MenuItem>
                    <MenuItem onClick={closeMenu}>    
                        <NavLink to="/secciones">Humor</NavLink>
                    </MenuItem>
                    <MenuItem onClick={closeMenu}>
                        <NavLink to="/secciones">Ocio y Cultura</NavLink>
                    </MenuItem>
                    <MenuItem onClick={closeMenu}>    
                        <NavLink to="/contacto">Opinion</NavLink>
                    </MenuItem>
                    <MenuItem onClick={closeMenu}>    
                        <NavLink to="/secciones">Programas</NavLink>
                    </MenuItem>
                    <MenuItem onClick={closeMenu}>
                        <NavLink className="podcast-link" to="/secciones">
                            <FaMicrophoneAlt aria-hidden="true" /> Podcasts
                        </NavLink>
                    </MenuItem>
                    <MenuItem className="nav-icon-item" onClick={closeMenu}>
                        <NavLink to="/contacto" aria-label="Mensajes">
                            <FaRegCommentDots aria-hidden="true" />
                        </NavLink>
                    </MenuItem>
                    <MenuItem className="nav-icon-item" onClick={closeMenu}>
                        <NavLink to="/contacto" aria-label="Usuario">
                            <FaUserCircle aria-hidden="true" />
                        </NavLink>
                    </MenuItem>
                </Menu>
            </NavbarWrapper>
        </NavbarContainer>
    </header>
  )
}

export default NavNuevo
