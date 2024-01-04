import React from 'react';
import { Box,Container,Typography } from '@mui/material';
function DirectRestorations() {
    return (  
        <>
          <Container>
            <Box>
                <Typography className='direct-restoration-title' >Direct Restorations</Typography>
                <Typography className='direct-restoration-desc' >
                After having a cavity restored, if you feel that the filling is “high” when you next eat a meal, please give us a call back so we can adjust it for you promptly.
                </Typography>
                <Typography className='direct-restoration-desc' >
                If the cavity was deep, you may experience some tenderness due to irritation to the nerve of the tooth. It should subside within a week, but if the discomfort worsens, please give us a call.
                </Typography>
            </Box>
        </Container>
        </>
    );
}

export default DirectRestorations;