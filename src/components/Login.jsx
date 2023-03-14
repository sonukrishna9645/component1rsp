import React from 'react'
import { Button, TextField } from '@mui/material';


const Login = () => {
  return (
    <div>
         <h1>sonukrishna</h1> 
    <input placeholder='username'/>
    <input type='password' placeholder='password'/>
    <br/>
    <br/>
    
<TextField label="username" variant='outlined'/>
    <br/>
    <TextField label='filled' variant="filled"/>
    <br/>
    <br/>
    <TextField label="standard" variant='standard'/>
    <br/>
    <br/>
    <Button variant='contained' color='secondary'> login</Button>
      
    </div>
  )
}

export default Login
