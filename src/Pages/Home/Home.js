import React, { useState,useEffect } from 'react';
import { Box, Typography, Button, Container, Grid, Link, Card, CardActions, CardMedia, CardContent,TextField,InputAdornment,OutlinedInput } from '@mui/material';
import "../pages.css"
import Header from '../../Layout/Header/Header';
import ButtonGroup from '../../Components/ButtonGroup/ButtonGroup';
import DigitalXRY from '../../Components/DigitalXRY/DigitalXRY';
import PreventiveCare from '../../Components/PreventiveCare/PreventiveCare';
import PeriodontalTherapy from '../../Components/PeriodontalTherapy/PeriodontalTherapy';
import Orthodontics from '../../Components/Orthodontics/Orthodontics';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { GoogleMap, useJsApiLoader, MarkerF, InfoWindowF } from '@react-google-maps/api';
import {FaPhoneVolume} from "react-icons/fa"
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import {HiOutlinePencilSquare} from "react-icons/hi2"
import {TbBrandTelegram} from "react-icons/tb"
import { POSTS } from '../../Data/Data';
import { useNavigate } from 'react-router-dom';
import slugify from 'slugify';
import axios from 'axios';
function Home() {
    useEffect(()=>{window.scrollTo(0,0)},[])
    const [active, setActive] = useState(0)
    const [loading, setLoading] = useState()
    const navigate=useNavigate()
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [phone,setPhone] = useState("")
    const [message,setMessage] = useState("")
    const [nameError,setNameError] = useState(false)
    const [emailError,setEmailError] = useState(false)
    const [phoneError,setPhoneError] = useState(false)
    const [messageError,setMessageError] = useState(false)
    const [validEmail,setValidEmail] = useState(false)
    const [phoneValid,setPhoneValid] = useState(false)
    const [status,setStatus] = useState()
    const containerStyle = {
        width: '100%',
        height: '400px'
    };
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: "AIzaSyBy2l4KGGTm4cTqoSl6h8UAOAob87sHBsA"
    })
   
    const buttons = [
        {
            label: "EXAMS AND DIGITAL X-RAYS",
            image: require("../../assets/Mc dental/EXAMS-AND-DIGITAL-X-RAYS.png")
        },
        {
            label: "PREVENTIVE CARE",
            image: require("../../assets/Mc dental/PREVENTIVE-CARE2.png")
        },
        {
            label: "PERIODONTAL THERAPY",
            image: require("../../assets/Mc dental/PERIODONTAL-THERAPY.png")
        },
        {
            label: "ORTHODONTICS",
            image: require("../../assets/Mc dental/ORTHODONTICS-IC-1.png")
        },

    ]
    const pressed = (id) => {
        setActive(id)
    }
    const sendMessage=()=>{
        if(name.length===0){
            setNameError(true)
        }else{
            setNameError(false)
        }
        if(email.length===0){
            setEmailError(true)
        }else{
            setEmailError(false)
        }
        if(phone.length===0){
            setPhoneError(true)
        }else{
            setPhoneError(false)
        }
        if(message.length===0){
            setMessageError(true)
        }else{
            setMessageError(false)
        }
        if(email.length!==0 && !email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)  ){
            setValidEmail(true)
        }else{
            setValidEmail(false)
        }
        if(phone.length!==0 && !phone.match('^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$')){
            setPhoneValid(true)
        }else{
            setPhoneValid(false)
        }
        if(name.length!==0 && email.length!==0 && phone.length!==0 && message.length!==0 && email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/) && phone.match('^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$')){
            const data = new FormData();
            data.append('fullname', name);
            data.append('email', email);
            data.append('phone', phone);
            data.append('message', message);

  fetch('https://explorelogicsit.com/mc2dental_new/api/send_email.php', {
    method: 'POST',
    body: data
  })
  .then(response => {
    response.json() 
    
    console.log(response.status)
    setStatus(response.status)
    if(response.status===200){
        setEmail("")
        setName("")
        setPhone("")
        setMessage("")
    }
})
   
  .catch(error => {
    console.error(error);
  });
        }
        
    }
    const handleNavigate=(id,title,image,date,detail)=>{
        const url = slugify(title,{lower:true})
        navigate(`/mc2dental_new/blog/?${url}`,{state:{id:id,image:image,title:title,date:date,detail:detail}})
      
        
    }
       
    return (
        <>
            <Box component="div" className='home-banner' >
                <Header />
                <Container sx={{paddingLeft:{lg:25,md:10,sm:5,xs:2}}} >
                <Box sx={{ paddingTop: 32 }} >
                    <Typography className='header-title' >
                        WELCOME TO<br />
                        MC<sup className='sup'>2</sup> DENTAL
                    </Typography>

                </Box>
                <Box sx={{ marginTop: 3 }}>
                    <Typography className='home-desc' >
                        We are a family-owned dental clinic that has been providing<br /> comprehensive care to families in Vancouver for over 15<br /> years. Ethics, honesty, and transparency are at the forefront<br /> of our treatment philosophy.
                    </Typography>
                </Box>
               
                <Box sx={{  marginTop: 6, paddingBottom: 30 }}>
                    <Button className='home-btn' variant="contained" onClick={()=>{
                        let contact = document.getElementById("contact")
                        contact&&contact.scrollIntoView({behavior:"smooth",block:"start"})
                    }} >Contact Us</Button>
                </Box>
                </Container>
            </Box>
            <Box component="div" className='about-banner' >
            </Box>
            <Container>
                <Grid container className='grid-container' >
                    <Grid item lg={6} md={6} xs={12} sx={{ display: "flex", marginTop: 20,justifyContent:{lg:"start",md:"center",xs:"center"} }} >
                        <img src={require("../../assets/Mc dental/sdsdsdwdw-300x294.png")} className="about-img" />
                    </Grid>
                    <Grid item lg={6} md={6} >
                        <Typography sx={{textAlign:{sm:"center",xs:"center"}}} className='about-title' >ABOUT</Typography>
                        <Typography sx={{textAlign:{sm:"center",xs:"center"}}} className='about-sub-title' >Our Philosophy</Typography>
                        <Typography className='about-desc'>We believe in building trust and rapport with our patients and staff through honest opinions and options. We are a family owned practice that spans two generations, and we are confident in providing care that you believe in for you and your family.</Typography>
                        <Typography className='about-desc'>We also know that any work is only as good as its materials, and for that reason, we are proud to use biomaterials from trusted and reputable companies from Germany, USA, and Japan.</Typography>
                        <Typography className='about-desc'>We are aware of the importance of infection control to our staff and patients, and we strictly adhere to the College of Dental Surgeons of British Columbia’s Infection Prevention and Control Guidelines.</Typography>
                        <Typography className='about-desc'>The world is changing at a rapid rate, and dentistry is no exception. We keep up with current research and updates in the techniques and materials used in order to deliver outstanding results that will keep you smiling.</Typography>
                        <Typography className='about-desc-2 pt-3' >“The professional man has no right to be other than a continuous student.” – G.V Black, the father of modern dentistry.</Typography>
                    </Grid>

                </Grid>
                <Container>
                <Typography className='spec-title'>Specialties</Typography>
                <Typography className='spec-title-2' >Specialties available at MC<sup className='sup'>2</sup> Dental</Typography>
                </Container>
                <Box sx={{ mt: 5, mb: 5 }}>
                    <ButtonGroup buttons={buttons} pressed={pressed} />

                </Box>
                <Box>
                    {active === 0 ? <DigitalXRY /> :
                        active === 1 ? <PreventiveCare /> :
                            active === 2 ? <PeriodontalTherapy /> :
                                active === 3 ? <Orthodontics /> :
                                    ""
                    }
                </Box>
                <Box onClick={()=>navigate("/mc2dental_new/services")} sx={{pb:{lg:0,xs:5}}} component="div" className='service-btn-container' >
                    <Button className='service-btn' variant="contained" >View All Services</Button>
                </Box>

            </Container>
            <Box component="div" className='appoint-container' >
                <Container>
                    <Typography className='appoint-title' >APPOINTMENT</Typography>
                    <Typography className='appoint-title-2' >Schedule an Appointment</Typography>
                    <Grid container >
                        <Grid item lg={6} md={12} sx={{ marginBottom: 8,display:{lg:"block",xs:"flex"},justifyContent:"center"}}  >
                            <img src={require("../../assets/Mc dental/appointment.png")} className="appoint-img" />
                        </Grid>
                        <Grid item lg={6} md={6} >
                            <Typography className='appoint-title-3' >Patient Information</Typography>
                            <Typography className='appoint-desc'>
                                Please call us at <Link underline="none" className='appoint-link'>604.266.8602</Link> to schedule an appointment. We will try to get you in at a convenient time for you as soon as possible.
                            </Typography>
                            <Typography className='appoint-desc'>
                                If you have an emergency or are in pain, every attempt will be made to see you that day.
                            </Typography>
                            <Typography className='appoint-desc'>
                                When you arrive, please check in with the front desk, and there may be a short wait as unexpected delays and situations may have occurred. We greatly appreciate your patience.
                            </Typography>
                        </Grid>
                        <Grid lg={6} >
                            <Typography className='appoint-desc'>On your first visit, please assist us by providing the following information:</Typography>
                            <Box component="ol" className='appoint-ol' >
                                <Typography component="li" className='appoint-li' >A list of medications you are currently taking</Typography>
                                <Typography component="li" className='appoint-li' >Any x-rays that may have been taken recently at another dental office. These can be forwarded to us through e-mail at <Link underline="none" className='appoint-link'>info@mc2dental.ca</Link></Typography>
                                <Typography component="li" className='appoint-li' >Any information regarding your dental insurance? This will help us greatly expedite the process of filing your claims.</Typography>
                            </Box>
                            <Typography className='appoint-desc'>Please also let us know if you have a medical condition that may be of concern (eg. diabetes, high blood pressure, heart, liver, or kidney diseases) and any allergies you may have. We are dedicated to providing you with a safe level of care, and a thorough medical history will help us do so.</Typography>
                        </Grid>
                        <Grid item lg={6} sx={{ textAlign: "center",mt:{lg:0,xs:5} }} >
                            <img src={require("../../assets/Mc dental/map.png")} className="appoint-img" />
                        </Grid>
                    </Grid>
                    <Box component="div" className='service-btn-container' >
                        <Button onClick={()=>navigate("/mc2dental_new/patient-information")} className='service-btn' variant="contained" >Read More</Button>
                    </Box>
                </Container>
            </Box>
            <Box component="div" className='staff-container' id="ourTeam" >
                <Container>
                    <Typography className='staff-title' >STAFF</Typography>
                    <Typography className='staff-title-2' >Our experienced dentists</Typography>
                    <Grid container sx={{ justifyContent: "center" }} >
                        <Grid lg={5} >
                            <Typography className='staff-title-3' >Our dentists and staff are here to help. We strive to be professional, knowledgeable, and friendly. Let us know if you ever have any questions or concerns.</Typography>
                        </Grid>
                    </Grid>
                    <Grid container sx={{ mt: 10, justifyContent: "space-around" }}   >
                        <Grid item lg={3}  md={3} xs={12} sx={{display:{lg:"block",md:"block",xs:"flex"},justifyContent:"center"}}  >
                            <img src={require("../../assets/Mc dental/choty-dand-200x300.jpg")} className="staff-img" />
                        </Grid>
                        <Grid lg={8} md={8} xs={12} sx={{ mb: 10,textAlign:{lg:"start",md:"start",xs:"center"} }} >
                            <Typography className='staff-title-4' >JUI-FENG RAY YU, DDS</Typography>
                            <Typography className='staff-sub-title'>Dentist</Typography>
                            <Typography className='staff-desc' >
                                Dr. Ray Yu was born and raised in Taiwan. He attended the prestigious Jianguo High School in Taipei and proceeded to study dentistry at Kaohsiung Medical University and graduated in 1987. While practicing in Taipei, he received an offer to attend Northwestern University in Chicago to complete a Doctor of Dental Surgery program. After graduating in 1994 from Northwestern while completing the American Northeast Regional Exam Board and the American National Board Dental Examination, he then moved to Vancouver. He completed the Canadian National Dental Exam Board. Since 1998, he has been practicing dentistry in Vancouver while holding an active license in Illinois. He is passionate about learning and using the newest techniques and biomaterials available in dentistry by attending multiple continuing education courses in different disciplines.
                            </Typography>
                            <Typography className='staff-desc'>
                                He is incredibly proud to provide quality dentistry with a smile and a light-hearted attitude. He enjoys watching movies, hikes, and his wife’s fantastic cooking in his spare time. He has previously been invited onto Fairchild Radio and Talentvision to give Q&As for dentistry. Dr. Yu is an active member of the Canadian Dental Association, the BC Dental Association, the College of Dental Surgeons of BC, and the American Dental Association.
                            </Typography>
                        </Grid>
                        <Grid item lg={8} md={8} xs={12} sx={{ mb: 10,textAlign:{lg:"start",md:"start",xs:"center"} }} >
                            <Typography className='staff-title-4' >JOEY CHI-CHENG YU, DMD</Typography>
                            <Typography className='staff-sub-title'>Dentist</Typography>
                            <Typography className='staff-desc' >
                                Dr. Joey Yu was born in Taiwan and raised in Vancouver. He received a BSc from UBC majoring in Chemistry. He then moved to the east coast to attend Boston University’s Henry M. Goldman School of Dental Medicine and graduated magna cum laude upon receiving his DMD degree. In his final year of dental school, he completed the American Western Regional Exam Board, granting him licensure access to up to 35 American states. He also simultaneously completed the American National Board Dental Exam and the Canadian National Dental Exam Board.
                            </Typography>
                            <Typography className='staff-desc'>
                                He enjoys providing welcoming care to patients in a friendly and inviting manner. Dr. Joey is an active member of the Canadian Dental Association, the BC Dental Association, the College of Dental Surgeons of BC, and the American Dental Association. He is currently attending continuing education courses on restorative dentistry and endodontics to provide improved evidence-based care. He also teaches dental students as a clinical instructor at UBC’s Faculty of Dentistry. He enjoys staying “relatively” fit and sharing funny moments with family and friends on his days off.
                            </Typography>
                        </Grid>
                        <Grid item lg={3} md={3} xs={12} sx={{display:{lg:"block",md:"block",xs:"flex"},justifyContent:"center"}}  >
                            <img src={require("../../assets/Mc dental/wady-dand-683x1024.jpg")} className="staff-img" />
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Box component="div" className='blog-container' sx={{ pb: 5 }} >
                <Box component="div" className='blog-wave'></Box>
                <Typography className='staff-title' >BLOG</Typography>
                <Typography className='staff-title-2' >What is new at MC<sup className='sup' >2</sup> Dental</Typography>
                <Grid container sx={{ justifyContent: "center" }} >
                    <Grid lg={5} >
                        <Typography className='staff-title-3' >A team of expert doctors that are leading our clinic! Meet our staff and visit us for your next problem!</Typography>
                    </Grid>
                </Grid>
                <Container>
                    <Grid container sx={{ mt: 5 }} spacing={1}  >
                        {POSTS.slice(0,3).map((item)=>(
                        <Grid item lg={4} md={4} sm={4}  xs={12} >
                            <Card  className="blog-card"  >
                                <CardMedia
                                    component="img"
                                    className='blog-img'
                                    image={item.image}
                                    title="green iguana"
                                    onClick={()=>handleNavigate( item.id, item.title,item.image,item.date,item.detail)}
                                />
                                <CardContent>
                                    <Typography gutterBottom className="blog-card-title" >
                                       {item.title}
                                    </Typography>
                                    <Typography   className='card-desc'>
                                       {item.desc.substring(0, 90)}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button className='blog-card-btn' onClick={()=>handleNavigate( item.id, item.title,item.image,item.date,item.detail)} size="small" endIcon={<div className='blog-btn-icons'><NavigateNextIcon fontSize='small' sx={{ mr: -1.8 }} /> <NavigateNextIcon fontSize='small' sx={{ mr: -1.8 }} /></div>}  >Read more</Button>

                                </CardActions>
                            </Card>
                        </Grid>
                        ))}
                        {/* <Grid item lg={4} >
                            <Card sx={{ maxWidth: 345 }} className="blog-card" >
                                <CardMedia
                                    component="img"
                                    className='blog-img'
                                    image={require("../../assets/blog/candy-teeth.webp")}
                                    title="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom className="blog-card-title" >
                                        Eating Candy: The Do’s
                                    </Typography>
                                    <Typography className='card-desc'>
                                        Now that Halloween has come and gone, many of us have a stash of chocolates and candies available to eat.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button className='blog-card-btn' size="small" endIcon={<div className='blog-btn-icons'><NavigateNextIcon fontSize='small' sx={{ mr: -1.8 }} /> <NavigateNextIcon fontSize='small' sx={{ mr: -1.8 }} /></div>}  >Read more</Button>

                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item lg={4} >
                            <Card sx={{ maxWidth: 345 }} className="blog-card" >
                                <CardMedia
                                    component="img"
                                    className='blog-img'
                                    image={require("../../assets/blog/118b5d_b1bdbc7be909416e9cb1c088a8edde35_mv2.webp")}
                                    title="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom className="blog-card-title" >
                                        Common Myths in Dentistry
                                    </Typography>
                                    <Typography className='card-desc'>
                                        In dentistry, there are some common misconceptions and myths that deter people from regular visits to their dental
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button className='blog-card-btn' size="small" endIcon={<div className='blog-btn-icons'><NavigateNextIcon fontSize='small' sx={{ mr: -1.8 }} /> <NavigateNextIcon fontSize='small' sx={{ mr: -1.8 }} /></div>}  >Read more</Button>

                                </CardActions>
                            </Card>
                        </Grid> */}
                    </Grid>
                    <Box component="div" className='service-btn-container' >
                        <Button className='service-btn' variant="contained" onClick={()=>navigate("/mc2dental_new/blogs")} >View All Blogs</Button>
                    </Box>
                </Container>


            </Box>
            <Box  id="contact"  component="div" className='contact-container' sx={{mt:5}} >
                <Container sx={{pb:10}}>
                    <Grid container spacing={2} >
                        <Grid item lg={7} md={7} sm={7} >
                            { !isLoaded?<div>Loading....</div>:
                            <GoogleMap
                                mapContainerStyle={containerStyle}
                                center={{ lat: -3.745, lng: -38.523 }}
                                zoom={10}
                                

                            >
                                <MarkerF position={{ lat: -3.745, lng: -38.523 }} />
                            </GoogleMap>
                            }
                            <Typography className='contact-desc' >Our location is easily accessible by Canada Line. We are a less than 5-minute walk from Marine Drive Station.</Typography>
                            <Typography className='contact-desc'>Parking is available around the neighborhood and along w. 64th Avenue has 2-hour free parking spots (please pay attention to the signs).</Typography>
                            <Typography className='contact-desc' >Bike racks are conveniently located right outside our office.</Typography>
                        </Grid>
                        <Grid item lg={5} md={5} sm={5} xs={12}  sx={{position:"relative"}} >
                            <Card className='contact-card'>
                                <Typography  className='form-title' >Send us a message</Typography>
                                
                                <OutlinedInput  value={name} onChange={(e)=>setName(e.target.value)} placeholder='Full name' className='input-field' 
                                startAdornment={<InputAdornment position='start'>
                                <PermIdentityIcon  />
                                </InputAdornment>}
                                
                                />
                                {nameError===true?<Typography className='message-error' >The field is required</Typography>:""}
                               
                                <OutlinedInput  value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email Address'  className='input-field' 
                                 startAdornment={<InputAdornment position='start'>
                                 <MailOutlineIcon  />
                                 </InputAdornment>}
                                />
                                 {emailError===true?<Typography  className='message-error' >The field is required</Typography>:validEmail===true?<Typography  className='message-error' >The email address enterd is invalid</Typography>:""}
                                <OutlinedInput  value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder='Phone number' className='input-field' 
                                  startAdornment={<InputAdornment position='start'>
                                  <FaPhoneVolume fontSize={20}  />
                                  </InputAdornment>}
                                />
                                 {phoneError===true?<Typography  className='message-error' >The field is required</Typography>:phoneValid===true?<Typography  className='message-error' >The phone number enterd is invalid</Typography>:""}
                                <OutlinedInput  value={message} onChange={(e)=>setMessage(e.target.value)} placeholder='Message...' multiline rows={7} className='input-field-text' 
                                 startAdornment={<InputAdornment position="start">
                                 <HiOutlinePencilSquare fontSize={20}  />
                                 </InputAdornment>}
                                />
                                 {messageError===true?<Typography  className='message-error' >The field is required</Typography>:""}
                                {status===200?
                                 <Box component="div" className='toast-container' >
                                    <Typography className='toast-text' >Thank you for your message. It has been sent.</Typography>
                                </Box>
                                :""}
                                <Button onClick={sendMessage} className='contact-btn' variant='contained' >
                                <TbBrandTelegram className='contact-btn-svg'  />
                                </Button>
                            </Card>
                           
                               
                               
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Box sx={{mt:5}}>
            <Typography className='partner-title' >PARTNERS</Typography>
            <Typography className='partner-sub-title' >Our Brand Partners</Typography>
            <Container sx={{mb:5}} >
                <Grid container spacing={5} sx={{mt:5}} >
                    <Grid item lg={2.25} md={2.25} xs={12} sx={{display:{lg:"block",md:"block",xs:"flex"},justifyContent:"center"}} >
                       <Link underline='none' href='https://www.mouthhealthy.org/' > <img  src={require("../../assets/Mc dental/wefwefef.png")} className="partner-img" /></Link>
                    </Grid>
                    <Grid item lg={2.25} md={2.25} xs={12} sx={{display:{lg:"block",md:"block",xs:"flex"},justifyContent:"center"}} >
                        <Link underline='none' href='https://www.yourdentalhealth.ca/' ><img  src={require("../../assets/Mc dental/aweqweqwe.png")}  className="partner-img"/></Link>
                    </Grid>
                    <Grid item lg={2.25} md={2.25} xs={12} sx={{display:{lg:"block",md:"block",xs:"flex"},justifyContent:"center"}} >
                     <Link underline='none' href="https://www.mouthhealthy.org/all-topics-a-z/eruption-charts/" >    <img  src={require("../../assets/Mc dental/qsdsdfsdf.png")}  className="partner-img"/></Link>
                    </Grid>
                    <Grid item lg={2.25} md={2.25} xs={12} sx={{display:{lg:"block",md:"block",xs:"flex"},justifyContent:"center"}} >
                       <Link underline='none' href="https://oralhealthbc.ca/" > <img src={require("../../assets/Mc dental/rtrfgef.png")}  className="partner-img"/></Link>
                    </Grid>
                    <Grid item lg={2.25} md={2.25} xs={12} sx={{display:{lg:"block",md:"block",xs:"flex"},justifyContent:"center"}} >
                      <Link underline='none' href="https://www.cda-adc.ca/" >  <img  src={require("../../assets/Mc dental/cda-logo_e_h.jpg")}  className="partner-img"/></Link>
                    </Grid>
                </Grid>
            </Container>
            </Box>

        </>
    );
}

export default Home;