import React,{useEffect,useState} from 'react';
import { Box,Typography,Container, Link,Card,CardMedia,CardContent, Divider,Grid,Chip,Stack,OutlinedInput,Button } from '@mui/material';
import "../pages.css"
import Header from '../../Layout/Header/Header';
import { useLocation,useNavigate } from 'react-router-dom';
import {HiOutlineUser} from "react-icons/hi"
import { POSTS,TAGS } from '../../Data/Data';
import {HiPlusSm} from "react-icons/hi"
import DOMPurify from "dompurify";
import slugify from 'slugify';
import {BsTagsFill} from "react-icons/bs"
function PostDetail() {
    const [search,setSearch] = useState("")
    const navigate=useNavigate()
    useEffect(()=>{window.scrollTo(0,0)},[])
    const {state} = useLocation()
   console.log(state)
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
const tagfilter = TAGS.filter(item=>item.postIds.indexOf(state.id)>=0)

    return ( 
        <>
           <Box component="div" className='blog-detail-banner' >
        <Header />
        <Typography className='blog-detail-title' >BLOG</Typography>
    </Box>
        <Container sx={{mt:15}}>
            <Grid container spacing={{lg:10,md:10,xs:0}} >
                <Grid item lg={8} md={8} >
                <Card sx={{boxShadow:"none",mb:5}}  >
      <CardMedia>
        <img src={state.image} className="post-detail-img" />
        </CardMedia>
      <CardContent sx={{ml:3}}>
        <Typography className='post-detail-date'>
       {state.date}
        </Typography>
        
        <Typography className='post-detail-title' >
       {state.title}
        </Typography>
        
        <Typography component="span" className='post-detail-uncat' >
         <HiOutlineUser  /> Posted by admin in <Link underline='none' className='uncat-link' >Uncategorized</Link>
        </Typography>
        
      </CardContent>
      <Divider className='post-detail-divider' />
    </Card>
                <Box sx={{mt:15,mb:5}}>
                    <Typography sx={{mb:2}} className='post-detail' dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(state.detail)}} />
                    <Divider className='post-detail-divider' />
                    {tagfilter.length!==0?
                    <Stack direction="row" sx={{mt:2,alignItems:"center"}} spacing={2}  >
                        <BsTagsFill style={{color:"#434959"}} fontSize={16} />
                        {tagfilter.map((item)=>
                        <Typography onClick={()=>navigate("/mc2dental_new/search",{state:{search:item.postIds,cat:"tags",label:item.title}})} className='filter-tags' >{item.title},</Typography>
                        )}
                    </Stack>
                    :""}
                </Box>
                </Grid>
                <Grid item lg={4} md={4} >
           <Box sx={{mb:10}}>
            <Typography className='search-label' >Search</Typography>
            <OutlinedInput onChange={(e)=>setSearch(e.target.value)} className='search-input' endAdornment={<Button className='search-btn' onClick={()=>navigate("/mc2dental_new/search",{state:{search:search}})} variant="contained">Search</Button>}  />
            </Box>  
            <Box>
            <Typography className='recent-post-title'>RECENT POSTS</Typography> 
            <Divider className='title-divider' />   
            </Box>
            <Box>
           
                {POSTS.slice(0,3).map((item)=>(
                    <Box component="div" onClick={()=>handleNavigate(item.id,item.title,item.image,item.date,item.detail)}>
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
                            <Typography className='archive-date' onClick={()=>navigate("/mc2dental_new/search",{state:{search:item.date,cat:"date"}})} >{GetDate(item.date)}</Typography>
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

export default PostDetail;