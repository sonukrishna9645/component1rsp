import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
    var[value,setvalue]=useState(0)
    const b1=()=>{
        setvalue(value+1)
    }
    const b2=()=>{
        setvalue(value-1)
    }
  return (
    <div>
        <Typography>{value}</Typography>
        <Button variant='contained' color='success' onClick={b1}>+</Button>
        <Button variant='contained' color='error' onClick={b2}>-</Button>

      
    </div>
  )
}

export default Counter
