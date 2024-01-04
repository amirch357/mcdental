import React,{useEffect,useState} from 'react';
import { Box,Typography,Container,Grid,Card,CardMedia,CardContent,CardActions,Button,Link,OutlinedInput,Divider, Stack,Chip } from '@mui/material';
import Header from '../../Layout/Header/Header';
import "../pages.css"
import {MdOutlineNavigateNext} from "react-icons/md"
import { POSTS,TAGS } from '../../Data/Data';
import {HiPlusSm} from "react-icons/hi"
import App from '../../App';
import { useNavigate } from 'react-router-dom';
import slugify from 'slugify';
function Blog() {
    const [search,setSearch] = useState("")
    useEffect(()=>{window.scrollTo(0,0)},[])
    const navigate=useNavigate()
    function filterDuplicates(arr){
        return arr.filter((item, index) =>   arr.findIndex(data=>
            { 
                const fullDate = new Date(item.date)
                const fullDate2 = new Date(data.date)
                const display_fullDate = fullDate.toLocaleString('en-us', { month: 'long', year: 'numeric'}) 
                const display_fullDate2 = fullDate2.toLocaleString('en-us', { month: 'long', year: 'numeric'})
             return display_fullDate2 === display_fullDate} ) === index
    
            );

        }
       

        const handleNavigate=(id,title,image,date,detail)=>{
            const url = slugify(title,{lower:true})
            navigate(`/mc2dental_new/blog/?${url}`,{state:{id:id,image:image,title:title,date:date,detail:detail}})
          
            
        }


const GetDate=(fullDate)=>{
    if (fullDate) {
        const date = new Date(fullDate);
        
        const display_value = date.toLocaleString('en-us', { month: 'long', year: 'numeric'});
        // const display_value = date.toLocaleString('default', { month: 'long', year: 'numeric', day: 'numeric' });
       
        return display_value;
    }
}

    return (
        <>
       
        
        <Box component="div" className='blog-banner' >
        <Header />
        <Typography className='service-title' >BLOG</Typography>
    </Box>
    <Box component="div" className='service-wave' />
    <Container sx={{mt:5}}>
        <Grid container spacing={3} >
        <Grid item lg={8} md={8}  >
            {POSTS.map((item)=>(
        <Card sx={{boxShadow:"none",mb:5}} key={item.id} >
      <CardMedia onClick={()=>handleNavigate( item.id, item.title,item.image,item.date,item.detail)} >
        <img src={item.image} className="blog-page-img" />
        </CardMedia>
      <CardContent>
        <Typography className='post-date'>
       {item.date}
        </Typography>
        <Link onClick={()=>handleNavigate( item.id, item.title,item.image,item.date,item.detail)} underline='none'>
            
        <Typography className='post-title' >
       {item.title}
       
        </Typography>
        </Link>
        <Typography className='post-desc' >
        {item.desc}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={()=>handleNavigate( item.id, item.title,item.image,item.date,item.detail)} className='post-btn'  endIcon={<Box component="div" className='post-icon-container' ><MdOutlineNavigateNext className='post-next-icon' /></Box>}>Read More</Button>
        
      </CardActions>
    </Card>
    ))}
   
        </Grid>
        <Grid item lg={4} md={4} xs={12} >
           <Box sx={{mb:10}}>
            <Typography className='search-label' >Search</Typography>
            <OutlinedInput value={search} onChange={(e)=>setSearch(e.target.value)} className='search-input' endAdornment={<Button className='search-btn' onClick={()=>navigate("/mc2dental_new/search",{state:{search:search}})} variant="contained">Search</Button>}  />
            </Box>  
            <Box>
            <Typography className='recent-post-title'>RECENT POSTS</Typography> 
            <Divider className='title-divider' />   
            </Box>
            <Box>
           
                {POSTS.slice(0,3).map((item)=>(
                    <Box component="div" onClick={()=>handleNavigate( item.id, item.title,item.image,item.date,item.detail)} >
                        <Stack direction="row" className='main-container' >
                    <Box  sx={{mt:3}} component="div" className='list-img-container' >
                        <HiPlusSm className='list-plus-icon' />
                        <img src={item.image} className="list-img" />
                        
                    </Box>
                    <Box  component="div" className='list-content-container' sx={{mt:3,ml:2}} >
                        <Typography className='list-title' >{item.title}</Typography>
                        <Typography className='list-date' >{item.date}</Typography>
                    </Box>
                    </Stack>
                    </Box>
                
                ))}
              
                </Box> 
                <Box sx={{mt:5}} >
                <Typography className='recent-post-title'>ALL ARCHIVES</Typography> 
            <Divider className='title-divider' />   
                    </Box>  
                    <Box>
                        {filterDuplicates(POSTS).map((item)=>(
                            <>
                            <Typography className='archive-date' onClick={()=>navigate("/mc2dental_new/search",{state:{search:item.date,cat:"date"}})}  > {GetDate(item.date)}</Typography>
                            <Divider className='archive-divider' />
                            </>
                        ))}
                    </Box>
                    <Box sx={{mt:5}} >
                <Typography className='recent-post-title'>POPULAR TAGS</Typography> 
            <Divider className='title-divider' />   
                    </Box> 
                    <Box>
                            {TAGS.map((item)=>(
                                   
                                    <Chip onClick={()=>navigate("/mc2dental_new/search",{state:{search:item.postIds,cat:"tags",label:item.title}})} label={`${item.title} (${item.postIds.length})`} sx={{mr:1,mt:2}} className="chip" />
                                   
                            
                                
                            ))}
                    </Box>
        </Grid>
        </Grid>
    </Container>
        </>
      );
}

export default Blog;