import React from 'react';
import {Button, TextField, Typography} from "@mui/material";
const LoginPage = () => {
  return (
    <>
        <Typography variant="h2"  fontFamily='Poppins' textAlign='center'>
            Авторизация
        </Typography>
        <Typography variant="body1" marginBottom={3}  fontFamily='Poppins' textAlign='center'>
            Введите ваш login и Password
        </Typography>

        <TextField fullWidth={true} margin='normal' label="Email" variant="outlined" placeholder='Введите ваш Email'/>
        <TextField fullWidth={true} type='password' margin='normal' label="Password" variant="outlined" placeholder='Введите ваш Password'/>
        <Button sx={{
            fontFamily:'Poppins',
            marginTop:2,
            width:'60%',
            marginBottom:2
        }} variant="contained">Войти</Button>
        <Typography variant="body1"  fontFamily='Poppins'
        sx={{
            fontFamily:'Poppins'
        }}
        >
            У вас нет аккаунт?
            <span className='incitingText'>Регистрация</span>
        </Typography>
    </>
  );
};

export default LoginPage;