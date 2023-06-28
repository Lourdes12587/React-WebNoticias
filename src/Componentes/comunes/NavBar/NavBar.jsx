import React from 'react'
import { NavbarContainer, NavbarWrapper, Menu, MenuItem } from './NavNuevoStyled'

const Navbar= () => {

    return (
    <div>
        <NavbarContainer>
            <NavbarWrapper>
                <Menu>
                    <MenuItem>
                        Noticias de Hoy
                    </MenuItem>
                    <MenuItem>
                        Mendoza, 27 de Junio 2023
                    </MenuItem>
                </Menu>
            </NavbarWrapper>
        </NavbarContainer>
    </div>
  )
}

export default Navbar
