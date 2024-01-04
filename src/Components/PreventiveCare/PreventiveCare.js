import React from 'react';
import { Box,Container,Grid,Typography } from '@mui/material';
import "../components.css"

function PreventiveCare() {
    return ( 
        <Box>
        <Container>
            <Grid container >
                <Grid item lg={6}  md={6} xs={12} sx={{display:{lg:"block", md:"block",xs:"flex"},justifyContent:"center"}} >
                    <img src={require("../../assets/Mc dental/PREVENTIVE-CARE.jpg")}  className='specialties-img' />
                </Grid>
                <Grid item lg={6} md={6} xs={12} sx={{display:{lg:"block",xs:"flex"},textAlign:{lg:"start",xs:"center"},flexDirection:"column",my:{lg:0,xs:5}}} >
                    <Typography className='spec-compo-title'>PREVENTIVE CARE</Typography>
                    <Typography className='spec-compo-desc' >
                    With modern science on what causes most dental problems, many issues can be prevented outright if seen early. This includes cavities, bite problems, and gum disease, as well as minimizing the risk of oral cancer. This can help people save money, time, and frustration. Our team will always strive to prevent problems before they occur, and evaluate individual needs for preventive care, such as diet and habit modifications, the use of fluoride and other adjuncts, and personal self care instructions.


                    </Typography>
                </Grid>
            </Grid>
        </Container>
    </Box>
     );
}

export default PreventiveCare;