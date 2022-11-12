import { Box, Button, Paper, Typography } from '@mui/material'
import React from 'react'
import ImagenGitHub from '../assets/img/github_PNG15.png'
import TablaPersonas from './TablaPersonas'

const Info = () => {
  return (
    <Box sx={{display:'flex',justifyContent:'center'}}>
        <Box>
        <picture>
            <img src={ImagenGitHub} alt='gatito'/>
        </picture>
        </Box>
        <Box component='section'>
            <Box component='div'>
                <Typography variant='h4'>Octocat</Typography>
                <Typography variant='h6'>@Octocat</Typography>
                <Typography variant='h6'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</Typography>
                <Paper sx={{}}>
                    <TablaPersonas/>
                </Paper>
            </Box>
        </Box>
    </Box>
  )
}

export default Info