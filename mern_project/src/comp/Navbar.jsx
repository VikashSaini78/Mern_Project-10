import * as React from 'react';
import {useContext} from "react"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link, useNavigate } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { usercontext } from '../userContext';

const pages = [
  {Name:'ProductAdd',URL:"/Productadd" },
  {Name:'productform',URL:"/productform"},
  {Name:'CardProduct',URL:"/Product"},
  {Name:"Quary",URL:"/Quary"}
];
const settings = [
  { Name:"Login",URL:"/Login"},
   { Name:"Registation",URL:"/"}
 
];

function Navbar() {

 const naviget = useNavigate()

    const {loginadmin,setloginadmin,loginuser,setloginuser} = useContext(usercontext)




  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
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

  
  function hendallogout(){
    localStorage.setItem("admin"," ")
    localStorage.setItem("user"," ")
    setloginadmin(localStorage.getItem("admin"))
    setloginuser(localStorage.getItem("user"))
    naviget("/login")
  }
  return (
    <AppBar position="static" sx={{backgroundColor:"black"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <Link to={"/"}>LOGO</Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                 <Link to={`${page.URL}`}><Typography textAlign="center">{page.Name}</Typography></Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          
        
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' },justifyContent:'center' }}>
            {pages.map((page) => (
              <Link to={`${page.URL}`}>
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block'}}
              >
                {page.Name}
              </Button>
              </Link>
            ))}
          </Box>
          
       <Typography variant='h6' sx={{marginRight:"10px"}}>
        {`${loginadmin} ${loginuser}`}

        
       </Typography>


           <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg">{loginuser[0]}</Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                 <Link to={`${setting.URL}`}><Typography textAlign="center">{setting.Name}</Typography></Link>
                </MenuItem>
              ))}
            </Menu> 
          </Box> 
          
                

             
                {/* {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                 <Link to={`${setting.URL}`}><Typography textAlign="center">{setting.Name} <AccountCircleIcon/> </Typography></Link>
                </MenuItem>
              ))}
                */}

               <Typography><Button onClick={hendallogout}>Log out</Button></Typography>

        </Toolbar>
      </Container>
    </AppBar>
    
  );
}
export default Navbar;
