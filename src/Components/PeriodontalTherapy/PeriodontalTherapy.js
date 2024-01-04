import React from 'react';
import { Box,Container,Grid,Typography } from '@mui/material';
import "../components.css"

function PeriodontalTherapy() {
    return ( 
        <Box>
        <Container>
            <Grid container >
                <Grid item lg={6}  md={6} xs={12} sx={{display:{lg:"block", md:"block",xs:"flex"},justifyContent:"center"}} >
                    <img src={require("../../assets/Mc dental/periodontal-therapy.jpg")}  className='specialties-img' />
                </Grid>
                <Grid item lg={6} md={6} xs={12} sx={{display:{lg:"block",xs:"flex"},textAlign:{lg:"start",xs:"center"},flexDirection:"column",my:{lg:0,xs:5}}} >
                    <Typography className='spec-compo-title'>PERIODONTAL THERAPY</Typography>
                    <Typography className='spec-compo-desc' >
                    The surrounding structures that provide the foundation of our teeth is the periodontium. Many factors can cause this to become inflamed and diseased, the chief of which is bacterial plaque. If left untreated, this could cause receding gums, wiggly teeth, and tooth loss. We will evaluate your oral condition and provide individualized treatment options for each of our patients to maintain a healthy periodontium.


                    </Typography>
                </Grid>
            </Grid>
        </Container>
    </Box>
     );
}

export default PeriodontalTherapy;