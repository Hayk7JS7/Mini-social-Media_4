import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { userLoginAuth } from '../features/userAuthSlice'
import { useDispatch } from 'react-redux'


const Login = () => {
  const dispatch = useDispatch()
    const [userInfo, setUserInfo] = useState({
        username: "",
        password: "",
    })
    const handleChange = (e) => {
        setUserInfo((user) => ({...user, [e.target.name]: e.target.value}))
    } 
    
    const passwordRegex = /^(?=.*\S).{8,}$/
    const loginRegex = /^[a-zA-Z0-9_.-]{3,}$/

    const registerUser = async () => {
        if(!loginRegex.test(userInfo.username) || !passwordRegex.test(userInfo.password) || userInfo.password !== userInfo.confirmPassword) return ;
        dispatch(userLoginAuth(userInfo))
    }
  return (
    <Box sx={{width: "100vw", height: "80vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 4}}>
        <Typography variant='h3' sx={{color: 'grey'}}>Login</Typography>
        <TextField sx={{width: "100%", maxWidth: "350px"}}  name='username'   type='text'          label="username" variant="standard" onChange={handleChange} />
        <TextField sx={{width: "100%", maxWidth: "350px"}}  name='password'   type='password'      label="password" variant="standard" onChange={handleChange} />
        <Button onClick={registerUser} fullWidth={true} variant='contained' sx={{maxWidth: "350px"}}>Sign in</Button>
    </Box>
  )
}

export default Login
