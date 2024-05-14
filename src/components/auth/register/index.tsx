import React from 'react';
import {Button, TextField, Typography} from "@mui/material";

const RegisterPage = () => {
  return (
      <>
          <Typography variant="h2"  fontFamily='Poppins' textAlign='center'>
              Регистрация
          </Typography>
          <Typography variant="body1" marginBottom={3}  fontFamily='Poppins' textAlign='center'>
              Введите данние для регистрации
          </Typography>

          <TextField fullWidth={true} margin='normal' label="Имя" variant="outlined" placeholder='Введите ваше имя'/>
          <TextField fullWidth={true} margin='normal' label="Username" variant="outlined" placeholder='Введите ваш username'/>
          <TextField fullWidth={true} margin='normal' label="Email" variant="outlined" placeholder='Введите ваш Email'/>
          <TextField fullWidth={true} type='password' margin='normal' label="Password" variant="outlined" placeholder='Введите ваш Password'/>
          <TextField fullWidth={true} type='password' margin='normal' label="Password" variant="outlined" placeholder='Повторите ваш Password'/>

          <Button sx={{
              fontFamily:'Poppins',
              marginTop:2,
              width:'60%',
              marginBottom:2
          }} variant="contained">Регистрация</Button>
          <Typography variant="body1"  fontFamily='Poppins'
                      sx={{
                          fontFamily:'Poppins'
                      }}
          >
              У вас есть аккаунта?
              <span className='incitingText'>Авторизация</span>
          </Typography>
      </>
  );
};

export default RegisterPage;