import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "./Footrt.css"

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Footer() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '85vh',
          backgroundColor:'black',
          
        }}
      >
        <CssBaseline />

<Box sx={{
  margin:'auto'
}}>
  
<div className='container'>
        <div className='row'>
        <div className='col-md-3'>
      <Box >
         <Typography variant='h6'color={'white'}>About Us</Typography>
        <Typography sx={{
          marginTop:'20px',
          color:'white'
        }}> We at  provide quality products to our customers with an excellent fit as we believe quality with proper fit is necessary for the garmen</Typography>
        <Box sx={{
          width:"60%",
          height:'13vh',
          display:'flex',
          justifyContent:'space-evenly',
          alignItems:'center'
        }}>


        <div className='social_media_icons'>
        <Link to={"https://www.instagram.com"} sx={{color:'white', cursor:"pointer"}}><InstagramIcon/></Link>
         <Link to={"https://www.facebook.com/"} sx={{color:'white', cursor:"pointer"}}><FacebookIcon/></Link>
         <Link to={"https://x.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJteCI6IjIifQ%3D%3D%22%7D"} sx={{color:'white', cursor:"pointer"}}><TwitterIcon/></Link>
         <Link to={"https://www.linkedin.com/in/vikash-saini-a6448226b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"} sx={{color:'white', cursor:"pointer"}}><LinkedInIcon/></Link>
       
        </div>
        </Box>
       
        
         
      </Box>
     </div>
    



     <div className='col-md-3'>
     <Typography variant='h6' color={'white'} marginBottom={"20px"}>Shop Now</Typography>
     <Typography  marginBottom={"10px"}><Link top={"/"} sx={{textDecoration:'none',color:'white', cursor:"pointer",}}>New In</Link></Typography>
     <Typography  marginBottom={"10px"}><Link top={"/"} sx={{textDecoration:'none',color:'white', cursor:"pointer",}}>Size Chart</Link></Typography>
     <Typography marginBottom={"10px"}><Link top={"/"} sx={{textDecoration:'none',color:'white', cursor:"pointer",}}>Women</Link></Typography>
     <Typography marginBottom={"10px"}><Link top={"/"} sx={{textDecoration:'none',color:'white', cursor:"pointer",}}>Men</Link></Typography>
     <Typography marginBottom={"10px"}><Link top={"/"} sx={{textDecoration:'none',color:'white', cursor:"pointer",}}>Spring Summer</Link></Typography>
   
     </div>



     <div className='col-md-3'>
     <Typography variant='h6' color={'white'} marginBottom={"20px"}>Important Links</Typography>
     <Typography  marginBottom={"10px"}><Link top={"/"} sx={{textDecoration:'none',color:'white', cursor:"pointer",}}>About Us</Link></Typography>
     <Typography  marginBottom={"10px"}><Link top={"/"} sx={{textDecoration:'none',color:'white', cursor:"pointer",}}>Terms & Conditions</Link></Typography>
     <Typography marginBottom={"10px"}><Link top={"/"} sx={{textDecoration:'none',color:'white', cursor:"pointer",}}>Shipping & Returns</Link></Typography>
     <Typography marginBottom={"10px"}><Link top={"/"} sx={{textDecoration:'none',color:'white', cursor:"pointer",}}>Payments & Refunds</Link></Typography>
     <Typography marginBottom={"10px"}><Link top={"/"} sx={{textDecoration:'none',color:'white', cursor:"pointer",}}>Return/Exchange</Link></Typography>
     
     </div>

     <div className='col-md-3'>
     <Typography variant='h6' color={'white'} marginBottom={"20px"}>Contact us</Typography>
     <Typography marginBottom={"10px"}><Link top={"/"} sx={{textDecoration:'none',color:'white', cursor:"pointer",}}>Grras Solutions Pvt.Ltd</Link></Typography>
     <Typography  marginBottom={"10px"}><Link top={"/"} sx={{textDecoration:'none',color:'white', cursor:"pointer",}}> Himmat Nagar GopalPura Mod,Tonk,Road,Jaipur,Rajasthan 302018</Link></Typography>
     <Typography  marginBottom={"10px"}><Link top={"/"} sx={{textDecoration:'none',color:'white', cursor:"pointer",}}> Contact: +91 7878599144</Link></Typography>
     <Typography marginBottom={"10px"}><Link top={"/"} sx={{textDecoration:'none',color:'white', cursor:"pointer",}}>Email: vikashbanskhoh@gmail.com</Link></Typography>
   
     
     </div>

       </div>
        </div>

</Box>



        <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            mt: 'auto',
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[200]
                : theme.palette.grey[800],
          }}
        >
          <Container maxWidth="sm">
            <Typography variant="body1">
              My sticky footer can be found here.
            </Typography>
            <Copyright />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}