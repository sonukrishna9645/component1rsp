import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Statebasic = () => { 
var [fname,setfname]=useState("alok")
const changename=()=>{
    setfname('stan')
}
  
  return (
    <div>
        <Typography variant='h6'>welcome {fname}</Typography>
        <Button variant='contained' color='primary' onClick={changename}>lord</Button>
        <Button variant='contained' colour='secondary' onClick={changename}>batman</Button>
      
    </div>
  )
}

export default Statebasic
