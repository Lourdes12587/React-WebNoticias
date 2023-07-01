import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { IoLogoFacebook, IoLogoWhatsapp, IoLogoInstagram} from "react-icons/io";

export default function Navbar1 () {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{background:"#1d1a1a"}}>
        <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1}} style={{ fontFamily: 'Bai Jamjuree'}}>
            NOTICIAS DE HOY
        </Typography>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1}} style={{ fontFamily: 'Bai Jamjuree'}}>
            Mendoza, 29 de Junio del 2023
        </Typography>
        <Link to='/' style={{ paddingLeft: '2rem'}}>
          <IoLogoFacebook size={"3em"} />
        </Link>
        <Link to='/' style={{ paddingLeft: '2rem'}}>
          <IoLogoWhatsapp size={"3em"}/>
        </Link>
        <Link to='/' style={{ paddingLeft: '2rem' }}>
          <IoLogoInstagram size={"3em"} />
        </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}