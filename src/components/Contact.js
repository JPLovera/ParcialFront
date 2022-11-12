import { Box, Toolbar, Typography } from '@mui/material'
import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';

const Contact = () => {
  return (
    <Box>
        <Box component='footer' sx={{display:'flex', justifyContent:'center'}}>
            <Box>
                <Toolbar>
                    <LocationOnIcon/>
                    <Typography>Posadas Misiones</Typography>
                </Toolbar>
                <Toolbar>
                    <LanguageIcon/>
                    <Typography>Link</Typography>
                </Toolbar>
            </Box>
            <Box>
                <Toolbar>
                    <TwitterIcon/>
                    <Typography>Twitter</Typography>
                </Toolbar>
                <Toolbar>
                    <GitHubIcon/>
                    <Typography>@GitHub</Typography>
                </Toolbar>
            </Box>
        </Box>




    </Box>
  )
}

export default Contact