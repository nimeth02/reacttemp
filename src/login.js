import React from 'react'
import { Button, TextField } from '@mui/material';
import { blue, yellow } from '@mui/material/colors';
import styled from '@emotion/styled';
import { useState } from 'react';

const ClearButton = styled(Button)(({ theme }) => ({
  backgroundColor: yellow[700],
  '&:hover': {
    backgroundColor: yellow[800],
  },
}));
const ConfirmButton = styled(Button)(({ theme }) => ({
  backgroundColor: blue[700],
  '&:hover': {
    backgroundColor: blue[800],
  },
}));
const Login = () => {
    const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const clear=()=>{
    setUsername("")
    setPassword("")
  }
  const login=()=>{
    console.log(username,password)
    fetch('/myserver.endpoint', {
      method: 'POST',
      body: JSON.stringify({
        username,password
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
       .then((response) => response.json())
       .then((data) => {
          console.log(data);
          // Handle data
       })
       .catch((err) => {
          console.log(err.message);
       });
  }
  return (
    <div className="Form" style={{"display":"flex","flexDirection":"column","margin":"auto","width":"300px","gap":"40px","marginTop":"15%"}}>
    <div className="Feild" style={{"display":"flex","flexDirection":"column","margin":"auto","alignItems":"center","marginTop":"15%","gap":"20px"}}>
    <TextField id="outlined-basic" label="Username" sx={{"width":"300px"}} variant="outlined" value={username} onChange={(e)=>setUsername(e.target.value)}/>
    <TextField id="outlined-basic" label="Password" sx={{"width":"300px"}} variant="outlined" value={password} onChange={(e)=>setPassword(e.target.value)}/>
   </div>
   <div className="Button" style={{"display":"flex","flexDirection":"row","alignItems":"center","gap":"10px","justifyContent":"space-around"}}>
   <ClearButton variant="contained" size="large" onClick={clear} >clear</ClearButton>
   <ConfirmButton variant="contained" size="large" onClick={login}>login</ConfirmButton>
   </div>
  </div>
  )
}

export default Login