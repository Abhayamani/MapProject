import React from 'react';
import {Link} from 'react-router-dom';
import {Stack,AppBar} from '@mui/material';
import logo from "./download.png";


const Header = () => {
  return (
    <AppBar sticky="top" style={{backgroundColor:'rgb(8, 30, 42)'}} >
    <Stack 
        direction="row"
        justifyContent= "space-around"
        sx={{gap:{sm:'122px', xs:'40px'},mt:{sm:'32px', xs:'20px'},justifyContent:'none'}}
        px="20px"
    >
        <Link to="/">
            <img src={logo} alt="logo" style={{width: '48px', height:'48px', margin:'0 20px'}} />
            
        </Link>
        <Stack
            direction="row"
            gap="40px"
            fontSize="24px"
            alignItems="flex-end"
            px="20px"
            pb="20px"
        >
            <Link to="/" style={{textDecoration:'none', color: 'rgba(255, 255, 255, 0.7)', borderBottom: '3px solid #FF2625'}}>Dashboard</Link>
            <a href="/map" style={{textDecoration:'none',color:'rgba(255, 255, 255, 0.7)',borderBottom: '3px solid #FF2625'}}>Map</a>
        </Stack>
    </Stack>
    </AppBar>
  )
}

export default Header