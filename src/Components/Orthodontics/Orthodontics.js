import React from 'react';
import { Box,Container,Grid,Typography } from '@mui/material';
import "../components.css"

function Orthodontics() {
    return ( 
        <Box>
        <Container>
            <Grid container >
                <Grid item lg={6} md={6} xs={12} sx={{display:{lg:"block", md:"block",xs:"flex"},justifyContent:"center"}} >
                    <img src={require("../../assets/Mc dental/ORTHODONTICS.jpg")}  className='specialties-img' />
                </Grid>
                <Grid item lg={6} md={6} xs={12} sx={{display:{lg:"block",xs:"flex"},textAlign:{lg:"start",xs:"center"},flexDirection:"column",my:{lg:0,xs:5}}} >
                    <Typography className='spec-compo-title'>ORTHODONTICS</Typography>
                    <Typography className='spec-compo-desc' >
                    Orthodontics (braces) are used to correct one's teeth alignment and bite, with the goal of providing esthetics AND function that harmonizes our teeth, our muscles, and our temporomandibular joint. If you have a desire for braces, we will provide you with a consultation and see what needs to be done.


                    </Typography>
                </Grid>
            </Grid>
        </Container>
    </Box>
     );
}

export default Orthodontics;