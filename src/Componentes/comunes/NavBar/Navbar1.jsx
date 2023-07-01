import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

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
        </Toolbar>
      </AppBar>
    </Box>
  );
}