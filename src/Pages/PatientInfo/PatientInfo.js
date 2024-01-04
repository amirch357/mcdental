import React,{useEffect,useState} from 'react';
import { Box,Typography,Container,Grid,Link } from '@mui/material';
import "../pages.css"
import Header from '../../Layout/Header/Header';
import ButtonGroup from '../../Components/ButtonGroup/ButtonGroup';
import PeriodontalTherapy from '../../Components/PeriodontalTherapy-2/PeriodontalTherapy';
import DirectRestorations from '../../Components/DirectRestorations/DirectRestorations';
import RootCanalTherapy from '../../Components/RootCanalTherapy/RootCanalTherapy';
import OralSurgery from '../../Components/OralSurgery/OralSurgery';
function PatientInfo() {
    useEffect(()=>{window.scrollTo(0,0)},[])
    const [active, setActive] = useState(0)

    const buttons = [
        {
            label: "Periodontal Therapy",
            image: require("../../assets/patien info/PERIODONTAL-THERAPY.png")
        },
        {
            label: "Direct Restorations",
            image: require("../../assets/patien info/Direct-Restorations.png")
        },
        {
            label: "Root Canal Therapy",
            image: require("../../assets/patien info/root-canal.png")
        },
        {
            label: "Oral Surgery",
            image: require("../../assets/patien info/ORAL-SURGARY-500x500.png")
        },

    ]
    const pressed = (id) => {
        setActive(id)
    }

    return (
        <>
        <Box component="div" className='patient-banner' >
            <Header />
            <Typography className='service-title' >PATIENT INFORMATION</Typography>
        </Box>
        <Box component="div" className='service-wave' />
        <Container sx={{pt:10}}>
        <Grid container >
                        <Grid item lg={6} md={6} sx={{ marginBottom: 8 }} >
                            <img src={require("../../assets/Mc dental/appointment.png")} className="appoint-img" />
                        </Grid>
                        <Grid item lg={6}  md={6} >
                            <Typography className='appoint-title-3' >Patient Information</Typography>
                            <Typography className='appoint-desc'>
                                Please call us at <Link underline="none" href="tel:604.266.8602" className='appoint-link'>604.266.8602</Link> to schedule an appointment. We will try to get you in at a convenient time for you as soon as possible.
                            </Typography>
                            <Typography className='appoint-desc'>
                                If you have an emergency or are in pain, every attempt will be made to see you that day.
                            </Typography>
                            <Typography className='appoint-desc'>
                                When you arrive, please check in with the front desk, and there may be a short wait as unexpected delays and situations may have occurred. We greatly appreciate your patience.
                            </Typography>
                        </Grid>
                        <Grid lg={6} md={6} >
                            <Typography className='appoint-desc'>On your first visit, please assist us by providing the following information:</Typography>
                            <Box component="ol" className='appoint-ol' >
                                <Typography component="li" className='appoint-li' >A list of medications you are currently taking</Typography>
                                <Typography component="li" className='appoint-li' >Any x-rays that may have been taken recently at another dental office. These can be forwarded to us through e-mail at <Link underline="none" href="mailto:info@mc2dental.ca" className='appoint-link'>info@mc2dental.ca</Link></Typography>
                                <Typography component="li" className='appoint-li' >Any information regarding your dental insurance? This will help us greatly expedite the process of filing your claims.</Typography>
                            </Box>
                            <Typography className='appoint-desc'>Please also let us know if you have a medical condition that may be of concern (eg. diabetes, high blood pressure, heart, liver, or kidney diseases) and any allergies you may have. We are dedicated to providing you with a safe level of care, and a thorough medical history will help us do so.</Typography>
                        </Grid>
                        <Grid item lg={6} md={6} sx={{ textAlign: "center" }} >
                            <img src={require("../../assets/Mc dental/map.png")} className="appoint-img-2" />
                        </Grid>
                    </Grid>
        </Container>
        <Box component="div" className='service-banner-2' sx={{mt:15}} >
        <Container>
            <Typography className='service-desc-2' >
            We accept most Canadian dental insurance policies, including ones from Desjardins, Greenshield, Manulife, Pacific Blue Cross, and Sunlife. For your convenience, we submit claims electronically directly to your insurance provider and accept direct payment of benefits from them. At the time of service, we will require your portion of the payment. Please feel free to contact us if you have questions about your insurance policy. We will do our best to have all questions answered.
            </Typography>
        </Container>
        </Box>
        <Box component="div" className='service-wave' />
        <Container sx={{mb:20}} >
            <Typography className='service-title-2' >FACILITY</Typography>
            <Typography className='service-subtitle-2' >POST PROCEDURE INSTRUCTIONS</Typography>
            <Box sx={{ mt: 5, mb: 5 }}>
                    <ButtonGroup buttons={buttons} pressed={pressed} />

                </Box>
                <Box component="div" sx={{mt:10}} >
                    {
                        active===0?<PeriodontalTherapy />:
                        active===1?<DirectRestorations />:
                        active===2?<RootCanalTherapy />:
                        active===3?<OralSurgery />
                    :""}
                </Box>
        </Container>
        </>
      );
}

export default PatientInfo;