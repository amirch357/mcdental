import React from 'react';
import { Box,Container,Grid, Typography,Link } from '@mui/material';
import "../layout.css"
function Footer() {
    return (  
        <Box component="div" className='footer-banner' >
          <Container sx={{pt:35}}>
            <Grid container >
                <Grid item lg={4} md={4} xs={12} sx={{mt:{lg:0,md:0,xs:20}}} >
                    <Typography className='footer-title'>Hours</Typography>
                    <Typography className='footer-desc' >Mon – Sat: 9.30am – 6.00pm</Typography>
                    <Typography className='footer-desc' >Sundays and Statutory Holidays closed</Typography>
                </Grid>
                <Grid item lg={4} md={4} xs={12}>
                <Typography className='footer-title'>Contact</Typography>
                <Link href='mailto:info@mc2dent' underline='none' >  <Typography className='footer-desc' >info@mc2dental.ca</Typography> </Link>
                <Link href='tel:604.266.8602' underline='none' >  <Typography className='footer-desc' >(T) 604.266.8602</Typography> </Link>
                <Link href='fax:604.266.8670' underline='none' >  <Typography className='footer-desc' >(F) 604.266.8670</Typography> </Link>
                </Grid>
                <Grid item lg={4} md={4} xs={12} >
                <Typography className='footer-title'>Address</Typography>
                <Typography className='footer-desc'>490 West 64th Ave Vancouver, BC V5X 2M1 <br />Canada</Typography>
                </Grid>
            </Grid>
            <Grid container sx={{pt:5,pb:5}}>
            <Grid item lg={4} md={4} sm={4} xs={12} sx={{display:{lg:"block",md:"block",sm:"block",xs:"flex"},justifyContent:"center"}} >
                <Link underline='none' href="/">
                <img src={require("../../assets/Mc dental/logo-white.png")} />
                </Link>
            </Grid>
            <Grid item lg={8} md={8} sm={8} xs={12} sx={{display:"flex",alignItems:"center",justifyContent:{lg:"end",md:"end",sm:"end",xs:"center"}}} >
               <Grid container  > 
               <Grid item lg={8} md={7} sm={6} xs={12} sx={{display:"flex",alignItems:"center",justifyContent:{lg:"end",md:"end",sm:"end",xs:"center"}}} > 
               <Typography className='copy-right-text' >2023 by MC <c2 >2</c2> Dental.  </Typography>
               </Grid>
               <Grid item lg={4} md={5} sm={6} xs={12}  sx={{display:"flex",alignItems:"center",justifyContent:{lg:"start",md:"start",sm:"start",xs:"center"}}} >
                <Typography className='copy-right-text2' >  Powerd by <Link color="#FFF" href='https://explorelogics.com/' >explore logics</Link></Typography></Grid> 
               </Grid>
            </Grid>
            </Grid>
          </Container>
        </Box>
    );
}

export default Footer;