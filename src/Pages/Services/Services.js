import React,{useEffect} from 'react';
import { Box,Typography,Grid,Container } from '@mui/material';
import Header from '../../Layout/Header/Header';
import "../pages.css"
function Services() {

useEffect(()=>{window.scrollTo(0,0)},[])

    return ( 
        <>
        <Box component="div" className='service-banner' >
            <Header />
            <Typography className='service-title' >SERVICES</Typography>
        </Box>
        <Box component="div" className='service-wave' />
        <Box component="div" className='service-container' >
        <Container sx={{mt:7,pb:10}} >
            <Grid container spacing={2} sx={{ flexGrow: 1 }} className='service-container2' >
                <Grid lg={3.5} md={12} xs={12} >
                <Box component="div" className='service-img-container' >
                <img  src={require("../../assets/services/EXAMS-AND-DIGITAL-X-RAYS.png")} className="service-img" />
                </Box>
                </Grid>
                <Grid item lg={8.5}  md={12} xs={12} >
                <Typography className='service-sub-title' >EXAMS AND DIGITAL X-RAYS</Typography>
                <Typography className='service-desc'>
                As a new patient, our dentists will evaluate your oral system to comprehensively determine what treatment options are recommended. This involves evaluating each tooth, checking for any signs of gum disease, biting problems, and also an oral cancer screening exam.
                </Typography>
                <Typography className='service-desc'>
                Our office also provides digital x-rays. Advantages of this include an instantaneous image of the area captured displayed on a monitor which allows chairside education with you to determine what’s going on. Digital x-rays also provide a more detailed resolution than films, making earlier detection and treatment of problems a reality. Most importantly, digital x-rays decreases radiation exposure by up to 90% compared to films.
                </Typography>
                </Grid>
                <Grid item lg={8.5}  md={12} xs={12} sx={{mt:{lg:15,xs:0}}}  >
                <Typography className='service-sub-title' >PREVENTIVE CARE</Typography>
                <Typography className='service-desc'>
                With modern science on what causes most dental problems, many issues can be prevented outright if seen early.
                </Typography>
                <Typography className='service-desc'>
                This includes cavities, bite problems, and gum disease, as well as minimizing the risk of oral cancer. This can help people save money, time, and frustration. Our team will always strive to prevent problems before they occur, and evaluate individual needs for preventive care, such as diet and habit modifications, the use of fluoride and other adjuncts, and personal self care instructions..
                </Typography>
                </Grid>
                <Grid lg={3.5} md={12} sx={{mt:{lg:15,xs:10}}} xs={12} >
                <Box component="div" className='service-img-container' >
                <img  src={require("../../assets/services/PREVENTIVE-CARE.png")} className="service-img" />
                </Box>
                </Grid>
                <Grid lg={3.5}  md={12} xs={12} sx={{mt:{lg:15,xs:10}}} >
                <Box component="div" className='service-img-container' >
                <img  src={require("../../assets/services/PERIODONTAL-THERAPY-180x180.png")} className="service-img" />
                </Box>
                </Grid>
                <Grid item lg={8.5} md={12} xs={12} sx={{mt:{lg:18,xs:0}}}  >
                <Typography className='service-sub-title' >PERIODONTAL THERAPY</Typography>
                <Typography className='service-desc'>
                The surrounding structures that provide the foundation of our teeth is the periodontium.
                </Typography>
                <Typography className='service-desc'>
                Many factors can cause this to become inflamed and diseased, the chief of which is bacterial plaque. If left untreated, this could cause receding gums, wiggly teeth, and tooth loss. We will evaluate your oral condition and provide individualized treatment options for each of our patients to maintain a healthy periodontium..
                </Typography>
                </Grid>
                <Grid item lg={8.5} md={12} xs={12} sx={{mt:{ lg:18,xs:0}}}  >
                <Typography className='service-sub-title' >ORTHODONTICS</Typography>
                <Typography className='service-desc'>
                Orthodontics (braces) are used to correct one’s teeth alignment and bite, with the goal of providing esthetics AND function that harmonizes our teeth, our muscles, and our temporomandibular joint.
                </Typography>
                <Typography className='service-desc'>
                If you have a desire for braces, we will provide you with a consultation and see what needs to be done.
                </Typography>
              
                </Grid>
                <Grid lg={3.5} md={12} xs={12} sx={{mt:{lg:15,xs:10}}} >
                <Box component="div" className='service-img-container' >
                <img  src={require("../../assets/services/ORTHODONTICS-IC-3-180x180.png")} className="service-img" />
                </Box>
                </Grid>
                <Grid lg={3.5} md={12} xs={12} sx={{mt:{lg:15,xs:10}}} >
                <Box component="div" className='service-img-container' >
                <img  src={require("../../assets/services/DENTAL-IMPLANTS-180x180.png")} className="service-img" />
                </Box>
                </Grid>
                <Grid item lg={8.5} md={12} xs={12} sx={{mt:{lg:18,xs:0}}}  >
                <Typography className='service-sub-title' >DENTAL IMPLANTS</Typography>
                <Typography className='service-desc'>
                An excellent option for many patients to replace a missing or soon-to-be-missing tooth.
                </Typography>
                <Typography className='service-desc'>
                These are little screws made of a biocompatible titanium alloy that is placed into the jawbone where the missing tooth is. This implant acts as a replacement of the roots of a tooth. After a period of healing time, an impression is taken of the structures around this implant. A laboratory then fabricates an implant-supported crown in the shape of your other teeth to restore esthetics and function.
                </Typography>
              
                </Grid>
                <Grid item lg={8.5} md={12} xs={12} sx={{mt:{lg:18,xs:0}}}  >
                <Typography className='service-sub-title' >CROWNS</Typography>
                <Typography className='service-desc'>
                When a tooth is compromised such that a filling may not be the best option for the longevity of a tooth, or when a tooth has undergone root canal treatment, a full coverage restoration such as a crown will protect the tooth from fracture much better.
                </Typography>
                <Typography className='service-desc'>
                These can be made from a variety of materials, such as all-ceramic, porcelain-fused-to-metal, or a gold alloy. This procedure generally requires 2 or more appointments spread out over a week or two, as a dental technician is needed to fabricate a crown custom made for your teeth. In the meantime, we will provide you with a temporary crown to help you protect the tooth and to provide a “test-run” for what the final crown will feel like.
                </Typography>
              
                </Grid>
                <Grid lg={3.5} md={12} xs={12} sx={{mt:{lg:15,xs:10}}} >
                <Box component="div" className='service-img-container' >
                <img  src={require("../../assets/services/dental-crown-180x180.png")} className="service-img" />
                </Box>
                </Grid>
                <Grid lg={3.5} md={12} xs={12} sx={{mt:{lg:15,xs:10}}} >
                <Box component="div" className='service-img-container' >
                <img  src={require("../../assets/services/bridge-180x180.png")} className="service-img" />
                </Box>
                </Grid>
                <Grid item lg={8.5} md={12} xs={12} sx={{mt:{lg:18,xs:0}}}  >
                <Typography className='service-sub-title' >DENTAL BRIDGES</Typography>
                <Typography className='service-desc'>
                A fixed, as opposed to removable (such as dentures), option to replace a missing tooth or teeth.
                </Typography>
                <Typography className='service-desc'>
                This consists of 3 or more fused crowns extending from one anchor tooth to the other, with artificial teeth attached in the middle. The procedure for these is similar to crowns.
                </Typography>
              
                </Grid>
                <Grid item lg={8.5} md={12} xs={12} sx={{mt:{lg:18,xs:0}}}  >
                <Typography className='service-sub-title' >ENDODONTICS (ROOT CANALS)</Typography>
                <Typography className='service-desc'>
                Trauma to a tooth, most commonly through blunt force or dental decay, can irritate the nerve space of a tooth.
                </Typography>
                <Typography className='service-desc'>
                If this irritation leads to bacteria entering the nerve, or pulp, of a tooth, the pulp often won’t be able to heal itself and becomes infected. This can result in severe discomfort that disrupts our daily lives. If diagnosed as an endodontic problem, a root canal therapy is indicated to clean out the infected pulp and bacteria to relieve one from pain and infection.
Procedure – To keep you comfortable, we will first numb the problematic tooth. Then, we will need to access the pulp chamber through the tooth in order to clean and shape the canals of the pulp. Afterwards, it’s often best to leave a medication in the canal space for a period of time to help disinfect the tooth even more, and at the next appointment, to fill the clean canals with a natural inert rubber called gutta percha. This material will prevent bacteria from entering the space again and causing reinfection. Then, the tooth will need to be restored, usually with a crown, or in some cases, a bonded composite restoration.
                </Typography>
              
                </Grid>
                <Grid lg={3.5} md={12} xs={12} sx={{mt:{lg:15,xs:10}}} >
                <Box component="div" className='service-img-container' >
                <img  src={require("../../assets/services/root-canal-1-180x180.png")} className="service-img" />
                </Box>
                </Grid>
                <Grid lg={3.5} md={12} xs={12} sx={{mt:{lg:15,xs:10}}} >
                <Box component="div" className='service-img-container' >
                <img  src={require("../../assets/services/COMPLETE-DENTURES-180x180.png")} className="service-img" />
                </Box>
                </Grid>
                <Grid item lg={8.5} md={12} xs={12} sx={{mt:{lg:18,xs:0}}}  >
                <Typography className='service-sub-title' >COMPLETE DENTURES</Typography>
                <Typography className='service-desc'>
                When all teeth are missing on either the upper or lower jaw, a complete denture may be the most economical and efficient way to restore esthetics, form, and function.
                </Typography>
                <Typography className='service-desc'>
                For additional stability and retention, implants can be used to secure a denture more firmly. It goes without saying that these are custom made for each individual..
                </Typography>
              
                </Grid>
                <Grid item lg={8.5} md={12} xs={12} sx={{mt:{lg:18,xs:0}}}  >
                <Typography className='service-sub-title' >PARTIAL DENTURES</Typography>
                <Typography className='service-desc'>
                When multiple teeth are missing in one jaw, a removable partial denture can be a good option to restore these teeth.
                </Typography>
                <Typography className='service-desc'>
                They can either have a metal backbone or can be all acrylic, depending on the situation. These rely on clasps touching nearby teeth for retention and stability..
                </Typography>
              
                </Grid>
                <Grid lg={3.5} md={12} xs={12} sx={{mt:{lg:15,xs:10}}} >
                <Box component="div" className='service-img-container' >
                <img  src={require("../../assets/services/PARTIAL-DENTURESS-180x180.png")} className="service-img" />
                </Box>
                </Grid>
                <Grid lg={3.5} md={12} xs={12} sx={{mt:{lg:15,xs:10}}} >
                <Box component="div" className='service-img-container' >
                <img  src={require("../../assets/services/LASER-VECTOR-180x180.png")} className="service-img" />
                </Box>
                </Grid>
                <Grid item lg={8.5} md={12} xs={12} sx={{mt:{lg:18,xs:0}}}  >
                <Typography className='service-sub-title' >LASER DENTISTRY</Typography>
                <Typography className='service-desc'>
                Lasers are a new addition to the dental arsenal.
                </Typography>
                <Typography className='service-desc'>
                With lasers, many soft tissue problems such as high-pulling frenums, canker sores, and extra gummy tissue that may look displeasing can all be treated in a comfortable fashion.
                </Typography>
              
                </Grid>
                <Grid item lg={8.5} md={12} xs={12} sx={{mt:{lg:18,xs:0}}}  >
                <Typography className='service-sub-title' >EXTRACTIONS</Typography>
                <Typography className='service-desc'>
                Sometimes, despite our best efforts, a tooth cannot or should not be kept in the mouth. Our team will determine the diagnosis and prognosis of a tooth and whether or not a referral to a specialist is needed to extract the tooth.
                </Typography>
                <Typography className='service-desc'>
                If so, communication with the specialist will be done and we will forward any x-rays to them. If not, one of our dentists can take out the tooth for you.
Then, if recommended, treatment options will be presented to you to determine what options there are to replace the missing tooth.
                </Typography>
              
                </Grid>
                <Grid lg={3.5} md={12} xs={12} sx={{mt:{lg:15,xs:10}}} >
                <Box component="div" className='service-img-container' >
                <img  src={require("../../assets/services/extrection-2-180x180.png")} className="service-img" />
                </Box>
                </Grid>
            </Grid>
        </Container>
        </Box>
        </>
     );
}

export default Services;