import React,{useState,useEffect} from 'react';
import { Box,Typography,Grid,Container,Button,Divider,Card,CardMedia,CardContent,Link,OutlinedInput,Stack,Chip,CardActions } from '@mui/material';
import Header from '../../Layout/Header/Header';
import { useLocation,useNavigate } from 'react-router-dom';
import { POSTS,TAGS } from '../../Data/Data';
import slugify from 'slugify';
import {HiOutlineUser} from "react-icons/hi"
import {HiPlusSm} from "react-icons/hi"
import DOMPurify from "dompurify";
import {MdOutlineNavigateNext} from "react-icons/md"
import '../pages.css'
function Search() {

    const[searchInput,setSearchInput] = useState("")
    const {state} = useLocation()
    const navigate = useNavigate()
    useEffect(()=>{window.scrollTo(0,0)},[state])
   const result = POSTS.filter(function(item){
    if(state.cat==="date"){

        const fullDates = new Date(item.date)
        const displayDate = fullDates.toLocaleString('en-us', {month:"long",year:"numeric"});
        const searchDate = new Date(state.search)
        const display_value = searchDate.toLocaleString('en-us', { month:"long",year:"numeric"});
        console.log("fulldate",display_value ,"search date",displayDate )
        return display_value===displayDate
    }else if(state.cat==="tags"){
       
        
       return state.search.indexOf(item.id)!== -1
    }else{
        
        return item.desc.toLowerCase().indexOf(state.search.toLowerCase()) !== -1 || 
        item.title.toLowerCase().indexOf(state.search.toLowerCase()) !== -1
    }

   })
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
         <Box component="div" className='blog-detail-banner' >
        <Header />
        <Typography className='blog-detail-title' >{ state.cat==="date"?"MONTH" :state.cat==="tags"?"TAG": "SEARCH RESULTS FOR"} : { state.cat==="date"?GetDate(state.search): state.cat==="tags"?state.label: state.search}</Typography>
    </Box>
    <Container sx={{mt:15}}>
       
            <Grid container spacing={10} >
            <Grid item lg={8} md={8} >
            {result.length===0?<Box sx={{display:"flex",flexDirection:"column",alignItems:"center"}}>
            <Typography className='not-found-title' sx={{mt:3}} >Nothing Found</Typography>
            <OutlinedInput  onChange={(e)=>setSearchInput(e.target.value)}  sx={{mt:2}} className='no-result-search-input' endAdornment={<Button onClick={()=>navigate("/mc2dental_new/search",{state:{search:searchInput}})} className='search-btn' variant="contained">Search</Button>}  />
            <Typography sx={{mt:2}} className='not-found-desc' >Try to search using another term via the form above</Typography>
        </Box>
        
    : 
            result.map((item)=>(
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
        <Typography className='post-desc' dangerouslySetInnerHTML={{__html:item.detail.substring(0,270)}} />
        <Typography>...</Typography>
        
      </CardContent>
      <CardActions>
        <Button onClick={()=>handleNavigate( item.id, item.title,item.image,item.date,item.detail)} size="small" className='post-btn'  endIcon={<Box component="div" className='post-icon-container' ><MdOutlineNavigateNext className='post-next-icon' /></Box>}>Read More</Button>
        
      </CardActions>
    </Card>
    ))
    }
    </Grid>
                <Grid item lg={4} md={4} >
           <Box sx={{mb:10}}>
            <Typography className='search-label' >Search</Typography>
            <OutlinedInput defaultValue={ state.cat==="date"||state.cat==="tags"?"": state.search} onChange={(e)=>setSearchInput(e.target.value)}  className='search-input' endAdornment={<Button className='search-btn' onClick={()=>navigate("/mc2dental_new/search",{state:{search:searchInput}})} variant="contained">Search</Button>}  />
            </Box>  
            <Box>
            <Typography className='recent-post-title'>RECENT POSTS</Typography> 
            <Divider className='title-divider' />   
            </Box>
            <Box>
           
                {POSTS.slice(0,3).map((item)=>(
                    <Box component="div" onClick={()=>handleNavigate( item.id, item.title,item.image,item.date,item.detail)}>
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

export default Search;