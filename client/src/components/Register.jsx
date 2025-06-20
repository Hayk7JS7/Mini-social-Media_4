import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userRegistrationAuth } from '../features/userAuthSlice'


const Register = () => {
    // const { isRegistred, isRegisteredError, isRegistredLoading } = useSelector(state => state.userAuth) 

    const dispatch = useDispatch()
    const [userInfo, setUserInfo] = useState({
        fullname: "",
        email: "",
        username: "",
        password: "",
        confirmPassword: ""
    })
    const handleChange = (e) => {
        setUserInfo((user) => ({...user, [e.target.name]: e.target.value}))
    } 
    
    const passwordRegex = /^(?=.*\S).{8,}$/
    const loginRegex = /^[a-zA-Z0-9_.-]{3,}$/

    const registerUser = async () => {
        if(!loginRegex.test(userInfo.username) || !passwordRegex.test(userInfo.password)) return ;
        dispatch(userRegistrationAuth(userInfo))
    }
  return (
    <Box sx={{width: "100vw", height: "80vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 3}}>
        <Typography variant='h3' sx={{color: 'grey'}}>Register</Typography>
        <TextField sx={{width: "100%", maxWidth: "350px"}}  name='fullname'   type='text'          label="fullname" variant="standard" onChange={handleChange} />
        <TextField sx={{width: "100%", maxWidth: "350px"}}  name='email'      type='email'         label="email" variant="standard" onChange={handleChange} />
        <TextField sx={{width: "100%", maxWidth: "350px"}}  name='username'   type='text'          label="username" variant="standard" onChange={handleChange} />
        <TextField sx={{width: "100%", maxWidth: "350px"}}  name='password'   type='password'      label="password" variant="standard" onChange={handleChange} />
        <TextField sx={{width: "100%", maxWidth: "350px"}}  name='confirmPassword' type='password' label="confirm password" variant="standard" onChange={handleChange} />
        <Button onClick={registerUser} fullWidth={true} variant='contained' sx={{maxWidth: "350px"}}>Create account</Button>
    </Box>
  )
}

export default Register


/*const Register = () => {
  const { isRegistred, isRegisteredError, isRegistredLoading } = useSelector(state => state.userAuth);
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState({
    fullname: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setUserInfo((user) => ({ ...user, [e.target.name]: e.target.value }));
  };

  const passwordRegex = /^(?=.*\S).{8,}$/;
  const loginRegex = /^[a-zA-Z0-9_.-]{3,}$/;

  const isUsernameValid = loginRegex.test(userInfo.username);
  const isPasswordValid = passwordRegex.test(userInfo.password);

  const registerUser = async () => {
    if (!isUsernameValid || !isPasswordValid) return;
    dispatch(userRegistrationAuth(userInfo));
  };

  return (
    <Box sx={{ width: "100vw", height: "80vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 3 }}>
      <Typography variant='h3' sx={{ color: 'grey' }}>Register</Typography>
      <TextField
        sx={{
          width: "100%",
          maxWidth: "350px",
          '& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline': {
            borderColor: 'red',
          },
          '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: isUsernameValid ? 'green' : 'red',
          },
        }}
        name='fullname'
        type='text'
        label="fullname"
        variant="outlined"
        onChange={handleChange}
      />
      <TextField
        sx={{
          width: "100%",
          maxWidth: "350px",
          '& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline': {
            borderColor: 'red',
          },
          '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'green',
          },
        }}
        name='email'
        type='email'
        label="email"
        variant="outlined"
        onChange={handleChange}
      />
      <TextField
        sx={{
          width: "100%",
          maxWidth: "350px",
          '& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline': {
            borderColor: 'red',
          },
          '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: isUsernameValid ? 'green' : 'red',
          },
        }}
        name='username'
        type='text'
        label="username"
        variant="outlined"
        onChange={handleChange}
      />
      <TextField
        sx={{
          width: "100%",
          maxWidth: "350px",
          '& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline': {
            borderColor: 'red',
          },
          '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: isPasswordValid ? 'green' : 'red',
          },
        }}
        name='password'
        type='password'
        label="password"
        variant="outlined"
        onChange={handleChange}
      />
      <TextField
        sx={{
          width: "100%",
          maxWidth: "350px",
          '& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline': {
            borderColor: 'red',
          },
          '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'green',
          },
        }}
        name='confirmPassword'
        type='password'
        label="confirm password"
        variant="outlined"
        onChange={handleChange}
      />
      <Button onClick={registerUser} fullWidth={true} variant='contained' sx={{ maxWidth: "350px" }}>Create account</Button>
      <Box>
        <Typography sx={{ color: isPasswordValid ? 'green' : 'red' }}>
          Password must be at least 8 characters long and have at least one symbol: {userInfo.password ? '✓' : '✗'}
        </Typography>
        <Typography sx={{ color: isUsernameValid ? 'green' : 'red' }}>
          Passwords must match: {userInfo.confirmPassword ? '✓' : '✗'}
        </Typography>
      </Box>
    </Box>
  );
};

export default Register; */
