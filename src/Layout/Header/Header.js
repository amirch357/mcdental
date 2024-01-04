import  React,{useState,useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { ButtonBase, Divider, Link, Stack } from '@mui/material';
import {FaFacebookF,FaInstagram} from "react-icons/fa"
import { useNavigate,useLocation } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';

import "../layout.css"
const pages = [{title:'Our Team',id:"mc2dental_new/#ourTeam"}, {title:'Services',id:"mc2dental_new/services"}, {title:'Patient info',id:"mc2dental_new/patient-information"},{title:'Gallery',id:"mc2dental_new/gallery"},{title:'FAQ',id:"mc2dental_new/faq"},{title:'Blog',id:"mc2dental_new/blogs"}];


function Header() {
  const navigate = useNavigate()
  const {pathname} = useLocation()
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(false);
  const [scroll,setScroll]= useState(false)
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(!anchorElNav);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const scrollEvent=(e)=>{
    if(window.scrollY>2){
      setScroll(true)
       }else{
       setScroll(false)
       }
  }
  console.log(pathname)
  useEffect(()=>{
    window.addEventListener("scroll",scrollEvent)
   
     })


  return (
    <>
    <AppBar position="fixed" className={ scroll===true?"nav-bar-scroll": 'nav-bar'} >
      <Container maxWidth="xl">
        <Toolbar className='tool-bar' disableGutters    >
         <Box sx={{padding:3}} >
          <Link onClick={()=>navigate("/mc2dental_new")} className="logo-link">
          <img src={require("../../assets/gallery/mc2dental_transparent_final.png")} className="logo" />
          </Link>
          </Box>
         
        
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' },justifyContent:"flex-end",alignItems:"center" }}>
            {pages.map((page) => (
              <>
             <Link underline='none' onClick={()=>{navigate(`/${page.id}` );let ourTeam = document.getElementById("ourTeam"); ourTeam&& ourTeam.scrollIntoView({behavior:"smooth",block:"start"})  }} className={pathname===`/${page.id}`?"header-link-active":"header-link"} >
             {page.title}
             </Link>
            
             </>
            ))}
             <Box sx={{marginLeft:2}} >
              <Button className='header-btn' variant="contained" sx={{textDecoration:"none"}} onClick={()=>{ window.location.href="tel:604.266.8602" }} >Contact Us</Button>
              </Box>
              <Box sx={{marginLeft:7}} >
                <Stack direction="row" spacing={1} >
                  <Box component="div" className='icon-container'>
                  <FaInstagram className='icon' />
                  </Box>
                  <Box component="div" className='icon-container'>
                  <FaFacebookF className='icon' />
                  </Box>
                </Stack>
              </Box>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' },justifyContent:"flex-end",width:"100%" }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              // aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon className='menu-icon'  />
            </IconButton>
           
         
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    <Menu
              id="menu-appbar"
              // anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'top',
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
              
              className="menue-bar"
              open={anchorElNav}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' }
               
                
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.title} onClick={handleCloseNavMenu} sx={{display:"flex",justifyContent:"center"}} >
                    <Link underline='none' sx={{color:"#434959 !important",fontSize:"20px !important",fontWeight:"normal !important"}} onClick={()=>{navigate(`/${page.id}` );let ourTeam = document.getElementById("ourTeam"); ourTeam&& ourTeam.scrollIntoView({behavior:"smooth",block:"start"})  }} className={pathname===`/${page.id}`?"header-link-active":"header-link"} >
             {page.title}
             </Link>
                </MenuItem>
              ))}
               <Box sx={{mt:2,display:"flex",justifyContent:"center"}} >
              <Button className='header-btn' variant="contained" sx={{textDecoration:"none"}} onClick={()=>{ window.location.href="tel:604.266.8602" }} >Contact Us</Button>
              </Box>
              <Box sx={{mt:2}} >
                <Stack direction="row" spacing={4} sx={{w:1,justifyContent:"center"}} >
                  <Box component="div" className='icon-container' sx={{}} >
                  <FaInstagram className='icon' />
                  </Box>
                  <Box component="div" className='icon-container'>
                  <FaFacebookF className='icon' />
                  </Box>
                </Stack>
              </Box>
          
          
            </Menu>
    </>
  );
}
export default Header;