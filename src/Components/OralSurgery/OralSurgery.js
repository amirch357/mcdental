import React from 'react';
import { Box,Container,Typography,Button,Link } from '@mui/material';
function OralSurgery() {
    return ( 
        <>
        <Container>
            <Box sx={{textAlign:"center"}} >
                <img src={require("../../assets/patien info/48b9fa968b5142fb2bb348b5d9d4c780.webp")} />
            <Typography sx={{mt:2,mb:4}}  className='direct-restoration-title' >Oral Surgery</Typography>
           <Link underline='none' href="https://mc2dental.ca/wp-content/uploads/2023/01/os_poi.pdf"> <Button className='header-btn' variant="contained" sx={{textDecoration:"none"}}  >Download PDF</Button></Link>
            </Box>
        </Container>
        </>
     );
}

export default OralSurgery;