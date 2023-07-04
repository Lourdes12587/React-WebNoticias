import React, {useState} from 'react'
import { IconLogo, NavbarContainer, NavbarWrapper, Menu, 
MenuItem, IconLogoMobile} from './NavNuevoStyled'
import { GiBoltEye } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { FaBars,  FaTimes } from "react-icons/fa";

const NavNuevo = () => {

    const [click, setClick] = useState(false);

    const ChangeClick = () => {
        setClick(!click);

    };

    return (
    <div>
        <NavbarContainer>
            <NavbarWrapper>
                <IconLogo>
                    <GiBoltEye size={"3em"}/> <span>YOU EYES.(NET)</span> 
                </IconLogo>

                <IconLogoMobile onClick={() => ChangeClick()}>
                    {click ? <FaTimes /> : <FaBars />}
                </IconLogoMobile>

                <Menu click={click}>
                    <MenuItem onClick={() => ChangeClick()}>
                        <Link to="/Secciones">SECCIONES</Link>
                    </MenuItem>
                    <MenuItem onClick={() => ChangeClick()}>    
                        <Link to="/Contacto">CONTACTO</Link>
                    </MenuItem>
                    <MenuItem onClick={() => ChangeClick()}>    
                        <Link to="/Login1">LOGIN</Link>
                    </MenuItem>
                    <MenuItem onClick={() => ChangeClick()}>    
                        <Link to="/Fetch">NOTICIAS DE HOY</Link>
                    </MenuItem>
                </Menu>
            </NavbarWrapper>
        </NavbarContainer>
    </div>
  )
}

export default NavNuevo