import React from 'react';
import { Box,Container,Grid,Typography } from '@mui/material';
import "../components.css"
function DigitalXRY() {
    return ( 
        <Box>
            <Container  >
                <Grid container >
                    <Grid item lg={6} md={6} xs={12} sx={{display:{lg:"block", md:"block",xs:"flex"},justifyContent:"center"}} >
                        <img src={require("../../assets/Mc dental/x-ray.jpg")} className='specialties-img' />
                    </Grid>
                    <Grid item lg={6} md={6} xs={12} sx={{display:{lg:"block",xs:"flex"},textAlign:{lg:"start",xs:"center"},flexDirection:"column",my:{lg:0,xs:5}}} >
                        <Typography className='spec-compo-title'>EXAMS ANDDIGITALX-RAYS</Typography>
                        <Typography className='spec-compo-desc' >
                        As a new patient, our dentists will evaluate your oral system to comprehensively determine what treatment options are recommended. This involves evaluating each tooth, checking for any signs of gum disease, biting problems, and also an oral cancer screening exam. Our office also provides digital x-rays. Advantages of this include an instantaneous image of the area captured displayed on a monitor which allows chairside education with you to determine what’s going on. Digital x-rays also provide a more detailed resolution than films, making earlier detection and treatment of problems a reality. Most importantly, digital x-rays decreases radiation exposure by up to 90% compared to films.


                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
     );
}

export default DigitalXRY;