import React,{useEffect,useState} from 'react';
import { Box,Typography,Container,Grid,Card,CardMedia } from '@mui/material';
import Header from '../../Layout/Header/Header';
import {Image,Swiper} from "react-nivo-slider"
import "../pages.css"
import 'react-nivo-slider/es/style';
import 'react-nivo-slider/es/style/default';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
function Gallery() {
    useEffect(()=>{window.scrollTo(0,0)},[])
    const [showLightBox,setShowLightBox] = useState(false)
    const [photoIndex,setPhotoIndex ] = useState(0)
    const [images,setImages] = useState([])

const lightBox = ({cat})=>{
    console.log(cat)
    setShowLightBox(true)
    
    
    if(cat===1){
        
       return setImages([
            require("../../assets/gallery/118b5d_1850676e40bf424698e08af1b703b21a_mv2.webp"),
            require("../../assets/gallery/118b5d_081a0b2107fe4a378fa48d93571ede16_mv2.webp")

        ])
    }else if(cat===2){
        setImages([
            require("../../assets/gallery/118b5d_9b3ca1e804e7405fbe1f988efcd595a4_mv2.webp"),
            require("../../assets/gallery/118b5d_75b58484b1904b81b5824ca722392bc0_mv2.webp")
        ])
    }
}

    return (  
        <>
       
        <Box component="div" className='gallery-banner' >
        <Header />
        <Typography className='service-title' >GALLERY</Typography>
    </Box>
    <Box component="div" className='service-wave' />
    <Container sx={{pt:10}} >
        <Typography className='gallery-title' >Orthodontic Cases</Typography>
        <Typography className='gellary-sub-title' >Case 1</Typography>
        <Grid container spacing={{lg:20,md:10,xs:2}} >
            <Grid item lg={6} md={6} xs={12} sx={{display:{lg:"block",md:"block",xs:"flex"},alignItems:"center",flexDirection:"column"}} >
                <Card className='gallery-card' >
                    <CardMedia 
                    component="img"
                    src={require("../../assets/gallery/a269c4b4-f213-4c76-b8cc-29623342335e.webp")}
                    className="gallery-image"
                    />
                    
                </Card>
                <Typography className='gellary-desc'>Before</Typography>
            </Grid>
            <Grid item lg={6} md={6} xs={12} sx={{display:{lg:"block",md:"block",xs:"flex"},alignItems:"center",flexDirection:"column"}} >
                <Card className='gallery-card'>
                    <CardMedia 
                    component="img"
                    src={require("../../assets/gallery/23e161e8-09ac-4c70-81dd-d07278019a54.webp")}
                    className="gallery-image"
                    
                    />
                </Card>
                <Typography className='gellary-desc'>After</Typography>
            </Grid>
        </Grid>
        <Typography className='gellary-sub-title' >Case 2</Typography>
        <Grid container spacing={{lg:20,md:10,xs:2}} >
            <Grid item lg={6} md={6} xs={12} sx={{display:{lg:"block",md:"block",xs:"flex"},alignItems:"center",flexDirection:"column"}} >
                <Card className='gallery-card' >
                    <CardMedia 
                    component="img"
                    src={require("../../assets/gallery/before.webp")}
                    className="gallery-image"
                    />
                    
                </Card>
                <Typography className='gellary-desc'>Before</Typography>
            </Grid>
            <Grid item lg={6} md={6} xs={12} sx={{display:{lg:"block",md:"block",xs:"flex"},alignItems:"center",flexDirection:"column"}} >
                <Card className='gallery-card'>
                    <CardMedia 
                    component="img"
                    src={require("../../assets/gallery/after.webp")}
                    className="gallery-image"
                    
                    />
                </Card>
                <Typography className='gellary-desc'>After</Typography>
            </Grid>
        </Grid>
        <Typography className='gellary-sub-title' >Case 3</Typography>
        <Grid container spacing={{lg:20,md:10,xs:2}} >
            <Grid item lg={6} md={6} xs={12} sx={{display:{lg:"block",md:"block",xs:"flex"},alignItems:"center",flexDirection:"column"}} >
                <Card className='gallery-card' >
                    <CardMedia 
                    component="img"
                    src={require("../../assets/gallery/7dccbd52-1032-458d-975f-7b801a533993.webp")}
                    className="gallery-image"
                    />
                    
                </Card>
                <Typography className='gellary-desc'>Before</Typography>
            </Grid>
            <Grid item lg={6} md={6} xs={12} sx={{display:{lg:"block",md:"block",xs:"flex"},alignItems:"center",flexDirection:"column"}} >
                <Card className='gallery-card'>
                    <CardMedia 
                    component="img"
                    src={require("../../assets/gallery/f103e9d4-74b1-4fc0-a7f3-04c3d5c16c23.webp")}
                    className="gallery-image"
                    
                    />
                </Card>
                <Typography className='gellary-desc'>After</Typography>
            </Grid>
        </Grid>
        <Typography className='gallery-title' sx={{pt:5}} >Composite Restorations</Typography>
        <Box sx={{height:20,width:20}} >
         {showLightBox && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[photoIndex + 1]}
            prevSrc={images[photoIndex -1]}
            onCloseRequest={() => setShowLightBox(false)}
            onMovePrevRequest={()=>setPhotoIndex(photoIndex-1)}
            onMoveNextRequest={() => setPhotoIndex(photoIndex+1)}
            imageCaption={`image ${photoIndex+1} of ${images.length}`}
            enableZoom={false}
            
          />
        )}
        </Box>
        <Grid container spacing={5} sx={{pt:5}} >
            <Grid item lg={6} md={6} xs={12} onClick={()=>lightBox({cat:1})} >
            <Swiper   >
                <Image src={require("../../assets/gallery/118b5d_1850676e40bf424698e08af1b703b21a_mv2.webp")} alt="img1"  title='Toothbrush abrasion resulting in root decay' />
                <Image src={require("../../assets/gallery/118b5d_081a0b2107fe4a378fa48d93571ede16_mv2.webp")} alt="img2"  title='Finished restoration, gums will heal even better later' />
               
            </Swiper>
            </Grid>
            <Grid item lg={6} md={6} xs={12} onClick={()=>lightBox({cat:2})} >
            <Swiper  >
                <Image src={require("../../assets/gallery/118b5d_9b3ca1e804e7405fbe1f988efcd595a4_mv2.webp")} alt="img1"  title='Toothbrush abrasion and staining on old filling causing patient to be concerned about his smile' />
                <Image src={require("../../assets/gallery/118b5d_75b58484b1904b81b5824ca722392bc0_mv2.webp")} alt="img2"  title='Completed restorations, very happy with results' />
               
            </Swiper>
            </Grid>
        </Grid>
    </Container>
    </>
    );
}

export default Gallery;