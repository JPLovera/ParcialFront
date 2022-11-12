import React from 'react'
import { useState } from 'react';
import { Box } from '@mui/system'
import { AppBar, Toolbar, InputBase, Typography} from '@mui/material'
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));

const BarraBusqueda = () => {

  
  

  return (
    <Box>
        <AppBar sx={{backgroundColor:'#fdcae1'}}>
            <Toolbar sx={{display:'flex', justifyContent:'center'}}>
                <Search sx={{display:'flex'}}>

                <SearchIcon/>
                    <InputBase placeholder='Usuario de GitHub'>
                    
                    </InputBase>

                </Search>
            </Toolbar>
        </AppBar>

    </Box>
  )
}

export default BarraBusqueda