import React,{useEffect} from 'react';
import { Box,Typography,Container,Accordion,AccordionDetails,AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import "../pages.css"
import Header from '../../Layout/Header/Header';
function FAQ() {
    useEffect(()=>{window.scrollTo(0,0)},[])
    const [expanded, setExpanded] = React.useState("panel1");

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(panel);
    };
    return ( 
        <>
        <Box component="div" className='faq-banner' >
        <Header />
        <Typography className='service-title' >FAQ</Typography>
    </Box>
    <Box component="div" className='service-wave' />
        <Container>
            <Typography className='faq-title' >FREQUENTLY ASKED QUESTIONS</Typography>
            <Box>
            <Accordion  expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className="accordian-container" sx={{boxShadow:"none",mt:2}} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color:"#FFF !important"}} />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className='faq-sub-title-container'
          sx={{borderRadius:"5px"}}
        >
          <Typography className='faq-sub-title'>
          DO I REALLY NEED X-RAYS, AND ARE X-RAYS SAFE?
          </Typography>
        
        </AccordionSummary>
        <AccordionDetails className='faq-desc-container' sx={{mt:2}} >
          <Typography className='faq-desc'>
          The primary benefit of fluoride is to reduce the risk of cavities in our mouth. It does this by forming a different crystal in our teeth, fluorapatite, which is more resistant to acid attacks by bacteria compared to what’s normally present in teeth, hydroxyapatite. Fluoride also slows down the growth of the cavity-causing bacteria in our mouth.
Because the Greater Vancouver Region doesn’t have fluoridated water, fluoride-containing toothpastes are recommended for the majority of people.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className="accordian-container" sx={{boxShadow:"none",mt:2}} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color:"#FFF !important"}} />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className='faq-sub-title-container'
          sx={{borderRadius:"5px"}}
        >
          <Typography className='faq-sub-title'>
          WHY DO SO MANY DENTISTS RECOMMEND FLUORIDE?
          </Typography>
        
        </AccordionSummary>
        <AccordionDetails className='faq-desc-container' sx={{mt:2}} >
          <Typography className='faq-desc'>
          The primary benefit of fluoride is to reduce the risk of cavities in our mouth. It does this by forming a different crystal in our teeth, fluorapatite, which is more resistant to acid attacks by bacteria compared to what’s normally present in teeth, hydroxyapatite. Fluoride also slows down the growth of the cavity-causing bacteria in our mouth.
Because the Greater Vancouver Region doesn’t have fluoridated water, fluoride-containing toothpastes are recommended for the majority of people.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} className="accordian-container" sx={{boxShadow:"none",mt:2}} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color:"#FFF !important"}} />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className='faq-sub-title-container'
          sx={{borderRadius:"5px"}}
        >
          <Typography className='faq-sub-title'>
          AT WHAT AGE SHOULD I BRING MY TODDLER TO SEE A DENTIST?
          </Typography>
        
        </AccordionSummary>
        <AccordionDetails className='faq-desc-container' sx={{mt:2}} >
          <Typography className='faq-desc'>
          The American Academy of Pediatric Dentistry recommends that all young children be seen by a dentist by the age of <br />1. This is a quick visit mostly to guide the parents on what to expect as baby teeth start coming out into the mouth, and what can preventive care can be done to avoid future issues.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} className="accordian-container" sx={{boxShadow:"none",mt:2}} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color:"#FFF !important"}} />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className='faq-sub-title-container'
          sx={{borderRadius:"5px"}}
        >
          <Typography className='faq-sub-title'>
          WHAT'S THE BEST WAY TO KEEP MY TEETH CLEAN?
          </Typography>
        
        </AccordionSummary>
        <AccordionDetails className='faq-desc-container' sx={{mt:2}} >
          <Typography className='faq-desc'>
          For most people, the modified Bass technique of brushing is recommended, and the C-shaped method of flossing is recommended. Please see the YouTube videos linked below. We will recommend any adjunctive methods for specific cases.
          </Typography>
        </AccordionDetails>
      </Accordion>
            </Box>
            <Typography className='faq-video-title' >C Shaped Flossing</Typography>
            <Box component="div" className='video-container' >
         
            <iframe 
            width="570" 
            height="321" 
            src="https://www.youtube.com/embed/sz1DN5R6rnA" 
            title="C-Shape Flossing Tutorial" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen>

        </iframe>
           
            </Box>
        </Container>
    </>
     );
}

export default FAQ;