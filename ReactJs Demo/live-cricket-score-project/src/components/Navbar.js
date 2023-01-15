import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  return (
   <>
   <AppBar position="static" color="primary">
     <Toolbar>
       <IconButton color='inherit'>
         <MenuIcon/>
       </IconButton>
       <Typography variant="h6">Live Score</Typography>
     </Toolbar>
   </AppBar>
   </>
  )
}

export default Navbar;
