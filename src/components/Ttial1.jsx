import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Ttial1 = () => {
    var [pagename,setpagename]=useState("Homepage");
    const gallery =()=>{
        setpagename("gallery page")}
        const Home =()=>{
            setpagename("Home page")
        } 
        const Contact =()=>{
            setpagename("Contact page")
        }  
  return (
    <div>
   <Button variant='contained' color='primary' onClick={Home}>Home</Button>
   <Button variant='contained' color='success' onClick={gallery}>gallery</Button>
   <Button variant='contained' color='error' onClick={Contact}>Contact</Button>
   <Typography>Welcome to {pagename}</Typography>


      
    </div>
  )
}

export default Ttial1
