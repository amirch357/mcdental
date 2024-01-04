import React from 'react';
import { Box,Container,Typography } from '@mui/material';
function RootCanalTherapy() {
    return ( 
        <>
         <Container>
            <Box>
                <Typography className='peridontal-therapy-title' >Root Canal Therapy</Typography>
                <Typography className='peridontal-therapy-desc' >
                After a root canal is completed, there may still be residual tenderness associated with the tooth in question due to inflammation. Please take an over the counter analgesic such as Ibuprofen or Acetaminophen if needed for a few days, making sure to follow the instructions on the label of the medication.
                </Typography>
                <Typography className='peridontal-therapy-desc' >
                If the root canal was done on a premolar or a molar, it is generally recommended to restore the tooth with a crown to prevent the tooth from fracturing as the back teeth do most of the chewing work in our mouths.
                </Typography>
            </Box>
        </Container>
        </>
     );
}

export default RootCanalTherapy;