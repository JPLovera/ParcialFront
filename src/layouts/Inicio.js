import React from 'react';
import BarraBusqueda from '../components/BarraBusqueda';
import Info from '../components/Info';
import Contact from '../components/Contact';
import { Toolbar } from '@mui/material';
import { Box } from '@mui/system';

const Inicio = () => {
  return (
    <Box sx={{}}>
        <BarraBusqueda/>
        <Toolbar/>
        <Info/>
        <Toolbar/>
        <Contact/>

    </Box>
  )
}

export default Inicio