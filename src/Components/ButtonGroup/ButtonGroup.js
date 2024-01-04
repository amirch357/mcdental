import React,{useState} from 'react';
import { Box,Stack,Container,Typography,Grid } from '@mui/material';
import "./buttons.css"
function ButtonGroup({buttons,pressed}) {
    const [clickId,setClickId]=useState(0)
    const handleClick=(item,id,buttons,title)=>{
        setClickId(id)
        pressed(id)
    }   

    return ( 
       
       <Grid container>
        {buttons.map((item,index)=>{
            return(
              <Grid item lg={3} md={6} sm={6} xs={12} onClick={(id)=>handleClick(id,index)} key={index} component="div" className={index===clickId?"buttons-container-active":'buttons-container'} >
                <img src={item.image} className="tab-icon" />
                <Typography className='label' >
                {item.label}
                </Typography>
              </Grid>
              )
        })}
      
       </Grid>
        
     );
}

export default ButtonGroup;